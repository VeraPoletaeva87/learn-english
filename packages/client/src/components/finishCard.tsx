import type { JSX } from 'react';

import { Card } from 'antd';
import './finishCard.scss';

interface FinishCardProps {
  readonly totalWords: number;
  readonly answeredWords: number;
}

const FinishCard = ({ totalWords, answeredWords }: FinishCardProps): JSX.Element => {
  const result = (answeredWords / totalWords) * 100;
  return (
    <Card bordered className='bg-lime-200 p-5 shadow-2xl' title='Test finished!'>
      <div className='text-base mb-2'>{result}%</div>
      <div className='text-yellow-800 flex justify-between w-full ml-2'>
        {answeredWords} right answers out of {totalWords}
      </div>
    </Card>
  );
};

export default FinishCard;
