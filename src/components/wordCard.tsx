import { useState } from "react";
import { wordsAndMeanings } from "../data/data";
import './wordCard.css';
import WordTestProgress from "./testProgress";
import FinishCard from "./finishCard";
import { Button, Card } from "antd";

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
      <div className="flex items-center flex-col">
        {answeredCount === 3 ? 
        <FinishCard totalWords={3} answeredWords={answeredCount}/> 
        :
        <>
        <Card title={currentWord.word} bordered={true} className="bg-lime-200 p-5 shadow-2xl w-1/4 h-56">
            <div className="wrap">
                <ol>
                    {currentWord.options.map((meaning, index) => (
                        <li className={!answered ? 'bg-lime-200' :
                            selectedAnswer === index && wrong ? 'red-color' : selectedAnswer === index && !wrong ? 'green-color' : ''}
                            key={index}
                            onClick={() => handleMeaningClick(index)}
                        >{meaning}</li>
                    ))}
                </ol>
            </div>
            <Button block onClick={handleNext}>Next</Button> 
        </Card>
        <WordTestProgress totalWords={3} answeredWords={answeredCount} />
        </>
        } 
        </div>
      </>
    );
  };
  
  export default WordCard;