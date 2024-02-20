import { useLocation } from 'react-router-dom';

import { Card } from 'antd';

import { wordsAndMeanings } from '../data/data';
import './wordCard.scss';

const MeaningCard = () => {
  const location = useLocation();
  const id = location.state.id - 1;
  const currentWord = wordsAndMeanings[id];

  return (
    <Card bordered className='bg-lime-200 p-5 shadow-2xl' title={currentWord.word}>
      <div className='text-base mb-2'>{currentWord.options[currentWord.answer]}</div>
      <div className='text-yellow-800 ml-2'>{currentWord.meaning}</div>
      <div className='text-yellow-800 ml-2 mb-2'>{currentWord.example}</div>
      <div className='tracking-wider'>Synonyms:</div>
      <div className='text-yellow-800 flex justify-between w-full ml-2'>
        {currentWord.synonyms?.map((item) => <div key={item}>{item}</div>)}
      </div>
    </Card>
  );
};

export default MeaningCard;
