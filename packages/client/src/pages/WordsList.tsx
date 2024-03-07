import type { JSX } from 'react';
import { useCallback, useEffect, useState } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';

import { List } from 'antd';

import './WordsList.scss';

const WordsList = (): JSX.Element => {
  const navigate = useNavigate();

  const [words, setWords] = useState([]);

  useEffect(() => {
    const url = 'http://localhost:3000/api/words';
    fetch(url)
      .then(async (response) => {
        const data = await response.json();
        setWords(data);
      })
      .catch(() => {});
  }, []);

  const clickHandler = useCallback(
    (item: any) => {
      navigate(`/wordcards/${item._id}`, { state: { item: item } });
    },
    [navigate],
  );

  const renderItem = useCallback(
    (item: Record<string, any>) => <List.Item onClick={() => clickHandler(item)}>{item.word}</List.Item>,
    [clickHandler],
  );

  return (
    <div className='flex flex-row ml-12 mt-12'>
      <List
        bordered
        className='mr-12 bg-lime-50'
        dataSource={words}
        header={<div className='text-lg'>Words list</div>}
        renderItem={renderItem}
      />
      <Outlet />
    </div>
  );
};

export default WordsList;
