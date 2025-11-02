#!/usr/bin/env python3
"""
LLM-based PDF Ontology Extractor
Extracts comprehensive ontology from ISO 5259-2 using Claude API
Supports multi-layer ontology:
1. Document Structure Ontology (sections, clauses, annexes)
2. Domain Ontology (quality characteristics)
3. Concept Ontology (definitions, requirements, examples)
"""

import json
import re
import os
from pathlib import Path
from typing import List, Dict, Any, Optional
from PyPDF2 import PdfReader
from rdflib import Graph, RDF, RDFS, OWL, Namespace, Literal, URIRef
import anthropic

# Configuration
PDF_FILE = "example/ISO_IEC5259-2_2024_EN.pdf"
OUTPUT_DIR = "example/llm-extracted"
CLAUDE_API_KEY = os.environ.get("ANTHROPIC_API_KEY")

# Namespaces
ISO = Namespace("http://pebblous.ai/ontology/iso-standard#")
DQ = Namespace("http://pebblous.ai/ontology/dq#")
SKOS = Namespace("http://www.w3.org/2004/02/skos/core#")

class LLMOntologyExtractor:
    """Extract ontology from PDF using Claude LLM"""

    def __init__(self, pdf_file: str, api_key: Optional[str] = None):
        self.pdf_file = pdf_file
        self.client = anthropic.Anthropic(api_key=api_key) if api_key else None
        self.pdf_pages = {}
        self.ontology_graph = Graph()

        # Bind namespaces
        self.ontology_graph.bind("iso", ISO)
        self.ontology_graph.bind("dq", DQ)
        self.ontology_graph.bind("skos", SKOS)
        self.ontology_graph.bind("owl", OWL)
        self.ontology_graph.bind("rdfs", RDFS)

    def extract_pdf_text(self) -> Dict[int, str]:
        """Extract text from PDF by page"""
        print(f"📄 Reading PDF from {self.pdf_file}...")

        reader = PdfReader(self.pdf_file)
        pages = {}

        for page_num, page in enumerate(reader.pages, start=1):
            text = page.extract_text()
            pages[page_num] = text

        print(f"✅ Extracted text from {len(pages)} pages")
        self.pdf_pages = pages
        return pages

    def extract_document_structure(self) -> Dict[str, Any]:
        """Extract document structure using LLM"""
        print("🧠 Extracting document structure with LLM...")

        # Get first 10 pages for TOC and structure
        toc_text = "\n\n".join([
            f"=== Page {page_num} ===\n{text[:2000]}"
            for page_num, text in list(self.pdf_pages.items())[:10]
        ])

        prompt = f"""Analyze this ISO/IEC 5259-2 standard document and extract the complete document structure.

{toc_text}

Please provide a JSON response with this structure:
{{
  "documentTitle": "Full document title",
  "sections": [
    {{
      "id": "1",
      "title": "Scope",
      "page": 1,
      "subsections": [
        {{"id": "1.1", "title": "...", "page": 1}}
      ]
    }},
    {{
      "id": "Annex A",
      "title": "Annex title",
      "page": 25,
      "type": "normative|informative"
    }}
  ],
  "keyTerms": [
    {{"term": "accuracy", "section": "3.1", "page": 5}},
    {{"term": "completeness", "section": "3.2", "page": 6}}
  ]
}}

Focus on:
1. Main sections (1, 2, 3, etc.)
2. Annexes (A, B, C, etc.)
3. Key technical terms and where they are defined
"""

        if not self.client:
            print("⚠️  No API key - returning mock structure")
            return self._mock_document_structure()

        try:
            response = self.client.messages.create(
                model="claude-3-5-sonnet-20241022",
                max_tokens=4000,
                messages=[{"role": "user", "content": prompt}]
            )

            # Extract JSON from response
            response_text = response.content[0].text
            json_match = re.search(r'\{.*\}', response_text, re.DOTALL)

            if json_match:
                structure = json.loads(json_match.group())
                print(f"✅ Extracted {len(structure.get('sections', []))} sections")
                return structure
            else:
                print("⚠️  Failed to parse LLM response - using mock")
                return self._mock_document_structure()

        except Exception as e:
            print(f"❌ LLM extraction failed: {e}")
            return self._mock_document_structure()

    def extract_concepts_from_section(self, section_id: str, page_num: int) -> List[Dict[str, Any]]:
        """Extract key concepts from a specific section"""
        print(f"  🔍 Extracting concepts from section {section_id} (page {page_num})...")

        # Get text from this section (current page + next 2 pages)
        section_text = ""
        for p in range(page_num, min(page_num + 3, len(self.pdf_pages) + 1)):
            if p in self.pdf_pages:
                section_text += f"\n{self.pdf_pages[p]}"

        section_text = section_text[:4000]  # Limit to avoid token overflow

        prompt = f"""Analyze section {section_id} of ISO/IEC 5259-2 and extract key concepts.

{section_text}

Provide JSON response:
{{
  "concepts": [
    {{
      "term": "concept name",
      "type": "definition|requirement|example|note",
      "description": "brief description",
      "relatedTerms": ["term1", "term2"]
    }}
  ]
}}

Extract:
1. Defined terms (3.x sections)
2. Requirements (shall statements)
3. Examples
4. Important notes
"""

        if not self.client:
            return []

        try:
            response = self.client.messages.create(
                model="claude-3-5-sonnet-20241022",
                max_tokens=2000,
                messages=[{"role": "user", "content": prompt}]
            )

            response_text = response.content[0].text
            json_match = re.search(r'\{.*\}', response_text, re.DOTALL)

            if json_match:
                data = json.loads(json_match.group())
                concepts = data.get('concepts', [])
                print(f"    ✓ Found {len(concepts)} concepts")
                return concepts

        except Exception as e:
            print(f"    ⚠️  Failed to extract concepts: {e}")

        return []

    def build_ontology_graph(self, structure: Dict[str, Any]) -> Graph:
        """Build RDF ontology graph from extracted structure"""
        print("🏗️  Building ontology graph...")

        g = self.ontology_graph

        # Document metadata
        doc_uri = URIRef("http://pebblous.ai/document/iso5259-2")
        g.add((doc_uri, RDF.type, ISO.StandardDocument))
        g.add((doc_uri, RDFS.label, Literal(structure.get('documentTitle', 'ISO/IEC 5259-2'), lang='en')))

        # Add sections
        for section in structure.get('sections', []):
            section_id = section['id']
            section_uri = URIRef(f"http://pebblous.ai/document/iso5259-2#{section_id}")

            # Determine section type
            if section_id.startswith('Annex'):
                g.add((section_uri, RDF.type, ISO.Annex))
            else:
                g.add((section_uri, RDF.type, ISO.Section))

            g.add((section_uri, RDFS.label, Literal(section['title'], lang='en')))
            g.add((section_uri, ISO.sectionNumber, Literal(section_id)))
            g.add((section_uri, ISO.pageNumber, Literal(section['page'])))
            g.add((doc_uri, ISO.hasSection, section_uri))

            # Extract concepts from this section (for main sections only)
            if not section_id.startswith('Annex') and len(section_id.split('.')) == 1:
                concepts = self.extract_concepts_from_section(section_id, section['page'])

                for concept in concepts:
                    concept_uri = URIRef(f"http://pebblous.ai/concept/{concept['term'].replace(' ', '_')}")

                    # Determine concept type
                    concept_type = concept.get('type', 'definition')
                    if concept_type == 'definition':
                        g.add((concept_uri, RDF.type, ISO.Definition))
                    elif concept_type == 'requirement':
                        g.add((concept_uri, RDF.type, ISO.Requirement))
                    elif concept_type == 'example':
                        g.add((concept_uri, RDF.type, ISO.Example))
                    elif concept_type == 'note':
                        g.add((concept_uri, RDF.type, ISO.Note))

                    g.add((concept_uri, RDFS.label, Literal(concept['term'], lang='en')))
                    g.add((concept_uri, SKOS.definition, Literal(concept.get('description', ''), lang='en')))
                    g.add((section_uri, ISO.defines, concept_uri))

                    # Add related terms
                    for related in concept.get('relatedTerms', []):
                        related_uri = URIRef(f"http://pebblous.ai/concept/{related.replace(' ', '_')}")
                        g.add((concept_uri, SKOS.related, related_uri))

        print(f"✅ Built ontology with {len(g)} triples")
        return g

    def save_outputs(self, structure: Dict[str, Any], output_dir: str):
        """Save all outputs"""
        output_path = Path(output_dir)
        output_path.mkdir(parents=True, exist_ok=True)

        # Save document structure JSON
        structure_file = output_path / "document-structure.json"
        with open(structure_file, 'w', encoding='utf-8') as f:
            json.dump(structure, f, ensure_ascii=False, indent=2)
        print(f"💾 Saved structure: {structure_file}")

        # Save ontology as Turtle
        owl_file = output_path / "iso5259-2-full-ontology.ttl"
        self.ontology_graph.serialize(destination=str(owl_file), format='turtle')
        print(f"💾 Saved ontology: {owl_file}")

        # Save ontology as RDF/XML (for compatibility)
        owl_xml_file = output_path / "iso5259-2-full-ontology.owl"
        self.ontology_graph.serialize(destination=str(owl_xml_file), format='xml')
        print(f"💾 Saved ontology: {owl_xml_file}")

        # Save summary
        summary = {
            "metadata": {
                "pdfFile": self.pdf_file,
                "totalPages": len(self.pdf_pages),
                "totalSections": len(structure.get('sections', [])),
                "totalTriples": len(self.ontology_graph)
            },
            "structure": structure
        }

        summary_file = output_path / "extraction-summary.json"
        with open(summary_file, 'w', encoding='utf-8') as f:
            json.dump(summary, f, ensure_ascii=False, indent=2)
        print(f"💾 Saved summary: {summary_file}")

    def _mock_document_structure(self) -> Dict[str, Any]:
        """Mock document structure for testing without API"""
        return {
            "documentTitle": "ISO/IEC 5259-2:2024 - Data quality - Part 2: Data quality assessment",
            "sections": [
                {"id": "1", "title": "Scope", "page": 1, "subsections": []},
                {"id": "2", "title": "Normative references", "page": 2, "subsections": []},
                {"id": "3", "title": "Terms and definitions", "page": 3, "subsections": [
                    {"id": "3.1", "title": "accuracy", "page": 3},
                    {"id": "3.2", "title": "completeness", "page": 4}
                ]},
                {"id": "4", "title": "Data quality assessment framework", "page": 8, "subsections": []},
                {"id": "5", "title": "Data quality characteristics", "page": 12, "subsections": []},
                {"id": "Annex A", "title": "Data quality measures", "page": 25, "type": "normative"}
            ],
            "keyTerms": [
                {"term": "accuracy", "section": "3.1", "page": 3},
                {"term": "completeness", "section": "3.2", "page": 4},
                {"term": "consistency", "section": "3.3", "page": 5}
            ]
        }

def main():
    print("🚀 Starting LLM-based PDF Ontology Extractor...")
    print("=" * 70)

    # Check API key
    if not CLAUDE_API_KEY:
        print("⚠️  Warning: ANTHROPIC_API_KEY not set in environment")
        print("   Using mock data for demonstration")
        print("   To enable LLM extraction:")
        print("   export ANTHROPIC_API_KEY='your-api-key'")
        print()

    # Initialize extractor
    extractor = LLMOntologyExtractor(PDF_FILE, CLAUDE_API_KEY)

    # Step 1: Extract PDF text
    extractor.extract_pdf_text()

    # Step 2: Extract document structure
    structure = extractor.extract_document_structure()

    # Step 3: Build ontology graph
    extractor.build_ontology_graph(structure)

    # Step 4: Save outputs
    extractor.save_outputs(structure, OUTPUT_DIR)

    print("=" * 70)
    print("✅ Extraction complete!")
    print(f"📂 Output directory: {OUTPUT_DIR}")
    print()
    print("Generated files:")
    print(f"  - document-structure.json    (Document hierarchy)")
    print(f"  - iso5259-2-full-ontology.ttl (Ontology in Turtle format)")
    print(f"  - iso5259-2-full-ontology.owl (Ontology in RDF/XML)")
    print(f"  - extraction-summary.json     (Summary statistics)")

if __name__ == "__main__":
    main()
