import foodImage from "./images/food_display.jpg";
import ambianceImage from "./images/restaurant_interior.jpg";

export default function createHomepage() {
  const main = () => {
    const mainWrapper = document.createElement("main");
    const heroSection = document.createElement("section");
    const primaryHeading = document.createElement("h1");
    const mainSection = document.createElement("section");
    const mainDescription = document.createElement("p");
    const foodDescription = document.createElement("p");
    const ambianceDescription = document.createElement("p");
    const myFoodImage = new Image();
    myFoodImage.src = foodImage;
    const myAmbianceImage = new Image();
    myAmbianceImage.src = ambianceImage;

    primaryHeading.textContent = "Indulge in Authentic Japanese Flavors: A Culinary Journey Awaits at Sakura Sushi & Grill!";
    mainDescription.textContent = "Welcome to Sakura Sushi & Grill, where culinary excellence meets traditional Japanese charm. Step into a world of exquisite flavors and meticulous craftsmanship as we invite you on a gastronomic journey through the heart of Japan.";
    foodDescription.textContent = "Our menu boasts a tantalizing array of sushi, sashimi, and specialty rolls, crafted with the freshest ingredients and precision by our skilled sushi chefs. Delight your palate with savory grilled dishes such as teriyaki, yakitori, and tempura, each bursting with authentic Japanese flavors.";
    ambianceDescription.textContent = "Immerse yourself in the serene ambiance of our restaurant, adorned with elegant décor and ambient lighting, reminiscent of a tranquil Japanese garden. Whether you're seeking a casual dining experience or a memorable celebration, Sakura Sushi & Grill promises an unforgettable culinary adventure for all who seek the taste of Japan.";

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

  const footer = () => {
    const footerSection = document.createElement("footer");
    const copyrightText = document.createElement("p");
    const contactList = document.createElement("ul");
    const contactListItem1 = document.createElement("li");
    const contactListItem2 = document.createElement("li");
    const contactListItem3 = document.createElement("li");
    const socialMediaText = document.createElement("p");
    const socialMediaList = document.createElement("ul");
    const socialMediaListItem1 = document.createElement("li");
    const socialMediaListItem2 = document.createElement("li");
    const socialMediaListItem3 = document.createElement("li");

    copyrightText.textContent = "© 2024 Sakura Sushi & Grill. All rights reserved.";
    contactListItem1.textContent = "123 Cherry Blossom Avenue, Kyoto, Japan";
    contactListItem2.textContent = "Phone: +81 (0)75-123-4567";
    contactListItem3.textContent = "Email: info@sakurasushigrill.com";
    socialMediaText.textContent = "Follow us on social media:";
    socialMediaListItem1.textContent = "Instagram: @sakurasushigrill";
    socialMediaListItem2.textContent = "Facebook: /SakuraSushiGrillKyoto";
    socialMediaListItem3.textContent = "Twitter: @SakuraKyoto";
  
    socialMediaList.appendChild(socialMediaListItem1);
    socialMediaList.appendChild(socialMediaListItem2);
    socialMediaList.appendChild(socialMediaListItem3);
    contactList.appendChild(contactListItem1);
    contactList.appendChild(contactListItem2);
    contactList.appendChild(contactListItem3);
    footerSection.appendChild(copyrightText);
    footerSection.appendChild(contactList);
    footerSection.appendChild(socialMediaText);
    footerSection.appendChild(socialMediaList);
    return footerSection;
  };

  return { main, footer};
}