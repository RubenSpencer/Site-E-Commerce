// Function to filter products by category
function filterProducts(category, button) {
  // Get all product cards
  const products = document.querySelectorAll(".product-card");

  // Show/hide products based on category using Bootstrap utility classes
  products.forEach((product) => {
    const productCategory = product.getAttribute("data-category");

    if (category === "all" || productCategory === category) {
      product.classList.remove("d-none");
    } else {
      product.classList.add("d-none");
    }
  });

  // Update active button
  const filterButtons = document.querySelectorAll(".btn-filter");
  filterButtons.forEach((btn) => {
    btn.classList.remove("active");
  });
  button.classList.add("active");
}
