import { Card } from 'antd';
import './finishCard.css';

const FinishCard = ({ totalWords, answeredWords }) => {
const result = (answeredWords / totalWords) * 100;

  return (
    <Card title="Test finished!" bordered={true} className="bg-lime-200 p-5 shadow-2xl">
      <div className="text-base mb-2">{result}%</div> 
      <div className="text-yellow-800 flex justify-between w-full ml-2">{answeredWords} right answers out of {totalWords}</div>  
    </Card>
  );
};

export default FinishCard;