import './main.css';
import quiz from './../assets/quiz.jpg';
import vocabulary from './../assets/vocabulary.png';
import { List, Avatar } from 'antd';
const Main = () => {
    const data = [
        {
            title: "Start Quiz",
            link: "/quiz",
            description: 'Check your knowledge with the quiz!',
            image: quiz
        },
        {
            title: "Learn new words",
            link: "/wordcards",
            description: 'Learn new words with dictionary!',
            image: vocabulary
        }
    ]
    return (
      <div className='block'>
      <h2>Welcome to the English Learning App!</h2>
      <List
        itemLayout="horizontal"
        dataSource={data}
        renderItem={(item) => (
        <List.Item>
            <List.Item.Meta
                avatar={<Avatar size="large" src={item.image} />}
                title={<a href={item.link}>{item.title}</a>}
                description={item.description}
            />
      </List.Item>
    )}
  />
      </div>
    );
  }
  
  export default Main;