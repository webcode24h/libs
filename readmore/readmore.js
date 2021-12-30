document.getElementById("brz-columns_readmore").className += " brz-columns_readmore-hidden";
var current = document.getElementsByClassName("brz-columns_readmore-hidden");
var height_current = current[0].clientHeight;
if (height_current > 500) {
current[0].style= "height: 50vh; overflow: hidden";
} else {
    current[0].classList.remove('brz-columns_readmore-hidden');
  }
current[0].addEventListener("click", function() {
current[0].style= "height: auto; overflow: hidden";
current[0].classList.remove('brz-columns_readmore-hidden');
});