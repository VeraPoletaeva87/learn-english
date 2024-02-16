import { Button, Card } from 'antd';
import './InsertTask.css';
import { useEffect, useState } from "react";
import { sentences } from "../data/sentences";

const InsertTask = () => {
  const [answer, setAnswer] = useState('');
  const [option, setOption] = useState('');

  const [wrong, setWrong] = useState(false);
  const [answered, setAnswered] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentWord, setCurrentWord] = useState(sentences[0]);
  
  const allowDrop = (ev) => {
    ev.preventDefault();
}

useEffect(() => {
    setCurrentWord(sentences[currentIndex]);
  }, [currentIndex]);

const drag = (ev) => {
    setOption(ev.currentTarget.innerText);
}

const drop = (ev) => {
    ev.preventDefault();
    if (currentWord.answer !== currentWord.options.indexOf(option)) {
        setWrong(true);
        
    } else {
        setWrong(false);
    }
    setAnswered(true);
    setAnswer(option);
}

const handleNext = () => {
    setAnswered(false);  
    setAnswer('');
    setCurrentIndex(prevIndex => (prevIndex === sentences.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <div className="flex flex-row ml-12 mt-12">
        <Card title='Insert correct word into the box' bordered={true} className="bg-lime-200 p-5 shadow-2xl">
            <div className='flex items-baseline margin20'>
                <div className='mr-2'>{currentWord.part1}</div>
                <div className={!answered ? 'droppable' :
                            wrong ? 'red-color' : 'green-color'} 
                     onDrop={drop} onDragOver={allowDrop}>{answer}</div>
                <div className='ml-2'>{currentWord.part2}</div> 
            </div> 
            <div className="text-yellow-800 flex justify-between w-full ml-2 margin20">
                {currentWord.options?.map((item) => (
                    <div key={item} className="draggable" draggable="true" onDragStart={drag}>
                        {item} 
                    </div>
                ))}
            </div>   
            <div className='button-next'>
                <Button block onClick={handleNext}>Next</Button>
            </div>
             
        </Card>
    </div>
  );
}
  
export default InsertTask;