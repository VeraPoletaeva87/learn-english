import type { JSX } from 'react';
import { NavLink } from 'react-router-dom';

import type { MenuProps } from 'antd';
import { Button, Dropdown, Space } from 'antd';
import Logo from 'assets/logo.jpg';

const Header = (): JSX.Element => {
  const items: MenuProps['items'] = [
    {
      key: '1',
      label: <NavLink to='/'>Main page</NavLink>,
    },
    {
      key: '2',
      label: <NavLink to='/grammar'>Grammar rules</NavLink>,
    },
    {
      key: '3',
      label: <NavLink to='/quiz'>Quiz</NavLink>,
    },
    {
      key: '4',
      label: <NavLink to='/insertTask'>Vocabulary task</NavLink>,
    },
    {
      key: '5',
      label: <NavLink to='/wordcards'>Dictionary</NavLink>,
    },
  ];
  return (
    <div className='bg-lime-50 h-14 flex'>
      <img className=' mx-3' src={Logo} />
      <div className='font-sans antialiased text-xl tracking-wide text-amber-700 mr-10 top'>Grammar Fox</div>
      <Space className='relative top-12' direction='vertical'>
        <Space wrap>
          <Dropdown menu={{ items }} placement='bottomLeft'>
            <Button>Go to...</Button>
          </Dropdown>
        </Space>
      </Space>
    </div>
  );
};

export default Header;
