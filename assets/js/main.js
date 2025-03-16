// 기본 JavaScript 기능
document.addEventListener('DOMContentLoaded', function() {
  // 모바일 네비게이션 토글
  const mobileNavToggle = document.querySelector('.mobile-nav-toggle');
  
  if (mobileNavToggle) {
    mobileNavToggle.addEventListener('click', function(e) {
      document.querySelector('body').classList.toggle('mobile-nav-active');
      this.classList.toggle('bi-list');
      this.classList.toggle('bi-x');
    });
  }

  // 스크롤 이벤트
  window.addEventListener('scroll', function() {
    const scrollTop = window.scrollY;
    
    // 스크롤 위치에 따른 동작은 feature 브랜치에서 구현될 예정
  });
});