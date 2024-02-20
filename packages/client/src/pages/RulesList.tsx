import type { JSX } from 'react';
import { useCallback } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';

import { List } from 'antd';

import { rules } from '../data/grammar';
import './WordsList.scss';

const RulesList = (): JSX.Element => {
  const navigate = useNavigate();

  const clickHandler = useCallback(
    (id: number) => {
      navigate(`/grammar/${id}`, { state: { id: id } });
    },
    [navigate],
  );

  const renderItem = useCallback(
    (item: Record<string, any>) => <List.Item onClick={() => clickHandler(item.id)}>{item.title}</List.Item>,
    [clickHandler],
  );

  return (
    <div className='flex flex-row ml-12 mt-12'>
      <List
        bordered
        className='mr-12 bg-lime-50'
        dataSource={rules}
        header={<div className='text-lg'>Grammar rules</div>}
        renderItem={renderItem}
      />
      <Outlet />
    </div>
  );
};

export default RulesList;
