// Back to top functionality
window.addEventListener("scroll", function () {
  const backToTop = document.getElementById("backToTop");
  if (window.pageYOffset > 300) {
    backToTop.classList.remove("opacity-0", "invisible");
    backToTop.classList.add("opacity-100", "visible");
  } else {
    backToTop.classList.remove("opacity-100", "visible");
    backToTop.classList.add("opacity-0", "invisible");
  }
});

document.getElementById("backToTop").addEventListener("click", function () {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  });
});

// Fungsi untuk mengurai target dari string (misal: "50k" atau "90%")
function parseTarget(targetStr) {
  targetStr = targetStr.toLowerCase().trim();
  let suffix = "";
  let numberPart = targetStr;

  if (targetStr.endsWith("k")) {
    suffix = "K";
    numberPart = targetStr.slice(0, -1);
    return { number: Number(numberPart) * 10, suffix };
  } else if (targetStr.endsWith("%")) {
    suffix = "%";
    numberPart = targetStr.slice(0, -1);
    return { number: Number(numberPart), suffix };
  } else {
    return { number: Number(targetStr), suffix: "" };
  }
}

function animateCounter(element, targetStr) {
  const { number: target, suffix } = parseTarget(targetStr);
  let current = 0;
  const duration = 2000; // durasi animasi dalam milidetik
  const frameRate = 30; // frame per detik
  const totalFrames = Math.round(duration / (1000 / frameRate));
  const increment = target / totalFrames;
  const timer = setInterval(() => {
    current += increment;
    if (current >= target) {
      element.textContent = target + suffix;
      clearInterval(timer);
    } else {
      element.textContent = Math.floor(current) + suffix;
    }
  }, 1000 / frameRate);
}

const observerOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -50px 0px",
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting && entry.target.classList.contains("counter")) {
      const targetStr = entry.target.getAttribute("data-target");
      animateCounter(entry.target, targetStr);
      observer.unobserve(entry.target); // animasi hanya dilakukan sekali
      entry.target.classList.add("fade-in-up");
    }
  });
}, observerOptions);

document.querySelectorAll(".counter").forEach((el) => {
  observer.observe(el);
});
