(() => {
  const tabs = document.querySelectorAll(".card-detail__change");
  const tabsTitle = document.querySelector(".card-details__title");
  const tabsPrice = document.querySelector(".card-details__price");
  const tabsImg = document.querySelector(".card__image_item");

  const tabsOptions = [
    {
      name: "Graphite",
      memory: "128GB",
      price: "99999",
      img: "./img/iPhone-graphite.webp",
    },
    {
      name: "Silver",
      memory: "256GB",
      price: "124999",
      img: "./img/iPhone-silver.webp",
    },
    {
      name: "Sierra Blue",
      memory: "512GB",
      price: "149999",
      img: "./img/iPhone-sierra_blue.webp",
    },
  ];

  const changeContent = (index) => {
    tabsTitle.textContent = `Смартфон Apple iPhone 13 Pro ${tabsOptions[index].memory} ${tabsOptions[index].name}`;
    tabsPrice.textContent = `${tabsOptions[index].price}₽`;
    tabsImg.src = tabsOptions[index].img;
  };

  const changeActiveTabs = (indexClickedTab) => {
    tabs.forEach((tab) => {
      tab.classList.remove("active");

      tabs[indexClickedTab].classList.add("active");
    });

    changeContent(indexClickedTab);
  };

  tabs.forEach((tab, index) => {
    tab.addEventListener("click", () => {
      changeActiveTabs(index);
    });
  });

  changeContent(0);
})();
