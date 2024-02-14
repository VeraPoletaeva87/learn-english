import { useState } from "react";
import { wordsAndMeanings } from "../data/data";
import './wordCard.css';

const WordCard = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [wrong, setWrong] = useState(false);
    const [answered, setAnswered] = useState(false);
    const [selectedAnswer, setSelectedAnswer] = useState(null);
  
    const handleNext = () => {
      setAnswered(false);  
      setSelectedAnswer(null);
      setCurrentIndex(prevIndex => (prevIndex === wordsAndMeanings.length - 1 ? 0 : prevIndex + 1));
    };

    const handleMeaningClick = (index: number) => {
        setSelectedAnswer(index);
        setAnswered(true);
        if (index === wordsAndMeanings[currentIndex].answer) {
            setWrong(false);
        } else {
            setWrong(true);
        }
    };
    
  
    const currentWord = wordsAndMeanings[currentIndex];
  
    return (
      <div className="word-card">
        <h2>{currentWord.word}</h2>
        <div className="wrap">
            <ol>
            {currentWord.meanings.map((meaning, index) => (
                <li className={!answered ? 'white-color' : 
                selectedAnswer === index && wrong ? 'red-color': selectedAnswer === index && !wrong ? 'green-color' : ''}
                key={index}
                onClick={() => handleMeaningClick(index)}
                >{meaning}</li>
            ))}
            </ol>
        </div>
        <button onClick={handleNext}>Next</button>
      </div>
    );
  };
  
  export default WordCard;