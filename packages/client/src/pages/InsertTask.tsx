import type { DragEvent, SyntheticEvent } from 'react';
import { useEffect, useState } from 'react';

import { Button, Card } from 'antd';
import './InsertTask.scss';

import { sentences } from '../data/sentences';

const InsertTask = () => {
  const [answer, setAnswer] = useState('');
  const [option, setOption] = useState('');

  const [wrong, setWrong] = useState(false);
  const [answered, setAnswered] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentWord, setCurrentWord] = useState(sentences[0]);

  const allowDrop = (ev: SyntheticEvent) => {
    ev.preventDefault();
  };

  useEffect(() => {
    setCurrentWord(sentences[currentIndex]);
  }, [currentIndex]);

  const drag = (ev: DragEvent<HTMLDivElement>) => {
    setOption(ev.currentTarget.innerText);
  };

  const drop = (ev: SyntheticEvent) => {
    ev.preventDefault();
    if (currentWord.answer !== currentWord.options.indexOf(option)) {
      setWrong(true);
    } else {
      setWrong(false);
    }
    setAnswered(true);
    setAnswer(option);
  };

  const handleNext = () => {
    setAnswered(false);
    setAnswer('');
    setCurrentIndex((prevIndex) => (prevIndex === sentences.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <div className='flex flex-row ml-12 mt-12'>
      <Card bordered className='bg-lime-200 p-5 shadow-2xl' title='Insert correct word into the box'>
        <div className='flex items-baseline margin20'>
          <div className='mr-2'>{currentWord.part1}</div>
          <div
            className={!answered ? 'droppable' : wrong ? 'red-color' : 'green-color'}
            onDragOver={allowDrop}
            onDrop={drop}
          >
            {answer}
          </div>
          <div className='ml-2'>{currentWord.part2}</div>
        </div>
        <div className='text-yellow-800 flex justify-between w-full ml-2 margin20'>
          {currentWord.options?.map((item) => (
            <div className='draggable' draggable='true' key={item} onDragStart={drag}>
              {item}
            </div>
          ))}
        </div>
        <div className='button-next'>
          <Button block onClick={handleNext}>
            Next
          </Button>
        </div>
      </Card>
    </div>
  );
};

export default InsertTask;
