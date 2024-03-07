import { useState } from 'react';

import { Button, Card, Input, message } from 'antd';

import ArrangeTask from '../components/arrangeSentences';
import audio1 from '../data/audioTask1.ogg';

const correctAnswer = '13';

const AudioTask = (): JSX.Element => {
  const [userAnswer, setUserAnswer] = useState('');
  const [answerCorrect, setAnswerCorrect] = useState(false);
  const [showOrderTask, setShowOrderTask] = useState(false);

  const handleSubmit = () => {
    if (userAnswer.trim().toLowerCase() === correctAnswer.toLowerCase()) {
      void message.success('Correct answer!');
      setAnswerCorrect(true);
    } else {
      void message.error('Incorrect answer, please try again.');
      setAnswerCorrect(false);
    }
  };

  const handleNext = () => {
    setShowOrderTask(true);
  };

  return (
    <div>
      {showOrderTask ? (
        <ArrangeTask />
      ) : (
        <Card
          bordered
          className='bg-lime-200 p-5 shadow-2xl w-2/6 h-1/2 ml-auto mr-auto mt-5'
          title='Listen to the audio and then write a correct answer to the question:'
        >
          <div className='flex flex-col items-center'>
            <audio className='mb-5 w-full' controls>
              <source src={audio1} type='audio/ogg' />
            </audio>
            <div className='flex items-baseline mt-5'>
              <div>How much does 3-kilo potatoes bag cost in dollars?</div>
              <Input className='w-20 ml-5' onChange={(e) => setUserAnswer(e.target.value)} value={userAnswer} />
              <Button className='ml-3' onClick={handleSubmit} type='primary'>
                Submit
              </Button>
            </div>
            <Button className='mt-10' disabled={!answerCorrect} onClick={handleNext}>
              Next
            </Button>
          </div>
        </Card>
      )}
    </div>
  );
};

export default AudioTask;
