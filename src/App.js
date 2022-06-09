import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [ExchangeRates, setExchangeRates] = useState([])

  useEffect(() => {
    fetch('https://www.floatrates.com/daily/kgs.json') //make http request
      .then(response => response.json()) //convert string to javascript object
      .then(data => setExchangeRates(data)); 
  }, [setExchangeRates])

  const output = Object.keys(ExchangeRates);

  return (
    <div className="App">
    {output}

    </div>
  );
}

export default App;
