import React from 'react';
import ProductCard from './ProductCard';
import './App.css';

// Sample product data
const sampleProducts = [
  {
    id: 1,
    productName: "Wireless Bluetooth Headphones",
    productImage: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=300&fit=crop",
    productImageAlt: "Black wireless Bluetooth headphones with soft ear cushions",
    productUrl: "/products/wireless-headphones",
    rating: 4.5,
    reviewCount: 128,
    price: "$89.99"
  },
  {
    id: 2,
    productName: "Smart Fitness Watch",
    productImage: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&h=300&fit=crop",
    productImageAlt: "Black smart fitness watch with digital display showing heart rate",
    productImageAlt: "Black smart fitness watch with digital display showing heart rate",
    productUrl: "/products/smart-watch",
    rating: 4.2,
    reviewCount: 89,
    price: "$199.99"
  },
  {
    id: 3,
    productName: "Portable Phone Charger",
    productImage: "https://images.unsplash.com/photo-1609592807905-0b0b4b1b0b0b?w=400&h=300&fit=crop",
    productImageAlt: "White portable phone charger with USB cable",
    productUrl: "/products/phone-charger",
    rating: 4.8,
    reviewCount: 256,
    price: "$24.99"
  },
  {
    id: 4,
    productName: "Ergonomic Office Chair",
    productImage: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400&h=300&fit=crop",
    productImageAlt: "Black ergonomic office chair with adjustable height and lumbar support",
    productUrl: "/products/office-chair",
    rating: 4.6,
    reviewCount: 67,
    price: "$299.99"
  },
  {
    id: 5,
    productName: "LED Desk Lamp",
    productImage: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=300&fit=crop",
    productImageAlt: "White LED desk lamp with adjustable arm and modern design",
    productUrl: "/products/desk-lamp",
    rating: 4.3,
    reviewCount: 142,
    price: "$45.99"
  },
  {
    id: 6,
    productName: "Mechanical Gaming Keyboard",
    productImage: "https://images.unsplash.com/photo-1541140532154-b024d705b90a?w=400&h=300&fit=crop",
    productImageAlt: "RGB mechanical gaming keyboard with blue switches and backlit keys",
    productUrl: "/products/gaming-keyboard",
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
