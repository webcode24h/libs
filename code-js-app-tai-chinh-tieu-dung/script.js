function pmt(rate_per_period, number_of_payments, present_value, future_value, type){
    future_value = typeof future_value !== 'undefined' ? future_value : 0;
    type = typeof type !== 'undefined' ? type : 0;

	if(rate_per_period != 0.0){
		// Interest rate exists
		var q = Math.pow(1 + rate_per_period, number_of_payments);
		return -(rate_per_period * (future_value + (q * present_value))) / ((-1 + q) * (1 + rate_per_period * (type)));
	} else if(number_of_payments != 0.0){
		// No interest rate, but number of payments exists
		return -(future_value + present_value) / number_of_payments;
	}
	return 0;
}
var numberFormatter = new Intl.NumberFormat("ru", {
  style: "decimal",
  minimumFractionDigits: 0,
  maximumFractionDigits: 0
});

function wordForm(num, word) {
  cases = [2, 0, 1, 1, 1, 2];
  return word[
    num % 100 > 4 && num % 100 < 20 ? 2 : cases[num % 10 < 5 ? num % 10 : 5]
  ];
}

// Слайдер денег
var moneyRangeSliderElem = document.querySelector("[data-money-range-slider]");
var moneyRangevalueElem = document.querySelector("[data-money-range-value]");

var monthsRangeSliderElem = document.querySelector(
  "[data-months-range-slider]"
);
var monthsRangeValueElem = document.querySelector("[data-months-range-value]");
var monthsRangeMeasureElem = document.querySelector(
  "[data-months-range-measure]"
);

var resultValueElem = document.querySelector("[data-result-value]");

noUiSlider.create(moneyRangeSliderElem, {
  start: [200000],
  step: 5000,
  connect: [true, false],
  format: wNumb({
    decimals: 0
  }),
  range: {
    min: 10000000,
    max: 150000000
  }
});

// Слайдер месяцев

noUiSlider.create(monthsRangeSliderElem, {
  start: [3],
  step: 1,
  connect: [true, false],
  format: wNumb({
    decimals: 0
  }),
  range: {
    min: 1,
    max: 18
  }
});

function calcPayment() {
  var moneyValue = parseInt(moneyRangeSliderElem.noUiSlider.get(), 10);
  var monthsValue = parseInt(monthsRangeSliderElem.noUiSlider.get(), 10);

  console.log(-pmt(0.24/12, monthsValue, moneyValue))

  resultValueElem.textContent = numberFormatter.format(
    (moneyValue / monthsValue) + (moneyValue * 2.5/100)
  );
}

moneyRangeSliderElem.noUiSlider.on("update", function(values, handle) {
  moneyRangevalueElem.textContent = numberFormatter.format(values[handle]);

  calcPayment();
});

monthsRangeSliderElem.noUiSlider.on("update", function(values, handle) {
  monthsRangeValueElem.textContent = values[handle];
  monthsRangeMeasureElem.textContent = wordForm(values[handle], [
    "tháng",
    "tháng",
    "tháng"
  ]);

  calcPayment();
});