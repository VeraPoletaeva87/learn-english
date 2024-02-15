import './App.css'
import { Route, Routes } from 'react-router-dom';

import WordCard from './components/wordCard'
import Main from './pages/main';
import WordsList from './pages/WordsList';
import MeaningCard from './components/meaning';

function App() {

  return (
    <>
    <Routes>
      <Route path="/" Component={Main} />
      <Route path="/quiz" Component={WordCard} />
      <Route path="/wordcards" Component={WordsList} />
      <Route path="/details/:id" Component={MeaningCard} />
    </Routes>
    </>
  )
}

export default App
