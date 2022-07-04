import './product-card.styles.scss';
import Button from '../button/button.component';

export const ProductCard = ({ products }) => {
  const { name, price, imageUrl } = products;
  return (
    <div className="product-card-container">
      <img src={imageUrl} alt={`${name}`} className="img" />
      <div className="footer">
        <span className="name">{name}</span>
        <span className="price">{price}</span>
      </div>
      <Button buttonType="inverted" className="button">
        Add to cart
      </Button>
    </div>
  );
};
