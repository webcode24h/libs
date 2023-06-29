// trang mat hang chi tiet
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
	document.querySelector(".cart").classList.toggle("active");
	for (const addClose of closeCart) {
		addClose.classList.toggle('close_cart__items');
	}
});
document.querySelector("#checkout_now").addEventListener("click", function() {
	let cart_list = totalCount.innerText;
	if (cart_list == 0) {
		addToCart();
		window.open("/check-out");
	} else {
		var checkCart;
		for (var i = 0; i < Number(cart_list); i++) {
			if (document.querySelectorAll(".cart__items .product__name")[i].innerText == document.querySelector("#product__name").innerText + "Color: " + document.querySelector('#input_mau-sac').options[document.querySelector('#input_mau-sac').selectedIndex].text + "; Size: " + document.querySelector('#input_kich-co').options[document.querySelector('#input_kich-co').selectedIndex].text) {
				checkCart = 1;
				break;
			} else {
				checkCart = 0;
			}
		}
		if (checkCart == 0) {
			addToCart();
			window.open("/check-out");
		} else {
			window.open("/check-out");
		}
	}
});
addToCartBtn[0].addEventListener("click", addToCart);

function addToCart() {
	const product = {
		name: document.querySelector("#product__name").innerText,
		variation1: document.querySelector('#input_mau-sac').options[document.querySelector('#input_mau-sac').selectedIndex].text,
		variation2: document.querySelector('#input_kich-co').options[document.querySelector('#input_kich-co').selectedIndex].text,
		image: document.querySelector("#image .slick-cloned + .slick-slide img.brz-img").getAttribute("src"),
		price: document.querySelector("#product__price").innerText.replace("$", ""),
		quantity: document.querySelector("#input_so-luong").value
	};
	let cart_list = totalCount.innerText;
	for (var i = 0; i < Number(cart_list); i++) {
		if (document.querySelectorAll(".cart__items .product__name")[i].innerText == product.name + "Color: " + product.variation1 + "; Size: " + product.variation2) {
			alert('This item has already been added to the cart');
			return;
		}
	}
	let img_clone = document.querySelector("#image .slick-cloned + .slick-slide img.brz-img");
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
		if (individualItem.querySelector(".product__name").innerText === product.name + "Color: " + product.variation1 + "; Size: " + product.variation2) {
			// increrase
			increaseItem(individualItem, product);
			// decrease
			decreaseItem(individualItem, product);
			// Removing Element
			removeItem(individualItem, product);
		}
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
				if (individualItem.querySelector(".product__name").innerText === product.name + "Color: " + product.variation1 + "; Size: " + product.variation2) {
					// increrase
					increaseItem(individualItem, product);
					// decrease
					decreaseItem(individualItem, product);
					// Removing Element
					removeItem(individualItem, product);
				}
			});
		});
		calculateTotal();
	}
}

function calculateTotal() {
	let total = 0;
	let total_items = 0;
	for (let i = 0; i = cartItems.length; i++) {
		document.querySelectorAll(".sub_total")[i].innerText = document.querySelectorAll(".product__quantity")[i].innerText * 1 * document.querySelectorAll(".product__price")[i].innerText;
	}
	cartItems.forEach(item => {
		total += item.quantity * item.price;
		total_items += 1 * item.quantity;
	});
	totalCost.innerText = total;
	totalCount.innerText = cartItems.length;
	document.querySelector("#total_items").innerText = total_items;
}

function saveToLocalStorage() {
	localStorage.setItem("cart_items", JSON.stringify(cartItems));
}

function addItemToTheDOM(product) {
	// Adding the new Item to the Dom
	cartDOM.insertAdjacentHTML("beforeend", `<tr class="cart_item">
<td style="padding: 2px 0 2px 8px; border-bottom: 1px dotted #666666; width: 50px;"><img class="product_image" style="width: 50px; height: auto;" src="${product.image}"></td>
<td style="padding: 2px 8px; border-bottom: 1px dotted #666666;"><div class="product__name"><strong>${product.name}</strong><p style="font-weight: 200; margin: 0px auto;"><span>Color: ${product.variation1}</span><span>; Size: ${product.variation2}</span></p></div><p style="margin: 0px auto;">Giá: <strong class="product__price">${product.price}</strong><strong>$</strong></p></td>
<td style="padding: 2px 0; text-align: right; border-bottom: 1px dotted #666666; width: 0;"><p class="btn__small show-btn" style="padding: 1px; border-radius: 10px; background: #40a832e5; color: #fff; font-size: 13px; cursor: pointer; line-height: 1; text-align: center; width: 15px; height: 15px; margin: auto 0 auto auto" action="decrease">&minus;</p></td>
<td class="product__quantity" style="padding: 2px 0; border-bottom: 1px dotted #666666; width: 10%; text-align: center;">${product.quantity}</td>
<td style="padding: 2px 0; border-bottom: 1px dotted #666666; width: 0; text-align: left;"><p class="btn__small show-btn" style="padding: 1px; border-radius: 10px; background: #40a832e5; color: #fff; font-size: 13px; cursor: pointer; line-height: 1; text-align: center; width: 15px; height: 15px;" action="increase">&plus;</p></td>
<td class="sub_total" style="padding: 2px 8px; text-align: right; border-bottom: 1px dotted #666666; width: 20%;">${product.price * product.quantity}</td>
<td style="padding: 2px 0; border-bottom: 1px dotted #666666; width: 0; text-align: center;"><p class="btn__small btn_remove show-btn" style="background: #ec4949; padding: 1px; border-radius: 10px; color: #fff; font-size: 13px; cursor: pointer; line-height: 1; width: 15px; height: 15px; margin: auto 0 auto 8px" action="remove">&times;</p></td>
</tr>`);
}

function increaseItem(individualItem, product) {
	individualItem.querySelector("[action='increase']").addEventListener('click', () => {
		// Actual Array
		cartItems.forEach(cartItem => {
			if (cartItem.name === product.name && cartItem.variation1 === product.variation1 && cartItem.variation2 === product.variation2) {
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
			if (cartItem.name === product.name && cartItem.variation1 === product.variation1 && cartItem.variation2 === product.variation2) {
				if (cartItem.quantity > 1) {
					individualItem.querySelector(".product__quantity").innerText = --cartItem.quantity;
					calculateTotal();
					saveToLocalStorage();
				} else {
					// removing this element and assign the new elemntos to the old of the array
					console.log(cartItems);
					cartItems = cartItems.filter(newElements => newElements.name + newElements.variation1 + newElements.variation2 !== product.name + product.variation1 + product.variation2);
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
			if (cartItem.name === product.name && cartItem.variation1 === product.variation1 && cartItem.variation2 === product.variation2) {
				cartItems = cartItems.filter(newElements => newElements.name + newElements.variation1 + newElements.variation2 !== product.name + product.variation1 + product.variation2);
				individualItem.remove();
				calculateTotal();
				saveToLocalStorage();
			}
		});
	});
}