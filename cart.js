let cart = {};
let quantity = [];
let total;
const price = 125.0;

const showCart = document.querySelector(".cart")
const cartBag = document.querySelector(".cart-icon img");
const button = document.querySelector(".add-to-cart");
const cartIcon = document.querySelector(".cart-item-icon");
const descriPrice = document.querySelector(".descrip-price");
const clear = document.getElementById("cart-items");
const checkout = document.querySelector(".checkout");
const cartEmpty = document.querySelector(".cart-empty");
const delBtn = document.querySelector(".del-btn");
const bagCount = document.querySelector(".bag-count");

// Event Listener for Add to Cart button
button.addEventListener("click", function () {
	if (quantity < 1) {
		renderCart(quantity = 1)
	} else {
		renderCart();
	}
});

function renderCart() {
	showCart.classList.remove("hidden")
	clear.style.display = "flex";
	cartEmpty.classList.add("hidden");
	total = price * quantity;
	cartIcon.innerHTML = "";
	descriPrice.innerHTML = `
				<p>Fall Limited Edition Sneakers</p>
				<p>$${price.toFixed(2)} x ${quantity} <span><b>$${total.toFixed(2)}</b></span></p>
			`;
	let cartImage = document.createElement("img");
	cartImage.src = "images/image-product-1-thumbnail.jpg";
	cartIcon.appendChild(cartImage);
	delBtn.innerHTML = `
		 <span class="clo0se"><svg width="14" height="16" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><defs><path d="M0 2.625V1.75C0 1.334.334 1 .75 1h3.5l.294-.584A.741.741 0 0 1 5.213 0h3.571a.75.75 0 0 1 .672.416L9.75 1h3.5c.416 0 .75.334.75.75v.875a.376.376 0 0 1-.375.375H.375A.376.376 0 0 1 0 2.625Zm13 1.75V14.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 1 14.5V4.375C1 4.169 1.169 4 1.375 4h11.25c.206 0 .375.169.375.375ZM4.5 6.5c0-.275-.225-.5-.5-.5s-.5.225-.5.5v7c0 .275.225.5.5.5s.5-.225.5-.5v-7Zm3 0c0-.275-.225-.5-.5-.5s-.5.225-.5.5v7c0 .275.225.5.5.5s.5-.225.5-.5v-7Zm3 0c0-.275-.225-.5-.5-.5s-.5.225-.5.5v7c0 .275.225.5.5.5s.5-.225.5-.5v-7Z" id="a"/></defs><use fill="#C3CAD9" fill-rule="nonzero" xlink:href="#a"/></svg></span>
	`;

	checkout.style.display = "flex";
	checkout.innerHTML = `
		<button><b>Checkout</b></button>
	`;
	const delet = document.querySelector(".clo0se");
	delet.onclick = () => {
		clearCart();
	}; 
	itemCount();
	counter(quantity);
}

function increaseQuantity() {
	quantity += 1;
	renderCart();
}

function decreaseQuantity() {
	if (quantity > 1) {
		quantity -= 1;
		renderCart();
	} else if (quantity === 1) {
		clearCart(quantity);
	}
}

// INCREASE and DECREASE CART ITEMS
const setCount = document.querySelector(".buttons button");
const mobileSetCount = document.querySelector(".mob-btns button");
function counter(count) {
	if (window.innerWidth <= 800) {
    mobileSetCount.innerHTML = `
        <span class="increase" onclick="increaseQuantity()">+</span><span class="value">${count}</span>
		<span class="decrease" onclick="decreaseQuantity()">&#8722</span>
    `;
	} else {
		setCount.innerHTML = `
        <span class="increase" onclick="increaseQuantity()">+</span>${count}
        <span class="decrease" onclick="decreaseQuantity()"
            >&#8722</span
        >
    `;
	}
	
}

function clearCart() {
	checkout.style.display = "none"; 
	clear.style.display = "none";
	cartEmpty.classList.remove("hidden");
	setCount.innerHTML = `
        <span class="increase">+</span>0
        <span class="decrease">&#8722</span>
    `;
	mobileSetCount.innerHTML = `
        <span class="increase">+</span><span class="value">0</span>
		<span class="decrease">&#8722</span>
    `;
	bagCount.innerHTML = "";
	return (quantity = 0);
}

cartBag.onclick = () => {
	showCart.classList.toggle("hidden");
}

function itemCount(){
	if (quantity > 0) {
		bagCount.innerHTML = `
		<span>${quantity}</span>
	`;
	}
}