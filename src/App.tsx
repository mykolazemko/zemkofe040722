import React from 'react';
import logo from './logo.svg';
import './App.css';
import { TimeCountPage } from './Components/TimeCountPage';
import { updateChart } from './Redux/ChartSlice';

function App() {
  
  return (
    <div className="App">
      <header className="App-header">
        <TimeCountPage />        
      </header>
    </div>
  );
}

export default App;
