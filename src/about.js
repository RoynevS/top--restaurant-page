import "./styles/general-style.css";

export default function aboutPage() {
  const main = () => {
    const mainWrapper = document.createElement("main");
    const primaryHeading = document.createElement("h1");
    const timesDiv = document.createElement("div");
    const timesList = document.createElement("ul");
    const listElement1 = document.createElement("li");
    const listElement2 = document.createElement("li");
    const listElement3 = document.createElement("li");
    const listElement4 = document.createElement("li");
    const message = document.createElement("p");

    primaryHeading.textContent = "Opening Times for Sakura Sushi & Grill:";
    listElement1.textContent = "Monday to Friday: 11:30 AM - 2:30 PM (Lunch) | 5:30 PM - 10:00 PM (Dinner)";
    listElement2.textContent = "Saturday: 12:00 PM - 10:30 PM";
    listElement3.textContent = "Sunday: Closed";
    listElement4.textContent = "Please note that our hours may vary on public holidays. We recommend contacting us directly or checking our website for any updates to our opening times. We look forward to welcoming you to Sakura Sushi & Grill for an exceptional dining experience!";
    message.textContent = "Thank you for choosing Sakura Sushi & Grill. We look forward to serving you and creating cherished memories together. Enjoy your dining experience!";

    mainWrapper.classList.add("about-grid");
    timesList.classList.add("times-list");

    timesList.appendChild(listElement1);
    timesList.appendChild(listElement2);
    timesList.appendChild(listElement3);
    timesList.appendChild(listElement4);
    timesDiv.appendChild(timesList);
    mainWrapper.appendChild(primaryHeading);
    mainWrapper.appendChild(timesDiv);
    mainWrapper.appendChild(message);

    return mainWrapper;
  }

  return { main };
}