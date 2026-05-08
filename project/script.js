const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('.nav-links');
const siteHeader = document.querySelector('.site-header');

function showFigurePlaceholder(img) {
  img.style.display = 'none';
  const placeholder = img.parentNode.querySelector('.figure-placeholder');
  if (placeholder) {
    placeholder.style.display = 'flex';
  }
}

navToggle.addEventListener('click', () => {
  navLinks.classList.toggle('open');
});

window.addEventListener('scroll', () => {
  if (window.scrollY > 16) {
    siteHeader.classList.add('scrolled');
  } else {
    siteHeader.classList.remove('scrolled');
  }
});

Array.from(document.querySelectorAll('.nav-links a')).forEach((link) => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('open');
  });
});
