import React from 'react';
import './App.css';
import Header from './Header';
import Home from './Home';
import Checkout from './Checkout';
import {BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Fragment } from 'react';

function App() {
  return (
    //BEM
    <Router>
    <div className="app">
    <Header />
      <Routes>
        <Route path="/checkout" element={
        <Fragment> 
          <Checkout />
        </Fragment>
        } />
        <Route path="/" element={
        <Fragment>
          <Home />
        </Fragment>
        }/>
          
      </Routes>  
    </div>
    </Router>
  );
}

export default App;
