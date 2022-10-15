
import { useEffect, useMemo, useReducer, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Components/Home';
import Cart from './Components/Cart';
import { SETDATA, TOGGLE } from './store/actions';

function App() {
  
  const dispatch=useDispatch()
  useEffect(()=>{
    
    fetchapi()
    
  },[])
  const fetchapi=()=>{
    fetch('https://assgsoftsensorapi.herokuapp.com/data').then(data=>data.json()).then(response=>{
      console.log(response)
      dispatch(SETDATA(response))
      dispatch(TOGGLE())
      
      
    })
    .catch(err=>console.log(err))
    
  }
  return(
    <BrowserRouter>
    <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path="/cart" element={<Cart />} />
    </Routes>
    </BrowserRouter>
  )
}
export default App;
