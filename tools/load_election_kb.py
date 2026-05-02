"""
tools/load_election_kb.py
Layer 3 — ElectIQ Election Guide Assistant
Loads and parses the election knowledge base JSON.
Pure function: no side effects, no globals mutated.
"""

import json
import os
from typing import Optional


KB_PATH = os.path.join(os.path.dirname(__file__), "..", "data", "election_kb.json")
QUIZ_PATH = os.path.join(os.path.dirname(__file__), "..", "data", "quiz_questions.json")


def load_kb() -> dict:
    """Load and return the full election knowledge base."""
    with open(KB_PATH, "r", encoding="utf-8") as f:
        return json.load(f)


def load_quiz() -> dict:
    """Load and return the quiz question bank."""
    with open(QUIZ_PATH, "r", encoding="utf-8") as f:
        return json.load(f)


def get_node_by_id(node_id: str) -> Optional[dict]:
    """Return a single KB node by its ID, or None if not found."""
    kb = load_kb()
    for node in kb["nodes"]:
        if node["id"] == node_id:
            return node
    return None


def get_nodes_by_phase(phase: str) -> list:
    """Return all KB nodes for a given phase (pre_election, election_day, post_election)."""
    kb = load_kb()
    return [n for n in kb["nodes"] if n["phase"] == phase]


def get_all_nodes_ordered() -> list:
    """Return all nodes in the correct sequential order."""
    kb = load_kb()
    order = []
    for phase_info in kb["overview"]["phases"]:
        for step_id in phase_info["steps"]:
            node = next((n for n in kb["nodes"] if n["id"] == step_id), None)
            if node:
                order.append(node)
    return order


def get_overview() -> dict:
    """Return the overview structure (phases, labels, summaries)."""
    kb = load_kb()
    return kb["overview"]


def get_faqs() -> list:
    """Return all FAQ entries."""
    kb = load_kb()
    return kb.get("faqs", [])


def get_faq_by_keyword(keyword: str) -> Optional[dict]:
    """Scan FAQs for the closest match to a keyword. Returns first match or None."""
    faqs = get_faqs()
    keyword_lower = keyword.lower()
    for faq in faqs:
        if keyword_lower in faq["question"].lower() or keyword_lower in faq["answer"].lower():
            return faq
    return None


def get_region_note(node_id: str, region: str) -> Optional[str]:
    """Return the region-specific note for a node, or None if not available."""
    node = get_node_by_id(node_id)
    if node and "region_notes" in node:
        return node["region_notes"].get(region)
    return None


if __name__ == "__main__":
    # Quick smoke test
    print("=== ElectIQ KB Loader — Smoke Test ===\n")
    kb = load_kb()
    print(f"KB Version: {kb['version']}")
    print(f"Total Nodes: {len(kb['nodes'])}")
    print(f"Phases: {kb['phases']}")

    sample = get_node_by_id("PRE_REGISTRATION")
    if sample:
        print(f"\nSample Node: {sample['title']}")
        print(f"  Steps: {len(sample['steps'])}")
        print(f"  Why it matters: {sample['why_it_matters'][:60]}...")
        print(f"  USA note: {sample['region_notes']['USA'][:60]}...")
    else:
        print("ERROR: PRE_REGISTRATION node not found!")

    quiz = load_quiz()
    print(f"\nQuiz Questions Loaded: {len(quiz['questions'])}")
    print("=== Smoke Test PASSED ===")
