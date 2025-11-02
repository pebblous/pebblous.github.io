#!/usr/bin/env python3
"""
Extract OWL Class Hierarchy to JSON
Reads OWL file and extracts complete class hierarchy with parent-child relationships
"""

import json
from pathlib import Path
from rdflib import Graph, RDF, RDFS, Namespace

# Configuration
OWL_FILE = "example/iso5259-2-ontology.owl"
OUTPUT_FILE = "example/quality-ontology-hierarchy.json"

# Namespaces
ISO5259 = Namespace("http://pebblous.ai/ontology/iso5259-2#")
OWL = Namespace("http://www.w3.org/2002/07/owl#")

def extract_owl_hierarchy():
    """Extract complete class hierarchy from OWL file"""
    print(f"📖 Reading OWL file: {OWL_FILE}")

    # Load OWL file
    g = Graph()
    g.parse(OWL_FILE, format='xml')
    print(f"✓ Loaded {len(g)} triples")

    # Extract all classes with their parent classes
    classes = {}

    for class_uri in g.subjects(RDF.type, OWL.Class):
        class_name = str(class_uri).split('#')[-1]

        # Get labels
        label_en = ""
        label_ko = ""
        for label in g.objects(class_uri, RDFS.label):
            if hasattr(label, 'language'):
                if label.language == 'en':
                    label_en = str(label)
                elif label.language == 'ko':
                    label_ko = str(label)

        # Get comments
        comment_en = ""
        comment_ko = ""
        for comment in g.objects(class_uri, RDFS.comment):
            if hasattr(comment, 'language'):
                if comment.language == 'en':
                    comment_en = str(comment)
                elif comment.language == 'ko':
                    comment_ko = str(comment)

        # Get parent class (rdfs:subClassOf)
        parent_classes = []
        for parent in g.objects(class_uri, RDFS.subClassOf):
            parent_name = str(parent).split('#')[-1]
            parent_classes.append(parent_name)

        classes[class_name] = {
            "uri": str(class_uri),
            "className": class_name,
            "labelEn": label_en,
            "labelKo": label_ko,
            "descriptionEn": comment_en,
            "descriptionKo": comment_ko,
            "parentClasses": parent_classes,
            "children": []  # Will be populated later
        }

    print(f"✓ Extracted {len(classes)} classes")

    # Build hierarchy by linking children to parents
    for class_name, class_data in classes.items():
        for parent_name in class_data["parentClasses"]:
            if parent_name in classes:
                classes[parent_name]["children"].append(class_name)

    # Find root classes (classes with no parents or parents not in our ontology)
    root_classes = []
    for class_name, class_data in classes.items():
        # Check if all parents are outside our ontology (or no parents)
        has_parent_in_ontology = any(p in classes for p in class_data["parentClasses"])
        if not has_parent_in_ontology:
            root_classes.append(class_name)

    print(f"✓ Found {len(root_classes)} root classes: {', '.join(root_classes)}")

    # Create output structure
    result = {
        "metadata": {
            "owlFile": OWL_FILE,
            "totalClasses": len(classes),
            "rootClasses": root_classes,
            "extractedAt": "2025-11-02"
        },
        "classes": classes,
        "hierarchy": build_tree_structure(classes, root_classes)
    }

    # Save JSON
    output_path = Path(OUTPUT_FILE)
    with open(output_path, 'w', encoding='utf-8') as f:
        json.dump(result, f, ensure_ascii=False, indent=2)

    print(f"💾 Saved: {output_path}")
    print(f"✅ Hierarchy extraction complete!")

    # Print hierarchy statistics
    print("\n📊 Hierarchy Statistics:")
    for root in root_classes:
        count_descendants(classes, root, 0)

def build_tree_structure(classes, root_class_names):
    """Build nested tree structure for visualization"""
    def build_node(class_name):
        class_data = classes[class_name]
        node = {
            "label": class_data["labelKo"] or class_data["labelEn"],
            "className": class_name,
            "children": []
        }

        # Recursively add children
        for child_name in sorted(class_data["children"]):
            node["children"].append(build_node(child_name))

        return node

    # Build tree for each root
    trees = []
    for root_name in sorted(root_class_names):
        trees.append(build_node(root_name))

    return trees

def count_descendants(classes, class_name, depth):
    """Print hierarchy with indentation"""
    class_data = classes[class_name]
    indent = "  " * depth
    label = class_data["labelKo"] or class_data["labelEn"]
    print(f"{indent}• {label} ({class_name}) - {len(class_data['children'])} children")

    for child_name in sorted(class_data["children"]):
        count_descendants(classes, child_name, depth + 1)

if __name__ == "__main__":
    extract_owl_hierarchy()
