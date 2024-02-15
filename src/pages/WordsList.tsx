import { Outlet, useNavigate } from "react-router-dom";
import { wordsAndMeanings } from "../data/data";
import { List } from 'antd';
import './WordsList.css';

const WordsList = () => {
  const navigate = useNavigate();

  const clickHandler = (id: number) => {
    navigate(`/wordcards/${id}`, { state: { id: id } });
  };

  return (
    <div className="flex flex-row">
      <List
      header={<div>Words list</div>}
      bordered
      dataSource={wordsAndMeanings}
      renderItem={(item) => (
        <List.Item onClick={() => clickHandler(item.id)}>
          {item.word}
        </List.Item>
      )}
    />
      <Outlet />
    </div>
  );
}
  
export default WordsList;