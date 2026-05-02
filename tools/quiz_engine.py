"""
tools/quiz_engine.py
Layer 3 — ElectIQ Election Guide Assistant
Generates and evaluates comprehension quiz questions.
"""

import random
from load_election_kb import load_quiz


def get_random_questions(count=3, phase_filter=None):
    quiz = load_quiz()
    questions = quiz["questions"]
    if phase_filter:
        questions = [q for q in questions if q.get("phase") == phase_filter]
    if len(questions) <= count:
        return questions
    return random.sample(questions, count)


def evaluate_answer(question_id, user_answer):
    quiz = load_quiz()
    question = next((q for q in quiz["questions"] if q["id"] == question_id), None)
    if not question:
        return {"error": f"Question ID '{question_id}' not found."}
    user_clean = user_answer.strip().upper()
    is_correct = user_clean == question["correct"]
    return {
        "question_id": question_id,
        "is_correct": is_correct,
        "user_answer": user_clean,
        "correct_answer": question["correct"],
        "explanation": question["explanation"],
        "encouragement": ("🎉 Correct! Well done!" if is_correct else "❌ Not quite — here's why:"),
    }


def score_quiz(answers):
    results = []
    correct_count = 0
    for answer in answers:
        result = evaluate_answer(answer["question_id"], answer["user_answer"])
        results.append(result)
        if result.get("is_correct"):
            correct_count += 1
    total = len(answers)
    pct = round((correct_count / total * 100), 1) if total > 0 else 0
    grades = [(90, "🏆 Expert Voter"), (70, "✅ Civic Citizen"), (50, "📚 Learning Voter"), (0, "🌱 Keep Going!")]
    grade = next(g for threshold, g in grades if pct >= threshold)
    return {"score": correct_count, "total": total, "percentage": pct, "grade": grade, "results": results}


if __name__ == "__main__":
    print("=== Quiz Engine — Smoke Test ===")
    qs = get_random_questions(3)
    print(f"Fetched {len(qs)} questions.")
    fake = [{"question_id": qs[0]["id"], "user_answer": qs[0]["correct"]},
            {"question_id": qs[1]["id"], "user_answer": "A"}]
    result = score_quiz(fake)
    print(f"Score: {result['score']}/{result['total']} — {result['grade']}")
    print("=== PASS ===")
