export default function menuItem(heading, text) {
  const menuItem = document.createElement("div");
  const menuItemText = document.createElement("p");
  const menuItemHeading = document.createElement("h3");

  menuItemHeading.textContent = heading;
  menuItemText.textContent = text;

  menuItem.appendChild(menuItemHeading);
  menuItem.appendChild(menuItemText);

  return menuItem;
}