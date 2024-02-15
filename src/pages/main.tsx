import { Link } from 'react-router-dom';
import './main.css';
const Main = () => {
    return (
      <div className='block'>
      <h2>Welcome to the English Learning App!</h2>
      <nav>
        <ul>
          <li><Link to="/quiz">Start Quiz</Link></li>
          <li><Link to="/wordcards">Word Cards</Link></li>
        </ul>
      </nav>
      </div>
    );
  }
  
  export default Main;