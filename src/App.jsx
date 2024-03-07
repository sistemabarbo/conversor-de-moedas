import { useState, useEffect } from 'react'
//import reactLogo from './assets/react.svg'
//import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [resultado, setResultado] = useState(0);
  const [moedaFrom, setMoedaFrom] = useState("BRL");
  const[moedaTo, setMoedaTo] = useState("USD");
  const [amount, setAmount] = useState(1);

  useEffect(function () {
 async function getValues() {
  const res = await fetch(`https://api.frankfurter.app/latest?amount=${amount}&from=${moedaFrom}&to=${moedaTo}`);
  const data = await res.json();
  setResultado(data.rates[moedaTo]);
 }
 getValues();

  },[moedaFrom, moedaTo, amount]);

//`https://api.frankfurter.app/latest?amount=100&from=EUR&to=USD`
  return (
    <>
    
      <div className="div">
    
      
      <div className="select">
        <h2>Escolha para qual tipo de moeda você quer converter.</h2>
        <h4>De:</h4>
      <select name="moeda-1" id="moeda-1" value={moedaFrom} onChange={(e) => setMoedaFrom(e.target.value)}>
        <option value="BRL">BRL</option>
        <option value="USD">USD</option>
        <option value="EUR">EUR</option>
        <option value="CAD">CAD</option>
      </select>
      <h4>para:</h4>
      <select name="moeda-2" id="moeda-2" value={moedaTo} onChange={(e) => setMoedaTo(e.target.value)}>
        <option value="BRL">BRL</option>
        <option value="USD">USD</option>
        <option value="EUR">EUR</option>
        <option value="CAD">CAD</option>
      </select>
      </div>
      <h2>Digite o valor que você quer converter.</h2>
      <input type="text" value={amount} onChange={(e) => setAmount(Number(e.target.value))} />
      <h2>Resultado:</h2>
      <p id="resultado">{resultado}</p>
      
      </div>
    
    </>
  )
}

export default App
