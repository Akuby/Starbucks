//우측 배지
const badgeEl = document.querySelector('header .badges');
const toTopEl = document.querySelector('#to-top');
window.addEventListener('scroll', _.throttle(function () { //throttle(함수, 시간)
  if (window.scrollY > 500) {
    //배지 숨기기
    //gsap.to(요소, 지속시간, 옵션)
    gsap.to(badgeEl, .6, {
      opacity: 0,
      display: 'none'
    });
    // 버튼 보이기 (gsap은 css 선택자로 querySelecting 대체 가능)
    gsap.to(toTopEl, .2,{
      x: 0 //원래 위치
    });

  } else {
    //배지 보이기
    gsap.to(badgeEl, .6, {
      opacity: 1,
      display: 'block'
    });
    // 버튼 숨기기 
    gsap.to(toTopEl, .2,{
      x: 100
    });
  }
}, 300));
// _.throttle(함수, 시간)

toTopEl.addEventListener('click',function(){
  gsap.to(window, .7, {
    scrollTo: 0
  });
})

//음료 사진 차례대로 나타나기
const fadeEls = document.querySelectorAll('.visual .fade-in');
fadeEls.forEach(function (fadeEl, index) {
  //gsap.to(요소, 지속시간, 옵션)
  gsap.to(fadeEl, 1, {
    delay: (index + 1) * .55, //각각 0.7, 1.4, 2.1, 2.7 초 후에 실행
    opacity: 1
  });
});

//공지사항 스와이퍼

// new Swiper(선택자, 옵션)
new Swiper('.notice-line .mySwiper', {
  direction: 'vertical',
  autoplay: true,
  loop: true
});

//프로모션 스와이퍼
new Swiper(".promotion .mySwiper", {
  slidesPerView: 3, //한번에 보여줄 슬라이드 개수
  spaceBetween: 10, //슬라이드 사이 여백
  centeredSlides: true, //1번 슬라이드가 가운데 보이기
  loop: true,
  autoplay: {
    delay: 5000
  },
  pagination: {
    el: '.promotion .swiper-pagination', //페이지 번호 요소 선택자
    clickable: true //번호 요소 제어 가능 여부
  },
  navigation: {
    prevEl: '.promotion .swiper-prev',
    nextEl: '.promotion .swiper-next'
  }
});
// 어워즈 스와이퍼
new Swiper('.awards .mySwiper', {
  autoplay : true,
  loop: true,
  spaceBetween: 30,
  slidesPerView: 5,
  navigation: {
    prevEl: '.awards .swiper-prev',
    nextEl: '.awards .swiper-next'
  }
});

//프로모션 토글
const promotionEl = document.querySelector('.promotion');
const promotionToggleBtn = document.querySelector('.toggle-promotion')
let isHidePromotion = false;
promotionToggleBtn.addEventListener('click', function () {
  isHidePromotion = !isHidePromotion;
  if (isHidePromotion) {
    // 숨김
    promotionEl.classList.add('hide');
  } else {
    //보임
    promotionEl.classList.remove('hide');
  }
})

//랜덤 함수 (소수점 2자리까지)
function random(min, max) {
  return parseFloat((Math.random() * (max - min) + min).toFixed(2))
}


//유튜브 영역 아이콘 플로팅
function floatingObject(selector, delay, size) {
  //gsap.to(요소, 시간, 옵션);
  gsap.to(selector, 1, {
    y: random(10,size),
    repeat: -1,
    yoyo: true,
    ease: Power1.easeInOut,
    delay: delay
  });
}
floatingObject('.floating1', 1, 20);
floatingObject('.floating2', .5, 15);
floatingObject('.floating3', 1.5, 25);

// 스크롤 시, 나타나는 메뉴 애니메이션 with ScrollMagic
const spyEls = document.querySelectorAll('section.scroll-spy');
spyEls.forEach(function(spyEl){
  new ScrollMagic
      .Scene({
        triggerElement: spyEl, //보여짐 여부를 감시할 요소를 지정
        triggerHook: .8, //
      }) //.Scene이 모두 충족되면 뒤 메소드 실행
      .setClassToggle(spyEl, 'show')
      .addTo(new ScrollMagic.Controller());
});