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
    
    // 네비게이션 메뉴 활성화
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-menu .nav-link');
    
    sections.forEach(section => {
      const sectionTop = section.offsetTop - 100;
      const sectionHeight = section.offsetHeight;
      const sectionId = section.getAttribute('id');
      
      if (scrollTop >= sectionTop && scrollTop < sectionTop + sectionHeight) {
        navLinks.forEach(link => {
          link.classList.remove('active');
          if (link.getAttribute('href') === '#' + sectionId) {
            link.classList.add('active');
          }
        });
      }
    });
  });
  
  // 서비스 아이콘 박스 애니메이션
  const iconBoxes = document.querySelectorAll('.services .icon-box');
  
  if (iconBoxes.length > 0) {
    function animateIconBoxes() {
      iconBoxes.forEach((box, index) => {
        setTimeout(() => {
          box.style.opacity = '1';
          box.style.transform = 'translateY(0)';
        }, index * 100);
      });
    }
    
    // 페이지 로드 시 애니메이션 실행
    window.addEventListener('load', function() {
      // 초기 상태 설정
      iconBoxes.forEach(box => {
        box.style.opacity = '0';
        box.style.transform = 'translateY(20px)';
        box.style.transition = 'all 0.5s ease-in-out';
      });
      
      // 애니메이션 실행
      setTimeout(animateIconBoxes, 300);
    });
  }
});