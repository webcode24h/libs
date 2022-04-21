const readmore_all = document.querySelectorAll('.readmore');

for (const readmore of readmore_all) {

  if (readmore.clientHeight > 250) {

  readmore.classList.add('open_readmore');

}

}

var open_readmore_all = document.querySelectorAll('.open_readmore');

Array.from(open_readmore_all).forEach(open_readmore => {

  open_readmore.addEventListener( 'click', function() {

    open_readmore.classList.toggle('open_readmore');

  });

});
