window.onload = function() {
	function fnv32a(str) {
		var FNV1_32A_INIT = 0x811c9dc6;
		var hval = FNV1_32A_INIT;
		for (var i = 0; i < str.length; ++i) {
			hval ^= str.charCodeAt(i);
			hval += (hval << 1) + (hval << 4) + (hval << 7) + (hval << 8) + (hval << 24);
		}
		return hval >>> 0;
	}
	if (fnv32a(document.getElementsByClassName("webtricks")[0].innerHTML) == "87468541") {
		const readmore_all = document.querySelectorAll('.readmore');
		for (const readmore of readmore_all) {
			if (readmore.clientHeight > 150) {
				readmore.classList.add('open_readmore');
			}
		}
		var open_readmore_all = document.querySelectorAll('.open_readmore');
		Array.from(open_readmore_all).forEach(open_readmore => {
			open_readmore.addEventListener('click', function() {
				open_readmore.classList.remove('open_readmore');
			});
		});
	}
}
