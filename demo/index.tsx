import { Labeler } from '@/index';
import { createRoot } from 'react-dom/client';
import './reset.css';

const App = () => (
  <div>
    <Labeler />
  </div>
);

const container = document.getElementById('app');

if (container) {
  createRoot(container).render(<App />);
}
