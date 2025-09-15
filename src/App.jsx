import React from 'react';
import ProductCard from './ProductCard';
import './App.css';

// Sample product data
const sampleProducts = [
  {
    id: 1,
    productName: "KONG Puppy Chew Dog Toy, Blue, Small",
    productImage: "https://image.chewy.com/is/image/catalog/354334_MAIN._AC_SS320_V1723834035_.jpg",
    productImageAlt: "Blue KONG puppy chew dog toy for small dogs",
    productUrl: "/products/kong-puppy-chew-toy",
    rating: 4.5,
    reviewCount: 128,
    price: "$89.99"
  },
  {
    id: 2,
    productName: "Benebone Bacon Flavor Tough Puppy Chew Toy, 2 count",
    productImage: "https://image.chewy.com/is/image/catalog/54230_MAIN._AC_SS320_V1708017607_.jpg",
    productImageAlt: "Benebone bacon flavor tough puppy chew toy, 2 count pack",
    productUrl: "/products/benebone-bacon-chew-toy",
    rating: 4.2,
    reviewCount: 89,
    price: "$199.99"
  },
  {
    id: 3,
    productName: "Snuggle Puppy Original Snuggle Puppy Plush Dog Behavioral Aid Anxiety Relief, Biscuit",
    productImage: "https://image.chewy.com/is/image/catalog/173414_MAIN._AC_SS320_V1612404373_.jpg",
    productImageAlt: "Snuggle Puppy original plush dog behavioral aid for anxiety relief in biscuit color",
    productUrl: "/products/snuggle-puppy-anxiety-relief",
    rating: 4.8,
    reviewCount: 256,
    price: "$24.99"
  },
  {
    id: 4,
    productName: "Pixar The Claw & Aliens Hide & Seek Puzzle Plush Squeaky Dog Toy, Small",
    productImage: "https://image.chewy.com/is/image/catalog/221027_MAIN._AC_SS320_V1612366078_.jpg",
    productImageAlt: "Pixar The Claw and Aliens hide and seek puzzle plush squeaky dog toy, small size",
    productUrl: "/products/pixar-claw-aliens-toy",
    rating: 4.6,
    reviewCount: 67,
    price: "$299.99"
  },
  {
    id: 5,
    productName: "KONG Puppy Flyer Dog Toy, Color Varies",
    productImage: "https://image.chewy.com/is/image/catalog/91241_MAIN._AC_SS320_V1531432647_.jpg",
    productImageAlt: "KONG puppy flyer dog toy, color varies",
    productUrl: "/products/kong-puppy-flyer",
    rating: 4.3,
    reviewCount: 142,
    price: "$45.99"
  },
  {
    id: 6,
    productName: "Frisco Giraffe Plush Squeaky Puppy Toy, Small/Medium, 2 count",
    productImage: "https://image.chewy.com/is/image/catalog/245914_MAIN._AC_SS320_V1607371668_.jpg",
    productImageAlt: "Frisco giraffe plush squeaky puppy toy, small/medium size, 2 count pack",
    productUrl: "/products/frisco-giraffe-toy",
    rating: 4.7,
    reviewCount: 203,
    price: "$129.99"
  }
];

function App() {
  return (
    <div className="app">
      <header className="app-header">
        <h1>Accessible Product Cards</h1>
        <p>Demonstrating inclusive design principles for product card components</p>
      </header>
      
      <main className="app-main">
        <section className="products-section">
          <h2>Featured Products</h2>
          <ul className="products-grid">
            {sampleProducts.map(product => (
              <ProductCard
                key={product.id}
                productName={product.productName}
                productImage={product.productImage}
                productImageAlt={product.productImageAlt}
                productUrl={product.productUrl}
                rating={product.rating}
                reviewCount={product.reviewCount}
                price={product.price}
              />
            ))}
          </ul>
        </section>
        
        <section className="accessibility-info">
          <h2>Accessibility Features</h2>
          <div className="info-grid">
            <div className="info-card">
              <h3>Keyboard Navigation</h3>
              <p>Each card is fully keyboard accessible with proper focus indicators and logical tab order.</p>
            </div>
            <div className="info-card">
              <h3>Screen Reader Support</h3>
              <p>Cards are announced as list items with descriptive link text. Only the product name is included in the accessible name.</p>
            </div>
            <div className="info-card">
              <h3>Visual Design</h3>
              <p>High contrast support, reduced motion preferences, and clear hover/focus states for all users.</p>
            </div>
            <div className="info-card">
              <h3>Touch Friendly</h3>
              <p>Large clickable areas and appropriate spacing for touch devices and users with motor impairments.</p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
