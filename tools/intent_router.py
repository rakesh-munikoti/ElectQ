"""
tools/intent_router.py
Layer 3 — ElectIQ Election Guide Assistant
Maps user message text to the correct phase + step using deterministic keyword matching.
No ML, no ambiguity. Per sop_user_routing.md.
"""

import re
from typing import Optional


# ─── Routing Table ────────────────────────────────────────────────────────────
# Order matters: more specific patterns checked first.
ROUTE_TABLE = [
    # Quiz / Test
    (["quiz", "test me", "practice", "question", "quiz mode", "exam"], "quiz", None),

    # Timeline / Overview
    (["timeline", "full process", "overview", "summary", "whole process", "all steps", "complete guide"], "overview", None),

    # Restart
    (["restart", "start over", "beginning", "confused", "help me", "main menu", "reset", "back to start"], "restart", None),

    # Pre-Election
    (["eligible", "eligibility", "can i vote", "qualify", "am i eligible", "age requirement", "citizen", "right to vote", "who can vote"], "pre_election", "PRE_ELIGIBILITY"),
    (["register", "registration", "sign up", "voter roll", "electoral roll", "enroll", "how do i register", "voter list"], "pre_election", "PRE_REGISTRATION"),
    (["voter id", "voter card", "id card", "identification", "documents", "what to bring", "polling card", "what do i need"], "pre_election", "PRE_VOTER_ID"),
    (["polling station", "where to vote", "polling place", "booth location", "voting location", "find my booth", "where do i go"], "pre_election", "PRE_POLLING_STATION"),
    (["ballot", "candidates", "who is running", "parties", "referendum", "understand voting", "how to vote", "ballot type", "what is on ballot", "propositions"], "pre_election", "PRE_UNDERSTAND_BALLOT"),

    # Election Day
    (["election day", "arrive", "go to vote", "when to go", "today is", "polling day", "voting day"], "election_day", "ED_ARRIVE"),
    (["check in", "sign in", "polling officer", "verify identity", "mark register", "at the station", "when i get there"], "election_day", "ED_CHECK_IN"),
    (["cast vote", "mark ballot", "evm", "ballot paper", "voting booth", "secret ballot", "submit vote", "how do i actually vote", "press the button", "put an x", "cross"], "election_day", "ED_CAST_VOTE"),

    # Post-Election
    (["count", "counting", "tally", "how are votes counted", "ballot counting", "when will votes be counted"], "post_election", "POST_COUNTING"),
    (["results", "winner", "who won", "declared", "outcome", "official result", "certified", "election result", "when will we know"], "post_election", "POST_RESULTS"),
    (["appeal", "dispute", "recount", "challenge", "fraud", "irregularity", "contest", "petition", "election petition"], "post_election", "POST_APPEALS"),
    (["civic role", "after election", "what now", "accountable", "representative", "hold accountable", "engage", "next steps after", "what do i do after"], "post_election", "POST_CIVIC_ROLE"),

    # FAQ patterns
    (["what if", "can i", "is it", "do i need", "faq", "question about", "am i allowed"], "faq", None),
]

# ─── Region Detection ──────────────────────────────────────────────────────────
REGION_SIGNALS = {
    "USA": ["usa", "america", "united states", "american", "us election", "u.s.", "federal election", "congress", "senate", "electoral college"],
    "UK":  ["uk", "britain", "england", "british", "parliament", "westminster", "mp", "constituency", "electoral commission", "scotland", "wales"],
    "India": ["india", "indian", "lok sabha", "eci", "election commission of india", "evm", "vvpat", "aadhaar", "form 6", "rajya sabha"],
}


def detect_region(text: str) -> Optional[str]:
    """Detect country/region from user message. Returns 'USA', 'UK', 'India', or None."""
    text_lower = text.lower()
    for region, signals in REGION_SIGNALS.items():
        for signal in signals:
            if signal in text_lower:
                return region
    return None


def route_intent(message: str) -> dict:
    """
    Given a user message string, return a routing result dict:
    {
        "response_type": "step_guide" | "overview" | "quiz" | "faq" | "restart" | "clarify",
        "phase": "pre_election" | "election_day" | "post_election" | "general" | None,
        "step_id": "string" | None,
        "detected_region": "USA" | "UK" | "India" | None,
        "confidence": "high" | "low"
    }
    """
    text = message.lower().strip()
    # Remove punctuation for cleaner matching
    text_clean = re.sub(r"[^\w\s]", " ", text)

    detected_region = detect_region(text_clean)

    for keywords, response_type, step_id in ROUTE_TABLE:
        for kw in keywords:
            if kw in text_clean:
                return {
                    "response_type": _normalize_response_type(response_type),
                    "phase": response_type if response_type in ("pre_election", "election_day", "post_election") else "general",
                    "step_id": step_id,
                    "detected_region": detected_region,
                    "confidence": "high"
                }

    # No match — clarify
    return {
        "response_type": "clarify",
        "phase": None,
        "step_id": None,
        "detected_region": detected_region,
        "confidence": "low"
    }


def _normalize_response_type(rt: str) -> str:
    mapping = {
        "pre_election": "step_guide",
        "election_day": "step_guide",
        "post_election": "step_guide",
        "quiz": "quiz",
        "overview": "overview",
        "restart": "restart",
        "faq": "faq",
    }
    return mapping.get(rt, "clarify")


if __name__ == "__main__":
    test_cases = [
        ("How do I register to vote?", "step_guide", "PRE_REGISTRATION"),
        ("What should I bring to the polling station?", "step_guide", "PRE_VOTER_ID"),
        ("How are votes counted?", "step_guide", "POST_COUNTING"),
        ("Show me the full timeline", "overview", None),
        ("Quiz me!", "quiz", None),
        ("I'm confused, start over", "restart", None),
        ("What is the weather like?", "clarify", None),
        ("How do elections work in India?", "step_guide", None),  # region detected
    ]

    print("=== Intent Router — Test Suite ===\n")
    all_pass = True
    for msg, expected_type, expected_step in test_cases:
        result = route_intent(msg)
        status = "✅" if result["response_type"] == expected_type else "❌"
        if expected_step and result["step_id"] != expected_step:
            status = "❌"
        all_pass = all_pass and status == "✅"
        print(f"{status} '{msg}'")
        print(f"   → type={result['response_type']}, step={result['step_id']}, region={result['detected_region']}")

    print(f"\n{'=== ALL TESTS PASSED ===' if all_pass else '=== SOME TESTS FAILED ==='}")
