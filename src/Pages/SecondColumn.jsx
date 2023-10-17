import React from 'react';
import TopBox from '../components/topbox';
import EarningsColumn from '../components/EarningsColumn';
import GraphTotalColumn from '../components/GraphTotalColumn';
import ProductSell from '../components/ProductSell';

const SecondColumn = () => {
  const containerStyle = {
    display: 'flex',
    flexDirection: 'column', // Ensure elements are laid out in a column
    gap: '10px', // Reduce the gap to 10 pixels between each section
    alignItems: 'stretch', // Ensure all items stretch to the same width
  };

  return (
    <div style={containerStyle}>
      <TopBox />
      <EarningsColumn />
      <GraphTotalColumn />
      <ProductSell />
    </div>
  );
};

export default SecondColumn;


