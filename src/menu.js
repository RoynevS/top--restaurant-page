import sakuraRollsImage from "./images/sakura_rolls.jpg";
import teriyakiChickenDonburiImage from "./images/teriyaki_chicken_donburi.jpg";
import sashimiPlatterImage from "./images/sashimi_platter.jpg";
import yakitoriSkewersImage from "./images/yakitori_skewers.jpg";
import tempuraShrimpUdonImage from "./images/tempura_shrimp_udon.jpg";
import "./styles/general-style.css";

export default function menuPage() {
  const main = () => {
    const mainWrapper = document.createElement("main");
    const menuDescription = document.createElement("h2");
    const menuItem1 = document.createElement("div");
    const menuItem2 = document.createElement("div");
    const menuItem3 = document.createElement("div");
    const menuItem4 = document.createElement("div");
    const menuItem5 = document.createElement("div");
    const menuItem1Text = document.createElement("p");
    const menuItem2Text = document.createElement("p");
    const menuItem3Text = document.createElement("p");
    const menuItem4Text = document.createElement("p");
    const menuItem5Text = document.createElement("p");
    const menuItem1Heading = document.createElement("h3");
    const menuItem2Heading = document.createElement("h3");
    const menuItem3Heading = document.createElement("h3");
    const menuItem4Heading = document.createElement("h3");
    const menuItem5Heading = document.createElement("h3");


    const foodImage1 = new Image();
    const foodImage2 = new Image();
    const foodImage3 = new Image();
    const foodImage4 = new Image();
    const foodImage5 = new Image();

    foodImage1.src = sakuraRollsImage;
    foodImage2.src = teriyakiChickenDonburiImage;
    foodImage3.src = sashimiPlatterImage;
    foodImage4.src = yakitoriSkewersImage;
    foodImage5.src = tempuraShrimpUdonImage;

    menuDescription.textContent = "Each dish on our menu is a celebration of fresh, premium ingredients, expertly prepared by our talented chefs who take pride in delivering an unforgettable dining experience. Whether you're a sushi aficionado craving the perfect nigiri or seeking the comforting warmth of a steaming bowl of udon, our menu offers something to delight every palate.";
    menuItem1Heading.textContent = "Sakura Signature Roll";
    menuItem2Heading.textContent = "Teriyaki Chicken Donburi";
    menuItem3Heading.textContent = "Sashimi Platter";
    menuItem4Heading.textContent = "Yakitori Skewers";
    menuItem5Heading.textContent = "Tempura Shrimp Udon";
    menuItem1Text.textContent = "Experience the essence of our restaurant with our signature roll, featuring fresh salmon, avocado, and cucumber, wrapped in delicate soy paper and drizzled with our special Sakura sauce.";
    menuItem2Text.textContent = "Succulent grilled chicken glazed in our house-made teriyaki sauce, served over a bed of steamed rice and accompanied by a side of crisp Japanese pickles.";
    menuItem3Text.textContent = "Indulge in a selection of pristine sashimi, showcasing the finest cuts of tuna, salmon, and yellowtail, expertly sliced and presented with traditional garnishes.";
    menuItem4Text.textContent = "Savor the smoky flavors of our grilled yakitori skewers, featuring tender chicken pieces, green onions, and bell peppers, brushed with our savory yakitori sauce.";
    menuItem5Text.textContent = "Dive into a comforting bowl of udon noodles simmered in a flavorful broth, topped with crispy tempura shrimp, sliced green onions, and a sprinkle of nori flakes.";

    mainWrapper.classList.add("menu-grid");

    menuItem1.appendChild(menuItem1Heading);
    menuItem1.appendChild(menuItem1Text);
    menuItem2.appendChild(menuItem2Heading);
    menuItem2.appendChild(menuItem2Text);
    menuItem3.appendChild(menuItem3Heading);
    menuItem3.appendChild(menuItem3Text);
    menuItem4.appendChild(menuItem4Heading);
    menuItem4.appendChild(menuItem4Text);
    menuItem5.appendChild(menuItem5Heading);
    menuItem5.appendChild(menuItem5Text);

    mainWrapper.appendChild(menuDescription);
    mainWrapper.appendChild(foodImage1);
    mainWrapper.appendChild(menuItem1);
    mainWrapper.appendChild(menuItem2);
    mainWrapper.appendChild(foodImage2);
    mainWrapper.appendChild(foodImage3);
    mainWrapper.appendChild(menuItem3);
    mainWrapper.appendChild(menuItem4);
    mainWrapper.appendChild(foodImage4);
    mainWrapper.appendChild(foodImage5);
    mainWrapper.appendChild(menuItem5);

    return mainWrapper
  }

  return { main };
}