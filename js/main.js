//검색영역 선택 시
const searchEl = document.querySelector('.search');
const searchInputEl = searchEl.querySelector('input'); // 검색영역 > input, span
const searchSpanEl = searchEl.querySelector('span'); // 검색어 입력 영역

searchSpanEl.addEventListener('mouseover', function(){
  searchInputEl.focus();
});

searchInputEl.addEventListener('focus', function(){
  searchEl.classList.add('focused');
  searchInputEl.setAttribute('placeholder', '통합검색');
});

searchInputEl.addEventListener('blur', function(){
  searchEl.classList.remove('focused');
  searchInputEl.setAttribute('placeholder', '');
});

//우측 배지
const badgeEl = document.querySelector('header .badges');
window.addEventListener('scroll', _.throttle(function () { //throttle(함수, 시간)
  console.log(window.scrollY);
  if (window.scrollY > 500) {
    //배지 숨기기
    //gsap.to(요소, 지속시간, 옵션)
    gsap.to(badgeEl, .6, {
      opacity : 0,
      display : 'none'
    });
  } else {
    //배지 보이기
    gsap.to(badgeEl, .6, {
      opacity : 1,
      display : 'block'
    });
  }
}, 300));

//음료 사진 차례대로 나타나기
const fadeEls = document.querySelectorAll('.visual .fade-in');
fadeEls.forEach(function (fadeEl, index) {
  //gsap.to(요소, 지속시간, 옵션)
  gsap.to(fadeEl, 1, {
    delay: (index+1) * .7, //각각 0.7, 1.4, 2.1, 2.7 초 후에 실행
    opacity: 1
  });
});

// new Swiper(선택자, 옵션)
new Swiper('.notice-line .mySwiper', {
  direction: 'vertical',
  autoplay: true,
  loop : true
});