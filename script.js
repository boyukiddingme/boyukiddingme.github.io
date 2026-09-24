const year = document.querySelector("#year");
if (year) year.textContent = new Date().getFullYear();

const glow = document.querySelector(".cursor-glow");

window.addEventListener("pointermove", (event) => {
  if (!glow) return;
  glow.style.left = `${event.clientX}px`;
  glow.style.top = `${event.clientY}px`;
  glow.style.opacity = "1";
});

window.addEventListener("pointerleave", () => {
  if (glow) glow.style.opacity = "0";
});

const revealItems = document.querySelectorAll(
  ".project, .experience-list article, .intro-grid, .skills-layout"
);

revealItems.forEach((el) => el.classList.add("reveal"));

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.12 }
);

revealItems.forEach((el) => observer.observe(el));
