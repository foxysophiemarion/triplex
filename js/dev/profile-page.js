import "./app.min.js";
/* empty css                */
(function initDynamicTitle() {
  const dynamicTitleEls = document.querySelectorAll(".dynamic-title");
  const tabButtons = document.querySelectorAll(".tabs-profile__title");
  const tabTitles = [
    "Контактные данные",
    "Заказы",
    "Платежные данные"
  ];
  function updateTitle(index) {
    dynamicTitleEls.forEach((el) => {
      el.textContent = tabTitles[index];
    });
  }
  tabButtons.forEach((btn, index) => {
    if (btn.classList.contains("--tab-active")) {
      updateTitle(index);
    }
  });
  tabButtons.forEach((btn, index) => {
    btn.addEventListener("click", () => {
      if (btn.classList.contains("tabs-profile__quit")) return;
      updateTitle(index);
    });
  });
})();
