import { useNavigate } from "react-router-dom";
import { wordsAndMeanings } from "../data/data";

const WordsList = () => {
  const navigate = useNavigate();

  const clickHandler = (id: number) => {
    navigate(`/details/${id}`, { state: { id: id } });
  };

  return (
    <>
      <div className='flex-row'>
        {wordsAndMeanings?.map((item) => (
          <div key={item.word} onClick={() => clickHandler(item.id)}>
             {item.word}
          </div>
        ))}
      </div>
    </>
  );
}
  
export default WordsList;