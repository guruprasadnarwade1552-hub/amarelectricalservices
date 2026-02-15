document.addEventListener("DOMContentLoaded", () => {
  const navLinks = document.querySelectorAll(".navbar a");

  navLinks.forEach(link => {
    link.addEventListener("click", e => {
      e.preventDefault();
      const target = document.querySelector(link.getAttribute("href"));
      if (target) {
        target.scrollIntoView({ behavior: "smooth" });
      }
    });
  });

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  }, {
    threshold: 0.1
  });

  document.querySelectorAll(".services, .pricing, .contact").forEach(sec => {
    sec.classList.add("hidden");
    observer.observe(sec);
  });
});
  
// Services Slideshow
let slideIndex = 0;
const slides = document.querySelectorAll(".slides-wrapper .slide");

function showSlides() {
  slides.forEach(slide => slide.classList.remove("active"));
  slideIndex = (slideIndex + 1) % slides.length;
  slides[slideIndex].classList.add("active");
}

if (slides.length > 0) {
  slides[0].classList.add("active");
  setInterval(showSlides, 3500);
}

function bookService(service, price) {
  const phone = "918999073877";
  const msg =
    `Hello AMAR ELECTRICAL SERVICES 👋%0A%0A` +
    `Service: ${service}%0A` +
    `Price: ₹${price}%0A%0A` +
    `Please contact me.`;

  window.open(`https://wa.me/${phone}?text=${msg}`, "_blank");
}

/* ===== HERO SLIDESHOW ===== */
let heroSlides = document.querySelectorAll(".hero-slide");
let heroIndex = 0;

setInterval(() => {
  heroSlides[heroIndex].classList.remove("active");
  heroIndex = (heroIndex + 1) % heroSlides.length;
  heroSlides[heroIndex].classList.add("active");
}, 3000); // change image every 3 seconds

/* ===== CUSTOMER REVIEWS SLIDER ===== */
let reviews = document.querySelectorAll(".review-card");
let reviewIndex = 0;

setInterval(() => {
  reviews[reviewIndex].classList.remove("active");
  reviewIndex = (reviewIndex + 1) % reviews.length;
  reviews[reviewIndex].classList.add("active");
}, 6000); // 6 seconds per review
 
/* ===== APPOINTMENT – WHATSAPP ONLY ===== */
document.getElementById("appointmentForm").addEventListener("submit", function(e) {
  e.preventDefault();

  let name = document.getElementById("name").value;
  let phone = document.getElementById("phone").value;
  let address = document.getElementById("address").value;
  let service = document.getElementById("service").value;
  let date = document.getElementById("date").value;
  let time = document.getElementById("time").value;
  let msg = document.getElementById("message").value;

  let text =
`📅 *New Appointment Request*
👤 Name: ${name}
📞 Phone: ${phone}
🏠 Address: ${address}
🛠 Service: ${service}
📆 Date: ${date}
⏰ Time: ${time}
📝 Message: ${msg || "N/A"}`;

  let whatsappURL =
    "https://wa.me/918999073877?text=" +
    encodeURIComponent(text);

  window.open(whatsappURL, "_blank");
});

/* ===== About Highlight Animation ===== */
const highlights = document.querySelectorAll(".highlight-box");

const aboutObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    }
  });
}, { threshold: 0.3 });

highlights.forEach(box => aboutObserver.observe(box));



// Auto Sliding Work Showcase (JS controlled)
const track = document.querySelector(".work-track");
let position = 0;

function slideWork() {
  position -= 0.4; // ⬅️ reduce for slower (0.2), increase for faster (0.6)
  track.style.transform = `translateX(${position}px)`;

  if (Math.abs(position) > track.scrollWidth / 2) {
    position = 0;
  }
}

let sliderInterval = setInterval(slideWork, 30);

track.addEventListener("mouseenter", () => clearInterval(sliderInterval));
track.addEventListener("mouseleave", () => {
  sliderInterval = setInterval(slideWork, 30);
});

 // Auto update copyright year
document.getElementById("year").textContent = new Date().getFullYear();

