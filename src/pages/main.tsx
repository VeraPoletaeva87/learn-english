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
      <div className='block  ml-12 mt-12 w-1/4 bg-lime-50 rounded-xl shadow-xl'>
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