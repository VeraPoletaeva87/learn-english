import type { JSX } from 'react';
import { useCallback } from 'react';

import { Avatar, List } from 'antd';
import grammar from 'assets/grammar.jpg';
import insert from 'assets/insert.png';
import quiz from 'assets/quiz.jpg';
import vocabulary from 'assets/vocabulary.png';

const data = [
  {
    title: 'Rules',
    link: '/grammar',
    description: 'Learn grammar rules!',
    image: grammar,
  },
  {
    title: 'Start Quiz',
    link: '/quiz',
    description: 'Check your knowledge with the quiz!',
    image: quiz,
  },
  {
    title: 'Learn new words',
    link: '/wordcards',
    description: 'Learn new words with dictionary!',
    image: vocabulary,
  },
  {
    title: 'Vocabulary Task',
    link: '/insertTask',
    description: 'Practice using words with insert task!',
    image: insert,
  },
  {
    title: 'Audio Task',
    link: '/audioTask',
    description: 'Practice listening with audio task!',
    image: insert,
  },
];

const Main = (): JSX.Element => {
  const renderItem = useCallback(
    // TODO: define a proper type for item
    (item: Record<string, any>) => (
      <List.Item>
        <List.Item.Meta
          avatar={<Avatar size='large' src={item.image} />}
          description={item.description}
          title={<a href={item.link}>{item.title}</a>}
        />
      </List.Item>
    ),
    [],
  );

  return (
    <div className='block  ml-12 mt-12 w-1/4 bg-lime-50 rounded-xl shadow-xl'>
      <List dataSource={data} itemLayout='horizontal' renderItem={renderItem} />
    </div>
  );
};

export default Main;
