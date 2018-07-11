var width = document.body.clientWidth;
if (width > 750) {
  var html = document.getElementsByTagName('html')[0];
  html.style.fontSize='200px';
}

//解决换行
var iscrollUls = document.getElementsByClassName('iscrollUl');
for (var i=0;i<iscrollUls.length;i++) {
  var lists = iscrollUls[i].children;
  var ulWidth = 0;
  for (var j = 0; j < lists.length; j++) {
    var liWidth = lists[j].offsetWidth;
    // var marginLeft = window.getComputedStyle(lists[i], null).getPropertyValue('margin-left');
    // var marginRigit= window.getComputedStyle(lists[i], null).getPropertyValue('margin-right');
    // width += liWidth+marginLeft+marginRigit;
    ulWidth += liWidth
  }
}

var swiper = new Swiper('.swiper-container', {
  slidesPerView: 'auto',
  freeMode: true,
});
