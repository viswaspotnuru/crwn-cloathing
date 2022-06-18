import {Routes, Route} from 'react-router-dom';
import Home from './Routes/home/home.component';

const App = ()=>{
  return(
    <Routes>
      <Route path='/Home' element={<Home />}/>
    </Routes>
  )
}

export default App;