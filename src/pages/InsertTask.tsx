import { Card } from 'antd';
import './InsertTask.css';
import { useState } from "react";
import { sentences } from "../data/sentences";

const InsertTask = () => {
  const currentWord = sentences[0];
  const [answer, setAnswer] = useState('');
  const [option, setOption] = useState('');

  const [wrong, setWrong] = useState(false);
  const [answered, setAnswered] = useState(false);
  
  const allowDrop = (ev) => {
    ev.preventDefault();
}

const drag = (ev) => {
    setOption(ev.currentTarget.innerText);
}

const drop = (ev) => {
    ev.preventDefault();
    if (currentWord.answer !== currentWord.options.indexOf(option)) {
        setWrong(true);
        
    }
    setAnswered(true);
    setAnswer(option);
}
  return (
    <div className="flex flex-row ml-12 mt-12">
        <Card title='Insert correct word into the box' bordered={true} className="bg-lime-200 p-5 shadow-2xl">
            <div className="text-yellow-800 flex justify-between w-full ml-2">
                {currentWord.options?.map((item) => (
                    <div key={item} className="draggable" draggable="true" onDragStart={drag}>
                        {item} 
                    </div>
                ))}
            </div> 
            <div className='flex items-baseline'>
                <div className='mr-2'>{currentWord.part1}</div>
                <div className={!answered ? 'droppable' :
                            wrong ? 'red-color' : 'green-color'} 
                     onDrop={drop} onDragOver={allowDrop}>{answer}</div>
                <div className='ml-2'>{currentWord.part2}</div> 
            </div>   
        </Card>
    </div>
  );
}
  
export default InsertTask;