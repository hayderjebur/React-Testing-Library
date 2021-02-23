import { useState } from 'react';
import './App.css';

function App() {
  const [color, setColor] = useState('red');
  const [status, setStatus] = useState(false);
  const newButtonColor = color === 'red' ? 'blue' : 'red';
  return (
    <div className='App'>
      <button
        onClick={() => setColor(newButtonColor)}
        style={{ backgroundColor: color }}
        disabled={status}
      >
        Change to {newButtonColor}
      </button>
      <input type='checkbox' onClick={() => setStatus(!status)} />
    </div>
  );
}

export default App;
