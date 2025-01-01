import { useState, useEffect } from 'react';

function App() {
  const [phrase, setPhrase] = useState('Loading...');

  useEffect(() => {
    // Replace this URL with the actual URL of your Express server on Railway.
    // e.g., https://my-express-server.up.railway.app
    fetch(`${import.meta.env.VITE_API_URL}`)
      .then(res => res.text())
      .then(text => setPhrase(text))
      .catch(err => {
        console.error(err);
        setPhrase('Error fetching phrase');
      });
  }, []);

  return (
    <div>
      <h1>Vite + React + Railway</h1>
      <p>{phrase}</p>
    </div>
  );
}

export default App;
