document.querySelectorAll("[data-reactions]").forEach(function (container) {
  var upBtn = container.querySelector('[data-reaction="up"]');
  var downBtn = container.querySelector('[data-reaction="down"]');
  var message = container.querySelector(".reaction-message");

  function randomLikeCount() {
    return Math.floor(Math.random() * 9000001) + 1000000;
  }

  function formatNumber(number) {
    return number.toLocaleString("en-US");
  }

  function setActive(button, active) {
    button.classList.toggle("is-active", active);
    button.setAttribute("aria-pressed", active ? "true" : "false");
  }

  upBtn.addEventListener("click", function () {
    if (upBtn.classList.contains("is-active")) {
      setActive(upBtn, false);
      message.hidden = true;
      message.textContent = "";
      return;
    }

    setActive(downBtn, false);
    setActive(upBtn, true);
    message.textContent =
      "you and " + formatNumber(randomLikeCount()) + " others liked this";
    message.hidden = false;
  });

  downBtn.addEventListener("click", function () {
    if (downBtn.classList.contains("is-active")) {
      setActive(downBtn, false);
      return;
    }

    setActive(upBtn, false);
    setActive(downBtn, true);
    message.hidden = true;
    message.textContent = "";
  });
});
