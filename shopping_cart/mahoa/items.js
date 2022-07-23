const closeCart = document.querySelectorAll('.cart__counter i.fa');
const cartDOM = document.querySelector(".cart__items");
const addToCartBtn = document.querySelectorAll(".btn__add__to__cart");
const cartCounter = document.querySelector(".cart__counter");
const totalCost = document.querySelector(".total__cost");
const totalCount = document.querySelector("#total__counter");

// assign all values from local stoarge
let cartItems = (JSON.parse(localStorage.getItem("cart_items")) || []);

document.addEventListener("DOMContentLoaded", loadData);

cartCounter.addEventListener("click", () => {
	cartDOM.classList.toggle("active");
	for (const addClose of closeCart) {
		addClose.classList.toggle('close_cart__items');
	}
});

addToCartBtn[0].addEventListener("click", addToCart);

document.querySelector("#checkout_now").addEventListener("click", function() {
	let cart_list = totalCount.innerText;
	if (cart_list == 0) {
		addToCart();
		window.open("/check-out");
	} else {
		let checkCart = 0;
		for (var i = 0; i < Number(cart_list); i++) {
			if (document.querySelectorAll(".cart__items .product__name")[i].innerText == document.querySelector("#product__name").innerText) {
				checkCart = 1;
				break;
			}
		}
		if (checkCart < 1) {
			addToCart();
			window.open("/check-out");
		} else {
			window.open("/check-out");
		}
	}
});

function addToCart() {

	const product = {
		name: document.querySelector("#product__name").innerText,
		image: document.querySelector("#image img.brz-img").getAttribute("src"),
		price: document.querySelector("#product__price").innerText.replace("$", ""),
		quantity: 1
	};

	let cart_list = totalCount.innerText;
	for (var i = 0; i < Number(cart_list); i++) {
		if (document.querySelectorAll(".cart__items .product__name")[i].innerText == document.querySelector("#product__name").innerText) {
			alert('This item has already been added to the cart');
			return;
		}
	}

	let img_clone = document.querySelector("#image img.brz-img");
	let flying_img = img_clone.cloneNode();
	flying_img.classList.add('flying-img');
	document.querySelector("#image").appendChild(flying_img);
	cartCounter.classList.add('cart-counter_active');

	setTimeout(() => {
		document.querySelector("#image").removeChild(flying_img);
		cartCounter.classList.remove('cart-counter_active');
	}, 1500);

	addItemToTheDOM(product);

	const cartDOMItems = document.querySelectorAll(".cart_item");

	cartDOMItems.forEach(individualItem => {
		var _0x7042=["\x69\x6E\x6E\x65\x72\x54\x65\x78\x74","\x2E\x70\x72\x6F\x64\x75\x63\x74\x5F\x5F\x6E\x61\x6D\x65","\x71\x75\x65\x72\x79\x53\x65\x6C\x65\x63\x74\x6F\x72","\x6E\x61\x6D\x65"];if(individualItem[_0x7042[2]](_0x7042[1])[_0x7042[0]]=== product[_0x7042[3]]){increaseItem(individualItem,product);decreaseItem(individualItem,product);removeItem(individualItem,product)}
	});

	cartItems.push(product);
	calculateTotal();
	saveToLocalStorage();
}

function loadData() {
	if (cartItems.length > 0) {
		cartItems.forEach(product => {
			addItemToTheDOM(product);

			const cartDOMItems = document.querySelectorAll(".cart_item");

			cartDOMItems.forEach(individualItem => {
				var _0x7042=["\x69\x6E\x6E\x65\x72\x54\x65\x78\x74","\x2E\x70\x72\x6F\x64\x75\x63\x74\x5F\x5F\x6E\x61\x6D\x65","\x71\x75\x65\x72\x79\x53\x65\x6C\x65\x63\x74\x6F\x72","\x6E\x61\x6D\x65"];if(individualItem[_0x7042[2]](_0x7042[1])[_0x7042[0]]=== product[_0x7042[3]]){increaseItem(individualItem,product);decreaseItem(individualItem,product);removeItem(individualItem,product)}
			});
		});
		calculateTotal();
	}
}

function calculateTotal() {
	let total = 0;
	cartItems.forEach(item => {
		total += item.quantity * item.price;
	});
	totalCost.innerText = total;
	totalCount.innerText = cartItems.length;

}

function saveToLocalStorage() {

	localStorage.setItem("cart_items", JSON.stringify(cartItems));

}

function addItemToTheDOM(product) {
	// Adding the new Item to the Dom
	cartDOM.insertAdjacentHTML("afterbegin", `<div class="cart_item">
         
           <img class="product_image" src="${product.image}" alt="" srcset="">
           <h4 class="product__name">${product.name}</h4>
           <a class="btn__small" action="decrease">&minus;</a> <h4 class="product__quantity">${product.quantity}</h4><a class="btn__small" action="increase">&plus;</a>
          <span class="product__price">${product.price}</span>
           <a class="btn__small btn_remove" action="remove">&times;</a>
       </div>`);
}

function increaseItem(individualItem, product) {

	individualItem.querySelector("[action='increase']").addEventListener('click', () => {
		// Actual Array
		cartItems.forEach(cartItem => {
			if (cartItem.name === product.name) {
				individualItem.querySelector(".product__quantity").innerText = ++cartItem.quantity;
				calculateTotal();
				saveToLocalStorage();
			}
		});
	});

}

function decreaseItem(individualItem, product) {

	individualItem.querySelector("[action='decrease']").addEventListener('click', () => {
		// all cart items in the dom
		cartItems.forEach(cartItem => {
			// Actual Array
			if (cartItem.name === product.name) {
				if (cartItem.quantity > 1) {
					individualItem.querySelector(".product__quantity").innerText = --cartItem.quantity;
					calculateTotal();
					saveToLocalStorage();
				} else {
					// removing this element and assign the new elemntos to the old of the array
					console.log(cartItems);

					cartItems = cartItems.filter(newElements => newElements.name !== product.name);
					individualItem.remove();

					calculateTotal();
					saveToLocalStorage();

				}

			}
		});
	});
}

function removeItem(individualItem, product) {

	individualItem.querySelector("[action='remove']").addEventListener('click', () => {
		cartItems.forEach(cartItem => {
			if (cartItem.name === product.name) {
				cartItems = cartItems.filter(newElements => newElements.name !== product.name);
				individualItem.remove();
				calculateTotal();
				saveToLocalStorage();
			}
		});
	});
}
