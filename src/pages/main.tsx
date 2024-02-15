import { Link } from 'react-router-dom';
const Main = () => {
    return (
      <>
      <h2>Welcome to the English Learning App!</h2>
      <nav>
        <ul>
          <li><Link to="/quiz">Start Quiz</Link></li>
          <li><Link to="/wordcards">Word Cards</Link></li>
        </ul>
      </nav>
      </>
    );
  }
  
  export default Main;