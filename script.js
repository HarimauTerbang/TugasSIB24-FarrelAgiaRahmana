let headerImage = document.getElementById("header_Image");

function zoomOut(){
  headerImage.style.transform = "scale(1.1)";
  headerImage.style.transition = "transform 0.5s ease-in-out";
}

setTimeout(zoomOut, 100);


// PRODUCT API const perPage = 15; // Number of items per page
document.addEventListener('DOMContentLoaded', function () {
  const productList = document.getElementById('product-list');
  const pagination = document.getElementById('pagination');
  const productsPerPage = 6;
  let currentPage = 1;
  let productsData = [];

  fetchProducts();

  function fetchProducts() {
      fetch(`https://fakestoreapi.com/products`)
          .then(response => response.json())
          .then(data => {
              productsData = data;
              displayProducts();
              setupPagination();
          });
  }

  function displayProducts() {
      const start = (currentPage - 1) * productsPerPage;
      const end = currentPage * productsPerPage;

      const products = productsData.slice(start, end);

      productList.innerHTML = '';
      products.forEach(product => {
          const card = document.createElement('div');
          card.classList.add('card');

          const image = document.createElement('img');
          image.src = product.image;
          image.alt = product.title;
          image.classList.add('product-image');

          const title = document.createElement('h3');
          title.textContent = product.title;
          title.classList.add('product-title');

          const price = document.createElement('p');
          price.textContent = `$${product.price}`;
          price.classList.add('product-price');

          card.appendChild(image);
          card.appendChild(title);
          card.appendChild(price);

          productList.appendChild(card);
      });
  }

  function setupPagination() {
      pagination.innerHTML = '';
      const totalPages = Math.ceil(productsData.length / productsPerPage);

      for (let i = 1; i <= totalPages; i++) {
          const pageLink = document.createElement('a');
          pageLink.textContent = i;
          pageLink.href = '#';
          pageLink.addEventListener('click', function (event) {
              event.preventDefault();
              currentPage = i;
              displayProducts();
          });

          pagination.appendChild(pageLink);
      }
  }
});
