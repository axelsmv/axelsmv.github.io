// Fade-in on scroll
document.addEventListener('DOMContentLoaded', () => {
  const faders = document.querySelectorAll('.fade-in');

  const appearOnScroll = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.1
  });

  faders.forEach(el => appearOnScroll.observe(el));

  // FAQ accordion behavior
  const questions = document.querySelectorAll('.faq h4');
  questions.forEach(question => {
    question.addEventListener('click', () => {
      const answer = question.nextElementSibling;
      const isVisible = answer.style.display === 'block';

      document.querySelectorAll('.faq p').forEach(p => p.style.display = 'none');
      answer.style.display = isVisible ? 'none' : 'block';
    });
  });


document.querySelectorAll(".filter-button").forEach(btn => {
  btn.addEventListener("click", () => {
    document.querySelectorAll(".filter-button").forEach(b => b.classList.remove("active"));
    btn.classList.add("active");
    const filter = btn.getAttribute("data-filter");

    document.querySelectorAll(".blog-card").forEach(card => {
      const category = card.getAttribute("data-category");
      if (filter === "all" || filter === category) {
        card.style.display = "block";
      } else {
        card.style.display = "none";
      }
    });
  });
});

  // Basic form validation (contact form)
  const form = document.querySelector('.contact-form');
  if (form) {
    form.addEventListener('submit', e => {
      const name = form.querySelector('#name');
      const email = form.querySelector('#email');
      const message = form.querySelector('#message');

      if (!name.value || !email.value || !message.value) {
        e.preventDefault();
        alert('Please fill in all fields before submitting.');
      }
    });
  }
});

document.addEventListener('scroll', () => {
  const elements = document.querySelectorAll('.fade-in');
  elements.forEach(element => {
    const rect = element.getBoundingClientRect();
    if (rect.top < window.innerHeight) {
      element.classList.add('visible');
    }
  });
});