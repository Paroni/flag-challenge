import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import TimeTrial from "./timeTrial/TimeTrial";
import Home from "./Home";
import Author from "./Author";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />} >
          <Route index element={<Home />} />
          <Route path="challenge" element={<TimeTrial />} />
          <Route path="author" element={<Author />} />
          <Route
            path="*"
            element={
              <div>
                <div>
                  <p>There's nothing here!</p>
                </div>
                <div>
                  <Link to={"/"} >
                    Front Page
                  </Link>
                </div>
              </div>
            }
          />
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
