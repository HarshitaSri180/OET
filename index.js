
const testimonialsContainer = document.querySelector(".testimonials-container");
const testimonial = document.querySelector(".testimonial");
const userImage = document.querySelector(".user-image");
const username = document.querySelector(".username");
const role = document.querySelector(".role");
const btnPrev = document.getElementById("btn-prev");
const btnNext = document.getElementById("btn-next");
const progressDots = document.getElementById("progress-dots");

const testimonials = [
  {
    name: "June Cha",
    position: "Doctor",
    photo: "https://randomuser.me/api/portraits/women/44.jpg",
    text:
"The course transformed my approach to patient interactions! Highly recommend!" 
  },

   {
    name: "Renee Sims",
    position: "Senior DOctor",
    photo: "https://randomuser.me/api/portraits/women/8.jpg",
    text:
      "The course transformed my approach to patient interactions! Highly recommend!"
  },
  {
    name: "Sasha Ho",
    position: "Student",
    photo:
      "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?h=350&auto=compress&cs=tinysrgb",
    text:
"The course transformed my approach to patient interactions! Highly recommend!"  },
{
    name: "Nikhil",
    position: "Student",
    photo:
      "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?h=350&auto=compress&cs=tinysrgb",
    text:
"The course transformed my approach to patient interactions! Highly recommend!"  },
];

let idx = 0;

testimonials.forEach((testimonial) => {
  const dot = document.createElement("div");
  dot.classList.add("progress-dot");
  progressDots.appendChild(dot);
});

function displayTestimonial() {
  const { name, position, photo, text } = testimonials[idx];

  testimonial.innerHTML = text;
  userImage.src = photo;
  username.innerHTML = name;
  role.innerHTML = position;

  updateProgressDots();
}

function updateProgressDots() {
  const dots = progressDots.children;
  [...dots].forEach((dot) => {
    dot.classList.remove("active");
  });
  dots[idx].classList.add("active");
}

btnNext.addEventListener("click", () => {
  idx === testimonials.length - 1 ? (idx = 0) : idx++;
  console.log(idx);

  displayTestimonial();
});

btnPrev.addEventListener("click", () => {
  idx === 0 ? (idx = testimonials.length - 1) : idx--;
  console.log(idx);

  displayTestimonial();
});

displayTestimonial();
function toggleAccordion(bodyId) {
    const body = document.getElementById(bodyId);
    const icon = document.getElementById(`icon-${bodyId.split('-')[1]}`);

    if (body.classList.contains('hidden')) {
        body.classList.remove('hidden');
        icon.classList.add('rotate-180');
    } else {
        body.classList.add('hidden');
        icon.classList.remove('rotate-180');
    }
}
document.getElementById('body-1').classList.remove('hidden');
document.getElementById('icon-1').classList.add('rotate-180');

    const toggleButton = document.querySelector('[data-collapse-toggle]');
    const mobileMenu = document.getElementById('mobile-menu-2');

    toggleButton.addEventListener('click', () => {
        const isExpanded = toggleButton.getAttribute('aria-expanded') === 'true';
        toggleButton.setAttribute('aria-expanded', !isExpanded);
        mobileMenu.style.display = isExpanded ? 'none' : 'flex'; // Toggle display
    });

