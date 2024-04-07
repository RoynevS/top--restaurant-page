import createHomepage from "./initial-page";
import "./styles/general-style.css";

function loadPage() {
  const contentWrapper = document.querySelector("#content");
  contentWrapper.appendChild(createHomepage().main());
  contentWrapper.appendChild(createHomepage().footer());
}

loadPage();