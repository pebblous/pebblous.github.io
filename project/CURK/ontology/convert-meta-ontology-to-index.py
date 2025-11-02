#!/usr/bin/env python3
"""
Convert ISO Standard Meta-Ontology (TTL) to JSON Index
For displaying in PDF navigator as a separate layer
"""

import json
from pathlib import Path
from rdflib import Graph, RDF, RDFS, Namespace

# Configuration
TTL_FILE = "example/iso-standard-meta-ontology.ttl"
OUTPUT_FILE = "example/iso-meta-ontology-index.json"

# Namespaces
ISO = Namespace("http://pebblous.ai/ontology/iso-standard#")
OWL = Namespace("http://www.w3.org/2002/07/owl#")

def convert_ttl_to_index():
    print("🔄 Converting ISO Meta-Ontology TTL to JSON Index...")
    
    # Load TTL file
    g = Graph()
    g.parse(TTL_FILE, format='turtle')
    print(f"✓ Loaded {len(g)} triples from {TTL_FILE}")
    
    # Extract classes
    ontology_index = []
    
    # Query for all classes
    for s in g.subjects(RDF.type, OWL.Class):
        # Get labels (retrieve all, then filter by language)
        labels = list(g.objects(s, RDFS.label))
        label_en = ""
        label_ko = ""
        for label in labels:
            if hasattr(label, 'language'):
                if label.language == 'en':
                    label_en = str(label)
                elif label.language == 'ko':
                    label_ko = str(label)

        # Get comments
        comments = list(g.objects(s, RDFS.comment))
        comment_en = ""
        comment_ko = ""
        for comment in comments:
            if hasattr(comment, 'language'):
                if comment.language == 'en':
                    comment_en = str(comment)
                elif comment.language == 'ko':
                    comment_ko = str(comment)
        
        # Extract class name from URI
        class_name = str(s).split('#')[-1]
        
        # Determine category
        category = "meta-concept"
        if "Characteristic" in class_name or "Section" in class_name or "Annex" in class_name:
            category = "document-structure"
        elif "Concept" in class_name or "Definition" in class_name or "Requirement" in class_name:
            category = "content-type"
        
        ontology_index.append({
            "uri": str(s),
            "className": class_name,
            "labelEn": label_en,
            "labelKo": label_ko,
            "description": comment_ko or comment_en,
            "category": category,
            "mentions": [],  # No PDF mentions for meta-ontology
            "mentionCount": 0
        })
    
    # Sort by category and name
    ontology_index.sort(key=lambda x: (x['category'], x['className']))
    
    # Create result
    result = {
        "metadata": {
            "ttlFile": TTL_FILE,
            "totalClasses": len(ontology_index),
            "ontologyType": "iso-meta",
            "description": "ISO 표준 메타 온톨로지 - 모든 ISO/IEC 표준에 공통 적용 가능한 구조와 개념"
        },
        "ontologyIndex": ontology_index
    }
    
    # Save JSON
    output_path = Path(OUTPUT_FILE)
    with open(output_path, 'w', encoding='utf-8') as f:
        json.dump(result, f, ensure_ascii=False, indent=2)
    
    print(f"💾 Saved: {output_path}")
    print(f"✅ Converted {len(ontology_index)} classes")
    
    # Print categories
    categories = {}
    for item in ontology_index:
        cat = item['category']
        categories[cat] = categories.get(cat, 0) + 1
    
    print("\n📊 Categories:")
    for cat, count in categories.items():
        print(f"  - {cat}: {count} classes")

if __name__ == "__main__":
    convert_ttl_to_index()
