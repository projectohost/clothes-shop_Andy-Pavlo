// База даних товарів
const products = [
    {
        id: 1,
        name: "Куртка Oversize Minimal",
        category: "outerwear",
        categoryName: "Верхній одяг",
        price: 3200,
        image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?auto=format&fit=crop&w=600&q=80"
    },
    {
        id: 2,
        name: "Футболка Heavy Cotton White",
        category: "tshirts",
        categoryName: "Футболки",
        price: 850,
        image: "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=600&q=80"
    },
    {
        id: 3,
        name: "Худі Beige Essential",
        category: "hoodies",
        categoryName: "Худі та світшоти",
        price: 1950,
        image: "https://images.unsplash.com/photo-1556905055-8f358a7a47b2?auto=format&fit=crop&w=600&q=80"
    },
    {
        id: 4,
        name: "Джинси Wide Leg Denim",
        category: "pants",
        categoryName: "Штани",
        price: 2400,
        image: "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?auto=format&fit=crop&w=600&q=80"
    },
    {
        id: 5,
        name: "Пальто Шерстяне Double",
        category: "outerwear",
        categoryName: "Верхній одяг",
        price: 5400,
        image: "https://images.unsplash.com/photo-1539533018447-63fcce2678e3?auto=format&fit=crop&w=600&q=80"
    },
    {
        id: 6,
        name: "Світшот Monochrome Black",
        category: "hoodies",
        categoryName: "Худі та світшоти",
        price: 1650,
        image: "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?auto=format&fit=crop&w=600&q=80"
    }
];

let cart = [];

// Рендер каталогу товарів
function renderProducts(itemsToRender = products) {
    const grid = document.getElementById("product-grid");
    grid.innerHTML = "";

    if (itemsToRender.length === 0) {
        grid.innerHTML = `<p style="grid-column: 1/-1; text-align: center; color: #888;">Товарів не знайдено</p>`;
        return;
    }

    itemsToRender.forEach(product => {
        const card = document.createElement("div");
        card.className = "product-card";
        card.innerHTML = `
            <div class="img-wrapper">
                <img src="${product.image}" alt="${product.name}" class="product-image">
            </div>
            <div class="product-info">
                <div class="product-category">${product.categoryName}</div>
                <div class="product-title">${product.name}</div>
                <div class="product-bottom">
                    <div class="product-price">${product.price} грн</div>
                    <button class="add-btn" onclick="addToCart(${product.id})" title="Додати в кошик">
                        <i class='bx bx-plus'></i>
                    </button>
                </div>
            </div>
        `;
        grid.appendChild(card);
    });
}

// Фільтрація за категоріями
function filterCategory(cat) {
    document.querySelectorAll('.cat-btn').forEach(btn => btn.classList.remove('active'));
    event.target.classList.add('active');

    if (cat === 'all') {
        renderProducts(products);
    } else {
        const filtered = products.filter(p => p.category === cat);
        renderProducts(filtered);
    }
}

// Пошук
function filterProducts() {
    const query = document.getElementById("search-input").value.toLowerCase();
    const filtered = products.filter(p => p.name.toLowerCase().includes(query));
    renderProducts(filtered);
}

// Управління кошиком
function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    cart.push(product);
    updateCartUI();
    openCart();
}

function removeFromCart(index) {
    cart.splice(index, 1);
    updateCartUI();
}

function updateCartUI() {
    document.getElementById("cart-count").textContent = cart.length;
    
    const cartItemsContainer = document.getElementById("cart-items");
    const totalSumContainer = document.getElementById("cart-total-sum");

    if (cart.length === 0) {
        cartItemsContainer.innerHTML = `<p class="empty-msg">Ваш кошик порожній</p>`;
        totalSumContainer.textContent = `0 грн`;
        return;
    }

    cartItemsContainer.innerHTML = "";
    let total = 0;

    cart.forEach((item, index) => {
        total += item.price;
        const itemEl = document.createElement("div");
        itemEl.className = "cart-item";
        itemEl.innerHTML = `
            <img src="${item.image}" alt="${item.name}">
            <div class="cart-item-info">
                <div class="cart-item-title">${item.name}</div>
                <div class="cart-item-price">${item.price} грн</div>
            </div>
            <i class='bx bx-trash remove-item' onclick="removeFromCart(${index})"></i>
        `;
        cartItemsContainer.appendChild(itemEl);
    });

    totalSumContainer.textContent = `${total} грн`;
}

function toggleCart() {
    const sidebar = document.getElementById("cart-sidebar");
    const overlay = document.getElementById("overlay");
    sidebar.classList.toggle("open");
    overlay.classList.toggle("active");
}

function openCart() {
    document.getElementById("cart-sidebar").classList.add("open");
    document.getElementById("overlay").classList.add("active");
}

function checkout() {
    if (cart.length === 0) {
        alert("Кошик порожній!");
        return;
    }
    alert("Дякуємо за замовлення! Менеджер зв'яжеться з вами найближчим часом.");
    cart = [];
    updateCartUI();
    toggleCart();
}

document.addEventListener("DOMContentLoaded", () => renderProducts(products));