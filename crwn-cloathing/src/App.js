import { Routes, Route } from 'react-router-dom';
import Home from './Routes/home/home.component';
import Navigation from './Routes/navigation/navigation.component';
import Authentication from './Routes/authentication/authentication.component';
import { Shop } from './Routes/shop/shop.component';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />}>
          {' '}
        </Route>
        <Route path="/shop" element={<Shop />}>
          {' '}
        </Route>
        <Route path="/auth" element={<Authentication />}>
          {' '}
        </Route>
      </Route>
    </Routes>
  );
};

export default App;
