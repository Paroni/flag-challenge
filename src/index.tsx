import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import TimeTrial from "./timeTrial/TimeTrial";
import Home from "./Home";
import Author from "./Author";
import Leaderboards from "./Leaderboards";
import PageNotFound from "./PageNotFound";
import About from "./About";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />} >
          <Route index element={<Home />} />
          <Route path="challenge" element={<TimeTrial />} />
          <Route path="leaderboards" element={<Leaderboards />} />
          <Route path="about" element={<About />} />
          <Route path="author" element={<Author />} />
          <Route path="*" element={<PageNotFound />} />
        </Route>
      </Routes>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
