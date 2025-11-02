#!/usr/bin/env python3
"""
Build All Three Ontologies + PDF Index
Generates:
1. Document Structure Ontology (OWL)
2. Quality Characteristics Ontology (already exists, re-index)
3. ISO Standard Meta Ontology (Turtle, already exists)
"""

import json
import re
from pathlib import Path
from PyPDF2 import PdfReader
from rdflib import Graph, RDF, RDFS, OWL, Namespace, Literal, URIRef
from datetime import datetime

# Configuration
PDF_FILE = "example/ISO_IEC5259-2_2024_EN.pdf"
QUALITY_OWL = "example/iso5259-2-ontology.owl"
OUTPUT_DIR = "example"

# Namespaces
ISO = Namespace("http://pebblous.ai/ontology/iso-standard#")
DQ = Namespace("http://pebblous.ai/ontology/dq#")
DOC = Namespace("http://pebblous.ai/document/iso5259-2#")
SKOS = Namespace("http://www.w3.org/2004/02/skos/core#")

print("🚀 Building All Ontologies for PDF Navigator")
print("=" * 70)

# =============================================================================
# STEP 1: Extract PDF Text
# =============================================================================

def extract_pdf_pages(pdf_file: str) -> dict:
    """Extract all pages from PDF"""
    print(f"\n📄 Step 1: Extracting PDF text from {pdf_file}...")
    reader = PdfReader(pdf_file)
    pages = {}

    for page_num, page in enumerate(reader.pages, start=1):
        text = page.extract_text()
        pages[page_num] = text

    print(f"✅ Extracted {len(pages)} pages")
    return pages

pdf_pages = extract_pdf_pages(PDF_FILE)

# =============================================================================
# STEP 2: Build Document Structure Ontology (OWL)
# =============================================================================

def build_document_structure_ontology(pdf_pages: dict) -> tuple:
    """Build document structure ontology from PDF"""
    print(f"\n📖 Step 2: Building Document Structure Ontology...")

    g = Graph()
    g.bind("iso", ISO)
    g.bind("doc", DOC)
    g.bind("rdfs", RDFS)
    g.bind("owl", OWL)

    # Create ontology metadata
    ontology_uri = URIRef("http://pebblous.ai/ontology/iso5259-2-document-structure")
    g.add((ontology_uri, RDF.type, OWL.Ontology))
    g.add((ontology_uri, RDFS.label, Literal("ISO/IEC 5259-2 Document Structure Ontology", lang="en")))
    g.add((ontology_uri, RDFS.comment, Literal("Document structure of ISO/IEC 5259-2:2024", lang="en")))

    # Document instance
    doc_uri = DOC.ISO5259_2_2024
    g.add((doc_uri, RDF.type, ISO.StandardDocument))
    g.add((doc_uri, RDFS.label, Literal("ISO/IEC 5259-2:2024", lang="en")))
    g.add((doc_uri, ISO.standardNumber, Literal("ISO/IEC 5259-2:2024")))

    sections = []

    # Pattern matching for sections (including subsections)
    section_pattern = re.compile(r'^([\d.]+)\s+([A-Z][^\n]{5,80})$', re.MULTILINE)
    annex_pattern = re.compile(r'^(Annex [A-Z])\s+\(([^)]+)\)\s*\n\s*([^\n]{5,80})', re.MULTILINE)

    for page_num, text in pdf_pages.items():
        # Find all sections and subsections
        for match in section_pattern.finditer(text):
            section_id = match.group(1)
            title = match.group(2).strip()

            if len(title) > 80 or len(title) < 5:
                continue

            # Determine section type
            parts = section_id.split('.')
            if len(parts) == 1:
                section_type = ISO.Section
                type_str = "section"
            elif len(parts) == 2:
                section_type = ISO.Subclause
                type_str = "subclause"
            else:
                section_type = ISO.Subclause
                type_str = "subclause"

            section_uri = DOC[f"Section_{section_id.replace('.', '_')}"]
            g.add((section_uri, RDF.type, section_type))
            g.add((section_uri, RDFS.label, Literal(title, lang="en")))
            g.add((section_uri, ISO.sectionNumber, Literal(section_id)))
            g.add((section_uri, ISO.pageNumber, Literal(page_num)))

            # Link to parent section or document
            if len(parts) == 1:
                g.add((doc_uri, ISO.hasSection, section_uri))
            else:
                parent_id = '.'.join(parts[:-1])
                parent_uri = DOC[f"Section_{parent_id.replace('.', '_')}"]
                g.add((parent_uri, ISO.hasSubsection, section_uri))

            sections.append({
                "uri": str(section_uri),
                "className": f"Section_{section_id.replace('.', '_')}",
                "labelEn": title,
                "page": page_num,
                "section": section_id,
                "type": type_str,
                "parentSection": '.'.join(parts[:-1]) if len(parts) > 1 else None
            })
            print(f"  ✓ Section {section_id}: {title} (page {page_num})")

        # Find annexes
        for match in annex_pattern.finditer(text):
            annex_id = match.group(1).replace(" ", "_")
            annex_type = match.group(2).lower()
            title = match.group(3).strip()

            annex_uri = DOC[annex_id]

            if "normative" in annex_type:
                g.add((annex_uri, RDF.type, ISO.NormativeAnnex))
            else:
                g.add((annex_uri, RDF.type, ISO.InformativeAnnex))

            g.add((annex_uri, RDFS.label, Literal(title, lang="en")))
            g.add((annex_uri, ISO.sectionNumber, Literal(match.group(1))))
            g.add((annex_uri, ISO.pageNumber, Literal(page_num)))
            g.add((doc_uri, ISO.hasSection, annex_uri))

            sections.append({
                "uri": str(annex_uri),
                "className": annex_id,
                "labelEn": title,
                "page": page_num,
                "section": match.group(1),
                "type": annex_type
            })
            print(f"  ✓ {match.group(1)}: {title} ({annex_type}, page {page_num})")

    # Add common sections if missing
    common_sections = [
        ("1", "Scope", 1),
        ("2", "Normative references", 7),
        ("3", "Terms and definitions", 7),
    ]

    existing_ids = {s['section'] for s in sections}
    for sec_id, title, page in common_sections:
        if sec_id not in existing_ids:
            section_uri = DOC[f"Section_{sec_id}"]
            g.add((section_uri, RDF.type, ISO.Section))
            g.add((section_uri, RDFS.label, Literal(title, lang="en")))
            g.add((section_uri, ISO.sectionNumber, Literal(sec_id)))
            g.add((section_uri, ISO.pageNumber, Literal(page)))
            g.add((doc_uri, ISO.hasSection, section_uri))

            sections.append({
                "uri": str(section_uri),
                "className": f"Section_{sec_id}",
                "labelEn": title,
                "page": page,
                "section": sec_id,
                "type": "section"
            })
            print(f"  ⚠️  Added default: Section {sec_id}")

    # Save OWL
    owl_file = Path(OUTPUT_DIR) / "iso5259-2-document-structure.owl"
    g.serialize(destination=str(owl_file), format='xml')
    print(f"\n💾 Saved: {owl_file}")

    print(f"✅ Document Structure Ontology: {len(sections)} sections, {len(g)} triples")
    return sections, g

doc_sections, doc_graph = build_document_structure_ontology(pdf_pages)

# =============================================================================
# STEP 3: Index Document Structure → PDF Mentions
# =============================================================================

def index_document_structure(sections: list, pdf_pages: dict) -> dict:
    """Create index mapping sections to PDF locations"""
    print(f"\n🔍 Step 3: Indexing document structure...")

    ontology_index = []

    for section in sections:
        page = section['page']
        section_id = section['section']
        title = section['labelEn']

        # Simple mention: the section itself
        mentions = [{
            "page": page,
            "section": section_id,
            "text": title,
            "context": f"Section {section_id}: {title}",
            "confidence": 1.0
        }]

        ontology_index.append({
            "uri": section['uri'],
            "className": section['className'],
            "labelEn": title,
            "labelKo": title,  # Same for now
            "mentions": mentions,
            "mentionCount": len(mentions),
            "section": section_id,
            "type": section.get('type', 'section'),
            "parentSection": section.get('parentSection', None)
        })

    result = {
        "metadata": {
            "pdfFile": PDF_FILE,
            "owlFile": "iso5259-2-document-structure.owl",
            "totalClasses": len(ontology_index),
            "totalMentions": len(ontology_index),
            "ontologyType": "document-structure"
        },
        "ontologyIndex": ontology_index
    }

    # Save JSON index
    index_file = Path(OUTPUT_DIR) / "document-structure-index.json"
    with open(index_file, 'w', encoding='utf-8') as f:
        json.dump(result, f, ensure_ascii=False, indent=2)
    print(f"💾 Saved: {index_file}")

    print(f"✅ Indexed {len(ontology_index)} sections")
    return result

doc_index = index_document_structure(doc_sections, pdf_pages)

# =============================================================================
# STEP 4: Re-index Quality Characteristics Ontology
# =============================================================================

def index_quality_ontology(owl_file: str, pdf_pages: dict) -> dict:
    """Re-index existing quality ontology"""
    print(f"\n📊 Step 4: Re-indexing Quality Characteristics Ontology...")

    # Load OWL
    g = Graph()
    g.parse(owl_file, format="xml")

    classes = []

    # Extract all classes
    for class_uri in g.subjects(RDF.type, OWL.Class):
        class_name = str(class_uri).split('#')[-1]

        label_en = None
        label_ko = None

        for label in g.objects(class_uri, RDFS.label):
            if label.language == 'en':
                label_en = str(label)
            elif label.language == 'ko':
                label_ko = str(label)

        if not label_en and not label_ko:
            continue

        classes.append({
            "uri": str(class_uri),
            "className": class_name,
            "labelEn": label_en,
            "labelKo": label_ko
        })

    print(f"  Found {len(classes)} quality classes")

    # Find mentions in PDF
    ontology_index = []

    for onto_class in classes:
        mentions = []
        label_en = onto_class.get("labelEn", "")
        label_ko = onto_class.get("labelKo", "")

        search_terms = []
        if label_ko:
            search_terms.append(label_ko)
        if label_en:
            search_terms.append(label_en)
            search_terms.append(label_en.lower())

        seen_positions = set()

        for page_num, page_text in pdf_pages.items():
            for term in search_terms:
                for match in re.finditer(re.escape(term), page_text, re.IGNORECASE):
                    position_key = (page_num, match.start())

                    if position_key in seen_positions:
                        continue

                    seen_positions.add(position_key)

                    start = max(0, match.start() - 100)
                    end = min(len(page_text), match.end() + 100)
                    context = page_text[start:end].strip()

                    # Extract section number
                    section_pattern = r'(\d+\.[\d.]+|Annex [A-Z]\.?[\d.]*)'
                    section_match = re.search(section_pattern, page_text[max(0, match.start()-500):match.start()])
                    section = section_match.group(1) if section_match else None

                    mentions.append({
                        "page": page_num,
                        "section": section,
                        "text": match.group(),
                        "context": context,
                        "searchTerm": term,
                        "confidence": 1.0 if match.group() == term else 0.8
                    })

        ontology_index.append({
            **onto_class,
            "mentions": mentions,
            "mentionCount": len(mentions)
        })

        if mentions:
            print(f"  ✓ {onto_class['className']}: {len(mentions)} mentions")

    result = {
        "metadata": {
            "pdfFile": PDF_FILE,
            "owlFile": owl_file,
            "totalClasses": len(classes),
            "totalMentions": sum(item['mentionCount'] for item in ontology_index),
            "ontologyType": "quality-characteristics"
        },
        "ontologyIndex": ontology_index
    }

    # Save JSON index
    index_file = Path(OUTPUT_DIR) / "ontology-index.json"
    with open(index_file, 'w', encoding='utf-8') as f:
        json.dump(result, f, ensure_ascii=False, indent=2)
    print(f"💾 Saved: {index_file}")

    print(f"✅ Re-indexed quality ontology: {result['metadata']['totalMentions']} mentions")
    return result

quality_index = index_quality_ontology(QUALITY_OWL, pdf_pages)

# =============================================================================
# Summary
# =============================================================================

print("\n" + "=" * 70)
print("✅ All Ontologies Built Successfully!")
print()
print("Generated Files:")
print(f"  1. {OUTPUT_DIR}/iso5259-2-document-structure.owl")
print(f"  2. {OUTPUT_DIR}/document-structure-index.json")
print(f"  3. {OUTPUT_DIR}/ontology-index.json (updated)")
print()
print("Ontology Statistics:")
print(f"  📖 Document Structure: {len(doc_sections)} sections")
print(f"  📊 Quality Characteristics: {quality_index['metadata']['totalClasses']} classes, {quality_index['metadata']['totalMentions']} mentions")
print()
print("Next Steps:")
print("  1. Refresh your browser")
print("  2. Test '📊 품질 특성' layer (should work now)")
print("  3. Test '📖 문서 구조' layer (sections & annexes)")
print("  4. Click on any node → PDF should jump to that page!")
print("=" * 70)
