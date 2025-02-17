document.addEventListener("DOMContentLoaded", function () {
  const carouselContainer = document.querySelector(".carousel-container");
  const slides = document.querySelectorAll(".carousel-slide");
  const scrollLeftBtn = document.getElementById("scroll-left");
  const scrollRightBtn = document.getElementById("scroll-right");

  if (!carouselContainer || slides.length === 0) return;

  let cardWidth = slides[0].offsetWidth + 20; // Adjust for margin
  let scrollAmount = 0;
  let maxScroll = carouselContainer.scrollWidth - carouselContainer.clientWidth;

  function moveCarousel(direction) {
    scrollAmount += direction * cardWidth;

    // Prevent scrolling beyond limits
    if (scrollAmount > maxScroll) {
      scrollAmount = maxScroll;
    } else if (scrollAmount < 0) {
      scrollAmount = 0;
    }

    carouselContainer.scrollTo({
      left: scrollAmount,
      behavior: "smooth"
    });
  }

  // Attach event listeners
  scrollLeftBtn.addEventListener("click", () => moveCarousel(-1));
  scrollRightBtn.addEventListener("click", () => moveCarousel(1));

  // Auto-scroll with pause on hover
  let autoScroll = setInterval(() => moveCarousel(1), 4000);

  carouselContainer.addEventListener("mouseenter", () => clearInterval(autoScroll));
  carouselContainer.addEventListener("mouseleave", () => {
    autoScroll = setInterval(() => moveCarousel(1), 4000);
  });
});
