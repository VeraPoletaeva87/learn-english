import { createRoot } from 'react-dom/client';

import App from './App';
import './main.scss';

const root = createRoot(document.getElementById('root') as HTMLDivElement);

root.render(<App />);
