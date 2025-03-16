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
  
  // 이력서 항목 애니메이션
  const resumeItems = document.querySelectorAll('.resume-item, .certification-item');
  
  if (resumeItems.length > 0) {
    function animateResumeItems() {
      resumeItems.forEach((item, index) => {
        setTimeout(() => {
          item.classList.add('animate__animated', 'animate__fadeInUp');
          item.style.visibility = 'visible';
        }, index * 200);
      });
    }
    
    // 페이지 로드 시 애니메이션 실행
    window.addEventListener('load', animateResumeItems);
  }
  
  // 스크롤 시 섹션 애니메이션
  const resumeSection = document.querySelector('#resume');
  
  if (resumeSection) {
    function checkScroll() {
      const sectionTop = resumeSection.offsetTop;
      const sectionHeight = resumeSection.offsetHeight;
      const windowHeight = window.innerHeight;
      const scrollTop = window.scrollY;
      
      if (scrollTop > (sectionTop - windowHeight + 300)) {
        resumeSection.classList.add('animate__animated', 'animate__fadeIn');
        // 한 번만 실행되도록 이벤트 리스너 제거
        window.removeEventListener('scroll', checkScroll);
      }
    }
    
    window.addEventListener('scroll', checkScroll);
    // 페이지 로드 시 한 번 체크
    checkScroll();
  }
});