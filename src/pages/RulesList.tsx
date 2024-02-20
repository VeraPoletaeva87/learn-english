import { Outlet, useNavigate } from "react-router-dom";
import { rules } from "../data/grammar";
import { List } from 'antd';
import './WordsList.css';

const RulesList = () => {
  const navigate = useNavigate();

  const clickHandler = (id: number) => {
    navigate(`/grammar/${id}`, { state: { id: id } });
  };

  return (
    <div className="flex flex-row ml-12 mt-12">
      <List className="mr-12 bg-lime-50"
      header={<div className="text-lg">Grammar rules</div>}
      bordered
      dataSource={rules}
      renderItem={(item) => (
        <List.Item onClick={() => clickHandler(item.id)}>
          {item.title}
        </List.Item>
      )}
    />
      <Outlet />
    </div>
  );
}
  
export default RulesList;