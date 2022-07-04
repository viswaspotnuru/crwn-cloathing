import Shop_DATA from '../../shop-data.json';
import { ProductsContext } from '../../contexts/products.context';
import { useContext } from 'react';
import { ProductCard } from '../../components/products-card/product-card.component';
import './shop.style.scss';

export const Shop = () => {
  const { products } = useContext(ProductsContext);
  console.log(Shop_DATA);
  return (
    <div className="products-container">
      {products.map(product => {
        return <ProductCard key={product.id} products={product} />;
      })}
    </div>
  );
};
