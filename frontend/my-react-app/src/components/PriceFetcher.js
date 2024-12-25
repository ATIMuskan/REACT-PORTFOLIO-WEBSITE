import axios from 'axios';
import React, { useState, useEffect } from 'react';

const PriceFetcher = ({ symbol, setPrice }) => {
  useEffect(() => {
    const fetchPrice = async () => {
      try {
        const response = await axios.get(`https://api.coingecko.com/api/v3/simple/price?ids=${symbol}&vs_currencies=usd`);
        setPrice(response.data[symbol]?.usd || 0); // Update the price state
      } catch (error) {
        console.error('Error fetching price:', error);
      }
    };

    fetchPrice();
    const intervalId = setInterval(fetchPrice, 60000); // Fetch price every 1 minute

    return () => clearInterval(intervalId); // Cleanup on component unmount
  }, [symbol, setPrice]);

  return null;
};

export default PriceFetcher;
