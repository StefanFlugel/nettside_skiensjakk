(function setActiveNavLink() {
  const currentPath = window.location.pathname;
  const currentSection = currentPath.match(/\/pages\/([^/]+)\//)?.[1];

  document.querySelectorAll(".nav a").forEach(link => {
    const linkSection = new URL(link.href).pathname.match(/\/pages\/([^/]+)\//)?.[1];

    if (linkSection === currentSection) link.classList.add("active");
  });

  const subnav = document.querySelector(".subnav");
  if (!subnav) return;

  const subnavLinks = [...subnav.querySelectorAll("a")];
  const activeSubnavLink = subnavLinks.find(link =>
    new URL(link.href).pathname === currentPath
  );

  if (activeSubnavLink) {
    activeSubnavLink.classList.add("active");
  } else if (currentPath.endsWith("/index.html") || currentPath.endsWith("/")) {
    const defaultSubnavLink = subnavLinks[0];
    if (defaultSubnavLink) window.location.replace(defaultSubnavLink.href);
  }
})();
