import { useEffect, useState } from 'react';
import './App.css';
import ExchangeRate from "./ExchangeRate";
function App() {
  const [ExchangeRates, setExchangeRates] = useState([])

  useEffect(() => {
    fetch('https://www.floatrates.com/daily/kgs.json') //make http request
      .then(response => response.json()) //convert string to javascript object
      .then(data => setExchangeRates(data)); 
  }, [setExchangeRates])

  const output = Object
  .values(ExchangeRates)
  .map(currency => <ExchangeRate from="KGS" to={currency.code} rate={currency.inverseRate}/>);

  return (
    <div className="App">
    {output}
    </div>
  );
}

export default App;
