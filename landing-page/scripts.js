const image = document.getElementById("fade-in-image");
window.onload = function () {
  image.classList.add("fadeIn");
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      image.classList.add("rotate");
    } else {
      image.classList.remove("rotate");
    }
  });
});

// Start observing the target section
const targetSection = document.getElementById("target-section");
observer.observe(targetSection);
