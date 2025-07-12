// ===== Typing Animation (Simple version without external library) =====
const textElement = document.querySelector('.animated-text');
const words = ['Frontend Web Developer', 'UI Enthusiast', 'Tech Explorer'];
let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;

document.addEventListener('DOMContentLoaded', typeEffect);

function typeEffect() {
  const current = words[wordIndex];

  if (!isDeleting) {
    textElement.textContent = current.substring(0, charIndex + 1);
    charIndex++;

    if (charIndex === current.length) {
      setTimeout(() => {
        isDeleting = true;
        typeEffect();
      }, 1500);
      return;
    }
  } else {
    textElement.textContent = current.substring(0, charIndex - 1);
    charIndex--;

    if (charIndex === 0) {
      isDeleting = false;
      wordIndex = (wordIndex + 1) % words.length;
      setTimeout(typeEffect, 300);
      return;
    }
  }

  setTimeout(typeEffect, isDeleting ? 100 : 100);
}

document.addEventListener('DOMContentLoaded', typeEffect);

// ===== Active Link on Scroll (optional) =====
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {
  let current = "";

  sections.forEach((section) => {
    const sectionTop = section.offsetTop - 100;
    if (pageYOffset >= sectionTop) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach((link) => {
    link.classList.remove("active");
    if (link.getAttribute("href").includes(current)) {
      link.classList.add("active");
    }
  });
});
