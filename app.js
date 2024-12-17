let currentPage = 1;
const productsPerPage = 20;

async function fetchProducts(page) {
    const response = await fetch(`http://localhost:3000/products?page=${page}&limit=${productsPerPage}`);
    const data = await response.json();
    displayProducts(data);
    setupPagination();
}

function displayProducts(products) {
    const productList = document.getElementById('product-list');
    productList.innerHTML = '';
    products.forEach(product => {
        productList.innerHTML += `
            <div class="col-md-4 mb-4">
                <div class="card">
                    <img src="${product.image_url}" class="card-img-top" alt="${product.name}">
                    <div class="card-body">
                        <h5 class="card-title">${product.name}</h5>
                        <p class="card-text">${product.description}</p>
                        <p class="card-text"><strong>${product.price} €</strong></p>
                    </div>
                </div>
            </div>
        `;
    });
}

function setupPagination() {
    const pagination = document.getElementById('pagination');
    pagination.innerHTML = `
        <li class="page-item"><a class="page-link" href="#" onclick="changePage(${currentPage - 1})">Précédent</a></li>
        <li class="page-item"><a class="page-link" href="#" onclick="changePage(${currentPage + 1})">Suivant</a></li>
    `;
}

function changePage(page) {
    if (page > 0) {
        currentPage = page;
        fetchProducts(currentPage);
    }
}

fetchProducts(currentPage);

