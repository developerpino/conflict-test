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
  
  // 포트폴리오 필터
  const portfolioFilters = document.querySelectorAll('#portfolio-filters li');
  const portfolioItems = document.querySelectorAll('.portfolio-item');
  
  if (portfolioFilters.length > 0) {
    portfolioFilters.forEach(filter => {
      filter.addEventListener('click', function() {
        // 활성 필터 업데이트
        portfolioFilters.forEach(f => f.classList.remove('filter-active'));
        this.classList.add('filter-active');
        
        // 필터링된 항목 표시
        const filterValue = this.getAttribute('data-filter');
        
        portfolioItems.forEach(item => {
          if (filterValue === '*' || item.classList.contains(filterValue.substring(1))) {
            item.style.display = 'block';
          } else {
            item.style.display = 'none';
          }
        });
      });
    });
  }
  
  // 포트폴리오 라이트박스
  const portfolioLightbox = document.querySelectorAll('.portfolio-lightbox');
  
  if (portfolioLightbox.length > 0) {
    portfolioLightbox.forEach(lightbox => {
      lightbox.addEventListener('click', function(e) {
        e.preventDefault();
        
        const imgSrc = this.getAttribute('href');
        const title = this.getAttribute('title');
        
        // 라이트박스 모달 생성
        const modal = document.createElement('div');
        modal.className = 'portfolio-modal';
        modal.innerHTML = `
          <div class="portfolio-modal-content">
            <span class="close">&times;</span>
            <img src="${imgSrc}" alt="${title}">
            <h3>${title}</h3>
          </div>
        `;
        
        document.body.appendChild(modal);
        
        // 닫기 버튼 이벤트
        const closeBtn = modal.querySelector('.close');
        closeBtn.addEventListener('click', function() {
          document.body.removeChild(modal);
        });
        
        // 모달 외부 클릭 시 닫기
        modal.addEventListener('click', function(e) {
          if (e.target === modal) {
            document.body.removeChild(modal);
          }
        });
      });
    });
  }
});