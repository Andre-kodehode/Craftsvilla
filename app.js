document.addEventListener("DOMContentLoaded", () => {
  const wheel = document.getElementById("wheel");
  if (wheel) {
    wheel.addEventListener("wheel", (e) => e.preventDefault());
  }
});
