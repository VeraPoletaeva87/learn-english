import { useLocation } from 'react-router-dom';

import { Card, Carousel } from 'antd';

import { rules } from '../data/grammar';
import './GrammarCard.scss';

export interface Rule {
  id: number;
  parent: number | null;
  title: string;
  rule: string;
  example: string;
  explanation: string;
}

const GrammarCard = () => {
  const location = useLocation();
  const id = location.state.id;
  const currentRule = rules.find((item) => item.id === id);
  const rulesPages: Rule[] = rules.filter((item) => item.parent === id);
  const ruleSecond = rulesPages[0];
  const ruleThird = rulesPages[1];

  const onChange = (currentSlide: number) => {
    console.log(currentSlide);
  };

  return (
    <Carousel afterChange={onChange} className='carousel'>
      <div>
        <Card bordered className='bg-lime-200 p-5 shadow-2xl content' title={currentRule?.title}>
          <div className='text-base mb-2 text-justify font-thin'>{currentRule?.rule}</div>
          <div className='tracking-wider font-semibold'>Example:</div>
          <div className='text-yellow-800 ml-2'>{currentRule?.example}</div>
          <div className='text-slate-600 ml-2 mb-2'>{currentRule?.explanation}</div>
        </Card>
      </div>
      <div>
        <Card bordered className='bg-lime-200 p-5 shadow-2xl content' title={ruleSecond?.title}>
          <div className='text-base mb-2 text-justify font-thin'>{ruleSecond?.rule}</div>
          <div className='tracking-wider font-semibold'>Example:</div>
          <div className='text-yellow-800 ml-2'>{ruleSecond?.example}</div>
          <div className='text-slate-600 ml-2 mb-2'>{ruleSecond?.explanation}</div>
        </Card>
      </div>
      <div>
        <Card bordered className='bg-lime-200 p-5 shadow-2xl content' title={ruleThird.title}>
          <div className='text-base mb-2 text-justify font-thin'>{ruleThird.rule}</div>
          <div className='tracking-wider font-semibold'>Example:</div>
          <div className='text-yellow-800 ml-2'>{ruleThird.example}</div>
          <div className='text-slate-600 ml-2 mb-2'>{ruleThird.explanation}</div>
        </Card>
      </div>
    </Carousel>
  );
};

export default GrammarCard;
