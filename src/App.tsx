import './App.css'
import { Route, Routes } from 'react-router-dom';

import WordCard from './components/wordCard'
import Main from './pages/main';
import WordsList from './pages/WordsList';
import MeaningCard from './components/meaning';
import Layout from './pages/Layout';

function App() {

  return (
    <>
    <Routes>
      <Route path="/" Component={Layout}>
        <Route index Component={Main} />
        <Route path="/quiz" Component={WordCard} />
        <Route path="wordcards" Component={WordsList}>
          <Route path=":id" Component={MeaningCard} />
        </Route>
      </Route>
    </Routes>
    </>
  )
}

export default App
