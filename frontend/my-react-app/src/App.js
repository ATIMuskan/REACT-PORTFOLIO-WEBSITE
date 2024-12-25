import React, { useState } from 'react';
import Portfolio from './components/Portfolio';
import AddAsset from './components/AddAsset';
import './App.css';

function App() {
  const [assets, setAssets] = useState([
    { name: 'Bitcoin', symbol: 'BTC', quantity: 1.2, price: 50000 },
    { name: 'Ethereum', symbol: 'ETH', quantity: 5, price: 4000 },
  ]);

  const addAsset = (asset) => {
    setAssets((prevAssets) => [...prevAssets, asset]);
  };

  return (
    <div className="App">
      <h1>Portfolio Tracker App</h1>
      <Portfolio assets={assets} />
      <AddAsset onAddAsset={addAsset} />
    </div>
  );
}

export default App;
