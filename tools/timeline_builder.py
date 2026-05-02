"""
tools/timeline_builder.py
Layer 3 — ElectIQ Election Guide Assistant
Generates ASCII and structured timeline output for all election phases.
Per sop_timeline_render.md.
"""

from load_election_kb import load_kb, get_all_nodes_ordered


PHASE_COLORS = {
    "pre_election":  {"emoji": "🔵", "label": "PRE-ELECTION",  "steps_label": "Steps 1–5"},
    "election_day":  {"emoji": "🟢", "label": "ELECTION DAY",  "steps_label": "Steps 6–8"},
    "post_election": {"emoji": "🟡", "label": "POST-ELECTION", "steps_label": "Steps 9–12"},
}


def build_ascii_timeline(current_step_id: str = None, completed_step_ids: list = None) -> str:
    """
    Build a full ASCII timeline showing all phases and steps.
    Marks completed (✓), current (►), and upcoming (·) steps.
    """
    if completed_step_ids is None:
        completed_step_ids = []

    nodes = get_all_nodes_ordered()
    kb = load_kb()
    overview = kb["overview"]

    lines = []
    lines.append("┌─────────────────────────────────────────────────────────────────┐")
    lines.append("│                    📊 ELECTION TIMELINE                         │")
    lines.append("├─────────────────────┬───────────────────┬────────────────────── ┤")
    lines.append("│  🔵 PRE-ELECTION    │  🟢 ELECTION DAY  │  🟡 POST-ELECTION     │")
    lines.append("│  Steps 1–5          │  Steps 6–8        │  Steps 9–12           │")
    lines.append("├─────────────────────┼───────────────────┼───────────────────────┤")

    # Group nodes by phase
    pre = [n for n in nodes if n["phase"] == "pre_election"]
    ed  = [n for n in nodes if n["phase"] == "election_day"]
    post = [n for n in nodes if n["phase"] == "post_election"]

    # Build rows (max rows = max of len across columns)
    max_rows = max(len(pre), len(ed), len(post))

    for i in range(max_rows):
        row_parts = []
        for col_nodes in [pre, ed, post]:
            if i < len(col_nodes):
                node = col_nodes[i]
                marker = _get_marker(node["id"], current_step_id, completed_step_ids)
                step_num = nodes.index(node) + 1
                label = f"{marker} {step_num}. {node['title'][:16]}"
                row_parts.append(f" {label:<21}")
            else:
                row_parts.append(" " * 22)
        lines.append("│" + "│".join(row_parts) + "│")

    lines.append("└─────────────────────┴───────────────────┴───────────────────────┘")
    lines.append("  Legend: ✓ Complete   ► Current   · Upcoming")

    return "\n".join(lines)


def build_phase_header(phase: str) -> str:
    """Return a formatted phase header string."""
    info = PHASE_COLORS.get(phase, {})
    emoji = info.get("emoji", "⚪")
    label = info.get("label", phase.upper())
    return f"{emoji} {label}"


def build_step_timeline(node: dict, step_number: int, total_steps: int) -> str:
    """Build a compact progress line for a single step."""
    phase = node["phase"]
    info = PHASE_COLORS.get(phase, {})
    emoji = info.get("emoji", "⚪")
    label = info.get("label", phase)

    progress = f"Step {step_number} of {total_steps}"
    marker = node.get("timeline_marker", "")

    return f"{emoji} {label}  |  {progress}  |  📅 {marker}"


def build_structured_timeline() -> list:
    """
    Return a structured list of all steps for UI rendering.
    Each item: { phase, step_number, id, title, timeline_marker, emoji }
    """
    nodes = get_all_nodes_ordered()
    result = []
    for i, node in enumerate(nodes):
        phase_info = PHASE_COLORS.get(node["phase"], {})
        result.append({
            "step_number": i + 1,
            "id": node["id"],
            "phase": node["phase"],
            "phase_label": phase_info.get("label", ""),
            "emoji": phase_info.get("emoji", ""),
            "title": node["title"],
            "timeline_marker": node.get("timeline_marker", ""),
        })
    return result


def _get_marker(node_id: str, current_step_id: str, completed_step_ids: list) -> str:
    if node_id in completed_step_ids:
        return "✓"
    if node_id == current_step_id:
        return "►"
    return "·"


if __name__ == "__main__":
    print("=== Timeline Builder — Demo ===\n")

    # Demo: user is at voter ID step, with eligibility + registration done
    print(build_ascii_timeline(
        current_step_id="PRE_VOTER_ID",
        completed_step_ids=["PRE_ELIGIBILITY", "PRE_REGISTRATION"]
    ))

    print("\n--- Structured Timeline (first 3 entries) ---")
    structured = build_structured_timeline()
    for item in structured[:3]:
        print(f"  {item['emoji']} Step {item['step_number']}: {item['title']} — {item['timeline_marker']}")

    print("\n=== Timeline Builder — PASS ===")
