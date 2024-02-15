import { Outlet, useNavigate } from "react-router-dom";
import { wordsAndMeanings } from "../data/data";
import './WordList.css';

const WordsList = () => {
  const navigate = useNavigate();

  const clickHandler = (id: number) => {
    navigate(`/wordcards/${id}`, { state: { id: id } });
  };

  return (
    <div className="flex">
      <div className='list'>
        {wordsAndMeanings?.map((item) => (
          <div key={item.word} onClick={() => clickHandler(item.id)}>
             {item.word}
          </div>
        ))}
      </div>
      <Outlet />
    </div>
  );
}
  
export default WordsList;