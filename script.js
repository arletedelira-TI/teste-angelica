
    const menuBtn = document.getElementById("menu-btn");
    const navMenu = document.getElementById("nav-menu");

    menuBtn.addEventListener("click", () => {
      navMenu.classList.toggle("active");
    });

    window.addEventListener("scroll", () => {
      document.querySelector("header").classList.toggle("scrolled", window.scrollY > 50);
    });

    ScrollReveal().reveal('.hero-content', { delay: 200, distance: '60px', duration: 1200, origin: 'bottom' });
    ScrollReveal().reveal('.gallery-item', { delay: 200, distance: '40px', duration: 1000, origin: 'bottom', interval: 120 });
    ScrollReveal().reveal('.about-content', { delay: 200, distance: '60px', duration: 1200, origin: 'left' });
    ScrollReveal().reveal('.testimonial', { delay: 200, distance: '50px', duration: 1000, origin: 'bottom', interval: 200 });