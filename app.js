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

function initFakeAdRotation() {
  const adGroups = [
    {
      image: document.querySelector(".ad-left .fake-ad-card img"),
      images: [
        "fake ad/stranger thing.jpg",
        "fake ad/stranger thing2.jpg",
      ],
      index: 0,
    },
    {
      image: document.querySelector(".ad-right .fake-ad-card img"),
      images: [
        "fake ad/logithec ad.jpg",
        "fake ad/logithic ad 2.jpg",
      ],
      index: 0,
    },
  ];

  setInterval(() => {
    adGroups.forEach((group) => {
      group.index = (group.index + 1) % group.images.length;
      group.image.src = group.images[group.index];
    });
  }, 3000);
}

document.addEventListener("DOMContentLoaded", initFakeAdRotation);

// Function to adjust the bottom position of ad sidebars based on footer visibility
function updateAdSidebarBottom() {
  const footer = document.querySelector('footer');
  const sidebars = document.querySelectorAll('.ad-sidebar');
  if (!footer || !sidebars.length) return;

  const footerTop = footer.getBoundingClientRect().top;
  const windowHeight = window.innerHeight;

  // Espace entre le bas du viewport et le haut du footer (quand il est visible)
  const overflow = windowHeight - footerTop;
  const bottomOffset = overflow > 0 ? overflow + 16 : 16;

  sidebars.forEach(sidebar => {
    sidebar.style.bottom = bottomOffset + 'px';
  });
}

document.addEventListener('DOMContentLoaded', () => {
  initFakeAdRotation();
  updateAdSidebarBottom();
  window.addEventListener('scroll', updateAdSidebarBottom);
  window.addEventListener('resize', updateAdSidebarBottom);
});