import './testProgress.css';

const WordTestProgress = ({ totalWords, answeredWords }) => {
  const progressPercentage = (answeredWords / totalWords) * 100;
  const pendingWords = totalWords - answeredWords;

  return (
    <div className="word-test-progress">
      <div className="progress-bar">
        <div
          className="progress-bar-green"
          style={{ width: `${progressPercentage}%` }}
        ></div>
        <div
          className="progress-bar-yellow"
          style={{ width: `${100 - progressPercentage}%` }}
        ></div>
      </div>
      <div className="progress-info">
        <p className='text-xs'>
          Answers given: {answeredWords} / {totalWords}
        </p>
        <p className='text-xs'>Pending: {pendingWords}</p>
      </div>
    </div>
  );
};

export default WordTestProgress;