/* ==========================================
   GALERÍAS DE CADA SERVICIO
   ========================================== */
const galeriasProyectos = {
  logos: [
    "https://raw.githubusercontent.com/heiderfabiangonzalezgaitan-byte/Pagina-web/refs/heads/main/IMG/Logo%201.png",
    "https://raw.githubusercontent.com/heiderfabiangonzalezgaitan-byte/Pagina-web/refs/heads/main/IMG/Logo%202.png",
    "https://raw.githubusercontent.com/heiderfabiangonzalezgaitan-byte/Pagina-web/refs/heads/main/IMG/Logo%203.png",
    "https://raw.githubusercontent.com/heiderfabiangonzalezgaitan-byte/Pagina-web/refs/heads/main/IMG/Logo%204.png",
  ],
  flyers: [
    "https://raw.githubusercontent.com/heiderfabiangonzalezgaitan-byte/Pagina-web/refs/heads/main/IMG/Flyers%201.png",
    "https://raw.githubusercontent.com/heiderfabiangonzalezgaitan-byte/Pagina-web/refs/heads/main/IMG/Flyers%202.png",
    "https://raw.githubusercontent.com/heiderfabiangonzalezgaitan-byte/Pagina-web/refs/heads/main/IMG/Flyers%203.png",
    "https://raw.githubusercontent.com/heiderfabiangonzalezgaitan-byte/Pagina-web/refs/heads/main/IMG/Flyers%204.png",
  ],
  identidad: [
    "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?auto=format&fit=crop&w=900&q=80",
    "https://images.unsplash.com/photo-1626785774573-4b799315345d?auto=format&fit=crop&w=900&q=80",
    "https://images.unsplash.com/photo-1634942537034-2531766767d1?auto=format&fit=crop&w=900&q=80"
  ],
  reels: [
    "https://www.w3schools.com/html/mov_bbb.mp4",
    "https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?auto=format&fit=crop&w=900&q=80",
    "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&w=900&q=80",
    "https://images.unsplash.com/photo-1478720568477-152d9b164e26?auto=format&fit=crop&w=900&q=80"
  ],
  fotografia: [
    "https://raw.githubusercontent.com/heiderfabiangonzalezgaitan-byte/Pagina-web/refs/heads/main/IMG/1.jpeg",
    "https://raw.githubusercontent.com/heiderfabiangonzalezgaitan-byte/Pagina-web/refs/heads/main/IMG/2.jpeg",
    "https://raw.githubusercontent.com/heiderfabiangonzalezgaitan-byte/Pagina-web/refs/heads/main/IMG/4.jpeg",
    "https://raw.githubusercontent.com/heiderfabiangonzalezgaitan-byte/Pagina-web/refs/heads/main/IMG/5.jpeg",
    "https://raw.githubusercontent.com/heiderfabiangonzalezgaitan-byte/Pagina-web/refs/heads/main/IMG/6.jpeg",
    "https://raw.githubusercontent.com/heiderfabiangonzalezgaitan-byte/Pagina-web/refs/heads/main/IMG/12.jpeg",
    "https://raw.githubusercontent.com/heiderfabiangonzalezgaitan-byte/Pagina-web/refs/heads/main/IMG/15.jpeg",
    "https://raw.githubusercontent.com/heiderfabiangonzalezgaitan-byte/Pagina-web/refs/heads/main/IMG/20.jpeg",
    "https://raw.githubusercontent.com/heiderfabiangonzalezgaitan-byte/Pagina-web/refs/heads/main/IMG/23.jpeg",
    "https://raw.githubusercontent.com/heiderfabiangonzalezgaitan-byte/Pagina-web/refs/heads/main/IMG/24.jpeg",
    "https://raw.githubusercontent.com/heiderfabiangonzalezgaitan-byte/Pagina-web/refs/heads/main/IMG/26.jpeg",
    "https://raw.githubusercontent.com/heiderfabiangonzalezgaitan-byte/Pagina-web/refs/heads/main/IMG/27.jpeg",
    "https://raw.githubusercontent.com/heiderfabiangonzalezgaitan-byte/Pagina-web/refs/heads/main/IMG/28.jpeg",
    "https://raw.githubusercontent.com/heiderfabiangonzalezgaitan-byte/Pagina-web/refs/heads/main/IMG/29.jpeg",
    "https://raw.githubusercontent.com/heiderfabiangonzalezgaitan-byte/Pagina-web/refs/heads/main/IMG/30.jpeg",
    "https://raw.githubusercontent.com/heiderfabiangonzalezgaitan-byte/Pagina-web/refs/heads/main/IMG/31.jpeg",
    "https://raw.githubusercontent.com/heiderfabiangonzalezgaitan-byte/Pagina-web/refs/heads/main/IMG/32.jpeg",
    "https://raw.githubusercontent.com/heiderfabiangonzalezgaitan-byte/Pagina-web/refs/heads/main/IMG/33.jpeg",
    "https://raw.githubusercontent.com/heiderfabiangonzalezgaitan-byte/Pagina-web/refs/heads/main/IMG/34.jpeg",
    "https://raw.githubusercontent.com/heiderfabiangonzalezgaitan-byte/Pagina-web/refs/heads/main/IMG/35.jpeg",
    "https://raw.githubusercontent.com/heiderfabiangonzalezgaitan-byte/Pagina-web/refs/heads/main/IMG/36.jpeg",
  ],
  paquete: [
    "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=900&q=80",
    "https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?auto=format&fit=crop&w=900&q=80",
    "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?auto=format&fit=crop&w=900&q=80"
  ]
};

// Validar extensión de video
function esUrlVideo(url) {
  return /\.(mp4|webm|ogg|mov)(\?.*)?$/i.test(url) || url.includes('/video/');
}

/* ==========================================
   CANVAS INTERACTIVO DE FONDO
   ========================================== */
const canvas = document.getElementById('canvas-bg');
if (canvas) {
  const ctx = canvas.getContext('2d');

  function resizeCanvas() { 
    canvas.width = window.innerWidth; 
    canvas.height = window.innerHeight; 
  }
  resizeCanvas();
  window.addEventListener('resize', resizeCanvas);

  const particles = [];
  const particleCount = window.innerWidth < 768 ? 35 : 65; // Menos partículas en móvil para fluidez

  class Particle {
    constructor() { this.reset(); }
    reset() {
      this.x = Math.random() * canvas.width;
      this.y = Math.random() * canvas.height;
      this.vx = (Math.random() - 0.5) * 0.6;
      this.vy = (Math.random() - 0.5) * 0.6;
      this.radius = Math.random() * 1.8 + 1;
      this.alpha = Math.random() * 0.5 + 0.2;
    }
    update() {
      this.x += this.vx; this.y += this.vy;
      if (this.x < 0 || this.x > canvas.width) this.vx *= -1;
      if (this.y < 0 || this.y > canvas.height) this.vy *= -1;
    }
    draw() {
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(207, 159, 78, ${this.alpha})`;
      ctx.shadowBlur = 8;
      ctx.shadowColor = '#cf9f4e';
      ctx.fill();
    }
  }

  for (let i = 0; i < particleCount; i++) particles.push(new Particle());

  function drawLines() {
    for (let i = 0; i < particles.length; i++) {
      for (let j = i + 1; j < particles.length; j++) {
        const dx = particles[i].x - particles[j].x;
        const dy = particles[i].y - particles[j].y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        if (distance < 120) {
          ctx.beginPath();
          ctx.moveTo(particles[i].x, particles[i].y);
          ctx.lineTo(particles[j].x, particles[j].y);
          ctx.strokeStyle = `rgba(207, 159, 78, ${1 - distance / 120})`;
          ctx.lineWidth = 0.4;
          ctx.stroke();
        }
      }
    }
  }

  function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    particles.forEach(p => { p.update(); p.draw(); });
    drawLines();
    requestAnimationFrame(animate);
  }
  animate();
}

/* ==========================================
   FILTRADO DE CATEGORÍAS
   ========================================== */
function filterCategory(category) {
  const cards = document.querySelectorAll('.cyber-card');
  const buttons = document.querySelectorAll('.filter-btn');
  
  buttons.forEach(btn => {
    btn.classList.remove('active');
    if (btn.textContent.toLowerCase().includes(category) || (category === 'todos' && btn.textContent === 'TODOS')) {
      btn.classList.add('active');
    }
  });

  cards.forEach(card => {
    if (category === 'todos' || card.classList.contains(category)) {
      card.style.display = 'block';
      setTimeout(() => { card.style.opacity = '1'; }, 50);
    } else {
      card.style.opacity = '0';
      setTimeout(() => { card.style.display = 'none'; }, 200);
    }
  });
}

/* ==========================================
   MODAL DE GALERÍA Y LIGHTBOX
   ========================================== */
const galleryModal = document.getElementById('galleryModal');
const closeGalleryModal = document.getElementById('closeGalleryModal');
const galleryGrid = document.getElementById('galleryGrid');
const galleryModalTitle = document.getElementById('galleryModalTitle');
const galleryModalTag = document.getElementById('galleryModalTag');
const galleryModalCount = document.getElementById('galleryModalCount');

const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightboxImg');
const lightboxCounter = document.getElementById('lightboxCounter');

let currentGalleryImages = [];
let currentLightboxIndex = 0;

// Delegación de eventos para las tarjetas
document.querySelectorAll('.cyber-card').forEach(card => {
  card.addEventListener('click', () => {
    const key = card.getAttribute('data-gallery-key');
    const images = galeriasProyectos[key] || [];
    const title = card.getAttribute('data-title') || card.querySelector('h3')?.textContent || 'Galería';
    const tag = card.getAttribute('data-tag') || card.querySelector('.card-tag')?.textContent || 'Proyecto';
    
    openGalleryModal(title, tag, images);
  });
});

function openGalleryModal(title, tag, images) {
  currentGalleryImages = images;
  if (galleryModalTitle) galleryModalTitle.textContent = title;
  if (galleryModalTag) galleryModalTag.textContent = '// ' + tag;
  if (galleryModalCount) galleryModalCount.textContent = images.length + ' elementos en la galería';
  
  if (galleryGrid) {
    galleryGrid.innerHTML = '';
    images.forEach((url, index) => {
      if (esUrlVideo(url)) {
        const video = document.createElement('video');
        video.src = url;
        video.muted = true;
        video.loop = true;
        video.playsInline = true;
        video.autoplay = true;
        video.addEventListener('click', () => openLightbox(index));
        galleryGrid.appendChild(video);
      } else {
        const img = document.createElement('img');
        img.src = url;
        img.loading = 'lazy';
        img.alt = title + ' - ' + (index + 1);
        img.addEventListener('click', () => openLightbox(index));
        galleryGrid.appendChild(img);
      }
    });
  }
  
  if (galleryModal) galleryModal.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function openLightbox(index) {
  currentLightboxIndex = index;
  updateLightbox();
  if (lightbox) lightbox.classList.add('active');
}

function updateLightbox() {
  const url = currentGalleryImages[currentLightboxIndex];
  limpiarVideoLightbox();

  if (esUrlVideo(url)) {
    if (lightboxImg) lightboxImg.style.display = 'none';
    
    const video = document.createElement('video');
    video.id = 'lightboxMedia';
    video.src = url;
    video.controls = true;
    video.autoplay = true;
    video.playsInline = true;
    video.style.maxWidth = '90%';
    video.style.maxHeight = '80vh';
    video.style.borderRadius = '12px';
    video.style.outline = 'none';
    
    if (lightboxImg && lightboxImg.parentNode) {
      lightboxImg.parentNode.insertBefore(video, lightboxImg);
    }
  } else {
    if (lightboxImg) {
      lightboxImg.style.display = 'block';
      lightboxImg.src = url;
    }
  }

  if (lightboxCounter) {
    lightboxCounter.textContent = (currentLightboxIndex + 1) + ' / ' + currentGalleryImages.length;
  }
}

function limpiarVideoLightbox() {
  const activeMedia = document.getElementById('lightboxMedia');
  if (activeMedia) {
    activeMedia.pause();
    activeMedia.src = "";
    activeMedia.load();
    activeMedia.remove();
  }
}

// Eventos de Controles de Lightbox
const prevBtn = document.getElementById('lightboxPrev');
const nextBtn = document.getElementById('lightboxNext');
const closeBtn = document.getElementById('lightboxClose');

if (prevBtn) {
  prevBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    currentLightboxIndex = (currentLightboxIndex - 1 + currentGalleryImages.length) % currentGalleryImages.length;
    updateLightbox();
  });
}

if (nextBtn) {
  nextBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    currentLightboxIndex = (currentLightboxIndex + 1) % currentGalleryImages.length;
    updateLightbox();
  });
}

if (closeBtn) {
  closeBtn.addEventListener('click', () => {
    limpiarVideoLightbox();
    if (lightbox) lightbox.classList.remove('active');
  });
}

if (lightbox) {
  lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) {
      limpiarVideoLightbox();
      lightbox.classList.remove('active');
    }
  });
}

// Navegación por Teclado
document.addEventListener('keydown', (e) => {
  if (lightbox && lightbox.classList.contains('active')) {
    if (e.key === 'Escape') {
      limpiarVideoLightbox();
      lightbox.classList.remove('active');
    }
    if (e.key === 'ArrowLeft' && prevBtn) prevBtn.click();
    if (e.key === 'ArrowRight' && nextBtn) nextBtn.click();
  }
});

// Cierre del Modal
if (closeGalleryModal) {
  closeGalleryModal.addEventListener('click', () => {
    if (galleryModal) galleryModal.classList.remove('active');
    document.body.style.overflow = 'auto';
  });
}

if (galleryModal) {
  galleryModal.addEventListener('click', (e) => {
    if (e.target === galleryModal) {
      galleryModal.classList.remove('active');
      document.body.style.overflow = 'auto';
    }
  });
}

/* ==========================================
   EFECTO MAQUINA DE ESCRIBIR (TEXTO DINÁMICO EN HERO)
   ========================================== */
document.addEventListener("DOMContentLoaded", () => {
  const roles = [
    "contar historias que impactan",
    "crear experiencias digitales",
    "elevar la presencia de tu marca",
    "diseñar contenido de alto nivel"
  ];
  
  let roleIndex = 0;
  let charIndex = 0;
  let isDeleting = false;
  const targetElement = document.querySelector(".typing-text");

  function typeEffect() {
    if (!targetElement) return;

    const currentRole = roles[roleIndex];
    
    if (isDeleting) {
      targetElement.textContent = currentRole.substring(0, charIndex - 1);
      charIndex--;
    } else {
      targetElement.textContent = currentRole.substring(0, charIndex + 1);
      charIndex++;
    }

    let speed = isDeleting ? 40 : 80;

    if (!isDeleting && charIndex === currentRole.length) {
      speed = 2200; // Pausa cuando termina de escribir la frase
      isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
      isDeleting = false;
      roleIndex = (roleIndex + 1) % roles.length;
      speed = 400; // Pausa antes de empezar la siguiente
    }

    setTimeout(typeEffect, speed);
  }

  if (targetElement) {
    typeEffect();
  }
});
