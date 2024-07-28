import { useState } from "react";

export default function Flashcard() {
  const [selected, setSelected] = useState(null);
  const [showAnswer, setShowAnswer] = useState(false);
  const questions = [
    {
      question: "What is the capital of France?",
      answer: "Paris",
      id: 1,
    },
    {
      question: "What is the capital of Spain?",
      answer: "Madrid",
      id: 2,
    },
    {
      question: "What is the capital of Italy?",
      answer: "Rome",
      id: 3,
    },
    {
      question: "What is the capital of Germany?",
      answer: "Berlin",
      id: 4,
    },
    {
      question: "What is the capital of Portugal?",
      answer: "Lisbon",
      id: 5,
    },
    {
      question: "What is the capital of Greece?",
      answer: "Athens",
      id: 6,
    },
  ];

  function handleClick(id) {
    if (selected === id) {
      setShowAnswer(!showAnswer);
    } else {
      setSelected(id);
      setShowAnswer(true);
    }
  }
  return (
    <div className="flex flex-wrap gap-3 p-6">
      {questions.map((question) => (
        <div
          key={question.id}
          onClick={() => handleClick(question.id)}
          className="border-2 p-6 border-indigo-200 bg-indigo-100 text-center "
        >
          <p>
            {selected === question.id && showAnswer
              ? question.answer
              : question.question}
          </p>
        </div>
      ))}
    </div>
  );
}
