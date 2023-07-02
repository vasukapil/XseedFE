import React, { useEffect, useState } from 'react';
import Typography from '@mui/material/Typography';
import FormControl from '@mui/material/FormControl';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Radio from '@mui/material/Radio';
import Button from '@mui/material/Button';
import { BASE_URL } from '../api';

const QuizSection = () => {
  const [quizQuestions, setQuizQuestions] = useState([]);
  const [selectedAnswers, setSelectedAnswers] = useState({});

  useEffect(() => {
    fetch(`${BASE_URL}/questions`)
      .then(response => response.json())
      .then(data => setQuizQuestions(data))
      .catch(error => console.error('Failed to fetch quiz questions:', error));
  }, []);

  const handleAnswerChange = (questionId, answer) => {
    setSelectedAnswers(prevState => ({
      ...prevState,
      [questionId]: answer,
    }));
  };
  const selectedAnswersValues = Object.values(selectedAnswers);
  const calculateScore = () => {
    let score = 0;
    quizQuestions.forEach((question, index) => {
      if (selectedAnswersValues[index] === question.correctAnswer) {
        score += 1;
      }
    });
  
    return score;
  };

  const handleSubmit = () => {
    const score = calculateScore();
    alert(`Your score: ${score}/${quizQuestions.length}`);
  };
  return (
    <div>
      {quizQuestions.map(question => (
        <div key={question._id}>
          <Typography variant="h6">{question.question}</Typography>
          <FormControl component="fieldset">
            <RadioGroup
              value={selectedAnswers[question._id] || ''}
              onChange={e => handleAnswerChange(question._id, e.target.value)}
            >
              {question.options.map(option => (
                <FormControlLabel
                  key={option}
                  value={option}
                  control={<Radio />}
                  label={option}
                />
              ))}
            </RadioGroup>
          </FormControl>
        </div>
      ))}
      <Button variant="contained" color="primary" onClick={handleSubmit}>
        Submit
      </Button>
    </div>
  );
};

export default QuizSection;
