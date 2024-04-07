import createHomepage from "./initial-page";

function loadPage() {
  const contentWrapper = document.querySelector("#content");
  contentWrapper.appendChild(createHomepage().main());
  contentWrapper.appendChild(createHomepage().footer());
}

loadPage();