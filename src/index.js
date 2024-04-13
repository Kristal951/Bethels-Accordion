import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import Accordion from './App';
import 'bootstrap/dist/css/bootstrap.css';
import { Button } from 'react-bootstrap';
// import reportWebVitals from './reportWebVitals';

// const Element = (
  <div title="Outer div">
  <h1>Hello World!</h1>
  </div>
  // );

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Accordion />
    {/* <Element /> */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
