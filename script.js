const revealItems = document.querySelectorAll(".reveal");

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    }
  });
}, { threshold: 0.2 });

revealItems.forEach(item => observer.observe(item));

function openImage(path) {
  window.open(path, "_blank");
}
