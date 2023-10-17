import React from 'react';
import { FaMoneyBillWave, FaShoppingCart, FaBalanceScale, FaChartLine } from 'react-icons/fa';

const EarningsColumn = () => {
  const containerStyle = {
    display: 'flex',
    justifyContent: 'space-between', // Adjust as needed
    margin: '20px', // Add margin for spacing
  };

  const cardStyle = {
    width: '300px',
    padding: '20px',
    border: '1px solid transparent',
    borderRadius: '8px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between', // Updated to space between columns
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)', // Add box shadow here
  };

  const circleStyle = {
    width: '50px',
    height: '50px',
    borderRadius: '50%',
    backgroundColor: 'lightgray',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  };

  const symbolStyle = {
    fontSize: '24px',
  };

  const contentStyle = {
    marginLeft: '20px',
    textAlign: 'left',
    flex: 1, // Allow content to take remaining space
  };

  return (
    <div style={containerStyle}>
      {/* Earnings Card */}
      <div style={cardStyle}>
        <div style={circleStyle}>
          <FaMoneyBillWave style={symbolStyle} />
        </div>
        <div style={contentStyle}>
          <div className="text-xs text-gray-400 font-semibold mb-2">Earnings</div>
          <div className="text-2xl font-bold mb-2">$500</div>
          <div className="flex items-center">
            <span className="text-green-500 text-sm ">&#8593; 37.8%</span>
            <span className="text-sm  text-black">This Month</span>
          </div>
        </div>
      </div>

      {/* Orders Card */}
      <div style={cardStyle}>
        <div style={circleStyle}>
          <FaShoppingCart style={symbolStyle} />
        </div>
        <div style={contentStyle}>
          <div className="text-xs text-gray-400 font-semibold mb-2">Orders</div>
          <div className="text-2xl font-bold mb-2">$300</div>
          <div className="flex items-center">
            <span className="text-red-500 text-sm ">&#8595; 2%</span>
            <span className="text-sm  text-black">This Month</span>
          </div>
        </div>
      </div>

      {/* Balance Card */}
      <div style={cardStyle}>
        <div style={circleStyle}>
          <FaBalanceScale style={symbolStyle} />
        </div>
        <div style={contentStyle}>
          <div className="text-xs text-gray-400 font-semibold mb-2">Balance</div>
          <div className="text-2xl font-bold mb-2">$1000</div>
          <div className="flex items-center">
            <span className="text-red-500 text-sm ">&#8595; 2%</span>
            <span className="text-sm  text-black">This Month</span>
          </div>
        </div>
      </div>

      {/* Total Sales Card */}
      <div style={cardStyle}>
        <div style={circleStyle}>
          <FaChartLine style={symbolStyle} />
        </div>
        <div style={contentStyle}>
          <div className="text-xs  text-gray-400 font-semibold mb-2">Total Sales</div>
          <div className="text-2xl font-bold mb-2">$1200</div>
          <div className="flex items-center">
            <span className="text-green-500 text-sm ">&#8593;11%</span>
            <span className="text-sm  text-black">This Month</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EarningsColumn;

