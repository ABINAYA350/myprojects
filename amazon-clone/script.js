const products = [
    {
        id: 1,
        title: "Apple iPhone 13",
        price: 799,
        image: "https://images-na.ssl-images-amazon.com/images/I/71fVoqRCb-L._AC_SL1500_.jpg"
    },
    {
        id: 2,
        title: "Samsung Galaxy S21",
        price: 699,
        image: "https://images-na.ssl-images-amazon.com/images/I/91BGv6vXJPL._AC_SL1500_.jpg"
    },
    {
        id: 3,
        title: "Sony WH-1000XM4 Wireless Headphones",
        price: 349,
        image: "https://images-na.ssl-images-amazon.com/images/I/71o8Q5XJS5L._AC_SL1500_.jpg"
    },
    {
        id: 4,
        title: "Amazon Echo Dot (4th Gen)",
        price: 49,
        image: "https://images-na.ssl-images-amazon.com/images/I/61u48FEsJPL._AC_SL1000_.jpg"
    },
    {
        id: 5,
        title: "Kindle Paperwhite",
        price: 129,
        image: "https://images-na.ssl-images-amazon.com/images/I/61aX6X9QJPL._AC_SL1000_.jpg"
    }
];

const productGrid = document.getElementById('productGrid');
const searchInput = document.getElementById('searchInput');

function displayProducts(filteredProducts) {
    productGrid.innerHTML = '';
    filteredProducts.forEach(product => {
        const productCard = document.createElement('div');
        productCard.className = 'product-card';

        productCard.innerHTML = `
            <img src="${product.image}" alt="${product.title}" />
            <div class="product-title">${product.title}</div>
            <div class="product-price">$${product.price.toFixed(2)}</div>
        `;

        productGrid.appendChild(productCard);
    });
}

searchInput.addEventListener('input', () => {
    const searchTerm = searchInput.value.toLowerCase();
    const filteredProducts = products.filter(product =>
        product.title.toLowerCase().includes(searchTerm)
    );
    displayProducts(filteredProducts);
});

// Initial display of all products
displayProducts(products);
