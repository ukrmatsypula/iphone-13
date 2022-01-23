(() => {
  const chItems = document.querySelectorAll(".characteristics__item");

  chItems.forEach((item) => {
    const chButton = item.querySelector(".characteristics__title");
    const chContent = item.querySelector(".characteristics__description");

    chButton.addEventListener("click", function () {
      if (chContent.classList.contains("open")) {
        chContent.style.height = "";
      } else {
        chContent.style.height = `${chContent.scrollHeight}px`;
      }

      chContent.classList.toggle("open");
      chButton.classList.toggle("active");
    });
  });
})();
