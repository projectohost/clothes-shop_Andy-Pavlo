const products = [
    // Штани 
    {
        id: 4,
        name: "Baggy джинси ",
        category: "pants",
        categoryName: "Штани",
        price: 1445,
        image: "image/baggy.webp"
    },
    {
        id: 5,
        name: "Baggy джинси жіночі ",
        category: "pants",
        categoryName: "Штани",
        price: 850,
        image: "image/baggy2.webp"
    },
    {
        id: 6,
        name: "Спортивні чоловічі широкі ",
        category: "pants",
        categoryName: "Штани",
        price: 400,
        image: "image/sport.avif"
    },
    {
        id: 7,
        name: "AURA Eclipse Cargo ",
        category: "pants",
        categoryName: "Штани",
        price: 900,
        image: "image/EclipseCargo1.png"
    },
    {
        id: 8,
        name: "AURA Mist Wide",
        category: "pants",
        categoryName: "Штани",
        price: 1099,
        image: "image/MistWide.png"
    },
    {
        id: 9,
        name: "AURA Forest Cargo",
        category: "pants",
        categoryName: "Штани",
        price: 1100,
        image: "image/ForestCargo.png"
    },
    {
        id: 10,
        name: "Gothic pants",
        category: "pants",
        categoryName: "Штани",
        price: 799,
        image: "image/Gothicpants.avif"
    },
    {
        id: 11,
        name: "Fallen angel's trousers",
        category: "pants",
        categoryName: "Штани",
        price: 899,
        image: "image/Fallenangelstrousers.avif"
    },
    //футболки
    {
        id : 14,
        name: "Y2K Uglyfacekid",
        category: "tshirts",
        categoryName: "Футболки",
        price: 479,
        image: "image/Y2KUglyfacekid.avif"
    },
    {
        id : 15,
        name: "Japan Sakura",
        category: "tshirts",
        categoryName: "Футболки",
        price: 287,
        image: "image/JapanSakura.avif"
    },
    {
        id : 16,
        name: "Y2K Nick",
        category: "tshirts",
        categoryName: "Футболки",
        price: 492,
        image: "image/Y2KNick.avif"
    },
    {
        id : 17,
        name: "Discipline T-shirt",
        category: "tshirts",
        categoryName: "Футболки",
        price: 297,
        image: "image/DisciplineTshirt.avif"
    },
    {
        id : 18,
        name: "Short-Sleeve T-Shirt",
        category: "tshirts",
        categoryName: "Футболки",
        price: 290,
        image: "image/ShortSleeveTShirt.avif"
    },
    {
        id : 19,
        name: "Aura Moon Sakuka",
        category: "tshirts",
        categoryName: "Футболки",
        price: 420,
        image: "image/AURASakuraTshirt.png"
    },
    {
        id : 20,
        name: "T-shirt Nun",
        category: "tshirts",
        categoryName: "Футболки",
        price: 890,
        image: "image/TshirtNun.webp"
    },
    {
        id : 21,
        name: "T-shirt Homer Simpson",
        category: "tshirts",
        categoryName: "Футболки",
        price: 690,
        image: "image/Gomer.png"
    },
    //Худі та світшоти
    {
        id: 22,
        name: "AURA Shadow Essential Hoodie",
        category: "hoodies",
        categoryName: "Худі та світшоти",
        price: 1950,
        image: "image/AURAShadowEssentialHoodie.png"
    },
    {
        id: 23,
        name: "AURA Soft Touch Hoodie",
        category: "hoodies",
        categoryName: "Худі та світшоти",
        price: 2199,
        image: "image/AURASoftTouchHoodie.png"
    },
    {
        id: 24,
        name: "Men's Y2K-Style Dark Gothic",
        category: "hoodies",
        categoryName: "Худі та світшоти",
        price: 750,
        image: "image/MensY2KStyleDarkGothic.avif"
    },
    {
        id: 25,
        name: "Men'S Street INS",
        category: "hoodies",
        categoryName: "Худі та світшоти",
        price: 650,
        image: "image/MensStreetINS.avif"
    },
    {
        id: 26,
        name: "Trendy Color-Block Round",
        category: "hoodies",
        categoryName: "Худі та світшоти",
        price: 570,
        image: "image/TrendyColorBlockRound.avif"
    },
    {
        id: 27,
        name: "Y2K Casual Hoodie",
        category: "hoodies",
        categoryName: "Худі та світшоти",
        price: 580,
        image: "image/Y2KCasualHoodie.avif"
    },
    {
        id: 28,
        name: "Dragon Print Men's",
        category: "hoodies",
        categoryName: "Худі та світшоти",
        price: 670,
        image: "image/DragonPrintMens.avif"
    },
    {
        id: 29,
        name: "Men's Cherry Blossom",
        category: "hoodies",
        categoryName: "Худі та світшоти",
        price: 490,
        image: "image/MensCherryBlossom.avif"
    },
    //Верхній одяг
    {
        id: 1,
        name: "Color-Block Line Loose",
        category: "outerwear",
        categoryName: "Верхній одяг",
        price: 1070,
        image: "image/ColorBlockLineLoose.avif"
    },
    {
        id: 30,
        name: "Jacket Colorblocked Patchwork",
        category: "outerwear",
        categoryName: "Верхній одяг",
        price: 1150,
        image: "image/JacketColorblockedPatchwork.avif"
    },
    {
        id: 31,
        name: "Men'S Loose Graffiti Pattern",
        category: "outerwear",
        categoryName: "Верхній одяг",
        price: 1200,
        image: "image/MensLooseGraffitiPattern.avif"
    },
    {
        id: 32,
        name: "Jacket with Drawstring Hem",
        category: "outerwear",
        categoryName: "Верхній одяг",
        price: 1340,
        image: "image/JacketwithDrawstringHem.avif"
    },
    {
        id: 33,
        name: "Jacket Coat",
        category: "outerwear",
        categoryName: "Верхній одяг",
        price: 1450,
        image: "image/JacketCoat.avif"
    },
    {
        id: 34,
        name: "Jacket Vintage",
        category: "outerwear",
        categoryName: "Верхній одяг",
        price: 1550,
        image: "image/JacketVintage.avif"
    },
    {
        id: 35,
        name: "AURA STORM",
        category: "outerwear",
        categoryName: "Верхній одяг",
        price: 1370,
        image: "image/AURASTORMS.png"
    },
    {
        id: 36,
        name: "AURA STORM OLIVE",
        category: "outerwear",
        categoryName: "Верхній одяг",
        price: 1420,
        image: "image/AURASTORMOLIVE.png"
    },

    
];

let cart = [];


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


function filterProducts() {
    const query = document.getElementById("search-input").value.toLowerCase();
    const filtered = products.filter(p => p.name.toLowerCase().includes(query));
    renderProducts(filtered);
}


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