// === NAVIGATION TOGGLE FOR MOBILE ===
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

menuToggle.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});

// === FORM VALIDATION ===
const form = document.querySelector('form');

form?.addEventListener('submit', function (e) {
  const name = document.querySelector('input[name="name"]');
  const email = document.querySelector('input[name="email"]');
  const message = document.querySelector('textarea[name="message"]');

  if (!name.value || !email.value || !message.value) {
    e.preventDefault();
    alert('Please fill in all fields before submitting.');
  } else if (!validateEmail(email.value)) {
    e.preventDefault();
    alert('Please enter a valid email address.');
  }
});

function validateEmail(email) {
  const re = /\S+@\S+\.\S+/;
  return re.test(email);
}

// === DARK MODE TOGGLE ===
const toggleButton = document.createElement('button');
toggleButton.textContent = "🌙";
toggleButton.title = "Toggle Dark Mode";
toggleButton.style.position = 'fixed';
toggleButton.style.top = '20px';
toggleButton.style.right = '20px';
toggleButton.style.padding = '0.5rem 1rem';
toggleButton.style.border = 'none';
toggleButton.style.borderRadius = '10px';
toggleButton.style.background = '#111';
toggleButton.style.color = '#fff';
toggleButton.style.cursor = 'pointer';
toggleButton.style.zIndex = '1000';
document.body.appendChild(toggleButton);

toggleButton.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
  toggleButton.textContent = document.body.classList.contains('dark-mode') ? '☀️' : '🌙';
});

// === SCROLL ANIMATIONS ===
const revealSections = document.querySelectorAll('main section');

function revealOnScroll() {
  const triggerBottom = window.innerHeight * 0.85;

  revealSections.forEach(section => {
    const sectionTop = section.getBoundingClientRect().top;

    if (sectionTop < triggerBottom) {
      section.classList.add('show');
    } else {
      section.classList.remove('show');
    }
  });
}

window.addEventListener('scroll', revealOnScroll);
window.addEventListener('load', revealOnScroll);

// === OPTIONAL: SCROLL TO TOP ===
const scrollBtn = document.createElement('button');
scrollBtn.textContent = '⬆';
scrollBtn.style.position = 'fixed';
scrollBtn.style.bottom = '20px';
scrollBtn.style.right = '20px';
scrollBtn.style.padding = '0.5rem 1rem';
scrollBtn.style.fontSize = '1.5rem';
scrollBtn.style.border = 'none';
scrollBtn.style.borderRadius = '50%';
scrollBtn.style.background = '#0066cc';
scrollBtn.style.color = 'white';
scrollBtn.style.cursor = 'pointer';
scrollBtn.style.display = 'none';
scrollBtn.style.zIndex = '1000';
document.body.appendChild(scrollBtn);

window.addEventListener('scroll', () => {
  scrollBtn.style.display = window.scrollY > 300 ? 'block' : 'none';
});

scrollBtn.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});