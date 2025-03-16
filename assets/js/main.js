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
  
  // 연락처 폼 제출 처리
  const contactForm = document.querySelector('.php-email-form');
  
  if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
      e.preventDefault();
      
      const formData = new FormData(this);
      const action = this.getAttribute('action');
      
      // 로딩 메시지 표시
      const loadingElement = this.querySelector('.loading');
      const errorElement = this.querySelector('.error-message');
      const sentElement = this.querySelector('.sent-message');
      
      loadingElement.style.display = 'block';
      errorElement.style.display = 'none';
      sentElement.style.display = 'none';
      
      // 폼 데이터 전송 (실제로는 서버로 전송하지만, 여기서는 시뮬레이션)
      setTimeout(() => {
        loadingElement.style.display = 'none';
        
        // 성공 메시지 표시 (실제로는 서버 응답에 따라 다름)
        sentElement.style.display = 'block';
        
        // 폼 초기화
        this.reset();
      }, 2000);
    });
  }
});