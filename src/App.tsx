import React from 'react';
import './App.css';
import {Outlet} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Flag Challenge 2021</h1>
      </header>

      <Outlet />
    </div>
  );
}

export default App;
