  // Filtro interactivo de proyectos
  function filterSelection(category) {
    const items = document.querySelectorAll('.portfolio-item');
    const buttons = document.querySelectorAll('.filter-btn');

    buttons.forEach(btn => {
      let match = false;
      if (category === 'todos' && btn.textContent.toLowerCase().includes('todos')) match = true;
      if (category === 'diseno' && btn.textContent.toLowerCase().includes('diseño')) match = true;
      if (category === 'video' && btn.textContent.toLowerCase().includes('audiovisual')) match = true;
      if (category === 'fotografia' && btn.textContent.toLowerCase().includes('fotografía')) match = true;
      btn.classList.toggle('active', match);
    });

    items.forEach(item => {
      if (category === 'todos' || item.classList.contains(category)) {
        item.style.display = 'block';
        setTimeout(() => {
          item.style.opacity = '1';
          item.style.transform = 'scale(1)';
        }, 50);
      } else {
        item.style.opacity = '0';
        item.style.transform = 'scale(0.85)';
        setTimeout(() => { item.style.display = 'none'; }, 300);
      }
    });
  }

  // Scroll reveal
  function reveal() {
    document.querySelectorAll('.reveal').forEach(el => {
      const windowHeight = window.innerHeight;
      const elementTop = el.getBoundingClientRect().top;
      if (elementTop < windowHeight - 120) el.classList.add('active');
    });
  }
  window.addEventListener('scroll', reveal);
  window.addEventListener('DOMContentLoaded', reveal);

  // Modal de proyecto
  const modal = document.getElementById('project-modal');
  const closeModalBtn = document.querySelector('.close-modal');

  document.querySelectorAll('.portfolio-item').forEach(item => {
    item.addEventListener('click', () => {
      const modalImg = document.getElementById('modal-img');
      document.getElementById('modal-title').textContent = item.getAttribute('data-title');
      document.getElementById('modal-desc').textContent = item.getAttribute('data-desc');
      document.getElementById('modal-tag').textContent = item.getAttribute('data-tag');

      modalImg.style.opacity = '1';
      modalImg.onerror = () => { modalImg.style.opacity = '0'; };
      modalImg.onload = () => { modalImg.style.opacity = '1'; };
      modalImg.src = item.getAttribute('data-img');

      modal.classList.add('active');
      document.body.style.overflow = 'hidden';
    });
  });

  function closeProjectModal() {
    modal.classList.remove('active');
    document.body.style.overflow = 'auto';
  }
  closeModalBtn.addEventListener('click', closeProjectModal);
  window.addEventListener('click', (e) => { if (e.target === modal) closeProjectModal(); });
  window.addEventListener('keydown', (e) => { if (e.key === 'Escape') closeProjectModal(); });

  // Menú móvil
  const menuToggle = document.getElementById('menuToggle');
  const navLinks = document.getElementById('navLinks');
  menuToggle.addEventListener('click', () => {
    menuToggle.classList.toggle('open');
    navLinks.classList.toggle('open');
  });
  navLinks.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => {
      menuToggle.classList.remove('open');
      navLinks.classList.remove('open');
    });
  });
