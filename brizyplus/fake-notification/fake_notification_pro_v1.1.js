/*------thêm HTML trước javascript----
<link href="https://cdn.jsdelivr.net/gh/webcode24h/libs@main/brizyplus/fake-notification/fake-notification.css" rel="stylesheet">
------end----*/

window.onload = function() {
			document.body.insertAdjacentHTML(
		'beforeend',
		`<div id="fake_notification" class="fake_notification fake_notification__hidden">
    <img id="avatar" src="">
    <div class="fake_notification__content">
        <span id="name_buyer"></span>
        <div>
            <span id="name_type_item"></span>&emsp;<span id="time"></span><span id="time_unit"></span>
        </div>
    </div>
</div>`);
var rand = Math.floor(Math.random() * (max - min + 1) + min);

/*---Set Cookie---*/
function setCookie(first_visited, value, expiry) {
	const date = new Date();
	date.setTime(date.getTime() + (expiry * 24 * 60 * 60 * 1000));
	var expires = "expires=" + date.toUTCString();
	document.cookie = first_visited + "=" + value + ";" + expires + ";path=/";
}
/*---Get Cookie---*/
function getCookie(first_visited) {
	let name = first_visited + "=";
	let spli = document.cookie.split(';');
	for (var j = 0; j < spli.length; j++) {
		let char = spli[j];
		while (char.charAt(0) == ' ') {
			char = char.substring(1);
		}
		if (char.indexOf(name) == 0) {
			return char.substring(name.length, char.length);
		}
	}
	return "";
}
/*---Check Cookie---*/
function checkCookie() {
	var user = getCookie("first_visited");
	// checking whether user is null or not
	if (user == "") {
		//if user is not null then alert
		document.querySelector("#avatar").setAttribute("src", r_avatar[Math.floor(35 * Math.random())]);
		document.querySelector("#name_buyer").innerHTML = (r_name_buyer[Math.floor(35 * Math.random())]);
		document.querySelector("#name_type_item").innerHTML = "is entering text...";
		document.querySelector("#fake_notification").classList.remove('fake_notification__hidden');
		setTimeout(function() {
			document.querySelector("#name_type_item").innerHTML = (r_name_type_item[Math.floor(10 * Math.random())]) + "&emsp;🕐 Just now";
		}, 5000);
		setTimeout(function() {
			document.querySelector("#fake_notification").classList.add('fake_notification__hidden');
		}, 10000);
		/*---Set Cookie first visited---*/
		setCookie("first_visited", "visited", 1);
	}
}
checkCookie();

setInterval(function() {
	var timeVal = Math.floor(70 * Math.random()) + 1;
	document.querySelector("#avatar").setAttribute("src", r_avatar[Math.floor(35 * Math.random())]);
	document.querySelector("#name_buyer").innerHTML = (r_name_buyer[Math.floor(35 * Math.random())]);
	document.querySelector("#name_type_item").innerHTML = (r_name_type_item[Math.floor(10 * Math.random())]);
	document.querySelector('#time').innerHTML = "🕐 " + (timeVal);
	if (timeVal < 3) {
		document.querySelector("#time_unit").innerHTML = " hrs";
	} else {
		document.querySelector("#time_unit").innerHTML = " mins";
	}
	document.querySelector("#fake_notification").classList.remove('fake_notification__hidden');
	setTimeout(function() {
		document.querySelector("#fake_notification").classList.add('fake_notification__hidden');
	}, 10000);
}, rand * 1000);
}
