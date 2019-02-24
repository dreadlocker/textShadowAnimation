window.onload = function () {
  const header = document.getElementsByTagName("h1")[0];

  function shadow(e) {
    // this formula is NOT a constant. Depends on the element's margin, padding, text length ...
    const pixelsX = Math.ceil(((e.x / this.offsetWidth) * 10 - 12) * 5);
    const pixelsY = Math.ceil(((e.y / this.offsetHeight) * 10 - 5) * 5);
    header.style.textShadow = `${pixelsX}px ${pixelsY}px 0px rgba(186, 218, 85, 0.5)`;
  }

  header.addEventListener("mousemove", shadow);
}