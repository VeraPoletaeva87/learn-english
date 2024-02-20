import { useLocation } from 'react-router-dom';

import { Card } from 'antd';

import { rules } from '../data/grammar';
import './wordCard.scss';

const GrammarCard = () => {
  const location = useLocation();
  const id = location.state.id - 1;
  const currentRule = rules[id];

  return (
    <Card bordered className='bg-lime-200 p-5 shadow-2xl w-1/2' title={currentRule.title}>
      <div className='text-base mb-2 text-justify font-thin'>{currentRule.rule}</div>
      <div className='tracking-wider font-semibold'>Example:</div>
      <div className='text-yellow-800 ml-2'>{currentRule.example}</div>
      <div className='text-slate-600 ml-2 mb-2'>{currentRule.explanation}</div>
    </Card>
  );
};

export default GrammarCard;
