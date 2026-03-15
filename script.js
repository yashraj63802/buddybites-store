function reveal() {
  var reveals = document.querySelectorAll(".reveal");
  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = reveals[i].getBoundingClientRect().top;
    var elementVisible = 100; // How many pixels element should be visible before revealing
    
    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("active");
    }
  }
}

// Check scroll position every time user scrolls
window.addEventListener("scroll", reveal);

// Trigger immediately on load to show the hero banner
reveal();

// --- SHOPPING CART FUNCTIONALITY ---

// 1. Find the cart link in the navbar
const cartLink = document.querySelector('.nav-icons a:last-child');
// 2. Find all "Add to Cart" buttons on the page
const addToCartButtons = document.querySelectorAll('.btn-secondary');

let cartItemCount = 0;

// 3. Loop through each button and give it a click action
addToCartButtons.forEach(button => {
  button.addEventListener('click', function() {
    // Increase the count
    cartItemCount++;
    
    // Update the text in the navbar
    cartLink.innerHTML = `<i class="fa-solid fa-cart-shopping"></i> Cart (${cartItemCount})`;
    
    // Visual feedback: Temporarily change the button to show it worked
    const originalText = this.innerText;
    this.innerText = "Added to Pack!";
    this.style.backgroundColor = "var(--primary-color)";
    this.style.color = "var(--white)";
    
    // Change it back after 1.5 seconds
    setTimeout(() => {
      this.innerText = originalText;
      this.style.backgroundColor = "transparent";
      this.style.color = "var(--primary-color)";
    }, 1500);
  });
});
