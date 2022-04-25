/*----------Chèn thư viện-------
<script src="//cdnjs.cloudflare.com/ajax/libs/ScrollMagic/2.0.7/ScrollMagic.min.js"></script>
------------end-----*/

const postDetails = document.querySelector(".contain-details");
const postSidebar = document.querySelector(".my-sidebar");
const postSidebarContent = document.querySelector(".my-sidebar");
const controller = new ScrollMagic.Controller();
const scene = new ScrollMagic.Scene({
 triggerElement: postSidebar,
 triggerHook: 0,
 duration: getDuration
}).addTo(controller);
if (window.matchMedia("(min-width: 768px)").matches) {
 scene.setPin(postSidebar, {pushFollowers: false});
}
window.addEventListener("resize", () => {
 if (window.matchMedia("(min-width: 768px)").matches) {
  scene.setPin(postSidebar, {pushFollowers: false});
 } else {
  scene.removePin(postSidebar, true);
 }
});
function getDuration() {
 return postDetails.offsetHeight - postSidebarContent.offsetHeight;
}
