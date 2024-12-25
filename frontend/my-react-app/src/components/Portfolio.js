import React, { useState, useEffect } from 'react';
import Asset from './Asset';
import PriceFetcher from './PriceFetcher';
import PortfolioChart from './PortfolioChart';

function Portfolio() {
  const [assets, setAssets] = useState([
    { name: 'Bitcoin', symbol: 'bitcoin', quantity: 1.2, price: 0 },
    { name: 'Ethereum', symbol: 'ethereum', quantity: 5, price: 0 },
  ]);

  const [chartData, setChartData] = useState([]);

  const updatePrice = (symbol, newPrice) => {
    setAssets((prevAssets) =>
      prevAssets.map((asset) =>
        asset.symbol === symbol ? { ...asset, price: newPrice } : asset
      )
    );

    // Update chart data with the new total portfolio value
    const totalValue = assets.reduce((acc, asset) => acc + asset.quantity * asset.price, 0);
    const newChartEntry = {
      time: new Date().toLocaleTimeString(),
      value: totalValue,
    };
    setChartData((prevData) => [...prevData, newChartEntry]);
  };

  return (
    <div className="portfolio">
      <h2>My Portfolio</h2>
      <div className="assets">
        {assets.map((asset, index) => (
          <div key={index}>
            <Asset asset={asset} />
            <PriceFetcher symbol={asset.symbol} setPrice={(price) => updatePrice(asset.symbol, price)} />
          </div>
        ))}
      </div>
      <PortfolioChart data={chartData} />
    </div>
  );
}

export default Portfolio;
