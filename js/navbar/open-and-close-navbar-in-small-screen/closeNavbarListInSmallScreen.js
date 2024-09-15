import {
  buttonOfClosingMenuInSmallScreen,
  buttonOfOpeningMenuInSmallScreen,
  navbarMenuListOfSmallScreen,
} from "../../selected-items-in-dom/domElements.js";

const closeNavbarListInSmallScreen = () => {
  navbarMenuListOfSmallScreen.style.height = "0px";
  buttonOfClosingMenuInSmallScreen.classList.add("hidden");
  buttonOfOpeningMenuInSmallScreen.classList.remove("hidden");
};

export default closeNavbarListInSmallScreen;
