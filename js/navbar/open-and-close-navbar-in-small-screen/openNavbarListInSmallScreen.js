const openNavbarListInSmallScreen = () => {
  const menuButton = document.getElementsByClassName(
    "menu-button-small-screen-ar7"
  )[0];
  const menuList = document.getElementsByClassName(
    "small-screen-menu-list-ar7"
  )[0];
  const closeMenuButton = document.getElementsByClassName(
    "close-menu-button-small-screen-ar7"
  )[0];
  menuList.style.height = menuList.scrollHeight + "px";
  closeMenuButton.classList.remove("hidden");
  menuButton.classList.add("hidden");
};

export default openNavbarListInSmallScreen;
