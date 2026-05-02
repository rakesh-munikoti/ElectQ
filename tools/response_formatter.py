"""
tools/response_formatter.py
Layer 3 — ElectIQ Election Guide Assistant
Formats final output payload for chat UI delivery.
"""

from load_election_kb import get_node_by_id, get_all_nodes_ordered, get_overview


PHASE_META = {
    "pre_election":  {"emoji": "🔵", "label": "Pre-Election",  "color": "blue"},
    "election_day":  {"emoji": "🟢", "label": "Election Day",  "color": "green"},
    "post_election": {"emoji": "🟡", "label": "Post-Election", "color": "yellow"},
    "general":       {"emoji": "📋", "label": "General",       "color": "gray"},
}


def format_step_response(node_id, region=None, experience_level="first_time"):
    """Format a full step-guide response for a given node ID."""
    node = get_node_by_id(node_id)
    if not node:
        return format_error(f"Step '{node_id}' not found in knowledge base.")

    all_nodes = get_all_nodes_ordered()
    step_number = next((i + 1 for i, n in enumerate(all_nodes) if n["id"] == node_id), 0)
    total_steps = len(all_nodes)

    phase_info = PHASE_META.get(node["phase"], PHASE_META["general"])
    region_note = node.get("region_notes", {}).get(region) if region else None

    # Chunk steps: show first 3, remainder shown on request
    steps = node.get("steps", [])
    shown_steps = steps[:3]
    hidden_steps = steps[3:]

    payload = {
        "response_type": "step_guide",
        "phase": node["phase"],
        "phase_label": phase_info["label"],
        "phase_emoji": phase_info["emoji"],
        "phase_color": phase_info["color"],
        "step_number": step_number,
        "total_steps": total_steps,
        "content": {
            "title": node["title"],
            "timeline_marker": node.get("timeline_marker", ""),
            "description": node.get("description", ""),
            "steps": shown_steps,
            "steps_remaining": hidden_steps,
            "why_it_matters": node.get("why_it_matters", ""),
            "region_note": region_note,
            "next_step_id": node.get("next_step_id"),
            "next_prompt": _build_next_prompt(node, experience_level),
        },
        "caveat": "⚠️ Specific dates and deadlines vary by jurisdiction. Always verify with your local electoral authority.",
    }
    return payload


def format_overview_response(region=None):
    """Format a full overview/timeline response."""
    overview = get_overview()
    all_nodes = get_all_nodes_ordered()
    structured = []
    for i, node in enumerate(all_nodes):
        pm = PHASE_META.get(node["phase"], {})
        structured.append({
            "step_number": i + 1,
            "id": node["id"],
            "phase": node["phase"],
            "phase_emoji": pm.get("emoji", ""),
            "phase_label": pm.get("label", ""),
            "title": node["title"],
            "timeline_marker": node.get("timeline_marker", ""),
        })
    return {
        "response_type": "overview",
        "phase": "general",
        "content": {
            "title": "The Complete Election Journey",
            "phases": overview["phases"],
            "all_steps": structured,
            "why_it_matters": "Understanding the full election timeline helps you plan ahead and never miss a critical step.",
            "next_prompt": "Where would you like to start? [🔵 Pre-Election] [🟢 Election Day] [🟡 Post-Election]",
        },
    }


def format_clarify_response(unknown_count=1):
    """Format a clarifying question response."""
    prompt = "I want to make sure I point you in the right direction! What are you looking for?"
    if unknown_count >= 2:
        prompt += " Or would you like to [Start Over from the beginning]?"
    return {
        "response_type": "clarify",
        "phase": "general",
        "content": {
            "title": "Let me help you find the right information",
            "steps": [],
            "options": ["📋 Registration", "🗳️ Voting Process", "📊 Results & Counting", "❓ FAQs", "🗺️ Full Timeline", "🧠 Quiz Mode"],
            "why_it_matters": "",
            "next_prompt": prompt,
        },
    }


def format_faq_response(faq_entry):
    """Format a FAQ answer response."""
    return {
        "response_type": "faq",
        "phase": faq_entry.get("phase", "general"),
        "content": {
            "title": faq_entry["question"],
            "steps": [],
            "answer": faq_entry["answer"],
            "why_it_matters": "",
            "next_prompt": "Was that helpful? [Yes, continue the guide] [Ask another question]",
        },
    }


def format_error(message):
    return {
        "response_type": "error",
        "phase": "general",
        "content": {
            "title": "Something went wrong",
            "steps": [],
            "why_it_matters": "",
            "next_prompt": message,
        },
    }


def _build_next_prompt(node, experience_level):
    next_id = node.get("next_step_id")
    if not next_id:
        return "🎉 You've completed the full election guide! Want to test your knowledge with a quiz?"
    next_node = get_node_by_id(next_id)
    if next_node:
        label = next_node["title"]
        return f"Ready for the next step? [{label} →]"
    return "Continue to the next step?"


if __name__ == "__main__":
    print("=== Response Formatter — Smoke Test ===")
    r1 = format_step_response("PRE_REGISTRATION", region="UK")
    print(f"Step Response: {r1['content']['title']}")
    print(f"  Phase: {r1['phase_emoji']} {r1['phase_label']}")
    print(f"  Steps shown: {len(r1['content']['steps'])}")
    print(f"  Region note: {r1['content']['region_note'][:50]}...")

    r2 = format_overview_response()
    print(f"\nOverview: {len(r2['content']['all_steps'])} steps total")

    r3 = format_clarify_response()
    print(f"Clarify options: {r3['content']['options']}")
    print("=== PASS ===")
