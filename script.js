const menuToggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav');

if (menuToggle && nav) {
  menuToggle.addEventListener('click', () => {
    const isOpen = nav.classList.toggle('open');
    menuToggle.setAttribute('aria-expanded', String(isOpen));
  });

  nav.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      nav.classList.remove('open');
      menuToggle.setAttribute('aria-expanded', 'false');
    });
  });
}

const form = document.getElementById('contactForm');
if (form) {
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    const data = new FormData(form);
    const subject = encodeURIComponent('Service Request - Victory Air Solutions Website');
    const body = encodeURIComponent(
      `Name: ${data.get('name') || ''}\n` +
      `Phone: ${data.get('phone') || ''}\n` +
      `Email: ${data.get('email') || ''}\n` +
      `Service Needed: ${data.get('service') || ''}\n\n` +
      `Message:\n${data.get('message') || ''}`
    );
    window.location.href = `mailto:victoryairsolutionsllc@gmail.com?subject=${subject}&body=${body}`;
  });
}
