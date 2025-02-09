// script.js

document.addEventListener('DOMContentLoaded', function() {
    // Cart sidebar toggle functionality
    const cartToggle = document.getElementById('cartToggle');
    const cartSidebar = document.getElementById('cartSidebar');
    const cartItems = document.getElementById('cartItems');
    const addToCartButtons = document.querySelectorAll('.add-to-cart');
  
    let cart = [];
  
    // Toggle the cart sidebar open/close
    cartToggle.addEventListener('click', function() {
      cartSidebar.classList.toggle('open');
      renderCart();
    });
  
    // Add products to the cart
    addToCartButtons.forEach(button => {
      button.addEventListener('click', function() {
        const productName = this.getAttribute('data-product');
        cart.push(productName);
        alert(productName + " added to cart!");
        renderCart();
      });
    });
  
    // Render cart items dynamically
    function renderCart() {
      cartItems.innerHTML = '';
      if (cart.length === 0) {
        cartItems.innerHTML = '<li>Your cart is empty.</li>';
      } else {
        cart.forEach((item, index) => {
          const li = document.createElement('li');
          li.textContent = item;
          // Remove item on click for easy editing
          li.addEventListener('click', function() {
            cart.splice(index, 1);
            renderCart();
          });
          cartItems.appendChild(li);
        });
      }
    }
  
    // Contact form submission handling
    const contactForm = document.getElementById('contactForm');
    contactForm.addEventListener('submit', function(e) {
      e.preventDefault();
      alert("Thank you for your message! We will get back to you soon.");
      contactForm.reset();
    });
  
    // Language selection (placeholder for real translation logic)
    const languageSelect = document.getElementById('languageSelect');
    languageSelect.addEventListener('change', function() {
      alert("Language changed to " + this.value);
      // In production, implement language translations or redirection
    });
  });
  