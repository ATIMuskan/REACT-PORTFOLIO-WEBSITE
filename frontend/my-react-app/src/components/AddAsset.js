import React, { useState } from 'react';

function AddAsset({ onAddAsset }) {
  const [name, setName] = useState('');
  const [symbol, setSymbol] = useState('');
  const [quantity, setQuantity] = useState('');
  const [price, setPrice] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const newAsset = { name, symbol, quantity: parseFloat(quantity), price: parseFloat(price) };
    onAddAsset(newAsset);
    setName('');
    setSymbol('');
    setQuantity('');
    setPrice('');
  };

  return (
    <div className="add-asset">
      <h3>Add New Asset</h3>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Asset Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          />
          <input
            type="text"
            placeholder="Asset Symbol"
            value={symbol}
            onChange={(e) => setSymbol(e.target.value)}
          />
          <input
            type="number"
            placeholder="Quantity"
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
          />
          <input
            type="number"
            placeholder="Price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
          <button type="submit">Add Asset</button>
        </form>
      </div>
    );
}

export default AddAsset;
