import { useCallback, useState } from 'react';

import { Button, Card, List } from 'antd';

import audio3 from '../data/audioTask3.ogg';
import { arrangeTaskSentences } from '../data/sentences';

const ArrangeTask = () => {
  //const [wrong, setWrong] = useState(false);
  const [answered, setAnswered] = useState(false);
  const [sourceSentences, setSourceSentences] = useState(arrangeTaskSentences);
  const [targetSentences, setTargetSentences] = useState([
    { id: 0, text: '' },
    { id: 1, text: '' },
    { id: 2, text: '' },
    { id: 3, text: '' },
  ]);

  const drag = useCallback((event: any) => {
    event.dataTransfer.setData('text/plain', event.target.innerText);
  }, []);

  const allowDrop = useCallback((event: any) => {
    event.preventDefault();
  }, []);

  const drop = useCallback(
    (event: any, item: any) => {
      event.preventDefault();
      const data = event.dataTransfer.getData('text/plain');
      const objIndex = targetSentences.findIndex((elem) => elem.id === item.id);

      // If the object with the specified id is found, update its text property
      if (objIndex !== -1) {
        targetSentences[objIndex].text = data;
      }
      setTargetSentences(targetSentences);
      setSourceSentences(sourceSentences.filter((sentence) => sentence.text !== data));
    },
    [sourceSentences, targetSentences],
  );

  // Render item for the first list
  const renderItem = useCallback(
    (item: any) => (
      <List.Item className='draggable w-full' draggable='true' onDragStart={drag}>
        {item.text}
      </List.Item>
    ),
    [drag],
  );

  // Render item for the second list
  const emptyItem = useCallback(
    (item: any) => (
      <List.Item
        // className={!answered ? 'droppable w-full' : wrong ? 'red-color w-full' : 'green-color w-full'}
        className={!answered ? 'droppable w-full' : 'w-full'}
        onDragOver={allowDrop}
        onDrop={(event) => drop(event, item)}
      >
        {item.text}
      </List.Item>
    ),
    [answered, allowDrop, drop],
  );

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
        <div className='button-next'>
          <Button block onClick={handleNext}>
            Next
          </Button>
        </div>
      </Card>
    </div>
  );
};

export default ArrangeTask;
