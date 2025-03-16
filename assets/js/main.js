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
  
  // 타이핑 효과
  const typed = document.querySelector('.typed');
  if (typed) {
    let typed_strings = typed.getAttribute('data-typed-items');
    typed_strings = typed_strings.split(',');
    
    let currentIndex = 0;
    let currentText = '';
    let isDeleting = false;
    let typingSpeed = 100;
    
    function type() {
      const currentString = typed_strings[currentIndex];
      
      if (isDeleting) {
        currentText = currentString.substring(0, currentText.length - 1);
      } else {
        currentText = currentString.substring(0, currentText.length + 1);
      }
      
      typed.textContent = currentText;
      
      if (!isDeleting && currentText === currentString) {
        isDeleting = true;
        typingSpeed = 50;
        setTimeout(type, 1000);
      } else if (isDeleting && currentText === '') {
        isDeleting = false;
        currentIndex = (currentIndex + 1) % typed_strings.length;
        typingSpeed = 100;
        setTimeout(type, 500);
      } else {
        setTimeout(type, typingSpeed);
      }
    }
    
    setTimeout(type, 1000);
  }
});