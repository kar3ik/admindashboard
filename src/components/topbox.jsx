import React from 'react';
import { FaSearch } from 'react-icons/fa';

const TopBox = () => {
  const boxStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '20px',
    background: 'white',
    color: 'black',
  };

  const searchBoxStyle = {
    display: 'flex',
    alignItems: 'center',
    background: 'rgba(255, 255, 255, 0.2)',
    borderRadius: '8px',
    padding: '8px',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)', // Adding box shadow for transparency effect
  };

  const searchInputStyle = {
    border: 'none',
    background: 'transparent',
    marginLeft: '8px',
    color: 'black',
    outline: 'none',
  };

  return (
    <div style={boxStyle}>
      <div className='font-semibold'>
       Hello virat <span role="img" aria-label="Hi">👋</span> 
      </div>
      <div style={searchBoxStyle}>
        <FaSearch />
        <input
          type="text"
          placeholder="Search..."
          style={searchInputStyle}
        />
      </div>
    </div>
  );
};

export default TopBox;
