import React from 'react';
import { NavLink } from 'react-router-dom';

function HomePage() {
  return (
    <div className="home-container">
      <div className="home-div">
        <h2>Welcome to the Quiz App</h2>
        <p>This is a fun quiz to test your knowledge.</p>
        <div className="home-div1">
        <h2>Instructions</h2>
        <p>Answer 10 true or false questions within the time limit.</p>
        <p>Each question timelimit is 60 seconds.</p>

      </div>
      <NavLink to='/booleanquestion'>
      <button className="start-button">Let's Start Quiz</button>
      </NavLink>
      </div>
     
     
    </div>
  );
}

export default HomePage;
