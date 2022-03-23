import React from 'react';
import {Outlet} from "react-router-dom";
import './styles.scss';

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
