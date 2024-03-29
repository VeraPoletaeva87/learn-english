import quiz from './../assets/quiz.jpg';
import vocabulary from './../assets/vocabulary.png';
import insert from './../assets/insert.png';
import grammar from './../assets/grammar.jpg';
import { List, Avatar } from 'antd';
const Main = () => {
    const data = [
      {
        title: "Rules",
        link: "/grammar",
        description: 'Learn grammar rules!',
        image: grammar
    },
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
        },
        {
          title: "Vocabulary Task",
          link: "/insertTask",
          description: 'Practice using words with insert task!',
          image: insert
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