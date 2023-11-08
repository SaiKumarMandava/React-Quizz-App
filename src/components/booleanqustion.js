import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const questions = [
  {
    question: "React is a JavaScript library for building user interfaces.",
    answer: true,
  },
  {
    question: "React uses HTML and CSS for templating.",
    answer: false,
  },
  {
    question: "React components must always be classes, not functions.",
    answer: false,
  },
  {
    question: "React was developed by Facebook.",
    answer: true,
  },
  {
    question: "React is a server-side framework.",
    answer: false,
  },
  {
    question: "React follows the Model-View-Controller (MVC) pattern.",
    answer: false,
  },
  {
    question: "React uses a virtual DOM for performance optimization.",
    answer: true,
  },
  {
    question: "React components can have local component state.",
    answer: true,
  },
  {
    question: "React applications are typically built using TypeScript.",
    answer: false,
  },
  {
    question:"React Router is used for client-side routing in React applications.",
    answer: true,
  },
];

function App() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [showResults, setShowResults] = useState(false);
  const [timer, setTimer] = useState(60); // 1 minute timer for each question
  const nav=useNavigate()

  useEffect(() => {
    const interval = setInterval(() => {
      if (timer > 0) {
        setTimer(timer - 1);
      } else {
        nextQuestion();
      }
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, [timer]);

  const handleAnswer = (userAnswer) => {
    if (userAnswer === questions[currentQuestionIndex].answer) {
      setScore(score + 10); // Each question is worth 10 marks
    }
    nextQuestion();
  };

  const nextQuestion = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setTimer(60); // Reset timer for the next question
    } else {
      setShowResults(true);
    }
  };

  //   const previousQuestion = () => {
  //     if (currentQuestionIndex > 0) {
  //       setCurrentQuestionIndex(currentQuestionIndex - 1);
  //       setTimer(60); // Reset timer for the previous question
  //     }
  //   };

  const calculatePercentage = () => {
    return (score / (questions.length * 10)) * 100;
  };

  const passFailStatus = () => {
    const percentage = calculatePercentage();
    if (percentage >= 70) {
      return "Pass";
    } else {
      return "Fail";
    }
  };

  const restartQuiz = () => {
    alert("Do you want to retake the quiz.?")
    setCurrentQuestionIndex(0);
    setScore(0);
    setShowResults(false);
  };
  const back=()=>{
    alert('Your progress will not saved , Are you sure back to home page.')
    nav('/home')
  }

  return (
    <div className="App">
        
      <h1>Quiz</h1>
      {showResults ? (
        <div className="results-card">
          <h2>Quiz Results</h2>
          <p>
            You {passFailStatus()} with a score of {calculatePercentage()}%
          </p>
          <button onClick={restartQuiz}>Restart Quiz</button>
        </div>
      ) : (
        <div className="flash-card">
          <h2>Question {currentQuestionIndex + 1}</h2>
          <p>{questions[currentQuestionIndex].question}</p>
          <div>
            <button onClick={() => handleAnswer(true)}>True</button>
            <button onClick={() => handleAnswer(false)}>False</button>
          </div>
          {currentQuestionIndex === questions.length - 1 ? (
            <button onClick={() => setShowResults(true)}>End</button>
          ) : (
            <>
              {/* {currentQuestionIndex > 0 && (
                <button onClick={previousQuestion}>Previous</button>
               )}
               <button onClick={nextQuestion}>Next</button> */}
            </>
          )}
          <p>Time left: {timer} seconds</p>
        </div>
      )}
      <button className="back-button" onClick={back}>Back To Home</button>
    </div>
  );
}

export default App;
