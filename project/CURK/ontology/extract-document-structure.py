#!/usr/bin/env python3
"""
Simple Document Structure Extractor (No LLM required)
Extracts document structure from ISO 5259-2 using regex patterns
"""

import json
import re
from pathlib import Path
from PyPDF2 import PdfReader

# Configuration
PDF_FILE = "example/ISO_IEC5259-2_2024_EN.pdf"
OUTPUT_DIR = "example/llm-extracted"

def extract_document_structure_simple(pdf_file: str) -> dict:
    """Extract document structure using simple pattern matching"""
    print(f"📄 Reading PDF from {pdf_file}...")

    reader = PdfReader(pdf_file)
    sections = []
    key_terms = []

    # Section patterns
    section_pattern = re.compile(r'^(\d+)\s+([A-Z][^\n]{5,80})$', re.MULTILINE)
    subsection_pattern = re.compile(r'^(\d+\.\d+)\s+([A-Z][^\n]{5,80})$', re.MULTILINE)
    annex_pattern = re.compile(r'^(Annex [A-Z])\s+\(([^)]+)\)\s*\n\s*([^\n]{5,80})', re.MULTILINE)
    term_pattern = re.compile(r'^(\d+\.\d+)\s*\n\s*([a-z][a-z\s-]+)$', re.MULTILINE)

    print("🔍 Scanning for sections, annexes, and terms...")

    for page_num, page in enumerate(reader.pages, start=1):
        text = page.extract_text()

        # Find main sections (e.g., "1 Scope", "2 Normative references")
        for match in section_pattern.finditer(text):
            section_id = match.group(1)
            title = match.group(2).strip()

            # Skip if it looks like a subsection
            if '.' in section_id:
                continue

            # Clean up title
            if len(title) > 80 or len(title) < 5:
                continue

            sections.append({
                "id": section_id,
                "title": title,
                "page": page_num,
                "type": "section"
            })
            print(f"  ✓ Found section: {section_id} - {title} (page {page_num})")

        # Find annexes
        for match in annex_pattern.finditer(text):
            annex_id = match.group(1)  # "Annex A"
            annex_type = match.group(2).lower()  # "normative" or "informative"
            title = match.group(3).strip()

            sections.append({
                "id": annex_id,
                "title": title,
                "page": page_num,
                "type": annex_type
            })
            print(f"  ✓ Found annex: {annex_id} - {title} ({annex_type}, page {page_num})")

        # Find terms (in section 3)
        if page_num >= 3 and page_num <= 10:  # Terms usually in early pages
            for match in term_pattern.finditer(text):
                term_id = match.group(1)
                term = match.group(2).strip()

                # Validate term
                if len(term) > 50 or len(term) < 3:
                    continue

                key_terms.append({
                    "term": term,
                    "section": term_id,
                    "page": page_num
                })

    # Add common ISO sections if not found
    common_sections = [
        {"id": "1", "title": "Scope", "page": 1},
        {"id": "2", "title": "Normative references", "page": 2},
        {"id": "3", "title": "Terms and definitions", "page": 3},
        {"id": "4", "title": "Framework", "page": 8},
        {"id": "5", "title": "Data quality characteristics", "page": 12}
    ]

    # Merge with found sections
    existing_ids = {s['id'] for s in sections}
    for common in common_sections:
        if common['id'] not in existing_ids:
            sections.append(common)
            print(f"  ⚠️  Added default section: {common['id']} - {common['title']}")

    # Sort sections
    def section_sort_key(s):
        section_id = s['id']
        if section_id.startswith('Annex'):
            return (100, section_id)  # Annexes at the end
        try:
            return (0, int(section_id.split('.')[0]))
        except:
            return (50, section_id)

    sections.sort(key=section_sort_key)

    structure = {
        "documentTitle": "ISO/IEC 5259-2:2024 - Data quality - Part 2: Data quality assessment",
        "sections": sections,
        "keyTerms": key_terms[:20]  # Limit to top 20 terms
    }

    print(f"\n✅ Extracted {len(sections)} sections and {len(key_terms)} terms")
    return structure

def create_extraction_summary(structure: dict) -> dict:
    """Create extraction summary with concepts"""

    # Extract concepts from key terms
    concepts = []
    for term in structure.get('keyTerms', []):
        concepts.append({
            "term": term['term'],
            "section": term['section'],
            "page": term['page'],
            "type": "definition"
        })

    summary = {
        "metadata": {
            "pdfFile": PDF_FILE,
            "totalSections": len(structure.get('sections', [])),
            "totalConcepts": len(concepts)
        },
        "structure": {
            "documentTitle": structure.get('documentTitle', ''),
            "sections": structure.get('sections', []),
            "keyTerms": structure.get('keyTerms', [])
        },
        "concepts": concepts
    }

    return summary

def main():
    print("🚀 Simple Document Structure Extractor")
    print("=" * 70)
    print("This script extracts document structure WITHOUT requiring LLM/API")
    print()

    # Create output directory
    output_path = Path(OUTPUT_DIR)
    output_path.mkdir(parents=True, exist_ok=True)

    # Extract structure
    structure = extract_document_structure_simple(PDF_FILE)

    # Save document structure
    structure_file = output_path / "document-structure.json"
    with open(structure_file, 'w', encoding='utf-8') as f:
        json.dump(structure, f, ensure_ascii=False, indent=2)
    print(f"\n💾 Saved: {structure_file}")

    # Create and save extraction summary
    summary = create_extraction_summary(structure)
    summary_file = output_path / "extraction-summary.json"
    with open(summary_file, 'w', encoding='utf-8') as f:
        json.dump(summary, f, ensure_ascii=False, indent=2)
    print(f"💾 Saved: {summary_file}")

    print("\n" + "=" * 70)
    print("✅ Extraction complete!")
    print(f"📂 Output directory: {OUTPUT_DIR}")
    print()
    print("Now you can:")
    print("1. Refresh the web browser")
    print("2. Click on '📖 문서 구조' or '💡 개념 관계' layers")
    print("3. Explore the document structure ontology!")

if __name__ == "__main__":
    main()
