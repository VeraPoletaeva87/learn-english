import { useLocation } from 'react-router-dom';

import { Card } from 'antd';
import './wordCard.scss';

const MeaningCard = () => {
  const location = useLocation();
  const currentWord = location.state.item;

  return (
    <Card bordered className='bg-lime-200 p-5 shadow-2xl' title={currentWord.word}>
      <div className='text-base mb-2'>{currentWord.options[currentWord.answer]}</div>
      <div className='text-yellow-800 ml-2'>{currentWord.meaning}</div>
      <div className='text-yellow-800 ml-2 mb-2'>{currentWord.example}</div>
      <div className='tracking-wider'>Synonyms:</div>
      <div className='text-yellow-800 flex justify-between w-full ml-2'>
        {currentWord.synonyms?.map((el: any) => <div key={el}>{el}</div>)}
      </div>
    </Card>
  );
};

export default MeaningCard;
