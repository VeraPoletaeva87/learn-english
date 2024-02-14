import './finishCard.css';

const FinishCard = ({ totalWords, answeredWords }) => {
const result = (answeredWords / totalWords) * 100;

  return (
    <div className="">
        <div>Test finished!</div>
        <h2>{result}%</h2>
        <div>{answeredWords} right answers out of {totalWords}</div>
    </div>
  );
};

export default FinishCard;