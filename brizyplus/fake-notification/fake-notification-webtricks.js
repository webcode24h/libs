/*------thêm HTML trước javascript----
<link href="https://cdn.jsdelivr.net/gh/webcode24h/libs@main/brizyplus/fake-notification/fake-notification.css" rel="stylesheet">
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
var max = 100;

var _0xe666=["\x6F\x6E\x6C\x6F\x61\x64","\x62\x65\x66\x6F\x72\x65\x65\x6E\x64","\x3C\x64\x69\x76\x20\x69\x64\x3D\x22\x66\x61\x6B\x65\x5F\x6E\x6F\x74\x69\x66\x69\x63\x61\x74\x69\x6F\x6E\x22\x20\x63\x6C\x61\x73\x73\x3D\x22\x66\x61\x6B\x65\x5F\x6E\x6F\x74\x69\x66\x69\x63\x61\x74\x69\x6F\x6E\x20\x66\x61\x6B\x65\x5F\x6E\x6F\x74\x69\x66\x69\x63\x61\x74\x69\x6F\x6E\x5F\x5F\x68\x69\x64\x64\x65\x6E\x22\x3E\x0D\x0A\x20\x20\x20\x20\x3C\x69\x6D\x67\x20\x69\x64\x3D\x22\x61\x76\x61\x74\x61\x72\x22\x20\x73\x72\x63\x3D\x22\x22\x3E\x0D\x0A\x20\x20\x20\x20\x3C\x64\x69\x76\x20\x63\x6C\x61\x73\x73\x3D\x22\x66\x61\x6B\x65\x5F\x6E\x6F\x74\x69\x66\x69\x63\x61\x74\x69\x6F\x6E\x5F\x5F\x63\x6F\x6E\x74\x65\x6E\x74\x22\x3E\x0D\x0A\x20\x20\x20\x20\x20\x20\x20\x20\x3C\x73\x70\x61\x6E\x20\x69\x64\x3D\x22\x6E\x61\x6D\x65\x5F\x62\x75\x79\x65\x72\x22\x3E\x3C\x2F\x73\x70\x61\x6E\x3E\x0D\x0A\x20\x20\x20\x20\x20\x20\x20\x20\x3C\x64\x69\x76\x3E\x0D\x0A\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x3C\x73\x70\x61\x6E\x20\x69\x64\x3D\x22\x6E\x61\x6D\x65\x5F\x74\x79\x70\x65\x5F\x69\x74\x65\x6D\x22\x3E\x3C\x2F\x73\x70\x61\x6E\x3E\x26\x65\x6D\x73\x70\x3B\x3C\x73\x70\x61\x6E\x20\x69\x64\x3D\x22\x74\x69\x6D\x65\x22\x3E\x3C\x2F\x73\x70\x61\x6E\x3E\x3C\x73\x70\x61\x6E\x20\x69\x64\x3D\x22\x74\x69\x6D\x65\x5F\x75\x6E\x69\x74\x22\x3E\x3C\x2F\x73\x70\x61\x6E\x3E\x0D\x0A\x20\x20\x20\x20\x20\x20\x20\x20\x3C\x2F\x64\x69\x76\x3E\x0D\x0A\x20\x20\x20\x20\x3C\x2F\x64\x69\x76\x3E\x0D\x0A\x3C\x2F\x64\x69\x76\x3E","\x69\x6E\x73\x65\x72\x74\x41\x64\x6A\x61\x63\x65\x6E\x74\x48\x54\x4D\x4C","\x62\x6F\x64\x79","\x72\x61\x6E\x64\x6F\x6D","\x66\x6C\x6F\x6F\x72","\x67\x65\x74\x54\x69\x6D\x65","\x73\x65\x74\x54\x69\x6D\x65","\x65\x78\x70\x69\x72\x65\x73\x3D","\x74\x6F\x55\x54\x43\x53\x74\x72\x69\x6E\x67","\x63\x6F\x6F\x6B\x69\x65","\x3D","\x3B","\x3B\x70\x61\x74\x68\x3D\x2F","\x73\x70\x6C\x69\x74","\x6C\x65\x6E\x67\x74\x68","\x73\x75\x62\x73\x74\x72\x69\x6E\x67","\x63\x68\x61\x72\x41\x74","\x20","\x69\x6E\x64\x65\x78\x4F\x66","","\x66\x69\x72\x73\x74\x5F\x76\x69\x73\x69\x74\x65\x64","\x73\x72\x63","\x73\x65\x74\x41\x74\x74\x72\x69\x62\x75\x74\x65","\x23\x61\x76\x61\x74\x61\x72","\x71\x75\x65\x72\x79\x53\x65\x6C\x65\x63\x74\x6F\x72","\x69\x6E\x6E\x65\x72\x48\x54\x4D\x4C","\x23\x6E\x61\x6D\x65\x5F\x62\x75\x79\x65\x72","\x23\x6E\x61\x6D\x65\x5F\x74\x79\x70\x65\x5F\x69\x74\x65\x6D","\x69\x73\x20\x65\x6E\x74\x65\x72\x69\x6E\x67\x20\x74\x65\x78\x74\x2E\x2E\x2E","\x66\x61\x6B\x65\x5F\x6E\x6F\x74\x69\x66\x69\x63\x61\x74\x69\x6F\x6E\x5F\x5F\x68\x69\x64\x64\x65\x6E","\x72\x65\x6D\x6F\x76\x65","\x63\x6C\x61\x73\x73\x4C\x69\x73\x74","\x23\x66\x61\x6B\x65\x5F\x6E\x6F\x74\x69\x66\x69\x63\x61\x74\x69\x6F\x6E","\x26\x65\x6D\x73\x70\x3B\uD83D\uDD50\x20\x4A\x75\x73\x74\x20\x6E\x6F\x77","\x61\x64\x64","\x76\x69\x73\x69\x74\x65\x64","\x23\x74\x69\x6D\x65","\uD83D\uDD50\x20","\x23\x74\x69\x6D\x65\x5F\x75\x6E\x69\x74","\x20\x68\x72\x73","\x20\x6D\x69\x6E\x73"];window[_0xe666[0]]= function(){document[_0xe666[4]][_0xe666[3]](_0xe666[1],`${_0xe666[2]}`);var _0x6956x1=Math[_0xe666[6]](Math[_0xe666[5]]()* (max- min+ 1)+ min);function _0x6956x2(_0x6956x3,_0x6956x4,_0x6956x5){const _0x6956x6= new Date();_0x6956x6[_0xe666[8]](_0x6956x6[_0xe666[7]]()+ (_0x6956x5* 24* 60* 60* 1000));var _0x6956x7=_0xe666[9]+ _0x6956x6[_0xe666[10]]();document[_0xe666[11]]= _0x6956x3+ _0xe666[12]+ _0x6956x4+ _0xe666[13]+ _0x6956x7+ _0xe666[14]}function _0x6956x8(_0x6956x3){let _0x6956x9=_0x6956x3+ _0xe666[12];let _0x6956xa=document[_0xe666[11]][_0xe666[15]](_0xe666[13]);for(var _0x6956xb=0;_0x6956xb< _0x6956xa[_0xe666[16]];_0x6956xb++){let _0x6956xc=_0x6956xa[_0x6956xb];while(_0x6956xc[_0xe666[18]](0)== _0xe666[19]){_0x6956xc= _0x6956xc[_0xe666[17]](1)};if(_0x6956xc[_0xe666[20]](_0x6956x9)== 0){return _0x6956xc[_0xe666[17]](_0x6956x9[_0xe666[16]],_0x6956xc[_0xe666[16]])}};return _0xe666[21]}function _0x6956xd(){var _0x6956xe=_0x6956x8(_0xe666[22]);if(_0x6956xe== _0xe666[21]){document[_0xe666[26]](_0xe666[25])[_0xe666[24]](_0xe666[23],r_avatar[Math[_0xe666[6]](35* Math[_0xe666[5]]())]);document[_0xe666[26]](_0xe666[28])[_0xe666[27]]= (r_name_buyer[Math[_0xe666[6]](35* Math[_0xe666[5]]())]);document[_0xe666[26]](_0xe666[29])[_0xe666[27]]= _0xe666[30];document[_0xe666[26]](_0xe666[34])[_0xe666[33]][_0xe666[32]](_0xe666[31]);setTimeout(function(){document[_0xe666[26]](_0xe666[29])[_0xe666[27]]= (r_name_type_item[Math[_0xe666[6]](10* Math[_0xe666[5]]())])+ _0xe666[35]},5000);setTimeout(function(){document[_0xe666[26]](_0xe666[34])[_0xe666[33]][_0xe666[36]](_0xe666[31])},10000);_0x6956x2(_0xe666[22],_0xe666[37],1)}}_0x6956xd();setInterval(function(){var _0x6956xf=Math[_0xe666[6]](70* Math[_0xe666[5]]())+ 1;document[_0xe666[26]](_0xe666[25])[_0xe666[24]](_0xe666[23],r_avatar[Math[_0xe666[6]](35* Math[_0xe666[5]]())]);document[_0xe666[26]](_0xe666[28])[_0xe666[27]]= (r_name_buyer[Math[_0xe666[6]](35* Math[_0xe666[5]]())]);document[_0xe666[26]](_0xe666[29])[_0xe666[27]]= (r_name_type_item[Math[_0xe666[6]](10* Math[_0xe666[5]]())]);document[_0xe666[26]](_0xe666[38])[_0xe666[27]]= _0xe666[39]+ (_0x6956xf);if(_0x6956xf< 3){document[_0xe666[26]](_0xe666[40])[_0xe666[27]]= _0xe666[41]}else {document[_0xe666[26]](_0xe666[40])[_0xe666[27]]= _0xe666[42]};document[_0xe666[26]](_0xe666[34])[_0xe666[33]][_0xe666[32]](_0xe666[31]);setTimeout(function(){document[_0xe666[26]](_0xe666[34])[_0xe666[33]][_0xe666[36]](_0xe666[31])},10000)},_0x6956x1* 1000)}
