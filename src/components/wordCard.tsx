import { useState } from "react";
import { wordsAndMeanings } from "../data/data";
import './wordCard.css';
import WordTestProgress from "./testProgress";
import FinishCard from "./finishCard";

const WordCard = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [wrong, setWrong] = useState(false);
    const [answered, setAnswered] = useState(false);
    const [answeredCount, setAnsweredCount] = useState(0);
    const [selectedAnswer, setSelectedAnswer] = useState(null);
  
    const handleNext = () => {
      setAnswered(false);  
      setSelectedAnswer(null);
      setCurrentIndex(prevIndex => (prevIndex === wordsAndMeanings.length - 1 ? 0 : prevIndex + 1));
    };

    const handleMeaningClick = (index: number) => {
        setSelectedAnswer(index);
        if (index === wordsAndMeanings[currentIndex].answer) {
            setWrong(false);
            if (!answered) setAnsweredCount(prevCount => prevCount + 1);
        } else {
            setWrong(true);
        }
        setAnswered(true);
    };
    
  
    const currentWord = wordsAndMeanings[currentIndex];
  
    return (
    <>
      <div className="word-card">
        {answeredCount === 3 ? 
        <FinishCard totalWords={3} answeredWords={answeredCount}/> 
        :
        <>
        <div>
            <h2>{currentWord.word}</h2>
            <div className="wrap">
                <ol>
                    {currentWord.options.map((meaning, index) => (
                        <li className={!answered ? 'white-color' :
                            selectedAnswer === index && wrong ? 'red-color' : selectedAnswer === index && !wrong ? 'green-color' : ''}
                            key={index}
                            onClick={() => handleMeaningClick(index)}
                        >{meaning}</li>
                    ))}
                </ol>
            </div>
            <button onClick={handleNext}>Next</button>
        </div>
        <WordTestProgress totalWords={3} answeredWords={answeredCount} />
        </>
        } 
        </div>
      </>
    );
  };
  
  export default WordCard;