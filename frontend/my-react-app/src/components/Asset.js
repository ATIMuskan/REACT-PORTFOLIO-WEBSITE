import React from 'react';

function Asset({ asset }) {
  const assetValue = asset.quantity * asset.price;

  return (
    <div className="asset">
      <h4>{asset.name} ({asset.symbol})</h4>
      <p>Quantity: {asset.quantity}</p>
      <p>Price per unit: ${asset.price}</p>
      <p>Total value: ${assetValue.toFixed(2)}</p>
    </div>
  );
}

export default Asset;
