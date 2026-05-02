"""
tools/test_data_load.py
Phase 2: L - Link Verification Handshake
Confirms KB loads, routing works, and response formatting is correct.
Run: python tools/test_data_load.py (from project root)
"""
import io
import sys
sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding='utf-8')

import sys
import os
sys.path.insert(0, os.path.join(os.path.dirname(__file__)))

from load_election_kb import load_kb, load_quiz, get_node_by_id, get_all_nodes_ordered, get_faqs
from intent_router import route_intent
from response_formatter import format_step_response, format_overview_response, format_clarify_response

PASS = "[PASS]"
FAIL = "[FAIL]"
errors = []

def check(label, condition, detail=""):
    status = PASS if condition else FAIL
    print(f"  {status}  {label}")
    if not condition:
        errors.append(f"{label}: {detail}")

print("\n" + "="*55)
print("  ElectIQ - Phase 2 Link Verification Handshake")
print("="*55)

# ── 1. KB Load ────────────────────────────────────────────
print("\n[1] Knowledge Base Load")
kb = load_kb()
check("KB file loads without error", kb is not None)
check("KB has nodes list", isinstance(kb.get("nodes"), list))
check("KB has 12 nodes", len(kb.get("nodes", [])) == 12, f"found {len(kb.get('nodes', []))}")
check("KB has 3 phases", len(kb.get("phases", [])) == 3)
check("KB has overview block", "overview" in kb)
check("KB has faqs block", "faqs" in kb)

# ── 2. Quiz Load ──────────────────────────────────────────
print("\n[2] Quiz Question Bank Load")
quiz = load_quiz()
check("Quiz file loads", quiz is not None)
check("Quiz has 10+ questions", len(quiz.get("questions", [])) >= 10,
      f"found {len(quiz.get('questions', []))}")

# ── 3. Node Retrieval ─────────────────────────────────────
print("\n[3] Node Retrieval by ID")
reg = get_node_by_id("PRE_REGISTRATION")
check("PRE_REGISTRATION node found", reg is not None)
check("PRE_REGISTRATION has 3 steps", len(reg.get("steps", [])) == 3,
      f"found {len(reg.get('steps', []))}")
check("PRE_REGISTRATION has why_it_matters", bool(reg.get("why_it_matters")))
check("PRE_REGISTRATION has region_notes (USA, UK, India)",
      all(k in reg.get("region_notes", {}) for k in ["USA", "UK", "India"]))

# ── 4. Full Ordered Chain ─────────────────────────────────
print("\n[4] Sequential Node Chain")
all_nodes = get_all_nodes_ordered()
check("All 12 nodes returned in order", len(all_nodes) == 12)
check("First node is PRE_ELIGIBILITY", all_nodes[0]["id"] == "PRE_ELIGIBILITY")
check("Last node is POST_CIVIC_ROLE", all_nodes[-1]["id"] == "POST_CIVIC_ROLE")

# ── 5. next_step_id Chain Integrity ──────────────────────
print("\n[5] next_step_id Chain Integrity")
for i, node in enumerate(all_nodes[:-1]):
    expected_next = all_nodes[i + 1]["id"]
    actual_next = node.get("next_step_id")
    check(f"  {node['id']} → {expected_next}", actual_next == expected_next,
          f"got '{actual_next}'")
check("Last node next_step_id is null", all_nodes[-1].get("next_step_id") is None)

# ── 6. Intent Routing ─────────────────────────────────────
print("\n[6] Intent Router — Routing Tests")
routing_cases = [
    ("how do I register to vote?",      "step_guide", "PRE_REGISTRATION"),
    ("what ID do I need to bring?",     "step_guide", "PRE_VOTER_ID"),
    ("where is my polling station?",    "step_guide", "PRE_POLLING_STATION"),
    ("how are votes counted?",          "step_guide", "POST_COUNTING"),
    ("who won the election?",           "step_guide", "POST_RESULTS"),
    ("show me the full timeline",       "overview",   None),
    ("quiz me on elections",            "quiz",       None),
    ("I am confused, start over",       "restart",    None),
    ("sdlkfjsdlkfjsdlkfj",             "clarify",    None),
]
for msg, exp_type, exp_step in routing_cases:
    result = route_intent(msg)
    type_ok = result["response_type"] == exp_type
    step_ok = (exp_step is None) or (result["step_id"] == exp_step)
    check(f'  "{msg[:35]}"', type_ok and step_ok,
          f"got type={result['response_type']}, step={result['step_id']}")

# ── 7. Response Formatter ─────────────────────────────────
print("\n[7] Response Formatter")
step_resp = format_step_response("PRE_REGISTRATION", region="UK")
check("Step response has required keys",
      all(k in step_resp for k in ["response_type", "phase", "content"]))
check("Step response shows max 3 steps", len(step_resp["content"]["steps"]) <= 3)
check("Step response has why_it_matters", bool(step_resp["content"]["why_it_matters"]))
check("Step response has UK region note", bool(step_resp["content"]["region_note"]))
check("Step response has caveat", bool(step_resp.get("caveat")))

overview_resp = format_overview_response()
check("Overview has all 12 steps", len(overview_resp["content"]["all_steps"]) == 12)

clarify_resp = format_clarify_response()
check("Clarify has options list", len(clarify_resp["content"]["options"]) >= 4)

# ── Summary ───────────────────────────────────────────────
print("\n" + "="*55)
if errors:
    print(f"  [FAIL] {len(errors)} FAILURE(S) DETECTED:")
    for e in errors:
        print(f"     - {e}")
    print("  HANDSHAKE FAILED - fix errors before building UI")
else:
    print("  [PASS] ALL CHECKS PASSED - Phase 2 Handshake COMPLETE")
    print("  [PASS] Knowledge base loads correctly")
    print("  [PASS] Routing logic maps intents to correct phases")
    print("  [PASS] Response formatting is valid")
    print("  --> CLEAR TO PROCEED: Phase 3 Architecture & UI Build")
print("="*55 + "\n")

sys.exit(1 if errors else 0)
