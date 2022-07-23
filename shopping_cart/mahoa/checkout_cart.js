/*<script src="https://www.paypal.com/sdk/js?client-id=[-----------value client-id by Paypal developer (delete"[]")-------]&enable-funding=venmo&currency=USD" data-sdk-integration-source="button-factory"></script>---*/

const cartDOM = document.querySelector(".cart__items");
const totalCost = document.querySelector("#total__cost");

document.getElementById('ma_don_hang').innerText = Math.floor (Math.random () * 899999 + 100000);
// gán tất cả các giá trị từ bộ nhớ cục bộ
let cartItems = (JSON.parse(localStorage.getItem("cart_items")) || []);

document.addEventListener("DOMContentLoaded", loadData);

/*
document.addEventListener('change', (event) => {
	// Make sure, that you're receiving event from a correct element
	if (document.querySelector("#form_dathang form div.brz-forms2__alert--success") != null) {
		clearCartItems();
	}
});
*/

function loadData() {
	if (cartItems.length > 0) {
		cartItems.forEach(product => {
			addItemToTheDOM(product);

			const cartDOMItems = document.querySelectorAll(".cart_item");

			cartDOMItems.forEach(individualItem => {
				var _0x419c=["\x69\x6E\x6E\x65\x72\x54\x65\x78\x74","\x2E\x70\x72\x6F\x64\x75\x63\x74\x5F\x5F\x6E\x61\x6D\x65","\x71\x75\x65\x72\x79\x53\x65\x6C\x65\x63\x74\x6F\x72","\x6E\x61\x6D\x65"];if(individualItem[_0x419c[2]](_0x419c[1])[_0x419c[0]]=== product[_0x419c[3]]){increaseItem(individualItem,product);decreaseItem(individualItem,product);removeItem(individualItem,product)}
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
    document.querySelector("#form_dathang input[placeholder='Code orders']").setAttribute('data-placeholder', document.getElementById('ma_don_hang').innerHTML);
    document.querySelector("#form_dathang input[placeholder='Product Information']").setAttribute('data-placeholder', document.getElementById('border-cart__items').innerHTML);
}

function saveToLocalStorage() {
	localStorage.setItem("cart_items", JSON.stringify(cartItems));
}

function addItemToTheDOM(product) {
	// Adding the new Item to the Dom
	cartDOM.insertAdjacentHTML("afterbegin", `<div class="cart_item" style="padding: 10px 0;display: -webkit-box;display: -ms-flexbox;display: flex;-webkit-box-orient: horizontal;-webkit-box-direction: normal;-ms-flex-direction: row;flex-direction: row;-webkit-box-align: center;-ms-flex-align: center;align-items: center;-webkit-box-pack: center;-ms-flex-pack: center;justify-content: center;width: 100%;border-bottom: 1px dashed #f6b08c;">
    <img class="product_image" style="margin: auto; width: 50px;height: 50px;border-radius: 5px;" src="${product.image}" alt="" srcset="">
    <h4 class="product__name" style="margin: auto;display: inline;">${product.name}</h4>
    <a class="btn__small" style="margin: auto;padding: 1px;border-radius: 10px;background: #40a832e5;color: #fff;font-size: 13px;cursor: pointer;line-height: 1;text-align: center;width: 15px;height: 15px;" action="decrease">&minus;</a>
    <h4 class="product__quantity" style="margin: auto;display: inline;">${product.quantity}</h4>
    <a class="btn__small" style="margin: auto;padding: 1px;border-radius: 10px;background: #40a832e5;color: #fff;font-size: 13px;cursor: pointer;line-height: 1;text-align: center;width: 15px;height: 15px;" action="increase">&plus;</a>
    <span class="product__price" style="margin: auto;">${product.price}</span>
    <a class="btn__small btn_remove" style="margin: auto;background: #ec4949;padding: 1px;border-radius: 10px;color: #fff;font-size: 13px;cursor: pointer;line-height: 1;text-align: center;width: 15px;height: 15px;" action="remove">&times;</a>
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

function clearCartItems() {

	localStorage.clear();
	cartItems = [];

	document.querySelectorAll(".cart__items").forEach(item => {

		item.querySelectorAll(".cart_item").forEach(node => {
			node.remove();
		});

	});
	calculateTotal();
}

// hidden form - show paypal
let submitCheckOut = document.querySelector("#form_dathang form div.brz-forms2__item-button button.brz-btn-submit");
document.querySelector("#brz-tabs--style3").classList.add("hidden-tab");
// Attach event listener to the document
document.addEventListener('change', (event) => {
	// Make sure, that you're receiving event from a correct element
	if (document.querySelector("#form_dathang form div.brz-forms2__alert--success") != null) {
		document.querySelector("#brz-tabs--style3 .brz-tabs__content > div:first-child").classList.remove("brz-tabs__items--active");
		document.querySelector("#brz-tabs--style3 .brz-tabs__content > div:last-child").classList.add("brz-tabs__items--active");
	}
});

// paypal
	function initPayPalButton() {
		paypal.Buttons({
			style: {
				shape: 'rect',
				color: 'gold',
				layout: 'vertical',
				label: 'paypal',

			},

			createOrder: function(data, actions) {
				return actions.order.create({
					purchase_units: [{
						"description": "#"+ document.getElementById('ma_don_hang').innerText,
						"amount": {
							"currency_code": "USD",
							"value": Number(totalCost.innerText)
						}
					}]
				});
			},

			onApprove: function(data, actions) {
				return actions.order.capture().then(function(orderData) {

					// Full available details
					console.log('Capture result', orderData, JSON.stringify(orderData, null, 2));

					// Show a success message within this page, e.g.
					const element = document.getElementById('paypal-button-container');
					element.innerHTML = '';
					element.innerHTML = '<h3>Thank you for your payment!</h3>';
          clearCartItems();

					// Or go to another URL:  actions.redirect('thank_you.html');

				});
			},

			onError: function(err) {
				console.log(err);
			}
		}).render('#paypal-button-container');
	}
	initPayPalButton();
