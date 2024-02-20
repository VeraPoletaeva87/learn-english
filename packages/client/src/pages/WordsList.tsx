import type { JSX } from 'react';
import { useCallback } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';

import { List } from 'antd';

import { wordsAndMeanings } from '../data/data';

import './WordsList.scss';

const WordsList = (): JSX.Element => {
  const navigate = useNavigate();

  const clickHandler = useCallback(
    (id: number) => {
      navigate(`/wordcards/${id}`, { state: { id: id } });
    },
    [navigate],
  );

  const renderItem = useCallback(
    (item: Record<string, any>) => <List.Item onClick={() => clickHandler(item.id)}>{item.word}</List.Item>,
    [clickHandler],
  );

  return (
    <div className='flex flex-row ml-12 mt-12'>
      <List
        bordered
        className='mr-12 bg-lime-50'
        dataSource={wordsAndMeanings}
        header={<div className='text-lg'>Words list</div>}
        renderItem={renderItem}
      />
      <Outlet />
    </div>
  );
};

export default WordsList;
