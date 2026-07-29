  /* ==========================================
       GALERÍAS DE CADA SERVICIO — AGREGA AQUÍ TUS FOTOS
       ==========================================
       Cada servicio tiene su propia lista de fotos.
       Para agregar una foto nueva a cualquier categoría,
       solo pega su URL como una línea nueva dentro del
       arreglo correspondiente, separada por coma.
       No hay límite: puedes tener 50, 100 o más por servicio. */
      const galeriasProyectos = {
      logos: [
        "https://images.unsplash.com/photo-1626785774573-4b799315345d?auto=format&fit=crop&w=900&q=80",
        "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?auto=format&fit=crop&w=900&q=80",
        "https://images.unsplash.com/photo-1621600411688-4be93cd68504?auto=format&fit=crop&w=900&q=80"
        // "https://tu-nueva-foto-aqui.jpg",
      ],
      flyers: [
        "https://images.unsplash.com/photo-1586075010923-2dd4570fb338?auto=format&fit=crop&w=900&q=80",
        "https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&w=900&q=80",
        "https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&w=900&q=80"
        // "https://tu-nueva-foto-aqui.jpg",
      ],
      identidad: [
        "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?auto=format&fit=crop&w=900&q=80",
        "https://images.unsplash.com/photo-1626785774573-4b799315345d?auto=format&fit=crop&w=900&q=80",
        "https://images.unsplash.com/photo-1634942537034-2531766767d1?auto=format&fit=crop&w=900&q=80"
        // "https://tu-nueva-foto-aqui.jpg",
      ],
      reels: [
        "https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?auto=format&fit=crop&w=900&q=80",
        "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&w=900&q=80",
        "https://images.unsplash.com/photo-1478720568477-152d9b164e26?auto=format&fit=crop&w=900&q=80"
        // "https://tu-nueva-foto-aqui.jpg",
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
        "https://raw.githubusercontent.com/heiderfabiangonzalezgaitan-byte/Pagina-web/refs/heads/main/IMG/23.jpeg"
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
      
      ],
      paquete: [
        "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=900&q=80",
        "https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?auto=format&fit=crop&w=900&q=80",
        "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?auto=format&fit=crop&w=900&q=80"
        // "https://tu-nueva-foto-aqui.jpg",
      ]
    };

    const canvas = document.getElementById('canvas-bg');
    const ctx = canvas.getContext('2d');

    function resizeCanvas() { canvas.width = window.innerWidth; canvas.height = window.innerHeight; }
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    const particles = [];
    const particleCount = 65;

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

    document.querySelectorAll('.cyber-card').forEach(card => {
      card.addEventListener('click', () => {
        const key = card.getAttribute('data-gallery-key');
        const images = galeriasProyectos[key] || [];
        openGalleryModal(card.getAttribute('data-title'), card.getAttribute('data-tag'), images);
      });
    });

    function openGalleryModal(title, tag, images) {
      currentGalleryImages = images;
      galleryModalTitle.textContent = title;
      galleryModalTag.textContent = '// ' + tag;
      galleryModalCount.textContent = images.length + ' fotos en la galería';
      galleryGrid.innerHTML = '';
      images.forEach((url, index) => {
        const img = document.createElement('img');
        img.src = url;
        img.loading = 'lazy';
        img.alt = title + ' - foto ' + (index + 1);
        img.addEventListener('click', () => openLightbox(index));
        galleryGrid.appendChild(img);
      });
      galleryModal.classList.add('active');
      document.body.style.overflow = 'hidden';
    }

    function openLightbox(index) {
      currentLightboxIndex = index;
      updateLightbox();
      lightbox.classList.add('active');
    }

    function updateLightbox() {
      lightboxImg.src = currentGalleryImages[currentLightboxIndex];
      lightboxCounter.textContent = (currentLightboxIndex + 1) + ' / ' + currentGalleryImages.length;
    }

    document.getElementById('lightboxPrev').addEventListener('click', (e) => {
      e.stopPropagation();
      currentLightboxIndex = (currentLightboxIndex - 1 + currentGalleryImages.length) % currentGalleryImages.length;
      updateLightbox();
    });

    document.getElementById('lightboxNext').addEventListener('click', (e) => {
      e.stopPropagation();
      currentLightboxIndex = (currentLightboxIndex + 1) % currentGalleryImages.length;
      updateLightbox();
    });

    document.getElementById('lightboxClose').addEventListener('click', () => {
      lightbox.classList.remove('active');
    });

    lightbox.addEventListener('click', (e) => {
      if (e.target === lightbox) lightbox.classList.remove('active');
    });

    document.addEventListener('keydown', (e) => {
      if (lightbox.classList.contains('active')) {
        if (e.key === 'Escape') lightbox.classList.remove('active');
        if (e.key === 'ArrowLeft') document.getElementById('lightboxPrev').click();
        if (e.key === 'ArrowRight') document.getElementById('lightboxNext').click();
      }
    });

    closeGalleryModal.addEventListener('click', () => {
      galleryModal.classList.remove('active');
      document.body.style.overflow = 'auto';
    });

    galleryModal.addEventListener('click', (e) => {
      if (e.target === galleryModal) {
        galleryModal.classList.remove('active');
        document.body.style.overflow = 'auto';
      }
    });
