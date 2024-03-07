import './testProgress.scss';
import type { JSX } from 'react';

interface WordTestProgressProps {
  readonly totalWords: number;
  readonly answeredWords: number;
}

const WordTestProgress = ({ totalWords, answeredWords }: WordTestProgressProps): JSX.Element => {
  const progressPercentage = (answeredWords / totalWords) * 100;
  const pendingWords = totalWords - answeredWords;

  return (
    <div className='word-test-progress'>
      <div className='progress-bar'>
        <div className='progress-bar-green' style={{ width: `${progressPercentage}%` }} />
        <div className='progress-bar-yellow' style={{ width: `${100 - progressPercentage}%` }} />
      </div>
      <div className='progress-info'>
        <p className='text-xs'>
          Answers given: {answeredWords} / {totalWords}
        </p>
        <p className='text-xs'>Pending: {pendingWords}</p>
      </div>
    </div>
  );
};

export default WordTestProgress;
