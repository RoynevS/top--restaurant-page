import createHomepage from "./initial-page";
import menuPage from "./menu";
import "./styles/general-style.css";

function loadPage() {
  const contentWrapper = document.querySelector("#content");
  const homeBtn = document.querySelector(".home-btn");
  const menuBtn = document.querySelector(".menu-btn");
  const aboutBtn = document.querySelector(".about-btn");
  
  const homepage = () => {
    const main = document.querySelector("main");
    if (contentWrapper.children.length === 0) {
      contentWrapper.appendChild(createHomepage().main());
    } else {
      contentWrapper.replaceChild(createHomepage().main(), main);
    }
  }

  const menuTab = () => {
    const main = document.querySelector("main");
    contentWrapper.replaceChild(menuPage().main(), main);
  }
  
  homeBtn.addEventListener("click", homepage);
  
  menuBtn.addEventListener("click", menuTab);

  homepage();
}

loadPage();