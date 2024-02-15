  import { wordsAndMeanings } from "../data/data";
  import {useLocation} from 'react-router-dom';
  import './wordCard.css';
  
  const MeaningCard = () => {
    const location = useLocation();
    const id  = location.state.id - 1;
      const currentWord = wordsAndMeanings[id];
    
      return (
        <div className="word-card">
              <h2>{currentWord.word}</h2>
             <div>{currentWord.options[currentWord.answer]}</div> 
             <div>{currentWord.meaning}</div> 
             <div>Synonyms:</div> 
             {currentWord.synonyms?.map((item) => (
                <div key={item}>
                    {item}
                </div>
        ))}
        </div>
      );
    };
    
    export default MeaningCard;  