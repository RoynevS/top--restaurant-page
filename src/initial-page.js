import createImage from "./create-images";

import foodImage from "./images/food_display.jpg";
import ambianceImage from "./images/restaurant_interior.jpg";

export default function createHomepage() {
  const main = () => {
    const mainWrapper = document.createElement("main");
    const heroSection = document.createElement("section");
    const primaryHeading = document.createElement("h1");
    const mainSection = document.createElement("section");
    const mainDescription = document.createElement("h2");
    const foodDescription = document.createElement("p");
    const ambianceDescription = document.createElement("p");
    
    const myFoodImage = createImage(foodImage);
    const myAmbianceImage = createImage(ambianceImage);

    primaryHeading.textContent = "Indulge in Authentic Japanese Flavors: A Culinary Journey Awaits at Sakura Sushi & Grill!";
    mainDescription.textContent = "Welcome to Sakura Sushi & Grill, where culinary excellence meets traditional Japanese charm. Step into a world of exquisite flavors and meticulous craftsmanship as we invite you on a gastronomic journey through the heart of Japan.";
    foodDescription.textContent = "Our menu boasts a tantalizing array of sushi, sashimi, and specialty rolls, crafted with the freshest ingredients and precision by our skilled sushi chefs. Delight your palate with savory grilled dishes such as teriyaki, yakitori, and tempura, each bursting with authentic Japanese flavors.";
    ambianceDescription.textContent = "Immerse yourself in the serene ambiance of our restaurant, adorned with elegant décor and ambient lighting, reminiscent of a tranquil Japanese garden. Whether you're seeking a casual dining experience or a memorable celebration, Sakura Sushi & Grill promises an unforgettable culinary adventure for all who seek the taste of Japan.";

    heroSection.classList.add("hero-section");
    mainSection.classList.add("main-section");
    mainDescription.classList.add("main-text");

    heroSection.appendChild(primaryHeading);
    mainSection.appendChild(mainDescription);
    mainSection.appendChild(myFoodImage);
    mainSection.appendChild(foodDescription);
    mainSection.appendChild(myAmbianceImage);
    mainSection.appendChild(ambianceDescription);
    mainWrapper.appendChild(heroSection);
    mainWrapper.appendChild(mainSection);

    return mainWrapper;
  };

  return { main };
}