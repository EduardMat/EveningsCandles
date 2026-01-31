let testDocument = window;

let navbarElement = document.querySelector(".nav-master-container");

let navbarTinting = true;

let codument = document.querySelector("body");

testDocument.addEventListener("scroll", () => {

  if (window.scrollY <= 10 && navbarTinting === true) {

    navbarElement.classList.add("blocked");

  } else {

    navbarElement.classList.remove("blocked");

  }

});



let loadingScreenElement = document.querySelector(".loading-screen");



setTimeout(() => {

  loadingScreenElement.classList.add("display-none");

}, 3000);



let mobileNavElement = document.querySelector(".mobile-nav");

let hamburgerToggleElement = document.querySelector("#hamburger");



hamburgerToggleElement.addEventListener("click", () => {

  navbarElement.classList.toggle("deploy-mobile-nav");

  codument.classList.toggle("blurred");

});



let projectCarouselElement = document.querySelector(

  ".projects-carousel-container"

);

let projectForwardButton = document.querySelector("#forward-project");

let projectBackwardButton = document.querySelector("#backward-project");

const codumentWidth = window.innerWidth;

let projectScrollPosition = 0;



console.log(codumentWidth);



projectForwardButton.addEventListener("click", () => {

  projectCarouselElement.scrollTo({

    top: 0,

    left: (projectScrollPosition += codumentWidth),

    behavior: "smooth",

  });



  if (projectScrollPosition > codumentWidth * 3) {

    projectScrollPosition = codumentWidth * 3;

  }



  console.log(codumentWidth * 3);

  console.log(projectScrollPosition);

});



projectBackwardButton.addEventListener("click", () => {

  projectCarouselElement.scrollTo({

    top: 0,

    left: (projectScrollPosition -= codumentWidth),

    behavior: "smooth",

  });



  if (projectScrollPosition < 0) {

    projectScrollPosition = 0;

  }

});