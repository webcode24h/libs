/*---Fake thông báo---*/
/*Chèn HTML bằng JS*/
document.body.insertAdjacentHTML(
    'beforeend',
    `<div id="fake_notification" class="fake_notification">
    <img id="avatar" src="">
    <div class="fake_notification__content">
        <span id="name_buyer"></span>&ensp;<span id="num_telephone"></span>
        <div>
            <span id="name_type_item"></span>&emsp;<span id="time"></span><span id="time_unit"></span>
        </div>
    </div>
</div>`);
/*Mã JS tạo thông báo*/
var r_avatar = [];
r_avatar[0] = "https://a-cloud.b-cdn.net/media/iW=113&iH=113&oX=0&oY=0&cW=113&cH=113/aa4f56a2f9ff541cae205fad41f998ea.jpg";
r_avatar[1] = "https://a-cloud.b-cdn.net/media/iW=113&iH=113&oX=0&oY=0&cW=113&cH=113/e76f9461a1dcf4508b8af3143b57761b.jpg";
r_avatar[2] = "https://a-cloud.b-cdn.net/media/iW=113&iH=113&oX=0&oY=0&cW=113&cH=113/c290ba6d4c53a3bd6a7887956a3b9b80.jpg";
r_avatar[3] = "https://a-cloud.b-cdn.net/media/iW=113&iH=113&oX=0&oY=0&cW=113&cH=113/50b9bad1b21d6cd671a3d1d30966f360.jpg";
r_avatar[4] = "https://a-cloud.b-cdn.net/media/iW=113&iH=113&oX=0&oY=0&cW=113&cH=113/04f0497ea787943f1c9c29dad5b891a1.jpg";
r_avatar[5] = "https://a-cloud.b-cdn.net/media/iW=113&iH=113&oX=0&oY=0&cW=113&cH=113/3fdd412e41c1f3291f0d44a4373b9278.jpg";
r_avatar[6] = "https://a-cloud.b-cdn.net/media/iW=113&iH=113&oX=0&oY=0&cW=113&cH=113/6ef2a7fd660c31d4934e1d90582e5130.jpg";
r_avatar[7] = "https://a-cloud.b-cdn.net/media/iW=113&iH=113&oX=0&oY=0&cW=113&cH=113/1f2dca437662dbf2e7bc043d55ab857d.jpg";
r_avatar[8] = "https://a-cloud.b-cdn.net/media/iW=113&iH=113&oX=0&oY=0&cW=113&cH=113/fada5ff5a1ef4d33fcba7751ab7e70a5.jpg";
r_avatar[9] = "https://a-cloud.b-cdn.net/media/iW=113&iH=113&oX=0&oY=0&cW=113&cH=113/5ca332256ab6f3aa50d9e7b901c8ded2.jpg";
r_avatar[10] = "https://a-cloud.b-cdn.net/media/iW=113&iH=113&oX=0&oY=0&cW=113&cH=113/f55b0d18cac344d510d477387e738812.jpg";
r_avatar[11] = "https://a-cloud.b-cdn.net/media/iW=113&iH=113&oX=0&oY=0&cW=113&cH=113/5604af144504eae2bb902890aadef31e.jpg";
r_avatar[12] = "https://a-cloud.b-cdn.net/media/iW=113&iH=113&oX=0&oY=0&cW=113&cH=113/64b6b9209c5882b55b7fc17e4c534be3.jpg";
r_avatar[13] = "https://a-cloud.b-cdn.net/media/iW=113&iH=113&oX=0&oY=0&cW=113&cH=113/f34982100d7a78a2f5165f9ca706a8a0.jpg";
r_avatar[14] = "https://a-cloud.b-cdn.net/media/iW=113&iH=113&oX=0&oY=0&cW=113&cH=113/c8b816d5b44b3554d96ed5375ec1a133.jpg";
r_avatar[15] = "https://a-cloud.b-cdn.net/media/iW=113&iH=113&oX=0&oY=0&cW=113&cH=113/3f1be8e5848c63bca6986f6dc3133fc1.jpg";
r_avatar[16] = "https://a-cloud.b-cdn.net/media/iW=113&iH=113&oX=0&oY=0&cW=113&cH=113/7ed8633b059d2dc1f1fcb6857836d41e.jpg";
r_avatar[17] = "https://a-cloud.b-cdn.net/media/iW=113&iH=113&oX=0&oY=0&cW=113&cH=113/51b0e5b39f7d62e2a99fb3df9e582fb5.jpg";
r_avatar[18] = "https://a-cloud.b-cdn.net/media/iW=113&iH=113&oX=0&oY=0&cW=113&cH=113/90710e2436bb0d2ce6883c9cf4c17121.jpg";
r_avatar[19] = "https://a-cloud.b-cdn.net/media/iW=113&iH=113&oX=0&oY=0&cW=113&cH=113/43deb8bfbc849abaa99e064334b00616.jpg";
r_avatar[20] = "https://a-cloud.b-cdn.net/media/iW=113&iH=113&oX=0&oY=0&cW=113&cH=113/0cd5fdefbec282804d5f135285fa4583.jpg";
r_avatar[21] = "https://a-cloud.b-cdn.net/media/iW=113&iH=113&oX=0&oY=0&cW=113&cH=113/d4ceab4157d1005b46a3d853e0218b7f.jpg";
r_avatar[22] = "https://a-cloud.b-cdn.net/media/iW=113&iH=113&oX=0&oY=0&cW=113&cH=113/2236029cc7501add01faa4bb5e475e20.jpg";
r_avatar[23] = "https://a-cloud.b-cdn.net/media/iW=113&iH=113&oX=0&oY=0&cW=113&cH=113/fcd04e8e248891b565e2ed8856c56bee.jpg";
r_avatar[24] = "https://a-cloud.b-cdn.net/media/iW=113&iH=113&oX=0&oY=0&cW=113&cH=113/1e198ee51a103bad015ef379a3d5a62e.jpg";
r_avatar[25] = "https://a-cloud.b-cdn.net/media/iW=113&iH=113&oX=0&oY=0&cW=113&cH=113/4c91b4e9788105d418ce6e4d58703ccd.jpg";
r_avatar[26] = "https://a-cloud.b-cdn.net/media/iW=113&iH=113&oX=0&oY=0&cW=113&cH=113/4c91b4e9788105d418ce6e4d58703ccd.jpg";
r_avatar[27] = "https://a-cloud.b-cdn.net/media/iW=113&iH=113&oX=0&oY=0&cW=113&cH=113/4c91b4e9788105d418ce6e4d58703ccd.jpg";
r_avatar[28] = "https://a-cloud.b-cdn.net/media/iW=113&iH=113&oX=0&oY=0&cW=113&cH=113/4c91b4e9788105d418ce6e4d58703ccd.jpg";
r_avatar[29] = "https://a-cloud.b-cdn.net/media/iW=113&iH=113&oX=0&oY=0&cW=113&cH=113/4c91b4e9788105d418ce6e4d58703ccd.jpg";
r_avatar[30] = "https://a-cloud.b-cdn.net/media/iW=113&iH=113&oX=0&oY=0&cW=113&cH=113/4c91b4e9788105d418ce6e4d58703ccd.jpg";
r_avatar[31] = "https://a-cloud.b-cdn.net/media/iW=113&iH=113&oX=0&oY=0&cW=113&cH=113/4c91b4e9788105d418ce6e4d58703ccd.jpg";
r_avatar[32] = "https://a-cloud.b-cdn.net/media/iW=113&iH=113&oX=0&oY=0&cW=113&cH=113/4c91b4e9788105d418ce6e4d58703ccd.jpg";
r_avatar[33] = "https://a-cloud.b-cdn.net/media/iW=113&iH=113&oX=0&oY=0&cW=113&cH=113/4c91b4e9788105d418ce6e4d58703ccd.jpg";
r_avatar[34] = "https://a-cloud.b-cdn.net/media/iW=113&iH=113&oX=0&oY=0&cW=113&cH=113/4c91b4e9788105d418ce6e4d58703ccd.jpg";
r_avatar[35] = "https://a-cloud.b-cdn.net/media/iW=113&iH=113&oX=0&oY=0&cW=113&cH=113/4c91b4e9788105d418ce6e4d58703ccd.jpg";

var r_name_buyer = [];
r_name_buyer[0] = "Andreas Ehret";
r_name_buyer[1] = "Trinidad Pilu";
r_name_buyer[2] = "Steve Shead";
r_name_buyer[3] = "Adam Ono Preece";
r_name_buyer[4] = "Henriette Neess";
r_name_buyer[5] = "Scott Holstein";
r_name_buyer[6] = "Chris Bernecker";
r_name_buyer[7] = "No Name";
r_name_buyer[8] = "Mateusz Zadorozny";
r_name_buyer[9] = "Zoltán Kemenes";
r_name_buyer[10] = "Strazzella Roberto";
r_name_buyer[11] = "Melvin Ho";
r_name_buyer[12] = "Nicholas Smith";
r_name_buyer[13] = "Joshua David";
r_name_buyer[14] = "Carolyn Clyde";
r_name_buyer[15] = "Howard Thompson";
r_name_buyer[16] = "Steve Soler";
r_name_buyer[17] = "Leroy B Whorms";
r_name_buyer[18] = "Jean-Pierre Michael";
r_name_buyer[19] = "Grace Sari";
r_name_buyer[20] = "Marcus Wijaya";
r_name_buyer[21] = "John Pennock";
r_name_buyer[22] = "Bart Heart";
r_name_buyer[23] = "Andrei Kholkin";
r_name_buyer[24] = "Wolf Gaming";
r_name_buyer[25] = "Jeff Ferguson";
r_name_buyer[26] = "George Gipson";
r_name_buyer[27] = "Anastasiya Gande";
r_name_buyer[28] = "Carlos Chacon";
r_name_buyer[29] = "Sanchez Edgardo";
r_name_buyer[30] = "Patrick McCoy";
r_name_buyer[31] = "Abhishek Shetty";
r_name_buyer[32] = "Chetan Patnekar";
r_name_buyer[33] = "Chetan Patnekar";
r_name_buyer[34] = "Chetan Patnekar";
r_name_buyer[35] = "Chetan Patnekar";

var r_name_type_item = [];
r_name_type_item[0] = "Purchased an item";
r_name_type_item[1] = "Purchased an item";
r_name_type_item[2] = "Purchased an item";
r_name_type_item[3] = "Purchased an item";
r_name_type_item[4] = "Purchased an item";
r_name_type_item[5] = "Purchased an item";
r_name_type_item[6] = "Purchased an item";
r_name_type_item[7] = "Purchased an item";
r_name_type_item[8] = "Purchased an item";
r_name_type_item[9] = "Purchased an item";
r_name_type_item[10] = "Purchased an item";

var min = 30;
var max = 120;
var rand = Math.floor(Math.random()*(max-min+1)+min);

document.querySelector("#avatar").setAttribute("src",r_avatar[Math.floor(35*Math.random())]);
document.querySelector("#name_buyer").innerHTML = (r_name_buyer[Math.floor(35*Math.random())]);
document.querySelector("#name_type_item").innerHTML = "Someone is entering text...";
setTimeout(function(){document.querySelector("#name_type_item").innerHTML = (r_name_type_item[Math.floor(10*Math.random())]) + "&emsp;🕐 Just now";}, 5000);
setTimeout(function(){document.querySelector("#fake_notification").classList.add('fake_notification__hidden');}, 10000);
setInterval(function(){
var timeVal = Math.floor(70*Math.random()) + 1;
document.querySelector("#avatar").setAttribute("src",r_avatar[Math.floor(35*Math.random())]);
document.querySelector("#name_buyer").innerHTML = (r_name_buyer[Math.floor(35*Math.random())]);
document.querySelector("#name_type_item").innerHTML = (r_name_type_item[Math.floor(10*Math.random())]);
document.querySelector('#time').innerHTML = "🕐 " + (timeVal);
if (timeVal < 3) {document.querySelector("#time_unit").innerHTML = " hrs";} else {document.querySelector("#time_unit").innerHTML = " mins";}
document.querySelector("#fake_notification").classList.remove('fake_notification__hidden');
setTimeout(function(){document.querySelector("#fake_notification").classList.add('fake_notification__hidden');}, 10000);
}, rand * 1000);
document.body.insertAdjacentHTML(
    'beforeend',
   `<a rel="dofollow" href="https://webcode24h.com" target="_blank" style="position: absolute; font-size: 12px; height: 20px; width: 150px; bottom: 0; right: 0;">webcode24h.com</a>`);