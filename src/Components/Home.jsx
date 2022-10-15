import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { OFFSET, RESETOFFSET } from '../store/actions';
import Navbar from './Navbar';
import Products from './Products';

const Home = () => {
    const state=useSelector(state=>state)
    const dispatch=useDispatch()

const filteredProds=state.data.slice(0,state.offset)
  useEffect(()=>{
    window.addEventListener("scroll",handlescroll)
    return function(){
        dispatch(RESETOFFSET())
        
    }
  },[])

  
  
  const handlescroll=(e)=>{
    
    if(window.innerHeight+e.target.documentElement.scrollTop+1>=e.target.documentElement.scrollHeight){     
      dispatch(OFFSET())
      
      
    }
    
  }
  
  return (<>
    <Navbar />
    <div className='maincontainer' >
      
    {
      state.loading?
      <h1>Loading...</h1>
      :
      <Products products={filteredProds} />
    }
    
    </div>
    
    </>
  );
}

export default Home;