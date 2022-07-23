// an form thong tin - hien nut paypal
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

// thanh toan paypal
/* ---- API paypal <script src="https://www.paypal.com/sdk/js?client-id=AVgXHMsESVSqsAh_m7_z0lNOqDN65DUUFweFXD_o8ij4YA2Qw7d3x5U5zOLic41ypHjaY-zlKU9diPxR&enable-funding=venmo&currency=USD" data-sdk-integration-source="button-factory"></script> ----*/
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
