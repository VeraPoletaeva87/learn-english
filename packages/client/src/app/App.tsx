import './App.css';
import type { JSX } from 'react';
import { StrictMode } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

// TODO: add lazy loading for components
import GrammarCard from '../components/GrammarCard';
import MeaningCard from '../components/meaning';
import WordCard from '../components/wordCard';
import InsertTask from '../pages/InsertTask';
import Layout from '../pages/Layout';
import Main from '../pages/main';
import RulesList from '../pages/RulesList';
import WordsList from '../pages/WordsList';

const App = (): JSX.Element => {
  // TODO: utilize useRoutes hook from 'react-router-dom package
  return (
    <StrictMode>
      <BrowserRouter>
        <Routes>
          <Route Component={Layout} path='/'>
            <Route Component={Main} index />
            <Route Component={WordCard} path='/quiz' />
            <Route Component={InsertTask} path='/insertTask' />
            <Route Component={WordsList} path='wordcards'>
              <Route Component={MeaningCard} path=':id' />
            </Route>
            <Route Component={RulesList} path='grammar'>
              <Route Component={GrammarCard} path=':id' />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </StrictMode>
  );
};

export default App;
