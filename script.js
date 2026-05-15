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
 

 // Auto update copyright year
document.getElementById("year").textContent = new Date().getFullYear();

// Why Choose Us Animation 
/* ================= WHY MEDIA SLIDER ================= */
const whyMedia = document.querySelectorAll(".why-media");
let whyIndex = 0;

function playVisibleWhyMedia() {
  whyMedia.forEach((item, index) => {
    const isActive = index === whyIndex;
    item.classList.toggle("active", isActive);

    if (item.tagName === "VIDEO") {
      if (isActive) {
        item.play().catch(() => {});
      } else {
        item.pause();
      }
    }
  });
}

if (whyMedia.length > 0) {
  playVisibleWhyMedia();

  setInterval(() => {
    whyIndex = (whyIndex + 1) % whyMedia.length;
    playVisibleWhyMedia();
  }, 15000);
}

/* ================= SCROLL ANIMATION ================= */
const whyElements = document.querySelectorAll(".why-text, .why-visual");
const whySection = document.querySelector(".why-choose");

if ("IntersectionObserver" in window && whySection) {
  whySection.classList.add("why-animate");

  const whyObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("why-show");
      }
    });
  }, { threshold: 0.2 });

  whyElements.forEach(el => whyObserver.observe(el));
} else {
  whyElements.forEach(el => el.classList.add("why-show"));
}
 

/* ================= STACK SLIDER ================= */

const stackCards = document.querySelectorAll(".stack-card");
const nextBtn = document.getElementById("nextWork");
const prevBtn = document.getElementById("prevWork");

let currentStack = 0;

/* UPDATE CARDS */
function updateStackSlider() {
  if (stackCards.length === 0) return;

  stackCards.forEach(card => {
    card.classList.remove("active", "next", "prev");
  });

  /* ACTIVE */
  stackCards[currentStack].classList.add("active");

  /* NEXT */
  let nextIndex = (currentStack + 1) % stackCards.length;
  stackCards[nextIndex].classList.add("next");

  /* PREVIOUS */
  let prevIndex =
    (currentStack - 1 + stackCards.length) % stackCards.length;

  stackCards[prevIndex].classList.add("prev");
}

if (stackCards.length > 0) {
  /* NEXT BUTTON */
  nextBtn?.addEventListener("click", () => {
    currentStack = (currentStack + 1) % stackCards.length;
    updateStackSlider();
  });

  /* PREVIOUS BUTTON */
  prevBtn?.addEventListener("click", () => {
    currentStack =
      (currentStack - 1 + stackCards.length) % stackCards.length;

    updateStackSlider();
  });

  /* AUTO SLIDE */
  setInterval(() => {
    currentStack = (currentStack + 1) % stackCards.length;
    updateStackSlider();
  }, 4000);
}

/* TOUCH SLIDE FOR MOBILE */

let startX = 0;

const slider = document.querySelector(".stack-slider");

slider?.addEventListener("touchstart", e => {
  startX = e.touches[0].clientX;
});

slider?.addEventListener("touchend", e => {

  let endX = e.changedTouches[0].clientX;

  if(startX - endX > 50){
    currentStack = (currentStack + 1) % stackCards.length;
    updateStackSlider();
  }

  if(endX - startX > 50){
    currentStack =
      (currentStack - 1 + stackCards.length) % stackCards.length;

    updateStackSlider();
  }

});

/* INIT */
updateStackSlider();
