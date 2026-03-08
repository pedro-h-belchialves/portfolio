// Scroll reveal
const revealEls = document.querySelectorAll(".reveal");
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry, i) => {
      if (entry.isIntersecting) {
        setTimeout(() => entry.target.classList.add("visible"), i * 60);
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.08 },
);
revealEls.forEach((el) => observer.observe(el));

// Mobile menu
function toggleMenu() {
  const links = document.querySelector(".nav-links");
  const cta = document.querySelector(".nav-cta");
  if (links) {
    const open = links.style.display === "flex";
    links.style.cssText = open
      ? ""
      : "display:flex;flex-direction:column;position:fixed;top:64px;left:0;right:0;background:rgba(8,12,16,.97);padding:2rem;gap:1.5rem;border-bottom:1px solid #21262d;z-index:99";
  }
}

// Highlight active nav
const sections = document.querySelectorAll("section[id]");
window.addEventListener("scroll", () => {
  let current = "";
  sections.forEach((s) => {
    if (window.scrollY >= s.offsetTop - 100) current = s.id;
  });
  document.querySelectorAll(".nav-links a").forEach((a) => {
    a.style.color =
      a.getAttribute("href") === "#" + current ? "var(--accent)" : "";
  });
});
