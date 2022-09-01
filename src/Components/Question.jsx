import React from "react";
import Card from "./Card";

import "./Question.css";

const Question = ({
  questionIndex,
  setQuestionIndex,
  questions,
  setShowQuestionsPage,
  setShowFinalPage,
  score,
  setScore,
}) => {
  const handleClick = (isCorrect) => {
    if (questionIndex < 9) {
      if (isCorrect) {
        setScore((score) => (score += 100));
      }

      setQuestionIndex((prevIndex) => prevIndex + 1);
    } else {
      if (isCorrect) {
        setScore((score) => (score += 100));
      }

      setShowQuestionsPage(false);
      setShowFinalPage(true);
    }
  };

  return (
    <Card>
      <h1 className="question">{questions[questionIndex].questionText}</h1>

      <div className="answers">
        {questions[questionIndex].answers.map((answer, i) => (
          <div
            key={i}
            className="answer"
            onClick={() => handleClick(answer.correctAnswer)}
          >
            <p>{answer.answerText}</p>
          </div>
        ))}
      </div>

      <p className="score">
        Score: <span>{score}</span>
      </p>

      <p className="question_number">
        Question <span>{questionIndex + 1}</span>/10
      </p>
    </Card>
  );
};

export default Question;
