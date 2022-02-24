//검색영역 선택 시
const searchEl = document.querySelector('.search');
const searchInputEl = searchEl.querySelector('input'); // 검색영역 > input, span
const searchSpanEl = searchEl.querySelector('span'); // 검색어 입력 영역

searchSpanEl.addEventListener('mouseover', function () {
  searchInputEl.focus();
});

searchInputEl.addEventListener('focus', function () {
  searchEl.classList.add('focused');
  searchInputEl.setAttribute('placeholder', '통합검색');
});

searchInputEl.addEventListener('blur', function () {
  searchEl.classList.remove('focused');
  searchInputEl.setAttribute('placeholder', '');
});

//푸터 지적재산권 년도 자동 변경
const thisYear = document.querySelector('.this-year');
thisYear.textContent = new Date().getFullYear();