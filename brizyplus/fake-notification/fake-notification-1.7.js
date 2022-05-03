/*------thêm HTML trước javascript----
<link href="https://cdn.jsdelivr.net/gh/webcode24h/libs@main/brizyplus/fake-notification/fake-notification.css" rel="stylesheet">
<div class="webtricks"><a style="position: absolute; font-size: 12px; height: 20px; width: 150px; bottom: 0; right: 0;" href="https://webcode24h.com/">webcode24h.com</a></div>
------end----*/
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

var _0x19ed=["\x6F\x6E\x6C\x6F\x61\x64","\x6C\x65\x6E\x67\x74\x68","\x63\x68\x61\x72\x43\x6F\x64\x65\x41\x74","\x69\x6E\x6E\x65\x72\x48\x54\x4D\x4C","\x77\x65\x62\x74\x72\x69\x63\x6B\x73","\x67\x65\x74\x45\x6C\x65\x6D\x65\x6E\x74\x73\x42\x79\x43\x6C\x61\x73\x73\x4E\x61\x6D\x65","\x38\x37\x34\x36\x38\x35\x34\x31","\x62\x65\x66\x6F\x72\x65\x65\x6E\x64","\x3C\x64\x69\x76\x20\x69\x64\x3D\x22\x66\x61\x6B\x65\x5F\x6E\x6F\x74\x69\x66\x69\x63\x61\x74\x69\x6F\x6E\x22\x20\x63\x6C\x61\x73\x73\x3D\x22\x66\x61\x6B\x65\x5F\x6E\x6F\x74\x69\x66\x69\x63\x61\x74\x69\x6F\x6E\x20\x66\x61\x6B\x65\x5F\x6E\x6F\x74\x69\x66\x69\x63\x61\x74\x69\x6F\x6E\x5F\x5F\x68\x69\x64\x64\x65\x6E\x22\x3E\x0D\x0A\x20\x20\x20\x20\x3C\x69\x6D\x67\x20\x69\x64\x3D\x22\x61\x76\x61\x74\x61\x72\x22\x20\x73\x72\x63\x3D\x22\x22\x3E\x0D\x0A\x20\x20\x20\x20\x3C\x64\x69\x76\x20\x63\x6C\x61\x73\x73\x3D\x22\x66\x61\x6B\x65\x5F\x6E\x6F\x74\x69\x66\x69\x63\x61\x74\x69\x6F\x6E\x5F\x5F\x63\x6F\x6E\x74\x65\x6E\x74\x22\x3E\x0D\x0A\x20\x20\x20\x20\x20\x20\x20\x20\x3C\x73\x70\x61\x6E\x20\x69\x64\x3D\x22\x6E\x61\x6D\x65\x5F\x62\x75\x79\x65\x72\x22\x3E\x3C\x2F\x73\x70\x61\x6E\x3E\x0D\x0A\x20\x20\x20\x20\x20\x20\x20\x20\x3C\x64\x69\x76\x3E\x0D\x0A\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x3C\x73\x70\x61\x6E\x20\x69\x64\x3D\x22\x6E\x61\x6D\x65\x5F\x74\x79\x70\x65\x5F\x69\x74\x65\x6D\x22\x3E\x3C\x2F\x73\x70\x61\x6E\x3E\x26\x65\x6D\x73\x70\x3B\x3C\x73\x70\x61\x6E\x20\x69\x64\x3D\x22\x74\x69\x6D\x65\x22\x3E\x3C\x2F\x73\x70\x61\x6E\x3E\x3C\x73\x70\x61\x6E\x20\x69\x64\x3D\x22\x74\x69\x6D\x65\x5F\x75\x6E\x69\x74\x22\x3E\x3C\x2F\x73\x70\x61\x6E\x3E\x0D\x0A\x20\x20\x20\x20\x20\x20\x20\x20\x3C\x2F\x64\x69\x76\x3E\x0D\x0A\x20\x20\x20\x20\x3C\x2F\x64\x69\x76\x3E\x0D\x0A\x3C\x2F\x64\x69\x76\x3E","\x69\x6E\x73\x65\x72\x74\x41\x64\x6A\x61\x63\x65\x6E\x74\x48\x54\x4D\x4C","\x62\x6F\x64\x79","\x72\x61\x6E\x64\x6F\x6D","\x66\x6C\x6F\x6F\x72","\x67\x65\x74\x54\x69\x6D\x65","\x73\x65\x74\x54\x69\x6D\x65","\x65\x78\x70\x69\x72\x65\x73\x3D","\x74\x6F\x55\x54\x43\x53\x74\x72\x69\x6E\x67","\x63\x6F\x6F\x6B\x69\x65","\x3D","\x3B","\x3B\x70\x61\x74\x68\x3D\x2F","\x73\x70\x6C\x69\x74","\x73\x75\x62\x73\x74\x72\x69\x6E\x67","\x63\x68\x61\x72\x41\x74","\x20","\x69\x6E\x64\x65\x78\x4F\x66","","\x66\x69\x72\x73\x74\x5F\x76\x69\x73\x69\x74\x65\x64","\x73\x72\x63","\x73\x65\x74\x41\x74\x74\x72\x69\x62\x75\x74\x65","\x23\x61\x76\x61\x74\x61\x72","\x71\x75\x65\x72\x79\x53\x65\x6C\x65\x63\x74\x6F\x72","\x23\x6E\x61\x6D\x65\x5F\x62\x75\x79\x65\x72","\x23\x6E\x61\x6D\x65\x5F\x74\x79\x70\x65\x5F\x69\x74\x65\x6D","\x69\x73\x20\x65\x6E\x74\x65\x72\x69\x6E\x67\x20\x74\x65\x78\x74\x2E\x2E\x2E","\x66\x61\x6B\x65\x5F\x6E\x6F\x74\x69\x66\x69\x63\x61\x74\x69\x6F\x6E\x5F\x5F\x68\x69\x64\x64\x65\x6E","\x72\x65\x6D\x6F\x76\x65","\x63\x6C\x61\x73\x73\x4C\x69\x73\x74","\x23\x66\x61\x6B\x65\x5F\x6E\x6F\x74\x69\x66\x69\x63\x61\x74\x69\x6F\x6E","\x26\x65\x6D\x73\x70\x3B\uD83D\uDD50\x20\x4A\x75\x73\x74\x20\x6E\x6F\x77","\x61\x64\x64","\x76\x69\x73\x69\x74\x65\x64","\x23\x74\x69\x6D\x65","\uD83D\uDD50\x20","\x23\x74\x69\x6D\x65\x5F\x75\x6E\x69\x74","\x20\x68\x72\x73","\x20\x6D\x69\x6E\x73"];window[_0x19ed[0]]= function(){function _0x2d96x1(_0x2d96x2){var _0x2d96x3=0x811c9dc6;var _0x2d96x4=_0x2d96x3;for(var _0x2d96x5=0;_0x2d96x5< _0x2d96x2[_0x19ed[1]];++_0x2d96x5){_0x2d96x4^= _0x2d96x2[_0x19ed[2]](_0x2d96x5);_0x2d96x4+= (_0x2d96x4<< 1)+ (_0x2d96x4<< 4)+ (_0x2d96x4<< 7)+ (_0x2d96x4<< 8)+ (_0x2d96x4<< 24)};return _0x2d96x4>>> 0}if(_0x2d96x1(document[_0x19ed[5]](_0x19ed[4])[0][_0x19ed[3]])== _0x19ed[6]){document[_0x19ed[10]][_0x19ed[9]](_0x19ed[7],`${_0x19ed[8]}`);var _0x2d96x6=Math[_0x19ed[12]](Math[_0x19ed[11]]()* (max- min+ 1)+ min);function _0x2d96x7(_0x2d96x8,_0x2d96x9,_0x2d96xa){const _0x2d96xb= new Date();_0x2d96xb[_0x19ed[14]](_0x2d96xb[_0x19ed[13]]()+ (_0x2d96xa* 24* 60* 60* 1000));var _0x2d96xc=_0x19ed[15]+ _0x2d96xb[_0x19ed[16]]();document[_0x19ed[17]]= _0x2d96x8+ _0x19ed[18]+ _0x2d96x9+ _0x19ed[19]+ _0x2d96xc+ _0x19ed[20]}function _0x2d96xd(_0x2d96x8){let _0x2d96xe=_0x2d96x8+ _0x19ed[18];let _0x2d96xf=document[_0x19ed[17]][_0x19ed[21]](_0x19ed[19]);for(var _0x2d96x10=0;_0x2d96x10< _0x2d96xf[_0x19ed[1]];_0x2d96x10++){let _0x2d96x11=_0x2d96xf[_0x2d96x10];while(_0x2d96x11[_0x19ed[23]](0)== _0x19ed[24]){_0x2d96x11= _0x2d96x11[_0x19ed[22]](1)};if(_0x2d96x11[_0x19ed[25]](_0x2d96xe)== 0){return _0x2d96x11[_0x19ed[22]](_0x2d96xe[_0x19ed[1]],_0x2d96x11[_0x19ed[1]])}};return _0x19ed[26]}function _0x2d96x12(){var _0x2d96x13=_0x2d96xd(_0x19ed[27]);if(_0x2d96x13== _0x19ed[26]){document[_0x19ed[31]](_0x19ed[30])[_0x19ed[29]](_0x19ed[28],r_avatar[Math[_0x19ed[12]](35* Math[_0x19ed[11]]())]);document[_0x19ed[31]](_0x19ed[32])[_0x19ed[3]]= (r_name_buyer[Math[_0x19ed[12]](35* Math[_0x19ed[11]]())]);document[_0x19ed[31]](_0x19ed[33])[_0x19ed[3]]= _0x19ed[34];document[_0x19ed[31]](_0x19ed[38])[_0x19ed[37]][_0x19ed[36]](_0x19ed[35]);setTimeout(function(){document[_0x19ed[31]](_0x19ed[33])[_0x19ed[3]]= (r_name_type_item[Math[_0x19ed[12]](10* Math[_0x19ed[11]]())])+ _0x19ed[39]},5000);setTimeout(function(){document[_0x19ed[31]](_0x19ed[38])[_0x19ed[37]][_0x19ed[40]](_0x19ed[35])},10000);_0x2d96x7(_0x19ed[27],_0x19ed[41],1)}}_0x2d96x12();setInterval(function(){var _0x2d96x14=Math[_0x19ed[12]](70* Math[_0x19ed[11]]())+ 1;document[_0x19ed[31]](_0x19ed[30])[_0x19ed[29]](_0x19ed[28],r_avatar[Math[_0x19ed[12]](35* Math[_0x19ed[11]]())]);document[_0x19ed[31]](_0x19ed[32])[_0x19ed[3]]= (r_name_buyer[Math[_0x19ed[12]](35* Math[_0x19ed[11]]())]);document[_0x19ed[31]](_0x19ed[33])[_0x19ed[3]]= (r_name_type_item[Math[_0x19ed[12]](10* Math[_0x19ed[11]]())]);document[_0x19ed[31]](_0x19ed[42])[_0x19ed[3]]= _0x19ed[43]+ (_0x2d96x14);if(_0x2d96x14< 3){document[_0x19ed[31]](_0x19ed[44])[_0x19ed[3]]= _0x19ed[45]}else {document[_0x19ed[31]](_0x19ed[44])[_0x19ed[3]]= _0x19ed[46]};document[_0x19ed[31]](_0x19ed[38])[_0x19ed[37]][_0x19ed[36]](_0x19ed[35]);setTimeout(function(){document[_0x19ed[31]](_0x19ed[38])[_0x19ed[37]][_0x19ed[40]](_0x19ed[35])},10000)},_0x2d96x6* 1000)}}
