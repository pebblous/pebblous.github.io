#!/usr/bin/env python3
"""
PDF Ontology Indexer
Extracts ontology class mentions from ISO 5259-2 PDF document
"""

import json
import re
from pathlib import Path
from typing import List, Dict, Any
from PyPDF2 import PdfReader
from rdflib import Graph, RDF, RDFS, OWL, Namespace

# Configuration
OWL_FILE = "example/iso5259-2-ontology.owl"
PDF_FILE = "example/ISO_IEC5259-2_2024_EN.pdf"
OUTPUT_FILE = "example/ontology-index.json"

# Namespaces
DQ = Namespace("http://pebblous.ai/ontology/dq#")

def extract_ontology_classes(owl_file: str) -> List[Dict[str, str]]:
    """Extract all classes from OWL ontology"""
    print(f"📖 Reading ontology from {owl_file}...")

    g = Graph()
    g.parse(owl_file, format="xml")

    classes = []

    # Find all OWL classes
    for class_uri in g.subjects(RDF.type, OWL.Class):
        class_name = str(class_uri).split('#')[-1]

        # Get labels
        label_ko = None
        label_en = None

        for label in g.objects(class_uri, RDFS.label):
            if label.language == 'ko':
                label_ko = str(label)
            elif label.language == 'en':
                label_en = str(label)

        # Skip if no labels
        if not label_ko and not label_en:
            continue

        classes.append({
            "uri": str(class_uri),
            "className": class_name,
            "labelKo": label_ko,
            "labelEn": label_en
        })

    print(f"✅ Found {len(classes)} ontology classes")
    return classes

def extract_pdf_text(pdf_file: str) -> Dict[int, str]:
    """Extract text from PDF by page"""
    print(f"📄 Reading PDF from {pdf_file}...")

    reader = PdfReader(pdf_file)
    pages = {}

    for page_num, page in enumerate(reader.pages, start=1):
        text = page.extract_text()
        pages[page_num] = text

    print(f"✅ Extracted text from {len(pages)} pages")
    return pages

def find_mentions(
    ontology_class: Dict[str, str],
    pdf_pages: Dict[int, str],
    context_chars: int = 100
) -> List[Dict[str, Any]]:
    """Find all mentions of an ontology class in PDF"""

    mentions = []
    seen_positions = set()  # Track (page, start_position) to avoid duplicates
    label_ko = ontology_class.get("labelKo", "")
    label_en = ontology_class.get("labelEn", "")

    # Search for both Korean and English labels
    search_terms = []
    if label_ko:
        search_terms.append(label_ko)
    if label_en:
        search_terms.append(label_en)
        # Add variations: lowercase, with spaces, etc.
        search_terms.append(label_en.lower())
        search_terms.append(re.sub(r'([A-Z])', r' \1', label_en).strip())

    for page_num, page_text in pdf_pages.items():
        for term in search_terms:
            # Find all occurrences
            for match in re.finditer(re.escape(term), page_text, re.IGNORECASE):
                # Create unique position key
                position_key = (page_num, match.start())

                # Skip if already found this exact position
                if position_key in seen_positions:
                    continue

                seen_positions.add(position_key)

                start = max(0, match.start() - context_chars)
                end = min(len(page_text), match.end() + context_chars)

                context = page_text[start:end]
                matched_text = match.group()

                # Try to extract section number (e.g., "5.2.1", "Annex B")
                section_pattern = r'(\d+\.[\d.]+|Annex [A-Z]\.?[\d.]*)'
                section_match = re.search(section_pattern, page_text[max(0, match.start()-500):match.start()])
                section = section_match.group(1) if section_match else None

                mentions.append({
                    "page": page_num,
                    "section": section,
                    "text": matched_text,
                    "context": context.strip(),
                    "searchTerm": term,
                    "confidence": 1.0 if matched_text == term else 0.8
                })

    return mentions

def main():
    print("🚀 Starting PDF Ontology Indexer...")
    print("=" * 60)

    # Step 1: Extract ontology classes
    try:
        classes = extract_ontology_classes(OWL_FILE)
    except Exception as e:
        print(f"❌ Error reading ontology: {e}")
        return

    # Step 2: Extract PDF text
    try:
        pdf_pages = extract_pdf_text(PDF_FILE)
    except Exception as e:
        print(f"❌ Error reading PDF: {e}")
        return

    # Step 3: Find mentions for each class
    print("\n🔍 Searching for class mentions in PDF...")

    ontology_index = []

    for i, onto_class in enumerate(classes, 1):
        class_name = onto_class['className']
        print(f"  [{i}/{len(classes)}] Searching for '{class_name}'...", end=" ")

        mentions = find_mentions(onto_class, pdf_pages)

        ontology_index.append({
            **onto_class,
            "mentions": mentions,
            "mentionCount": len(mentions)
        })

        print(f"✓ Found {len(mentions)} mentions")

    # Step 4: Save results
    print(f"\n💾 Saving results to {OUTPUT_FILE}...")

    output_data = {
        "metadata": {
            "pdfFile": PDF_FILE,
            "owlFile": OWL_FILE,
            "totalClasses": len(classes),
            "totalMentions": sum(item['mentionCount'] for item in ontology_index)
        },
        "ontologyIndex": ontology_index
    }

    with open(OUTPUT_FILE, 'w', encoding='utf-8') as f:
        json.dump(output_data, f, ensure_ascii=False, indent=2)

    print("=" * 60)
    print("✅ Indexing complete!")
    print(f"📊 Summary:")
    print(f"   - Total classes: {output_data['metadata']['totalClasses']}")
    print(f"   - Total mentions: {output_data['metadata']['totalMentions']}")
    print(f"   - Output file: {OUTPUT_FILE}")

if __name__ == "__main__":
    main()
