/* -----------------------------
   Common JS: Navbar effects, smooth scroll
-------------------------------*/

// Navbar active link highlight based on scroll
const navLinks = document.querySelectorAll('.nav-link');

window.addEventListener('scroll', () => {
    const scrollPos = window.scrollY || document.documentElement.scrollTop;

    navLinks.forEach(link => {
        const section = document.querySelector(link.getAttribute('href'));
        if(section) {
            if(scrollPos >= section.offsetTop - 100 && scrollPos < section.offsetTop + section.offsetHeight) {
                link.classList.add('nav-active');
            } else {
                link.classList.remove('nav-active');
            }
        }
    });
});

// Smooth scroll for all anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e){
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
