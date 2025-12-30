(function setActiveNavLink() {
  const path = window.location.pathname.split("/").pop() || "index.html";
  const links = document.querySelectorAll("[data-nav] a");

  links.forEach(a => {
    const href = a.getAttribute("href");
    if (!href) return;

    // matcher både index og pages/...
    const hrefFile = href.split("/").pop();
    if (hrefFile === path) a.classList.add("active");
  });
})();
