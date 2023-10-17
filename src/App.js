import React from 'react';
import './App.css';
import Dashboard from './components/Dashboard';
import SecondColumn from './Pages/SecondColumn';

const App = () => {
  return (
    <div className="min-h-screen flex">
      {/* Fixed background for Dashboard */}
      <div className="bg-slate-950 text-white w-1/5 p-4">
        <Dashboard />
      </div>

      {/* Content below Dashboard */}
      <div className="flex-1 bg-white w-4/5 p-4">
        <SecondColumn />
      </div>
    </div>
  );
};

export default App;

