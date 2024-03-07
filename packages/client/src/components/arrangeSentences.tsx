import { useCallback, useEffect, useState } from 'react';

import { Button, Card, List, message } from 'antd';

import audio3 from '../data/audioTask3.ogg';
import { arrangeTaskSentences } from '../data/sentences';
import './arrangeSentences.scss';

const CORRECT_ANSWER = '0123';

const ArrangeTask = () => {
  //const [wrong, setWrong] = useState(false);
  const [answered, setAnswered] = useState(false);
  const [sumbitDisabled, setSumbitDisabled] = useState(true);
  const [flashBorder, setFlashBorder] = useState(false);
  const [answerCorrect, setAnswerCorrect] = useState(false);
  const [sourceSentences, setSourceSentences] = useState(arrangeTaskSentences);
  const [targetSentences, setTargetSentences] = useState([
    { id: 0, order: '', text: '' },
    { id: 1, order: '', text: '' },
    { id: 2, order: '', text: '' },
    { id: 3, order: '', text: '' },
  ]);

  const drag = useCallback((event: any, item: any) => {
    event.dataTransfer.setData('application/json', JSON.stringify(item));
  }, []);

  const allowDrop = useCallback((event: any) => {
    event.preventDefault();
  }, []);

  useEffect(() => {
    setSumbitDisabled(sourceSentences.length !== 0);
  }, [sourceSentences]);

  const drop = useCallback(
    (event: any, item: any) => {
      event.preventDefault();
      const data = JSON.parse(event.dataTransfer.getData('application/json'));
      const objIndex = targetSentences.findIndex((elem) => elem.id === item.id);

      // If the object with the specified id is found, update its text property
      if (objIndex !== -1) {
        targetSentences[objIndex].text = data.text;
        targetSentences[objIndex].order = data.order;
      }
      setTargetSentences(targetSentences);
      setSourceSentences(sourceSentences.filter((sentence) => sentence.text !== data.text));
    },
    [sourceSentences, targetSentences],
  );

  // Render item for the first list
  const renderItem = useCallback(
    (item: any) => (
      <List.Item className='draggable w-full' draggable='true' onDragStart={(event) => drag(event, item)}>
        {item.text}
      </List.Item>
    ),
    [drag],
  );
  // TODO: make red border for one second is answer is wrong
  // Render item for the second list
  const emptyItem = useCallback(
    (item: any) => (
      <List.Item
        className={!answered ? 'droppable w-full' : flashBorder ? 'flash-border w-full' : 'w-full'}
        onDragOver={allowDrop}
        onDrop={(event) => drop(event, item)}
      >
        {item.text}
      </List.Item>
    ),
    [answered, allowDrop, flashBorder, drop],
  );

  const handleSubmit = () => {
    setAnswered(true);
    if (targetSentences.map((item) => item.order).join('') === CORRECT_ANSWER) {
      void message.success('Correct answer!');
      setAnswerCorrect(true);
    } else {
      void message.error('Incorrect answer, please try again.');
      setAnswerCorrect(false);
      setFlashBorder(!answerCorrect);
      setTimeout(() => {
        setFlashBorder(false);
        setTargetSentences([
          { id: 0, order: '', text: '' },
          { id: 1, order: '', text: '' },
          { id: 2, order: '', text: '' },
          { id: 3, order: '', text: '' },
        ]);
        setAnswered(false);
        setSourceSentences(arrangeTaskSentences);
      }, 2000);
    }
  };
  const handleNext = () => {
    setAnswered(false);
  };

  return (
    <div className='flex flex-row ml-12 mt-12'>
      <Card
        bordered
        className='bg-lime-200 p-5 shadow-2xl w-2/6'
        title='Listen to the audio and put the sentences in the correct order'
      >
        <audio className='mb-5 w-full' controls>
          <source src={audio3} type='audio/ogg' />
        </audio>
        <div className='flex margin20'>
          <List bordered className='mr-12 bg-lime-50 w-1/2' dataSource={sourceSentences} renderItem={renderItem} />
          <List bordered className='w-1/2' dataSource={targetSentences} renderItem={emptyItem} />
        </div>
        <div className=' ml-auto mr-auto w-2/6 flex'>
          <Button className='ml-3' disabled={sumbitDisabled} onClick={handleSubmit} type='primary'>
            Submit
          </Button>
          <Button block disabled={!answerCorrect} onClick={handleNext}>
            Next
          </Button>
        </div>
      </Card>
    </div>
  );
};

export default ArrangeTask;
