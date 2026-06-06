document.querySelectorAll("[data-reactions]").forEach(function (container) {
  container.querySelectorAll(".reaction-btn").forEach(function (button) {
    button.addEventListener("click", function () {
      var isActive = button.classList.contains("is-active");
      button.classList.toggle("is-active", !isActive);
      button.setAttribute("aria-pressed", isActive ? "false" : "true");
    });
  });
});
