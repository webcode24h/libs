const cartDOM = document.querySelector(".cart__items");
const totalCost = document.querySelector("#total__cost");

document.getElementById('ma_don_hang').innerText = Math.floor (Math.random () * 899999 + 100000);
// gán tất cả các giá trị từ bộ nhớ cục bộ
let cartItems = (JSON.parse(localStorage.getItem("cart_items")) || []);

document.addEventListener("DOMContentLoaded", loadData);

function loadData() {
	if (cartItems.length > 0) {
		cartItems.forEach(product => {
			addItemToTheDOM(product);

			const cartDOMItems = document.querySelectorAll(".cart_item");

			cartDOMItems.forEach(individualItem => {
				if (individualItem.querySelector(".product__name").innerText === product.name) {
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
	cartDOM.insertAdjacentHTML("beforeend", `<tr class="cart_item">
<td style="padding: 2px 0 2px 8px; border-bottom: 1px dotted #666666; width: 50px; height: 18.125px;"><img class="product_image" style="width: 50px; height: 50px;" src="${product.image}"></td>
<td class="product__name" style="padding: 2px 8px; border-bottom: 1px dotted #666666; width: calc(100% - 50px); height: 18.125px;">${product.name}</td>
<td style="padding: 2px 0; text-align: right; border-bottom: 1px dotted #666666; width: 5%; height: 18.125px;"><a class="btn__small show-btn" style="padding: 1px; border-radius: 10px; background: #40a832e5; color: #fff; opacity: 0; font-size: 13px; cursor: pointer; line-height: 1; text-align: center; width: 15px; height: 15px;" action="decrease">&minus;</a></td>
<td class="product__quantity" style="padding: 2px 0; border-bottom: 1px dotted #666666; width: 10%; height: 18.125px; text-align: center;">${product.quantity}</td>
<td style="padding: 2px 0; border-bottom: 1px dotted #666666; width: 5%; height: 18.125px; text-align: left;"><a class="btn__small show-btn" style="padding: 1px; border-radius: 10px; background: #40a832e5; color: #fff; opacity: 0; font-size: 13px; cursor: pointer; line-height: 1; text-align: center; width: 15px; height: 15px;" action="increase">&plus;</a></td>
<td class="product__price" style="padding: 2px 8px; text-align: right; border-bottom: 1px dotted #666666; width: 20%; height: 18.125px;">${product.price}$</td>
<td style="padding: 2px 8px; border-bottom: 1px dotted #666666; width: 5%; text-align: center;"><a class="btn__small btn_remove show-btn" style="background: #ec4949; padding: 1px; border-radius: 10px; color: #fff; font-size: 13px; cursor: pointer; line-height: 1;opacity: 0;" action="remove">&times;</a></td>
</tr>`);
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

var _0x1ed6=["\x63\x6C\x69\x63\x6B","\x6E\x61\x6D\x65","\x71\x75\x61\x6E\x74\x69\x74\x79","\x69\x6E\x6E\x65\x72\x54\x65\x78\x74","\x2E\x70\x72\x6F\x64\x75\x63\x74\x5F\x5F\x71\x75\x61\x6E\x74\x69\x74\x79","\x71\x75\x65\x72\x79\x53\x65\x6C\x65\x63\x74\x6F\x72","\x6C\x6F\x67","\x66\x69\x6C\x74\x65\x72","\x72\x65\x6D\x6F\x76\x65","\x66\x6F\x72\x45\x61\x63\x68","\x61\x64\x64\x45\x76\x65\x6E\x74\x4C\x69\x73\x74\x65\x6E\x65\x72","\x5B\x61\x63\x74\x69\x6F\x6E\x3D\x27\x64\x65\x63\x72\x65\x61\x73\x65\x27\x5D"];function decreaseItem(_0x8996x2,_0x8996x3){_0x8996x2[_0x1ed6[5]](_0x1ed6[11])[_0x1ed6[10]](_0x1ed6[0],()=>{cartItems[_0x1ed6[9]]((_0x8996x4)=>{if(_0x8996x4[_0x1ed6[1]]=== _0x8996x3[_0x1ed6[1]]){if(_0x8996x4[_0x1ed6[2]]> 1){_0x8996x2[_0x1ed6[5]](_0x1ed6[4])[_0x1ed6[3]]=  --_0x8996x4[_0x1ed6[2]];calculateTotal();saveToLocalStorage()}else {console[_0x1ed6[6]](cartItems);cartItems= cartItems[_0x1ed6[7]]((_0x8996x5)=>{return _0x8996x5[_0x1ed6[1]]!== _0x8996x3[_0x1ed6[1]]});_0x8996x2[_0x1ed6[8]]();calculateTotal();saveToLocalStorage()}}})})}

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
// tab
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

//paypal
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
