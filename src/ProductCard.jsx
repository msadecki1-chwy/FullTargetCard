import React from 'react';
import './ProductCard.css';

const ProductCard = ({ 
  productName, 
  productImage, 
  productImageAlt, 
  productUrl, 
  rating, 
  reviewCount, 
  price 
}) => {
  // Generate star display based on rating
  const renderStars = (rating) => {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;
    const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);
    
    return (
      <div className="stars" aria-hidden="true">
        {[...Array(fullStars)].map((_, i) => (
          <span key={i} className="star full">★</span>
        ))}
        {hasHalfStar && <span className="star half">★</span>}
        {[...Array(emptyStars)].map((_, i) => (
          <span key={i} className="star empty">☆</span>
        ))}
      </div>
    );
  };

  return (
    <li className="product-card">
      <div className="product-image">
        <img 
          src={productImage} 
          alt={productImageAlt}
          loading="lazy"
        />
      </div>
      <div className="product-content">
        <h2 className="product-title">
          <a href={productUrl}>
            {productName}
          </a>
        </h2>
        <div className="product-reviews">
          {renderStars(rating)}
          <span className="review-count">
            ({reviewCount} review{reviewCount !== 1 ? 's' : ''})
          </span>
        </div>
        <div className="product-price">
          {price}
        </div>
      </div>
    </li>
  );
};

export default ProductCard;
