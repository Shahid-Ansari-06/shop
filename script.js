// Product Data
const products = [
  {
      id: 1,
      title: "Wireless Bluetooth Headphones",
      description: "Detailed product description goes here. This could include features, specifications, and other details about the product.",
      price: 99.99,
      originalPrice: 129.99,
      discount: "25% off",
      image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aGVhZHBob25lc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
      additionalImages:[
        "https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c21hcnQlMjB3YXRjaHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"
      ],
      rating: 4.5,
      reviews: 125,
      inStock: true,
      sku : 'SP001',
      brand: 'Boat',
      badge: "Popular",
      category: "electronics",
      featured: true,
      trending: false,
      deal: false,
      link: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c21hcnQlMjB3YXRjaHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"
  },
  {
      id: 2,
      title: "Smart Watch with Fitness Tracker",
      price: 149.99,
      originalPrice: 199.99,
      discount: "25% off",
      image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c21hcnQlMjB3YXRjaHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
      rating: 4.2,
      reviews: 89,
      badge: "Sale",
      category: "electronics",
      featured: true,
      trending: false,
      deal: false,
      link: "#"
  },
  {
      id: 3,
      title: "Portable Bluetooth Speaker",
      price: 59.99,
      discount: "25% off",
      image: "https://images.unsplash.com/photo-1572569511254-d8f925fe2cbb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Ymx1ZXRvb3RoJTIwc3BlYWtlcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
      rating: 4.7,
      reviews: 210,
      category: "electronics",
      featured: true,
      trending: false,
      deal: false,
      link: "#"
  },
  {
      id: 4,
      title: "4K Ultra HD Smart TV",
      price: 699.99,
      originalPrice: 899.99,
      discount: "25% off",
      image: "https://images.unsplash.com/photo-1593784991095-a205069470b6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8dHZ8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
      rating: 4.8,
      reviews: 56,
      badge: "Best Seller",
      category: "electronics",
      featured: false,
      trending: true,
      deal: false,
      link: "#"
  },
  {
      id: 5,
      title: "Laptop Backpack with USB Charging Port",
      price: 39.99,
      discount: "25% off",
      image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGJhY2twYWNrfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
      rating: 4.3,
      reviews: 178,
      category: "electronics",
      featured: false,
      trending: false,
      deal: true,
      link: "#"
  },
  {
      id: 6,
      title: "Wireless Charging Stand",
      price: 29.99,
      originalPrice: 39.99,
      discount: "25% off",
      image: "https://images.unsplash.com/photo-1583394838336-acd977736f90?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8d2lyZWxlc3MlMjBjaGFyZ2VyfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
      rating: 4.0,
      reviews: 92,
      badge: "New",
      category: "electronics",
      featured: false,
      trending: false,
      deal: true,
      link: "#"
  },
  {
      id: 7,
      title: "Noise Cancelling Headphones",
      price: 199.99,
      discount: "25% off",
      image: "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGhlYWRwaG9uZXN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
      rating: 4.9,
      reviews: 312,
      category: "electronics",
      featured: false,
      trending: true,
      deal: false,
      link: "#"
  },
  {
      id: 8,
      title: "Smartphone Gimbal Stabilizer",
      price: 79.99,
      originalPrice: 99.99,
      discount: "25% off",
      image: "https://images.unsplash.com/photo-1573481078804-70c9d3406cff?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Z2ltYmFsfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
      rating: 4.4,
      reviews: 67,
      category: "electronics",
      featured: false,
      trending: false,
      deal: true,
      link: "#"
  },
  {
      id: 9,
      title: "Men's Casual T-Shirt",
      price: 19.99,
      discount: "25% off",
      image: "https://images.unsplash.com/photo-1576566588028-4147f3842f27?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHQlMjBzaGlydHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
      rating: 4.1,
      reviews: 45,
      category: "clothing",
      featured: true,
      trending: false,
      deal: false,
      link: "#"
  },
  {
      id: 10,
      title: "Women's Running Shoes",
      price: 79.99,
      originalPrice: 99.99,
      discount: "25% off",
      image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c2hvZXN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
      rating: 4.6,
      reviews: 132,
      category: "clothing",
      featured: false,
      trending: false,
      deal: true,
      link: "#"
  },
  {
      id: 11,
      title: "Home Blender",
      price: 49.99,
      discount: "25% off",
      image: "https://images.unsplash.com/photo-1561023364-9cd51c513f2a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGJsZW5kZXJ8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
      rating: 4.0,
      reviews: 78,
      category: "home",
      featured: false,
      trending: true,
      deal: false,
      link: "#"
  },
  {
      id: 12,
      title: "Facial Moisturizer",
      price: 24.99,
      discount: "25% off",
      image: "https://images.unsplash.com/photo-1571781926291-c477ebfd024b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8YmVhdXR5JTIwcHJvZHVjdHN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
      rating: 4.3,
      reviews: 56,
      category: "beauty",
      featured: false,
      trending: true,
      deal: false,
      link: "#"
  }
];

// Cart Data
let cart = JSON.parse(localStorage.getItem('cart')) || [];

// DOM Elements
const productGrid = document.getElementById('product-grid');
const featuredGrid = document.getElementById('featured-grid');
const trendingGrid = document.getElementById('trending-grid');
const dealsGrid = document.getElementById('deals-grid');
const recommendedGrid = document.getElementById('recommended-grid');
const searchResults = document.getElementById('search-results');
const searchResultsGrid = document.getElementById('search-results-grid');
const cartBtn = document.getElementById('cart-btn');
const cartModal = document.getElementById('cart-modal');
const closeBtn = document.querySelector('.close-btn');
const closeProductView = document.querySelector('.close-product-view');
const cartItems = document.getElementById('cart-items');
const productViewContainer = document.getElementById('product-view-container');
const cartCount = document.getElementById('cart-count');
const cartSubtotal = document.getElementById('cart-subtotal');
const cartTotal = document.getElementById('cart-total');
const searchInput = document.getElementById('search-input');
const searchBtn = document.getElementById('search-btn');
const sortBy = document.getElementById('sort-by');
const countdown = document.getElementById('countdown');
const viewAllTrending = document.getElementById('view-all-trending');
const viewAllRecommended = document.getElementById('view-all-recommended');


// Display Products
function displayProducts(productsToDisplay, gridElement = productGrid, maxProducts = 10) {
if (!productsToDisplay?.length) return;
gridElement.innerHTML = '';

const products = maxProducts ? productsToDisplay.slice(0, maxProducts) : productsToDisplay;

products.forEach(product => {
    const stars = '★'.repeat(Math.floor(product.rating)) + '☆'.repeat(5 - Math.floor(product.rating));
    
    const productCard = document.createElement('div');
    productCard.className = 'product-card';
    productCard.innerHTML = `
        <div class="product-image">
            <img src="${product.image}" alt="${product.title}" loading="lazy">
            ${product.badge ? `<span class="product-badge">${product.badge}</span>` : ''}
        </div>
        <div class="product-info">
            <h3 class="product-title">${product.title}</h3>
            <div class="product-price">
                <span class="current-price">$${Number(product.price).toFixed(2)}</span>
                ${product.originalPrice ? `<span class="original-price">$${Number(product.originalPrice).toFixed(2)}</span>` : ''}
                <h4 class="discount">${product.discount}</h4>
            </div>
            <div class="product-rating">
                <span class="stars">${stars} <span class="rating-count"> (${product.reviews}) </span> </span>
                <span class="free-delivery"> <i class="fas fa-shipping-fast"></i> Free Delivery </span>
            </div>
            <div class="product-actions">
                <button class="cart-icon-btn" data-id="${product.id}">
                    <i class="fas fa-shopping-cart"></i> &nbsp; Add to Cart
                </button>
                <button class="share-btn" data-id="${product.id}">
                    <i class="fas fa-share-alt"></i>
                </button>
            </div>
        </div>
    `;

    productGrid.addEventListener('click', (e) => {
      const shareBtn = e.target.closest('.share-btn');
    
      if (shareBtn) {
        const productId = shareBtn.dataset.id;
        const product = productsToDisplay.find(p => p.id.toString() === productId);
        if (product) shareProduct(product);
      }
    });
    
    // Updated share function
    function shareProduct(product) {
      const shareData = {
        url: product.link || window.location.href,
      };
    
      if (navigator.share) {
        navigator.share(shareData).catch(err => {
          console.error("Sharing failed:", err);
          fallbackShare(shareData);
        });
      } else {
        fallbackShare(shareData);
      }
    }
    
    // Fallback: Copy link to clipboard
    function fallbackShare(shareData) {
      navigator.clipboard.writeText(shareData.url).then(() => {
      });
    }

    // Add click event to show product view
    productCard.addEventListener('click', (e) => {
        // Don't trigger if clicking on buttons or links
        if (!e.target.closest('.product-actions a, .product-actions button')) {
            showProductView(product);
        }
    });
    
    gridElement.appendChild(productCard);
});

// Add event listeners
document.querySelectorAll('.cart-icon-btn').forEach(button => {
    button.addEventListener('click', addToCart);
});
}

// Display Featured Products
const featuredProducts = [...products]
.filter(product => product.featured)
displayProducts(featuredProducts, featuredGrid);

// Display Trending Products
function displayTrendingProducts() {
  const trendingProducts = products.filter(product => product.trending);
  displayProducts(trendingProducts.slice(0, 5), trendingGrid);
}

// Display All Trending Products
function displayAllTrendingProducts() {
  const trendingProducts = products.filter(product => product.trending);
  displayProducts(trendingProducts, productGrid);
  searchResults.style.display = 'none';
}

// Display Deal Products
function displayDealProducts() {
  const dealProducts = products.filter(product => product.deal);
  displayProducts(dealProducts.slice(0, 5), dealsGrid);
}

// Display Recommended Products
function displayRecommendedProducts() {
  const recommendedProducts = [...products]
      .sort(() => 0.5 - Math.random())
      .slice(0, 5);
  displayProducts(recommendedProducts, recommendedGrid);
}

// Display All Recommended Products
function displayAllRecommendedProducts() {
  const recommendedProducts = [...products]
      .sort(() => 0.5 - Math.random());
  displayProducts(recommendedProducts, productGrid);
  searchResults.style.display = 'none';
}

// Sort Products
function sortProducts() {
  const sortOption = sortBy.value;
  let productsToSort = [...products];
  
  switch (sortOption) {
      case 'price-low':
          productsToSort.sort((a, b) => a.price - b.price);
          break;
      case 'price-high':
          productsToSort.sort((a, b) => b.price - a.price);
          break;
      case 'rating':
          productsToSort.sort((a, b) => b.rating - a.rating);
          break;
      case 'newest':
          productsToSort.sort((a, b) => b.id - a.id);
          break;
      default:
          productsToSort = [...products];
  }
  
  displayProducts(productsToSort);
}

// Product View Functions
function showProductView(product) {
const overlay = document.getElementById('productViewOverlay');

// Store original price for coupon calculations
product.originalPriceForCoupon = product.price;
product.currentDiscount = 0;

// Set product data
document.getElementById('productViewTitle').textContent = product.title;
document.getElementById('productViewMainImage').src = product.image;
updatePriceDisplay(product.price, product.originalPrice);

if (product.originalPrice) {
  document.getElementById('productViewOriginalPrice').textContent = `$${product.originalPrice.toFixed(2)}`;
} else {
  document.getElementById('productViewOriginalPrice').textContent = '';
}

if (product.discount) {
  document.getElementById('productViewDiscount').textContent = product.discount;
} else {
  document.getElementById('productViewDiscount').textContent = '';
}

// Set Buy Now button link
const buyNowBtn = document.getElementById('buyNowProductView');
buyNowBtn.dataset.link = product.link;

// Set rating
const stars = '★'.repeat(Math.floor(product.rating)) + '☆'.repeat(5 - Math.floor(product.rating));
document.getElementById('productViewStars').textContent = stars;
document.getElementById('productViewReviews').textContent = `(${product.reviews} reviews)`;

// Set description (fallback to empty string if not provided)
document.getElementById('productViewDescription').textContent = product.description || '';

// Set meta data (if available in product object)
if (product.sku) {
  document.getElementById('productViewSKU').textContent = product.sku;
}
if (product.category) {
  document.getElementById('productViewCategory').textContent = product.category;
}
if (product.brand) {
  document.getElementById('productViewBrand').textContent = product.brand;
}

// Set stock status
const stockElement = document.getElementById('productViewStock');
if (product.inStock) {
  stockElement.textContent = 'In Stock';
  stockElement.classList.add('in-stock');
  stockElement.classList.remove('out-of-stock');
} else {
  stockElement.textContent = 'Out of Stock';
  stockElement.classList.add('out-of-stock');
  stockElement.classList.remove('in-stock');
}

// Clear and set thumbnails
const thumbnailContainer = document.querySelector('.thumbnail-container');
thumbnailContainer.innerHTML = '';

// Add main image as first thumbnail
addThumbnail(product.image, thumbnailContainer);

// Add additional images if available
if (product.additionalImages && product.additionalImages.length > 0) {
  product.additionalImages.forEach(img => {
    addThumbnail(img, thumbnailContainer);
  });
}

// Reset coupon field
document.getElementById('couponCodeInput').value = '';
document.getElementById('couponMessage').textContent = '';
document.getElementById('couponMessage').className = '';

// Show the overlay
overlay.style.display = 'flex';
document.body.style.overflow = 'hidden';

// Add event listeners
setupProductViewEvents(product);
}

function addThumbnail(imgSrc, container) {
const img = document.createElement('img');
img.src = imgSrc;
img.addEventListener('click', () => {
  document.getElementById('productViewMainImage').src = imgSrc;
});
container.appendChild(img);
}

function setupProductViewEvents(product) {
const overlay = document.getElementById('productViewOverlay');
const closeBtn = document.getElementById('closeProductView');
const addToCartBtn = document.getElementById('addToCartProductView');
const buyNowBtn = document.getElementById('buyNowProductView');

// Close button
closeBtn.addEventListener('click', () => {
  overlay.style.display = 'none';
  document.body.style.overflow = 'auto';
});

// Overlay click (outside content)
overlay.addEventListener('click', (e) => {
  if (e.target === overlay) {
    overlay.style.display = 'none';
    document.body.style.overflow = 'auto';
  }
});

// Add to Cart button in Product View
addToCartBtn.addEventListener('click', () => {
  const existingItem = cart.find(item => item.id === product.id);

  if (existingItem) {
    existingItem.quantity += 1;
  } else {
    cart.push({
      ...product,
      quantity: 1
    });
  }

  saveCart();
  updateCart();
  showCartNotification();
});

// Buy Now button - opens product link in new tab
buyNowBtn.addEventListener('click', () => {
  window.open(buyNowBtn.dataset.link, '_blank');
});

// Coupon code functionality
const applyCouponBtn = document.getElementById('applyCouponBtn');
const couponCodeInput = document.getElementById('couponCodeInput');
const couponMessage = document.getElementById('couponMessage');

applyCouponBtn.addEventListener('click', () => {
  const couponCode = couponCodeInput.value.trim();
  
  if (couponCode === 'SHAHID06') {
    // Apply 50% discount
    product.price = product.originalPriceForCoupon * 0.5;
    product.currentDiscount = 0.5;
    updatePriceDisplay(product.price, product.originalPriceForCoupon);
    couponMessage.textContent = '50% discount applied!';
    couponMessage.className = 'success';
  } else if (couponCode === '') {
    couponMessage.textContent = 'Please enter a coupon code';
    couponMessage.className = 'error';
  } else {
    // Reset to original price if wrong coupon
    product.price = product.originalPriceForCoupon;
    product.currentDiscount = 0;
    updatePriceDisplay(product.price, product.originalPriceForCoupon);
    couponMessage.textContent = 'Invalid coupon code';
    couponMessage.className = 'error';
  }
});

// Allow pressing Enter to apply coupon
couponCodeInput.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') {
    applyCouponBtn.click();
  }
});
}

function updatePriceDisplay(currentPrice, originalPrice) {
document.getElementById('productViewPrice').textContent = `$${currentPrice.toFixed(2)}`;

if (originalPrice) {
  document.getElementById('productViewOriginalPrice').textContent = `$${originalPrice.toFixed(2)}`;
} else {
  document.getElementById('productViewOriginalPrice').textContent = '';
}
}

// Initialize the product grid when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
});

// For Carousel
const carousel = document.querySelector('.carousel');
const items = document.querySelectorAll('.carousel-item');
const dots = document.querySelectorAll('.dot');

let currentIndex = 0;

function showSlide(index) {
  items.forEach((item, idx) => {
      item.style.transform = `translateX(-${index * 100}%)`;
      dots[idx].classList.remove('active');
  });
  dots[index].classList.add('active');
}

dots.forEach((dot, index) => {
  dot.addEventListener('click', () => {
      currentIndex = index;
      showSlide(currentIndex);
  });
});

setInterval(() => {
  currentIndex = (currentIndex + 1) % items.length;
  showSlide(currentIndex);
}, 5000);

// ========== LIVE SEARCH WITH RECENT & TRENDING SEARCHES ========== //

// DOM Elements
const liveResults = document.getElementById('live-search-results');
const resultsContainer = document.getElementById('results-container');
const clearSearchBtn = document.getElementById('clear-search-btn');

// Data
let recentSearches = JSON.parse(localStorage.getItem('recentSearches')) || [];
const trendingSearches = ["headphones", "watches", "shoes"];

// Configuration
const config = {
maxRecentSearches: 5,
minSearchLength: 2,
debounceDelay: 300
};

// Initialize
function initSearch() {
loadRecentSearches();
setupEventListeners();
}

// Event Listeners
function setupEventListeners() {
// Live search with debouncing
searchInput.addEventListener('input', debounce(handleSearchInput, config.debounceDelay));

// Focus shows recent/trending searches
searchInput.addEventListener('focus', showSuggestions);

// Click outside closes results
document.addEventListener('click', (e) => {
  if (!searchInput.contains(e.target) && !liveResults.contains(e.target)) {
    liveResults.style.display = 'none';
  }
});

// Keyboard navigation
searchInput.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') liveResults.style.display = 'none';
  if (e.key === 'Enter') performFullSearch(searchInput.value);
});

// Clear search button
if (clearSearchBtn) {
  clearSearchBtn.addEventListener('click', clearSearch);
}
}

// Debounce function
function debounce(func, delay) {
let timeout;
return function() {
  const context = this;
  const args = arguments;
  clearTimeout(timeout);
  timeout = setTimeout(() => func.apply(context, args), delay);
};
}

// Handle search input
function handleSearchInput(e) {
const query = e.target.value.trim();

// Show/hide clear button
if (clearSearchBtn) {
  clearSearchBtn.style.display = query ? 'block' : 'none';
}

if (query.length >= config.minSearchLength) {
  performLiveSearch(query);
} else if (query.length === 0) {
  showSuggestions();
} else {
  liveResults.style.display = 'none';
}
}

// Perform live search
function performLiveSearch(query) {
showLoadingState();

// Simulate API call (replace with actual fetch)
setTimeout(() => {
  const results = searchProducts(query);
  displaySearchResults(results, query);
  liveResults.style.display = 'block';
}, 200);
}

// Full search (when pressing Enter)
function performFullSearch(query) {
if (query.length === 0) return;

addToRecentSearches(query);
// Implement your full search functionality here
console.log("Performing full search for:", query);
liveResults.style.display = 'none';
}

// Search products
function searchProducts(query) {
query = query.toLowerCase();
return products.filter(product => 
  product.title.toLowerCase().includes(query) || 
  product.category.toLowerCase().includes(query) ||
  product.brand?.toLowerCase().includes(query)
);
}

// Display search results
function displaySearchResults(results, query) {
if (results.length === 0) {
  showNoResults(query);
  return;
}

const categories = groupByCategory(results);
let html = '';

Object.entries(categories).forEach(([category, items]) => {
  html += `
    <div class="search-result-category">
      <h4>${capitalize(category)}</h4>
      ${renderCategoryItems(items.slice(0, 3), query)}
      ${items.length > 3 ? renderViewAllButton(category, query, items.length) : ''}
    </div>
  `;
});

resultsContainer.innerHTML = html;
setupResultItemListeners();
}

// Group products by category
function groupByCategory(products) {
return products.reduce((acc, product) => {
  if (!acc[product.category]) acc[product.category] = [];
  acc[product.category].push(product);
  return acc;
}, {});
}

// Render category items
function renderCategoryItems(items, query) {
return items.map(item => `
  <div class="search-result-item" data-id="${item.id}">
    <img src="${item.image}" alt="${item.title}" loading="lazy">
    <div class="search-result-details">
      <h5>${highlightMatch(item.title, query)}</h5>
      <div class="price">$${item.price.toFixed(2)}</div>
    </div>
  </div>
`).join('');
}

// Render View All button
function renderViewAllButton(category, query, count) {
return `
  <div class="view-all-results" 
       data-category="${category.toLowerCase()}" 
       data-query="${query.toLowerCase()}">
    View all ${count} ${category} items <i class="fas fa-chevron-right"></i>
  </div>
`;
}

// Show suggestions (recent + trending)
function showSuggestions() {
let html = '';

if (recentSearches.length > 0) {
  html += `
    <div class="suggestions-section">
      <h4>Recent Searches</h4>
      <div class="suggestions-list">
        ${recentSearches.map(term => `
          <div class="suggestion-item recent-search" data-term="${term}">
            <i class="far fa-clock"></i>
            <span>${term}</span>
            <button class="remove-search" data-term="${term}">&times;</button>
          </div>
        `).join('')}
      </div>
    </div>
  `;
}

html += `
  <div class="suggestions-section">
    <h4>Trending Searches...</h4>
    <div class="suggestions-list">
      ${trendingSearches.map(term => `
        <div class="suggestion-item trending-search" data-term="${term}">
          <i class="fas fa-fire"></i>
          <span>${capitalize(term)}</span>
        </div>
      `).join('')}
    </div>
  </div>
`;

resultsContainer.innerHTML = html;
liveResults.style.display = 'block';

// Setup suggestion listeners
document.querySelectorAll('.recent-search, .trending-search').forEach(item => {
  item.addEventListener('click', (e) => {
    if (!e.target.classList.contains('remove-search')) {
      const term = item.dataset.term;
      searchInput.value = term;
      performLiveSearch(term);
    }
  });
});

// Remove recent search
document.querySelectorAll('.remove-search').forEach(btn => {
  btn.addEventListener('click', (e) => {
    e.stopPropagation();
    removeRecentSearch(btn.dataset.term);
  });
});
}

// Recent searches management
function addToRecentSearches(term) {
term = term.trim().toLowerCase();
if (!term) return;

// Remove if already exists
recentSearches = recentSearches.filter(t => t.toLowerCase() !== term);

// Add to beginning
recentSearches.unshift(term);

// Limit to max items
if (recentSearches.length > config.maxRecentSearches) {
  recentSearches.pop();
}

saveRecentSearches();
}

function removeRecentSearch(term) {
recentSearches = recentSearches.filter(t => t.toLowerCase() !== term.toLowerCase());
saveRecentSearches();
showSuggestions();
}

function saveRecentSearches() {
localStorage.setItem('recentSearches', JSON.stringify(recentSearches));
}

function loadRecentSearches() {
recentSearches = JSON.parse(localStorage.getItem('recentSearches')) || [];
}

// Helper functions
function capitalize(str) {
return str.charAt(0).toUpperCase() + str.slice(1);
}

function highlightMatch(text, query) {
if (!query) return text;
const regex = new RegExp(`(${escapeRegExp(query)})`, 'gi');
return text.replace(regex, '<span class="highlight">$1</span>');
}

function escapeRegExp(string) {
return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

function showLoadingState() {
resultsContainer.innerHTML = `
  <div class="loading-state">
    <i class="fas fa-spinner fa-spin"></i>
    <span>Searching...</span>
  </div>
`;
liveResults.style.display = 'block';
}

function showNoResults(query) {
resultsContainer.innerHTML = `
  <div class="no-results">
    <i class="far fa-frown"></i>
    <p>No results found for "${query}"</p>
    <p class="suggestion">Try different keywords</p>
  </div>
`;
}

function clearSearch() {
searchInput.value = '';
clearSearchBtn.style.display = 'none';
showSuggestions();
}

// Setup result item click listeners
function setupResultItemListeners() {
document.querySelectorAll('.search-result-item').forEach(item => {
  item.addEventListener('click', () => {
    const productId = item.dataset.id;
    const product = products.find(p => p.id == productId);
    addToRecentSearches(product.title);
    showProductView(product); // Open product modal
  });
});

document.querySelectorAll('.view-all-results').forEach(btn => {
  btn.addEventListener('click', (e) => {
    e.preventDefault();
    const category = btn.dataset.category;
    const query = btn.dataset.query;

    // Filter products by category and query
    const filteredProducts = products.filter(p => 
      p.category.toLowerCase() === category && 
      (p.title.toLowerCase().includes(query) || 
       p.category.toLowerCase().includes(query))
    );

    // Display in main grid
    displayProducts(filteredProducts);
    liveResults.style.display = 'none';

    // Scroll to products
    document.querySelector('.products-container').scrollIntoView({
      behavior: 'smooth'
    });
  });
});
}

// Initialize when DOM is ready
document.addEventListener('DOMContentLoaded', initSearch);

// Add to Cart
function addToCart(e) {
  const productId = parseInt(e.currentTarget.getAttribute('data-id'));
  const product = products.find(p => p.id === productId);
  
  const existingItem = cart.find(item => item.id === productId);
  
  if (existingItem) {
      existingItem.quantity += 1;
  } else {
      cart.push({
          ...product,
          quantity: 1
      });
  }
  
  saveCart();
  updateCart();
  showCartNotification();
}

// Update Cart
function updateCart() {
  cartItems.innerHTML = '';
  
  if (cart.length === 0) {
      cartItems.innerHTML = '<p class="empty-cart">Your cart is empty</p>';
      cartSubtotal.textContent = '$0.00';
      cartTotal.textContent = '$0.00';
  } else {
      let subtotal = 0;
      
      cart.forEach(item => {
          const cartItem = document.createElement('div');
          cartItem.className = 'cart-item';
          
          const itemTotal = item.price * item.quantity;
          subtotal += itemTotal;
          
      cartItem.innerHTML = `
              <div class="cart-item-img">
                  <img src="${item.image}" alt="${item.title}">
              </div>
              <div class="cart-item-details">
              <h4 class="cart-item-title">${item.title}</h4>
              <p class="cart-item-price">$${item.price.toFixed(2)}</p>
              <div class="cart-item-actions">
              <div class="quantity-control">
              <button class="quantity-btn minus" data-id="${item.id}">-</button>
              <span class="quantity-value">${item.quantity}</span>
              <button class="quantity-btn plus" data-id="${item.id}">+</button>
              </div>
              <span class="remove-item" data-id="${item.id}">Remove</span>
              </div>
              </div>
          `;
          
          cartItems.appendChild(cartItem);
      });

      // Add click event to show product view
    cartItems.addEventListener('click', (e) => {
      const cartItemElement = e.target.closest('.cart-items');
      if (cartItemElement) {
      const productId = parseInt(cartItemElement.querySelector('.quantity-btn.minus').getAttribute('data-id'));
      const product = products.find(p => p.id === productId);
      if (product) {
        closeCartModal(); // Close the cart modal
        showProductView(product); // Open the product view modal
      }
      }
    });
      
      // Add event listeners to quantity buttons
      document.querySelectorAll('.quantity-btn.minus').forEach(button => {
          button.addEventListener('click', decreaseQuantity);
      });
      
      document.querySelectorAll('.quantity-btn.plus').forEach(button => {
          button.addEventListener('click', increaseQuantity);
      });
      
      document.querySelectorAll('.remove-item').forEach(button => {
          button.addEventListener('click', removeItem);
      });
      
      const shipping = 0.00;
      const total = subtotal + shipping;
      
      cartSubtotal.textContent = `$${subtotal.toFixed(2)}`;
      cartTotal.textContent = `$${total.toFixed(2)}`;
  }
  
  updateCartCount();
}

// Update Cart Count
function updateCartCount() {
  const count = cart.reduce((sum, item) => sum + item.quantity, 0);
  cartCount.textContent = count;
}

// Decrease Quantity
function decreaseQuantity(e) {
  const productId = parseInt(e.currentTarget.getAttribute('data-id'));
  const item = cart.find(item => item.id === productId);
  
  if (item.quantity > 1) {
      item.quantity -= 1;
  } else {
      cart = cart.filter(item => item.id !== productId);
  }
  
  saveCart();
  updateCart();
}

// Increase Quantity
function increaseQuantity(e) {
  const productId = parseInt(e.currentTarget.getAttribute('data-id'));
  const item = cart.find(item => item.id === productId);
  
  item.quantity += 1;
  saveCart();
  updateCart();
}

// Remove Item
function removeItem(e) {
  const productId = parseInt(e.currentTarget.getAttribute('data-id'));
  cart = cart.filter(item => item.id !== productId);
  saveCart();
  updateCart();
}

// Show cart notification
function showCartNotification() {
  const notification = document.createElement('div');
  notification.className = 'cart-notification';
  notification.textContent = 'Item added to cart!';
  document.body.appendChild(notification);
  
  setTimeout(() => {
      notification.classList.add('show');
  }, 10);
  
  setTimeout(() => {
      notification.classList.remove('show');
      setTimeout(() => {
          document.body.removeChild(notification);
      }, 300);
  }, 2000);
}

// Save Cart to LocalStorage
function saveCart() {
  localStorage.setItem('cart', JSON.stringify(cart));
}

// Open Cart Modal
function openCartModal(e) {
  e.preventDefault();
  cartModal.style.display = 'block';
  document.body.style.overflow = 'hidden';
}

// Close Cart Modal
function closeCartModal() {
  cartModal.style.display = 'none';
  document.body.style.overflow = 'auto';
}

// Update Countdown Timer
function updateCountdown() {
  const now = new Date();
  const end = new Date();
  end.setHours(23, 59, 59, 0);
  
  const diff = end - now;
  
  if (diff <= 0) {
      countdown.textContent = '00:00:00';
      return;
  }
  
  const hours = Math.floor(diff / (1000 * 60 * 60));
  const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((diff % (1000 * 60)) / 1000);
  
  countdown.textContent = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
}

// Initialize the App
function init() {
  // Display all products
  displayProducts(products);
  displayTrendingProducts();
  displayDealProducts();
  displayRecommendedProducts();
  
  // Update cart and wishlist from localStorage
  updateCart();
  updateCartCount();
  
  // Event listeners
  searchBtn.addEventListener('click', searchProducts);
  searchInput.addEventListener('keypress', (e) => {
      if (e.key === 'Enter') searchProducts();
  });
  
  sortBy.addEventListener('change', sortProducts);
  
  cartBtn.addEventListener('click', openCartModal);
  closeBtn.addEventListener('click', closeCartModal);
              
  viewAllTrending.addEventListener('click', (e) => {
      e.preventDefault();
      displayAllTrendingProducts();
  });
  
  viewAllRecommended.addEventListener('click', (e) => {
      e.preventDefault();
      displayAllRecommendedProducts();
  });
  
  // Close modals when clicking outside
  window.addEventListener('click', (e) => {
      if (e.target === cartModal) closeCartModal();
  });
  
  // Countdown timer
  updateCountdown();
  setInterval(updateCountdown, 1000);
}

// Initialize the app when DOM is loaded
document.addEventListener('DOMContentLoaded', init);