import createHomepage from "./initial-page";
import menuPage from "./menu";
import aboutPage from "./about";
import "./styles/general-style.css";

const loadPage = (function() {
  const contentWrapper = document.querySelector("#content");
  const homeBtn = document.querySelector(".home-btn");
  const menuBtn = document.querySelector(".menu-btn");
  const aboutBtn = document.querySelector(".about-btn");


  const changeActiveTab = (activeTab) => {
    const buttons = document.querySelectorAll(".nav-buttons button");
    buttons.forEach(button => {
      if (button.textContent === activeTab) {
        button.classList.add("active-tab");
      } else {
        button.classList.remove("active-tab");
      }
    });
  }

  
  const homepage = event => {
    const main = document.querySelector("main");

    if (contentWrapper.children.length === 0) {
      contentWrapper.appendChild(createHomepage().main());
      homeBtn.classList.add("active-tab");
    } else {
      contentWrapper.replaceChild(createHomepage().main(), main);
      changeActiveTab(event.target.textContent);
    }
  };


  const menuTab = event => {
    changeActiveTab(event.target.textContent)
    const main = document.querySelector("main");
    contentWrapper.replaceChild(menuPage().main(), main);
  };


  const aboutTab = event => {
    changeActiveTab(event.target.textContent)
    const main = document.querySelector("main");
    contentWrapper.replaceChild(aboutPage().main(), main);
  };

  
  homeBtn.addEventListener("click", homepage);
  menuBtn.addEventListener("click", menuTab);
  aboutBtn.addEventListener("click", aboutTab)

  // Initial Load
  homepage();
})();