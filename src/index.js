carouselElements = document.querySelectorAll(".carousel-container");

carouselElements.forEach((carousel) => {
  let carouselImg = carousel.querySelectorAll("img");
  let openImgCounter = 0;
  let forwardBtnElement = carousel.querySelector("#forward-btn");
  let backwardBtnElement = carousel.querySelector("#backward-btn");

  forwardBtnElement.addEventListener("click", () => {
    openImgCounter -= 1;
    correctCounter(openImgCounter);

    updateImgPosition(openImgCounter);
  });
  backwardBtnElement.addEventListener("click", () => {
    openImgCounter += 1;
    correctCounter(openImgCounter);
    updateImgPosition(openImgCounter);
  });

  function correctCounter(counter) {
    if (counter < 0) {
      openImgCounter = 0;
    }
    if (counter > carouselImg.length - 1) {
      openImgCounter = carouselImg.length - 1;
    }
  }

  function updateImgPosition(counter) {
    carouselImg.forEach((img) => {
      img.className = "";
    });

    carouselImg[counter].classList.add("onShow");
  }
});
