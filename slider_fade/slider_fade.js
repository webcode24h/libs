var wtr_slider_id = document.querySelectorAll('.wtr-slider_fade');

for (let i = 0; i < wtr_slider_id.length; i++) {
	wtr_slider_id[i].classList.add('wtr-slider-' + i);
	let slider_id = document.getElementsByClassName('wtr-slider-' + i)[0],
		wtr_slide_item = slider_id.querySelectorAll(".wtr-slide_item"),
		wtr_slide_items = slider_id.querySelector(".brz-column__items"),
		wtr_slide_img = slider_id.querySelectorAll(".brz-img"),
		wtr_current = 0;

	//add dot for slider (delete if not using it)

	let wtr_slide_dots = document.createElement("div");
	wtr_slide_dots.setAttribute("class", "wtr-slide-dots");
	slider_id.appendChild(wtr_slide_dots);

	for (let i = 0; i < wtr_slide_img.length; i++) {
		let wtr_dot_img = document.createElement("img");
		wtr_dot_img.srcset = wtr_slide_img[i].srcset;
		wtr_slide_dots.appendChild(wtr_dot_img);
	}

	// slider fade

	wtr_slide_items.addEventListener("click", function() {
		fade_slide();
	}, setInterval(fade_slide, 9000));

	function fade_slide() {
		for (let i = 0; i < wtr_slide_item.length; i++) {
			wtr_slide_item[i].style.opacity = 0;
		}
		wtr_current = (wtr_current != wtr_slide_item.length - 1) ? wtr_current + 1 : 0;
		wtr_slide_item[wtr_current].style.opacity = 1;
	}

        // add function slideshow goto

	let dots = slider_id.querySelectorAll(".wtr-slide-dots > img");

	for (let j = 0; j < dots.length; j++) {
		dots[j].setAttribute("onclick", `currentSlide(x = ${i + 1},y = ${j + 1})`);
	}
}

// slideshow goto click

function currentSlide(x, y) {
	let slideX = wtr_slider_id[x - 1].querySelectorAll(".wtr-slide_item");
	for (let i = 0; i < slideX.length; i++) {
		slideX[i].style.opacity = 0;
		slideX[y - 1].style.opacity = 1;
	}
}
