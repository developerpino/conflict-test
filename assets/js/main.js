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
  
  // 카운터 애니메이션
  const counters = document.querySelectorAll('.purecounter');
  
  if (counters.length > 0) {
    counters.forEach(counter => {
      const start = parseInt(counter.getAttribute('data-purecounter-start'));
      const end = parseInt(counter.getAttribute('data-purecounter-end'));
      const duration = parseInt(counter.getAttribute('data-purecounter-duration')) * 1000;
      
      const range = end - start;
      const stepTime = Math.abs(Math.floor(duration / range));
      
      let current = start;
      const timer = setInterval(() => {
        current += 1;
        counter.textContent = current;
        
        if (current === end) {
          clearInterval(timer);
        }
      }, stepTime);
    });
  }
  
  // 스킬 프로그레스 바 애니메이션
  const skillsSection = document.querySelector('.skills-section');
  
  if (skillsSection) {
    const progressBars = document.querySelectorAll('.progress-bar');
    
    function checkProgress() {
      const sectionTop = skillsSection.offsetTop;
      const sectionHeight = skillsSection.offsetHeight;
      const windowHeight = window.innerHeight;
      const scrollTop = window.scrollY;
      
      if (scrollTop > (sectionTop - windowHeight + sectionHeight / 2)) {
        progressBars.forEach(progressBar => {
          const value = progressBar.style.width;
          progressBar.style.width = '0%';
          setTimeout(() => {
            progressBar.style.width = value;
          }, 100);
        });
        
        // 한 번만 실행되도록 이벤트 리스너 제거
        window.removeEventListener('scroll', checkProgress);
      }
    }
    
    window.addEventListener('scroll', checkProgress);
    // 페이지 로드 시 한 번 체크
    checkProgress();
  }
});