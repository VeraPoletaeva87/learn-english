import type { JSX } from 'react';
import { useState } from 'react';

import { Button, Card } from 'antd';

import { wordsAndMeanings } from '../data/data';

import './wordCard.scss';
import FinishCard from './finishCard';
import WordTestProgress from './testProgress';

const WordCard = (): JSX.Element => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [wrong, setWrong] = useState<boolean>(false);
  const [answered, setAnswered] = useState<boolean>(false);
  const [answeredCount, setAnsweredCount] = useState<number>(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);

  const handleNext = () => {
    setAnswered(false);
    setSelectedAnswer(null);
    setCurrentIndex((prevIndex) => (prevIndex === wordsAndMeanings.length - 1 ? 0 : prevIndex + 1));
  };

  const handleMeaningClick = (index: number) => {
    setSelectedAnswer(index);
    if (index === wordsAndMeanings[currentIndex].answer) {
      setWrong(false);
      if (!answered) setAnsweredCount((prevCount) => prevCount + 1);
    } else {
      setWrong(true);
    }
    setAnswered(true);
  };

  const currentWord = wordsAndMeanings[currentIndex];

  return (
    <div className='flex items-center flex-col'>
      {answeredCount === 3 ? (
        <FinishCard answeredWords={answeredCount} totalWords={3} />
      ) : (
        <>
          <Card bordered className='bg-lime-200 p-5 shadow-2xl w-1/4 h-56' title={currentWord.word}>
            <div className='wrap'>
              <ol>
                {currentWord.options.map((meaning, index) => (
                  <li
                    className={
                      !answered
                        ? 'bg-lime-200'
                        : selectedAnswer === index && wrong
                          ? 'red-color'
                          : selectedAnswer === index && !wrong
                            ? 'green-color'
                            : ''
                    }
                    key={meaning}
                    onClick={() => handleMeaningClick(index)}
                  >
                    {meaning}
                  </li>
                ))}
              </ol>
            </div>
            <Button block onClick={handleNext}>
              Next
            </Button>
          </Card>
          <WordTestProgress answeredWords={answeredCount} totalWords={3} />
        </>
      )}
    </div>
  );
};

export default WordCard;
