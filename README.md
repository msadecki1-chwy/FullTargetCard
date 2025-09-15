# Accessible Product Card Component

This project demonstrates the implementation of an accessible product card component following inclusive design principles. The component is built with React and focuses on creating an inclusive user experience for all users, including those using assistive technologies.

## Features

- **Fully clickable cards** using the pseudo-content technique
- **Keyboard accessible** with proper focus management
- **Screen reader friendly** with semantic HTML and proper ARIA usage
- **Responsive design** that works across all device sizes
- **High contrast mode support** for users with visual impairments
- **Reduced motion support** for users with vestibular disorders
- **Touch-friendly** with appropriate hit targets
- **Optimized images** with 320px square dimensions and lazy loading
- **Enhanced hover effects** with card-wide interaction and text decoration

## Accessibility Implementation

### 1. Semantic HTML Structure

The component uses proper semantic HTML elements:

```jsx
<li className="product-card">
  <div className="product-image">
    <img src={productImage} alt="" loading="lazy" />
  </div>
  <div className="product-content">
    <h2 className="product-title">
      <a href={productUrl}>{productName}</a>
    </h2>
    <div className="product-reviews">
      {/* Star rating and review count */}
    </div>
    <div className="product-price">{price}</div>
  </div>
</li>
```

**Why this matters:**
- `<li>` elements provide list navigation shortcuts for screen readers
- `<h2>` headings create logical document structure and navigation landmarks
- The link is placed on the product name only, creating a clear and concise accessible name
- Empty `alt=""` text prevents redundant announcements since product names are adjacent

### 2. Accessible Link Implementation

The product name serves as the primary link with a clean accessible name:

```jsx
<h2 className="product-title">
  <a href={productUrl}>{productName}</a>
</h2>
```

**Key decisions:**
- Only the product name is included in the accessible name
- Review information and price are not part of the link text
- This prevents verbose announcements like "KONG Puppy Chew Dog Toy, Blue, Small, 4.5 stars, 128 reviews, $89.99, link"
- Screen reader users get clean, descriptive link text: "KONG Puppy Chew Dog Toy, Blue, Small, link"

### 3. Clickable Card Implementation

The entire card is made clickable using the pseudo-content technique:

```css
.product-card .product-title a::after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 1;
}
```

**Benefits:**
- No JavaScript required for basic functionality
- Maintains semantic HTML structure
- Provides large clickable area for touch users
- Works with keyboard navigation (Tab to focus, Enter to activate)

### 4. Focus Management

Progressive enhancement for focus states:

```css
/* Basic focus style */
.product-card .product-title a:focus {
  outline: 2px solid #0066cc;
  outline-offset: 2px;
  text-decoration: underline;
}

/* Enhanced focus style for modern browsers */
.product-card:focus-within {
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.15);
}

.product-card:focus-within .product-title a:focus {
  text-decoration: none;
  outline: none;
}
```

**Why this approach:**
- Provides fallback focus styles for older browsers
- Uses `:focus-within` to create card-sized focus indicators
- Maintains visual consistency between mouse and keyboard users
- Follows the cascade principle for progressive enhancement

### 5. Visual Design Considerations

#### Hover States
```css
.product-card:hover {
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.612);
  cursor: pointer;
}

.product-card:hover .product-title a {
  text-decoration: underline;
}
```

#### High Contrast Support
```css
@media (prefers-contrast: high) {
  .product-card {
    border: 2px solid #000;
  }
  
  .product-title a:focus {
    outline: 3px solid #000;
  }
}
```

#### Reduced Motion Support
```css
@media (prefers-reduced-motion: reduce) {
  .product-card,
  .product-image img {
    transition: none;
  }
  
  .product-card:hover .product-image img {
    transform: none;
  }
}
```

### 6. Content Tolerance

The component handles varying content lengths gracefully:

```css
.product-content {
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  gap: 0.5rem;
}

.product-price {
  margin-top: auto;
  padding-top: 0.5rem;
}
```

**Benefits:**
- Cards maintain consistent height regardless of content length
- Price always appears at the bottom of each card
- Flexible layout accommodates different product name lengths
- No content is cut off or hidden

### 7. Image Accessibility

```jsx
<img 
  src={productImage} 
  alt=""
  loading="lazy"
/>
```

**Implementation details:**
- Empty alt text (`alt=""`) prevents redundant announcements since product names are adjacent
- Lazy loading for performance
- `object-fit: cover` ensures consistent image dimensions (320px square)
- Images are positioned after the heading in source order for better screen reader experience
- Follows WCAG guidelines for decorative images that don't add meaningful information beyond adjacent text

### 8. Star Rating Implementation

```jsx
const renderStars = (rating) => {
  // ... star generation logic
  return (
    <div className="stars" aria-hidden="true">
      {/* Star elements */}
    </div>
  );
};
```

**Accessibility considerations:**
- Stars are marked with `aria-hidden="true"` since they're decorative
- Review count is provided as text for screen readers
- Visual star display provides quick visual reference for sighted users

## Why These Decisions Matter

### For Screen Reader Users
- **Clear navigation**: List structure provides shortcuts and item counting
- **Descriptive links**: Only product names are announced, reducing cognitive load
- **Logical structure**: Headings create navigation landmarks
- **No redundant information**: Review details and prices don't clutter link announcements

### For Keyboard Users
- **Large focus targets**: Entire card area is clickable
- **Clear focus indicators**: Visual feedback shows which card is focused
- **Logical tab order**: Natural left-to-right, top-to-bottom navigation
- **Consistent interaction**: Same behavior as mouse users

### For Touch Users
- **Large hit targets**: Entire card is touchable, not just small links
- **No accidental activation**: Adequate spacing between cards
- **Visual feedback**: Clear hover states indicate interactivity

### For Users with Visual Impairments
- **High contrast support**: Enhanced borders and outlines in high contrast mode
- **Sufficient color contrast**: All text meets WCAG AA standards
- **Scalable text**: Responsive design works with browser zoom
- **Clear visual hierarchy**: Proper heading structure and spacing

### For Users with Motor Impairments
- **Large clickable areas**: Reduces precision requirements
- **No time-based interactions**: No hover delays or timeouts
- **Consistent behavior**: Predictable interaction patterns

## Testing Recommendations

1. **Keyboard Testing**: Navigate through all cards using only the Tab key
2. **Screen Reader Testing**: Use NVDA, JAWS, or VoiceOver to verify announcements
3. **Touch Testing**: Test on actual mobile devices with various finger sizes
4. **High Contrast Testing**: Enable high contrast mode in your operating system
5. **Zoom Testing**: Test at 200% and 400% browser zoom levels

## Browser Support

- Modern browsers with CSS Grid support (IE11+ with fallbacks)
- Progressive enhancement ensures basic functionality in older browsers
- Focus management works across all browsers with appropriate fallbacks

## Getting Started

1. Install dependencies:
   ```bash
   npm install
   ```

2. Start the development server:
   ```bash
   npm run dev
   ```

3. Open your browser to `http://localhost:3000`

## Component Usage

```jsx
import ProductCard from './ProductCard';

<ProductCard
  productName="KONG Puppy Chew Dog Toy, Blue, Small"
  productImage="https://image.chewy.com/is/image/catalog/354334_MAIN._AC_SS320_V1723834035_.jpg"
  productImageAlt="Blue KONG puppy chew dog toy for small dogs"
  productUrl="/products/kong-puppy-chew-toy"
  rating={4.5}
  reviewCount={128}
  price="$89.99"
/>
```

## Recent Updates

### Styling Improvements
- **Reduced font sizes**: Product names reduced by 50% (0.55rem), prices reduced by 20% (0.96rem)
- **Left-aligned text**: Product names are now left-aligned for better readability
- **Enhanced hover effects**: Product names underline when hovering anywhere on the card
- **Improved shadow**: Enhanced box-shadow opacity for better visual feedback
- **Updated color scheme**: Deeper red color (#c51501) for price text

### Accessibility Enhancements
- **Empty alt text**: Images use `alt=""` to prevent redundant screen reader announcements
- **Card-wide hover**: Hover effects trigger from anywhere on the card, not just the text
- **Consistent interaction**: Maintains focus management while improving visual feedback

### Content Updates
- **Dog toy products**: Updated all example products to showcase dog toys and puppy products
- **Optimized images**: All images are 320px square for consistent display
- **Real product data**: Uses actual Chewy catalog images and product names

## Conclusion

This implementation demonstrates how to create inclusive product cards that work for all users while maintaining clean, semantic code. The key is to start with proper HTML structure, enhance with CSS for visual design, and ensure that accessibility is built in from the beginning rather than added as an afterthought.

The pseudo-content technique for clickable cards provides an excellent balance between functionality and accessibility, making the entire card interactive while maintaining clean link text for screen readers. This approach respects the diverse needs of all users while creating a modern, responsive interface.
