import {Routes, Route} from 'react-router-dom';
import Home from './pages/home/home.component';
import React from 'react';

const App = ()=>{
  return(
    <Routes>
      <Route path='/Home' element={<Home />}/>
    </Routes>
  )
}

export default App;