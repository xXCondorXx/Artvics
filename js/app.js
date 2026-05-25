/* ==========================================================================
   LÓGICA DE INTERACTIVIDAD - ART VICS
   ========================================================================== */

// la base de datos PRODUCT_DATABASE se carga dinámicamente desde js/products.js


// DICCIONARIO DE ICONOS SVG PARA PRODUCTOS (Visuales vectoriales premium)
const PRODUCT_ICONS = {
    tshirt: `<svg class="product-svg-visual" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path stroke-linecap="round" stroke-linejoin="round" d="M9 9l-4.5 2L3 8l6-4 3 2 3-2 6 4-1.5 3L15 9v11H9V9z"/></svg>`,
    hoodie: `<svg class="product-svg-visual" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path stroke-linecap="round" stroke-linejoin="round" d="M12 3a4 4 0 00-4 4v1h8V7a4 4 0 00-4-4zM6 8h12v13H6V8zM10 13h4M12 13v4"/></svg>`,
    cap: `<svg class="product-svg-visual" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path stroke-linecap="round" stroke-linejoin="round" d="M6 18c0-4 3-7 6-7s6 3 6 7M2 18h20M12 11V7m0 0L8 8m4-1l4 1"/></svg>`,
    mug: `<svg class="product-svg-visual" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path stroke-linecap="round" stroke-linejoin="round" d="M17 8h2a3 3 0 013 3v3a3 3 0 01-3 3h-2M4 8h13v9a3 3 0 01-3 3H7a3 3 0 01-3-3V8zM9 3v2M12 3v2"/></svg>`,
    bottle: `<svg class="product-svg-visual" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path stroke-linecap="round" stroke-linejoin="round" d="M9 5h6v3H9V5zM7 8h10v12a2 2 0 01-2 2H9a2 2 0 01-2-2V8zM12 12v4"/></svg>`,
    book: `<svg class="product-svg-visual" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path stroke-linecap="round" stroke-linejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"/></svg>`,
    key: `<svg class="product-svg-visual" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><circle cx="8" cy="8" r="4"/><path stroke-linecap="round" stroke-linejoin="round" d="M10.85 10.85L19 19m-3-1l2-2m-3-1l2-2"/></svg>`,
    frame: `<svg class="product-svg-visual" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="3" y="3" width="18" height="18" rx="2" stroke-linecap="round" stroke-linejoin="round"/><circle cx="8.5" cy="8.5" r="1.5"/><path stroke-linecap="round" stroke-linejoin="round" d="M21 15l-5-5L5 21"/></svg>`,
    neon: `<svg class="product-svg-visual" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path stroke-linecap="round" stroke-linejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z"/></svg>`,
    bag: `<svg class="product-svg-visual" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path stroke-linecap="round" stroke-linejoin="round" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"/></svg>`,
    baby: `<svg class="product-svg-visual" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path stroke-linecap="round" stroke-linejoin="round" d="M12 2a4 4 0 00-4 4v5c0 1 1 2 2 2h4c1 0 2-1 2-2V6a4 4 0 00-4-4zM6 13h12l-1 8H7l-1-8z"/></svg>`,
    biz: `<svg class="product-svg-visual" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="3" y="4" width="18" height="16" rx="2"/><path stroke-linecap="round" stroke-linejoin="round" d="M7 8h4M7 12h8M7 16h5"/></svg>`
};

// ESTADO GLOBAL DE LA APLICACIÓN (Carrito de compras)
let cart = [];

// Inicialización de la App cuando el DOM esté listo
document.addEventListener("DOMContentLoaded", () => {
    // 1. Cargar el carrito guardado en LocalStorage
    loadCartFromLocalStorage();
    
    // 2. Renderizar los productos iniciales (Todos)
    renderProducts(PRODUCT_DATABASE);
    
    // 3. Configurar escuchadores de eventos
    setupEventListeners();
    
    // 4. Configurar el tema inicial
    initializeTheme();
});

// FUNCIÓN PARA DAR FORMATO DE MONEDA COLOMBIANA (Ej. $28.000)
function formatCurrency(value) {
    return '$' + value.toLocaleString('es-CO', { minimumFractionDigits: 0 });
}

// FUNCIÓN PARA RENDERIZAR LAS TARJETAS DE PRODUCTOS
function renderProducts(products) {
    const grid = document.getElementById("productsGrid");
    grid.innerHTML = ""; // Limpiar
    
    if (products.length === 0) {
        grid.innerHTML = `
            <div class="no-results">
                <h3>No encontramos productos</h3>
                <p>Prueba buscando con palabras clave diferentes o selecciona otra categoría.</p>
            </div>
        `;
        return;
    }
    
    products.forEach(product => {
        const card = document.createElement("div");
        card.className = "product-card";
        
        // Crear las opciones de personalización dinámicas si existen
        let optionsHTML = "";
        if (product.options) {
            Object.keys(product.options).forEach(optKey => {
                const optValues = product.options[optKey];
                optionsHTML += `
                    <div class="option-group">
                        <label for="opt-${product.id}-${optKey}">Seleccionar ${optKey.charAt(0).toUpperCase() + optKey.slice(1)}:</label>
                        <select id="opt-${product.id}-${optKey}" class="product-select">
                            ${optValues.map(val => `<option value="${val}">${val}</option>`).join("")}
                        </select>
                    </div>
                `;
            });
        }
        
        // Obtener el visual correspondiente (imagen real o fallback SVG)
        const visualMedia = product.image 
            ? `<img src="${product.image}" alt="${product.title}" class="product-img" loading="lazy">`
            : (PRODUCT_ICONS[product.type] || PRODUCT_ICONS.tshirt);
        
        // Construir la tarjeta
        card.innerHTML = `
            <div class="product-image-container">
                ${product.badge ? `<span class="product-badge">${product.badge}</span>` : ""}
                ${visualMedia}
            </div>
            
            <div class="product-details">
                <span class="product-category">${product.category}</span>
                <h3 class="product-title">${product.title}</h3>
                <p class="product-desc" style="font-size: 0.85rem; color: var(--text-secondary); margin-bottom: 15px;">${product.desc}</p>
                <div class="product-price">${formatCurrency(product.price)}</div>
                
                <div class="product-options">
                    ${optionsHTML}
                    <button class="btn btn-primary add-to-cart-btn" onclick="handleAddToCart('${product.id}')">
                        Añadir a Cotización
                    </button>
                </div>
            </div>
        `;
        
        grid.appendChild(card);
    });
}

// CONFIGURACIÓN DE LOS ESCUCHADORES DE EVENTOS
function setupEventListeners() {
    // A. Filtros por Pestañas de Categoría
    const tabs = document.querySelectorAll(".category-tab");
    tabs.forEach(tab => {
        tab.addEventListener("click", (e) => {
            // Cambiar clase activa en las pestañas
            tabs.forEach(t => t.classList.remove("active"));
            tab.classList.add("active");
            
            // Filtrar productos
            const category = tab.getAttribute("data-category");
            filterAndSearchProducts(category, document.getElementById("searchInput").value);
        });
    });
    
    // B. Entrada del Buscador
    const searchInput = document.getElementById("searchInput");
    searchInput.addEventListener("input", (e) => {
        const activeTab = document.querySelector(".category-tab.active");
        const category = activeTab ? activeTab.getAttribute("data-category") : "todos";
        filterAndSearchProducts(category, e.target.value);
    });
    
    // C. Apertura y Cierre del Carrito (Modal)
    const cartBtn = document.getElementById("cartBtn");
    const closeCart = document.getElementById("closeCart");
    const cartModal = document.getElementById("cartModal");
    const backdrop = document.getElementById("modalBackdrop");
    
    cartBtn.addEventListener("click", () => {
        cartModal.classList.add("active");
        renderCartItems();
    });
    
    const closeFn = () => cartModal.classList.remove("active");
    closeCart.addEventListener("click", closeFn);
    backdrop.addEventListener("click", closeFn);
    
    // D. Envío de Cotización por WhatsApp
    const sendQuoteBtn = document.getElementById("sendQuoteBtn");
    sendQuoteBtn.addEventListener("click", handleSendQuote);
    
    // E. Menú Hamburguesa Móvil
    const hamburger = document.getElementById("hamburger");
    const navMenu = document.getElementById("navMenu");
    
    hamburger.addEventListener("click", () => {
        hamburger.classList.toggle("active");
        navMenu.classList.toggle("active");
    });
    
    // Cerrar menú móvil al hacer clic en un enlace
    document.querySelectorAll(".nav-link").forEach(link => {
        link.addEventListener("click", () => {
            hamburger.classList.remove("active");
            navMenu.classList.remove("active");
            
            // Manejo de la clase activa en links
            document.querySelectorAll(".nav-link").forEach(l => l.classList.remove("active"));
            link.classList.add("active");
        });
    });
    
    // F. Cambiador de Tema (Oscuro/Claro)
    const themeToggle = document.getElementById("themeToggle");
    themeToggle.addEventListener("click", toggleTheme);
    
    // G. Modificar navbar al hacer scroll
    window.addEventListener("scroll", () => {
        const navbar = document.querySelector(".navbar");
        if (window.scrollY > 50) {
            navbar.classList.add("scrolled");
        } else {
            navbar.classList.remove("scrolled");
        }
    });
}

// FUNCIÓN PARA FILTRAR Y BUSCAR PRODUCTOS
function filterAndSearchProducts(category, searchQuery) {
    let filtered = PRODUCT_DATABASE;
    
    // Filtro por categoría
    if (category !== "todos") {
        filtered = filtered.filter(p => p.category === category);
    }
    
    // Filtro por búsqueda
    if (searchQuery.trim() !== "") {
        const query = searchQuery.toLowerCase().trim();
        filtered = filtered.filter(p => 
            p.title.toLowerCase().includes(query) || 
            p.desc.toLowerCase().includes(query) ||
            p.category.toLowerCase().includes(query)
        );
    }
    
    renderProducts(filtered);
}

// FUNCIÓN CUANDO SE AGREGA AL CARRITO
function handleAddToCart(productId) {
    const product = PRODUCT_DATABASE.find(p => p.id === productId);
    if (!product) return;
    
    // Recopilar las opciones seleccionadas
    const selectedOptions = {};
    if (product.options) {
        Object.keys(product.options).forEach(optKey => {
            const selectElem = document.getElementById(`opt-${product.id}-${optKey}`);
            if (selectElem) {
                selectedOptions[optKey] = selectElem.value;
            }
        });
    }
    
    // Crear un identificador único basado en el ID y las opciones
    const optionString = Object.entries(selectedOptions).map(([k, v]) => `${k}:${v}`).join("|");
    const cartItemId = `${product.id}-${optionString}`;
    
    // Verificar si ya existe el mismo artículo con las mismas opciones en el carrito
    const existingItem = cart.find(item => item.cartItemId === cartItemId);
    
    if (existingItem) {
        existingItem.qty += 1;
    } else {
        cart.push({
            cartItemId: cartItemId,
            id: product.id,
            title: product.title,
            price: product.price,
            options: selectedOptions,
            type: product.type,
            qty: 1
        });
    }
    
    // Guardar en LocalStorage y actualizar UI
    saveCartToLocalStorage();
    updateCartBadge();
    
    // Efecto visual en el botón del carrito
    const cartBtn = document.getElementById("cartBtn");
    cartBtn.classList.add("pulse");
    setTimeout(() => cartBtn.classList.remove("pulse"), 500);
}

// ACTUALIZAR EL BADGE CON EL NÚMERO DE ITEMS DEL CARRITO
function updateCartBadge() {
    const count = cart.reduce((total, item) => total + item.qty, 0);
    document.getElementById("cartCount").textContent = count;
}

// RENDERIZAR ARTÍCULOS DENTRO DEL MODAL DEL CARRITO
function renderCartItems() {
    const list = document.getElementById("cartItemsList");
    const form = document.getElementById("quoteForm");
    list.innerHTML = "";
    
    if (cart.length === 0) {
        list.innerHTML = `<p class="empty-message">Tu cotización está vacía. ¡Añade algunos artículos del catálogo!</p>`;
        form.style.display = "none";
        document.getElementById("cartTotalPrice").textContent = formatCurrency(0);
        return;
    }
    
    form.style.display = "block";
    let totalPrice = 0;
    
    cart.forEach(item => {
        const itemTotal = item.price * item.qty;
        totalPrice += itemTotal;
        
        const optionDetails = Object.entries(item.options)
            .map(([k, v]) => `<span class="cart-item-option"><strong>${k.toUpperCase()}:</strong> ${v}</span>`)
            .join(" | ");
            
        const cartItem = document.createElement("div");
        cartItem.className = "cart-item";
        
        cartItem.innerHTML = `
            <div class="cart-item-visual">
                ${item.title.toLowerCase().includes("mug") || item.title.toLowerCase().includes("vaso") ? "☕" : 
                  item.title.toLowerCase().includes("gorra") ? "🧢" : 
                  item.title.toLowerCase().includes("buzo") || item.title.toLowerCase().includes("hoodie") ? "🧥" : "👕"}
            </div>
            
            <div class="cart-item-info">
                <div class="cart-item-title">${item.title}</div>
                <div style="margin-top: 4px; display: flex; flex-direction: column;">
                    ${optionDetails}
                </div>
                <div class="cart-item-price">${formatCurrency(item.price)} c/u</div>
            </div>
            
            <div class="cart-item-controls">
                <button class="qty-btn" onclick="updateQty('${item.cartItemId}', -1)">-</button>
                <span class="qty-val">${item.qty}</span>
                <button class="qty-btn" onclick="updateQty('${item.cartItemId}', 1)">+</button>
                <button class="remove-item-btn" onclick="removeCartItem('${item.cartItemId}')" aria-label="Eliminar artículo">&times;</button>
            </div>
        `;
        
        list.appendChild(cartItem);
    });
    
    document.getElementById("cartTotalPrice").textContent = formatCurrency(totalPrice);
}

// ACTUALIZAR CANTIDADES DESDE EL CARRITO
window.updateQty = function(cartItemId, delta) {
    const item = cart.find(i => i.cartItemId === cartItemId);
    if (!item) return;
    
    item.qty += delta;
    
    if (item.qty <= 0) {
        removeCartItem(cartItemId);
    } else {
        saveCartToLocalStorage();
        updateCartBadge();
        renderCartItems();
    }
};

// ELIMINAR UN ARTÍCULO ENTERO DEL CARRITO
window.removeCartItem = function(cartItemId) {
    cart = cart.filter(item => item.cartItemId !== cartItemId);
    saveCartToLocalStorage();
    updateCartBadge();
    renderCartItems();
};

// ENVIAR LA COTIZACIÓN COMPLETA A WHATSAPP
function handleSendQuote() {
    if (cart.length === 0) return;
    
    const customerName = document.getElementById("customerName").value.trim();
    const instructions = document.getElementById("customInstructions").value.trim();
    
    if (!customerName) {
        alert("Por favor ingresa tu nombre para poder personalizar tu cotización.");
        document.getElementById("customerName").focus();
        return;
    }
    
    // Construir mensaje estructurado
    let message = `🎨 *NUEVO PEDIDO DE COTIZACIÓN - ART VICS* 🎨\n\n`;
    message += `👤 *Cliente:* ${customerName}\n`;
    if (instructions) {
        message += `📝 *Instrucciones Especiales:* ${instructions}\n`;
    }
    message += `\n*Productos Seleccionados:*\n`;
    message += `----------------------------------------------\n`;
    
    let total = 0;
    cart.forEach(item => {
        const itemTotal = item.price * item.qty;
        total += itemTotal;
        
        message += `• *${item.qty}x* ${item.title}\n`;
        
        // Agregar opciones
        const optionsList = Object.entries(item.options).map(([k, v]) => `${k}: ${v}`).join(", ");
        if (optionsList) {
            message += `   _Opciones: ${optionsList}_\n`;
        }
        message += `   _Precio: ${formatCurrency(item.price)} c/u_ | *Subtotal:* ${formatCurrency(itemTotal)}\n\n`;
    });
    
    message += `----------------------------------------------\n`;
    message += `💰 *TOTAL ESTIMADO:* *${formatCurrency(total)}*\n\n`;
    message += `💬 ¿Me podrían indicar cuáles son los pasos para enviar mis logotipos o diseños? ¡Muchas gracias!`;
    
    // Codificar mensaje para la URL
    const whatsappUrl = `https://wa.me/573222201279?text=${encodeURIComponent(message)}`;
    
    // Abrir WhatsApp en pestaña nueva
    window.open(whatsappUrl, "_blank");
}

// PERSISTENCIA DEL CARRITO (LocalStorage)
function saveCartToLocalStorage() {
    localStorage.setItem("artvics_cart", JSON.stringify(cart));
}

function loadCartFromLocalStorage() {
    const saved = localStorage.getItem("artvics_cart");
    if (saved) {
        try {
            cart = JSON.parse(saved);
            updateCartBadge();
        } catch (e) {
            cart = [];
        }
    }
}

// MANEJO DE TEMAS (Oscuro / Claro)
function initializeTheme() {
    const savedTheme = localStorage.getItem("artvics_theme");
    
    if (savedTheme) {
        document.documentElement.setAttribute("data-theme", savedTheme);
    } else {
        // Detectar preferencia del sistema operativo
        const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
        const defaultTheme = prefersDark ? "dark" : "light";
        document.documentElement.setAttribute("data-theme", defaultTheme);
    }
}

function toggleTheme() {
    const currentTheme = document.documentElement.getAttribute("data-theme");
    const newTheme = currentTheme === "dark" ? "light" : "dark";
    
    document.documentElement.setAttribute("data-theme", newTheme);
    localStorage.setItem("artvics_theme", newTheme);
}
