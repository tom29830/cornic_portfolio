document.addEventListener('DOMContentLoaded', () => {
    // Animation du menu déroulant
    const menuItems = document.querySelectorAll('nav ul li a');
    menuItems.forEach(item => {
        item.addEventListener('click', (e) => {
            e.preventDefault();
            const section = document.querySelector(e.target.getAttribute('href'));
            section.scrollIntoView({ behavior: 'smooth' });
        });
    });

    // Animation simple sur les images (zoom au survol)
    const galleryItems = document.querySelectorAll('.gallery .item img');
    galleryItems.forEach(img => {
        img.addEventListener('mouseenter', () => {
            img.style.transform = 'scale(1.1)';
            img.style.transition = 'transform 0.3s ease';
        });
        img.addEventListener('mouseleave', () => {
            img.style.transform = 'scale(1)';
        });
    });
});
