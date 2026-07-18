        // 1. FILTRADO INTERACTIVO DE PROYECTOS
        function filterSelection(category) {
            const items = document.querySelectorAll('.portfolio-item');
            const buttons = document.querySelectorAll('.filter-btn');
            
            buttons.forEach(btn => {
                let match = false;
                if (category === 'todos' && btn.textContent.toLowerCase().includes('todos')) match = true;
                if (category === 'diseno' && btn.textContent.toLowerCase().includes('diseño')) match = true;
                if (category === 'video' && btn.textContent.toLowerCase().includes('audiovisual')) match = true;
                if (category === 'fotografia' && btn.textContent.toLowerCase().includes('fotografía')) match = true;

                if(match) {
                    btn.classList.add('active');
                } else {
                    btn.classList.remove('active');
                }
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
                    item.style.transform = 'scale(0.8)';
                    setTimeout(() => {
                        item.style.display = 'none';
                    }, 300);
                }
            });
        }

        // 2. SCROLL REVEAL (Animación al deslizar)
        function reveal() {
            const reveals = document.querySelectorAll('.reveal');
            reveals.forEach(element => {
                const windowHeight = window.innerHeight;
                const elementTop = element.getBoundingClientRect().top;
                const elementVisible = 120;

                if (elementTop < windowHeight - elementVisible) {
                    element.classList.add('active');
                }
            });
        }

        window.addEventListener('scroll', reveal);
        window.addEventListener('DOMContentLoaded', reveal);

      
// 3. CONTROL DEL MODAL DINÁMICO CON CARRUSEL INTEGRADO
const modal = document.getElementById('project-modal');
const closeModal = document.querySelector('.close-modal');
const portfolioItems = document.querySelectorAll('.portfolio-item');

// Elementos del carrusel
const carouselSlides = document.getElementById('carousel-slides');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
let currentSlideIndex = 0;
let totalSlides = 0;

portfolioItems.forEach(item => {
    item.addEventListener('click', () => {
        const title = item.getAttribute('data-title');
        const desc = item.getAttribute('data-desc');
        const tag = item.getAttribute('data-tag');
        
        // Conseguimos las imágenes (soporta una sola o varias separadas por coma)
        const imgsAttr = item.getAttribute('data-imgs') || item.getAttribute('data-img');
        const imgArray = imgsAttr ? imgsAttr.split(',') : [];

        // Inyectamos textos base
        document.getElementById('modal-title').textContent = title;
        document.getElementById('modal-desc').textContent = desc;
        document.getElementById('modal-tag').textContent = tag;
        
        // Añadimos el texto pequeño personalizado abajo del todo
        const extraText = document.getElementById('modal-extra-text');
        if(imgArray.length > 1) {
            extraText.textContent = "* Desliza sobre la imagen para ver más muestras de este proyecto.";
            extraText.style.display = "block";
        } else {
            extraText.style.display = "none"; // Se oculta si es solo una foto
        }

        // Limpiamos y armamos las diapositivas del carrusel
        carouselSlides.innerHTML = '';
        currentSlideIndex = 0;
        totalSlides = imgArray.length;

        imgArray.forEach((imgUrl, index) => {
            const imgElement = document.createElement('img');
            imgElement.src = imgUrl.trim();
            imgElement.alt = `${title} - Vista ${index + 1}`;
            if (index === 0) imgElement.classList.add('active'); // La primera inicia visible
            carouselSlides.appendChild(imgElement);
        });

        // Ocultamos las flechas si el proyecto solo tiene una imagen
        if (totalSlides <= 1) {
            prevBtn.style.display = 'none';
            nextBtn.style.display = 'none';
        } else {
            prevBtn.style.display = 'flex';
            nextBtn.style.display = 'flex';
        }

        modal.classList.add('active');
        document.body.style.overflow = 'hidden';
    });
});

// Función para cambiar de slide
function changeSlide(direction) {
    const slides = carouselSlides.querySelectorAll('img');
    if (slides.length === 0) return;

    slides[currentSlideIndex].classList.remove('active');

    currentSlideIndex += direction;

    if (currentSlideIndex >= totalSlides) {
        currentSlideIndex = 0; // Vuelve a la primera
    } else if (currentSlideIndex < 0) {
        currentSlideIndex = totalSlides - 1; // Va a la última
    }

    slides[currentSlideIndex].classList.add('active');
}

// Eventos de botones del carrusel
nextBtn.addEventListener('click', (e) => { e.stopPropagation(); changeSlide(1); });
prevBtn.addEventListener('click', (e) => { e.stopPropagation(); changeSlide(-1); });

closeModal.addEventListener('click', closeProjectModal);

window.addEventListener('click', (e) => {
    if (e.target === modal) {
        closeProjectModal();
    }
});

function closeProjectModal() {
    modal.classList.remove('active');
    document.body.style.overflow = 'auto';
}
