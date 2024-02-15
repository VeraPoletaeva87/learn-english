  import { wordsAndMeanings } from "../data/data";
  import {useLocation} from 'react-router-dom';
  import { Card } from 'antd';
  import './wordCard.css';
  
  const MeaningCard = () => {
    const location = useLocation();
    const id  = location.state.id - 1;
      const currentWord = wordsAndMeanings[id];
    
      return (
        <>
            <Card title={currentWord.word} bordered={true} style={{ width: 300 }}>
                <div>{currentWord.options[currentWord.answer]}</div> 
                <div>{currentWord.meaning}</div> 
                <div>Synonyms:</div> 
                {currentWord.synonyms?.map((item) => (
                    <div key={item}>
                        {item}
                    </div>
                ))}
            </Card>
        </>
      );
    };
    
    export default MeaningCard;  