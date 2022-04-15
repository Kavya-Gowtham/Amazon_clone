import React, {useEffect} from 'react';
import './App.css';
import Header from './Header';
import Home from './Home';
import Checkout from './Checkout';
import Login from './Login';
import {BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Fragment } from 'react';
import { auth } from './firebase';
import { useStateValue } from './StateProvider';

function App() {
  const [{}, dispatch] = useStateValue();

  useEffect(() => {
    //will only run once when the app component loads...

    auth.onAuthStateChanged(authUser => {
      console.log('The USER IS >>>>', authUser);

      if(authUser){
        //The user just logged in / the user was logged in
        dispatch({
          type: 'SET_USER',
          user: authUser
        })
      } else {
        //The user is logged out
        dispatch({
          type: 'SET_USER',
          user: null
        })
      }
    })
  }, [])
  return (
    //BEM
    <Router>
    <div className="app">
    
      <Routes>
      <Route path="/login" element={
        <Fragment> 
          <Login />
        </Fragment>
        } />
        <Route path="/checkout" element={
        <Fragment> 
          <Header />
          <Checkout />
        </Fragment>
        } />
        <Route path="/" element={
        <Fragment>
          <Header />
          <Home />
        </Fragment>
        }/>
          
      </Routes>  
    </div>
    </Router>
  );
}

export default App;
