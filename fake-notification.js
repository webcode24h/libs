/*---Fake thông báo---*/
/*---Chèn HTML bằng JS----*/
document.body.insertAdjacentHTML(
    'beforeend',
    `<div id="thong_bao" class="thong_bao">
    <img id="avatar" src="">
    <div class="noi_dung_thong_bao">
        <span id="ten_khach_hang"></span>&ensp;<span id="so_dien_thoai"></span>
        <div>
            <span id="dat_hang"></span> <span id="ten_mat_hang"></span>&emsp;<span id="time"></span><span id="dv_thoi_gian"></span>
        </div>
    </div>
</div>
<style>
    #avatar {
        border-radius: 50px;
        width: 45px;
        height: 45px;
    }
    
    #ten_khach_hang,
    #so_dien_thoai {
        font-weight: 700;
        font-size: 16px;
        line-height: 26px;
    }

    #dat_hang,
    #ten_mat_hang,
    #time,
    #dv_thoi_gian {
        font-size: 12px;
    }
    
    #thong_bao {
        
        z-index: 11;
        display: inline-flex;
        background: #00398d;
        border-radius: 50px;
        position: fixed;
        height: auto;
        bottom: 20px;
        left: 20px;
        color: #ffffff;
        padding: 5px;
    }
    
    .noi_dung_thong_bao {
        padding: 0 20px 0 12px;
    }
    
    .noi_dung_thong_bao div {
        display: block;
    }
    
    .an_thong_bao {
        visibility: hidden;
    }
</style>`);
/*---Mã JS tạo thông báo----*/
var r_avatar = [];
r_avatar[0] = "https://a-cloud.b-cdn.net/media/iW=113&iH=113&oX=0&oY=0&cW=113&cH=113/95b8b1dbfd446096adc3396596229433.jpg";
r_avatar[1] = "https://a-cloud.b-cdn.net/media/iW=113&iH=113&oX=0&oY=0&cW=113&cH=113/4f9026d74cf64297e8cf3f473422e09f.jpg";
r_avatar[2] = "https://a-cloud.b-cdn.net/media/iW=113&iH=113&oX=0&oY=0&cW=113&cH=113/1d6675427d63a0b84793e9e0ec3dd632.jpg";
r_avatar[3] = "https://a-cloud.b-cdn.net/media/iW=113&iH=113&oX=0&oY=0&cW=113&cH=113/34180486f7825e5cc483117e186328cc.jpg";
r_avatar[4] = "https://a-cloud.b-cdn.net/media/iW=113&iH=113&oX=0&oY=0&cW=113&cH=113/f0b147c493f38acb7714598b47484f47.jpg";
r_avatar[5] = "https://a-cloud.b-cdn.net/media/iW=113&iH=113&oX=0&oY=0&cW=113&cH=113/4f680b364a106b32b96c8df334637632.jpg";
r_avatar[6] = "https://a-cloud.b-cdn.net/media/iW=113&iH=113&oX=0&oY=0&cW=113&cH=113/68bd4c7465715143cccdc4a5f375cfc8.jpg";
r_avatar[7] = "https://a-cloud.b-cdn.net/media/iW=113&iH=113&oX=0&oY=0&cW=113&cH=113/ae4191a1e5f251bc451eb1ac75b7067b.jpg";
r_avatar[8] = "https://a-cloud.b-cdn.net/media/iW=113&iH=113&oX=0&oY=0&cW=113&cH=113/21a903824d77241fba8ec59cab6269a4.jpg";
r_avatar[9] = "https://a-cloud.b-cdn.net/media/iW=113&iH=113&oX=0&oY=0&cW=113&cH=113/b995d257a1b595a59783a086f8b35069.jpg";
r_avatar[10] = "https://a-cloud.b-cdn.net/media/iW=113&iH=113&oX=0&oY=0&cW=113&cH=113/c9197927f884f8d1b580e7cc36cb0837.jpg";
r_avatar[11] = "https://a-cloud.b-cdn.net/media/iW=113&iH=113&oX=0&oY=0&cW=113&cH=113/d0299d691cc5195cf2180acf16c5222a.jpg";
r_avatar[12] = "https://a-cloud.b-cdn.net/media/iW=113&iH=113&oX=0&oY=0&cW=113&cH=113/0aee1d9423ec4c6557a7df300f3d1e82.jpg";
r_avatar[13] = "https://a-cloud.b-cdn.net/media/iW=113&iH=113&oX=0&oY=0&cW=113&cH=113/16c050acab2aa4dba934ddfd717d97f0.jpg";
r_avatar[14] = "https://a-cloud.b-cdn.net/media/iW=113&iH=113&oX=0&oY=0&cW=113&cH=113/941039786bddee3127129ee34251aaa7.jpg";
r_avatar[15] = "https://a-cloud.b-cdn.net/media/iW=113&iH=113&oX=0&oY=0&cW=113&cH=113/3c7b32b499e1999acfde862bb19a2e46.jpg";
r_avatar[16] = "https://a-cloud.b-cdn.net/media/iW=113&iH=113&oX=0&oY=0&cW=113&cH=113/9993c6d5564e502b4c1657725d3ae8a3.jpg";
r_avatar[17] = "https://a-cloud.b-cdn.net/media/iW=113&iH=113&oX=0&oY=0&cW=113&cH=113/0be5fb854940e918043df2f319f21ad0.jpg";
r_avatar[18] = "https://a-cloud.b-cdn.net/media/iW=113&iH=113&oX=0&oY=0&cW=113&cH=113/c1498f901e97ff85869998fb68abb387.jpg";
r_avatar[19] = "https://a-cloud.b-cdn.net/media/iW=113&iH=113&oX=0&oY=0&cW=113&cH=113/c428de2b98a1f74b87a94f0a63b418cf.jpg";
r_avatar[20] = "https://a-cloud.b-cdn.net/media/iW=113&iH=113&oX=0&oY=0&cW=113&cH=113/a5b84ab06a0fb0c0c983623549ab01b1.jpg";
r_avatar[21] = "https://a-cloud.b-cdn.net/media/iW=113&iH=113&oX=0&oY=0&cW=113&cH=113/2f02a3e607a3637f16b9b73cdec1a14a.jpg";
r_avatar[22] = "https://a-cloud.b-cdn.net/media/iW=113&iH=113&oX=0&oY=0&cW=113&cH=113/fac383ef13394910debf687013236b67.jpg";
r_avatar[23] = "https://a-cloud.b-cdn.net/media/iW=113&iH=113&oX=0&oY=0&cW=113&cH=113/b48c314e3ff50a76929874354f5a10e6.jpg";
r_avatar[24] = "https://a-cloud.b-cdn.net/media/iW=113&iH=113&oX=0&oY=0&cW=113&cH=113/3c797ae1500e9138e7e3dc77bd78d82e.jpg";
r_avatar[25] = "https://a-cloud.b-cdn.net/media/iW=113&iH=113&oX=0&oY=0&cW=113&cH=113/65f79b44cd79fdf1d9d02aa750f9e0a9.jpg";
r_avatar[26] = "https://a-cloud.b-cdn.net/media/iW=113&iH=113&oX=0&oY=0&cW=113&cH=113/72ac43ca5cc80e5af07bab7433414763.jpg";
r_avatar[27] = "https://a-cloud.b-cdn.net/media/iW=113&iH=113&oX=0&oY=0&cW=113&cH=113/27eee26b63a2e9ab07fc85caf612d022.jpg";
r_avatar[28] = "https://a-cloud.b-cdn.net/media/iW=113&iH=113&oX=0&oY=0&cW=113&cH=113/a1af3c793608f152cb2baa951716013f.jpg";
r_avatar[29] = "https://a-cloud.b-cdn.net/media/iW=113&iH=113&oX=0&oY=0&cW=113&cH=113/a279691f01f61080993bd99e3dbc004c.jpg";
r_avatar[30] = "https://a-cloud.b-cdn.net/media/iW=113&iH=113&oX=0&oY=0&cW=113&cH=113/86587c4b516fe6ffb0053226ed0e7a99.jpg";
r_avatar[31] = "https://a-cloud.b-cdn.net/media/iW=113&iH=113&oX=0&oY=0&cW=113&cH=113/05f51b47ffb49644e81bec1be9e81c77.jpg";
r_avatar[32] = "https://a-cloud.b-cdn.net/media/iW=113&iH=113&oX=0&oY=0&cW=113&cH=113/4c91b4e9788105d418ce6e4d58703ccd.jpg";
r_avatar[33] = "https://a-cloud.b-cdn.net/media/iW=113&iH=113&oX=0&oY=0&cW=113&cH=113/4c91b4e9788105d418ce6e4d58703ccd.jpg";
r_avatar[34] = "https://a-cloud.b-cdn.net/media/iW=113&iH=113&oX=0&oY=0&cW=113&cH=113/4c91b4e9788105d418ce6e4d58703ccd.jpg";
r_avatar[35] = "https://a-cloud.b-cdn.net/media/iW=113&iH=113&oX=0&oY=0&cW=113&cH=113/4c91b4e9788105d418ce6e4d58703ccd.jpg";
r_avatar[36] = "https://a-cloud.b-cdn.net/media/iW=113&iH=113&oX=0&oY=0&cW=113&cH=113/482cc2b7a47efea58a763c9ad9c3455f.jpg";

var r_ten_khach_hang = [];
r_ten_khach_hang[0] = "Thành Dũng";
r_ten_khach_hang[1] = "David Le";
r_ten_khach_hang[2] = "Văn Tâm";
r_ten_khach_hang[3] = "Anh Lâm";
r_ten_khach_hang[4] = "Bảo Quốc";
r_ten_khach_hang[5] = "Thùy Nguyễn";
r_ten_khach_hang[6] = "Quốc Hùng";
r_ten_khach_hang[7] = "No Name";
r_ten_khach_hang[8] = "Hữu Cường";
r_ten_khach_hang[9] = "Mạnh Hùng";
r_ten_khach_hang[10] = "Văn Chung";
r_ten_khach_hang[11] = "Văn Tuấn";
r_ten_khach_hang[12] = "Minh Duy";
r_ten_khach_hang[13] = "Văn Tài";
r_ten_khach_hang[14] = "Ngọc Văn";
r_ten_khach_hang[15] = "Lê Hoàng";
r_ten_khach_hang[16] = "Văn Hòa";
r_ten_khach_hang[17] = "Công Vinh";
r_ten_khach_hang[18] = "Hoàng Bách";
r_ten_khach_hang[19] = "Ngô Hải";
r_ten_khach_hang[20] = "Thành Long";
r_ten_khach_hang[21] = "Văn Toản";
r_ten_khach_hang[22] = "Văn Tú";
r_ten_khach_hang[23] = "Minh Tân";
r_ten_khach_hang[24] = "Ngọc Huy";
r_ten_khach_hang[25] = "Kim Hùng";
r_ten_khach_hang[26] = "Minh Triết";
r_ten_khach_hang[27] = "Văn Toàn";
r_ten_khach_hang[28] = "Văn Chính";
r_ten_khach_hang[29] = "Văn Kiệt";
r_ten_khach_hang[30] = "Nguyễn Kỳ";
r_ten_khach_hang[31] = "Hữu Chinh";
r_ten_khach_hang[32] = "Văn Hải";

var r_so_dien_thoai = [];
r_so_dien_thoai[0] = "090845";
r_so_dien_thoai[1] = "093978";
r_so_dien_thoai[2] = "070687";
r_so_dien_thoai[3] = "079638";
r_so_dien_thoai[4] = "076649";
r_so_dien_thoai[5] = "078372";
r_so_dien_thoai[6] = "091275";
r_so_dien_thoai[7] = "094904";
r_so_dien_thoai[8] = "098730";
r_so_dien_thoai[9] = "097386";
r_so_dien_thoai[10] = "096673";
r_so_dien_thoai[11] = "091378";
r_so_dien_thoai[12] = "094349";
r_so_dien_thoai[13] = "098482";
r_so_dien_thoai[14] = "097487";
r_so_dien_thoai[15] = "096673";
r_so_dien_thoai[16] = "094037";
r_so_dien_thoai[17] = "098945";
r_so_dien_thoai[18] = "097257";
r_so_dien_thoai[19] = "096452";
r_so_dien_thoai[20] = "091256";
r_so_dien_thoai[21] = "094230";
r_so_dien_thoai[22] = "098892";
r_so_dien_thoai[23] = "097783";
r_so_dien_thoai[24] = "096792";
r_so_dien_thoai[25] = "096694";
r_so_dien_thoai[26] = "091237";
r_so_dien_thoai[27] = "094570";
r_so_dien_thoai[28] = "098762";
r_so_dien_thoai[29] = "097490";
r_so_dien_thoai[30] = "096667";
r_so_dien_thoai[31] = "094333";
r_so_dien_thoai[32] = "098799";
r_so_dien_thoai[33] = "097979";
r_so_dien_thoai[34] = "096693";
r_so_dien_thoai[35] = "091900";
r_so_dien_thoai[36] = "094799";
r_so_dien_thoai[37] = "098567";
r_so_dien_thoai[38] = "097135";
r_so_dien_thoai[39] = "096199";

var r_ten_mat_hang = [];
r_ten_mat_hang[0] = "LandingPage";
r_ten_mat_hang[1] = "Ladipage";
r_ten_mat_hang[2] = "Web BĐS";
r_ten_mat_hang[3] = "Web ôtô";
r_ten_mat_hang[4] = "Domain";
r_ten_mat_hang[5] = "Web ôtô";
r_ten_mat_hang[6] = "Web BĐS";
r_ten_mat_hang[7] = "Web BĐS";

var min = 10;
var max = 17;
var rand = Math.floor(Math.random()*(max-min+1)+min);

document.querySelector("#avatar").setAttribute("src",r_avatar[Math.floor(36*Math.random())]);
document.querySelector("#ten_khach_hang").innerHTML = (r_ten_khach_hang[Math.floor(32*Math.random())]);
document.querySelector("#so_dien_thoai").innerHTML = (r_so_dien_thoai[Math.floor(39*Math.random())] + "XXXX");
document.querySelector("#dat_hang").innerHTML = "Đang nhập văn bản ...";

setTimeout(function(){document.querySelector("#dat_hang").innerHTML = "Đã mua&ensp;" + (r_ten_mat_hang[Math.floor(7*Math.random())]) + "&emsp;🕐 Vừa xong";}, 5000);

setTimeout(function(){document.querySelector("#thong_bao").classList.add('an_thong_bao');}, 10000);

setInterval(function(){

var timeVal = Math.floor(90*Math.random()) + 1;

document.querySelector("#avatar").setAttribute("src",r_avatar[Math.floor(36*Math.random())]);
document.querySelector("#ten_khach_hang").innerHTML = (r_ten_khach_hang[Math.floor(32*Math.random())]);
document.querySelector("#so_dien_thoai").innerHTML = (r_so_dien_thoai[Math.floor(39*Math.random())] + "XXXX");
if (timeVal < 10) {document.querySelector("#dat_hang").innerHTML = "Gia hạn";} else {document.querySelector("#dat_hang").innerHTML = "Đã mua";}
document.querySelector("#ten_mat_hang").innerHTML = (r_ten_mat_hang[Math.floor(7*Math.random())]);
document.querySelector('#time').innerHTML = "🕐 " + (timeVal);
if (timeVal < 3) {document.querySelector("#dv_thoi_gian").innerHTML = "Giờ trước";} else {document.querySelector("#dv_thoi_gian").innerHTML = "Phút trước";}
document.querySelector("#thong_bao").classList.remove('an_thong_bao');
setTimeout(function(){document.querySelector("#thong_bao").classList.add('an_thong_bao');}, 10000);
}, rand * 1000);
document.body.insertAdjacentHTML(
    'beforeend',
   `<a rel="dofollow" href="https://webcode24h.com" target="_blank">webcode24h.com</a>`);