import { Route, Routes } from 'react-router-dom';
import Category from '../category/category.component';
import CategoriesPreview from '../../Routes/categories-preview/categories-preview.component';
import './shop.style.scss';

const Shop = () => {
  return (
    <Routes>
      <Route index element={<CategoriesPreview />} />
      <Route path=":category" element={<Category />} />
    </Routes>
  );
};

export default Shop;
