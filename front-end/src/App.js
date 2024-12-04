import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [message, setMessage] = useState('');

  useEffect(() => {
    fetch('/api/check') // Proxy will handle routing to the backend
      .then((response) => response.json())
      .then((data) => {
        setMessage(data.message); // Update with backend response
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
        setMessage('Failed to connect to backend.');
      });
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Frontend-Backend Connection Test</h1>
        <p>{message || 'Connecting to backend...'}</p>
      </header>
    </div>
  );
}

export default App;
