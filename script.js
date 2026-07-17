 <script>
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

        // 3. CONTROL DEL MODAL DINÁMICO
        const modal = document.getElementById('project-modal');
        const closeModal = document.querySelector('.close-modal');
        const portfolioItems = document.querySelectorAll('.portfolio-item');

        portfolioItems.forEach(item => {
            item.addEventListener('click', () => {
                const title = item.getAttribute('data-title');
                const desc = item.getAttribute('data-desc');
                const img = item.getAttribute('data-img');
                const tag = item.getAttribute('data-tag');

                document.getElementById('modal-title').textContent = title;
                document.getElementById('modal-desc').textContent = desc;
                document.getElementById('modal-img').src = img;
                document.getElementById('modal-tag').textContent = tag;

                modal.classList.add('active');
                document.body.style.overflow = 'hidden';
            });
        });

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
    </script>
