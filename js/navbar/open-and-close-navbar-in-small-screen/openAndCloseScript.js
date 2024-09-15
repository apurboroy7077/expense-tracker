import {
  buttonOfClosingMenuInSmallScreen,
  buttonOfOpeningMenuInSmallScreen,
} from "../../selected-items-in-dom/domElements.js";
import closeNavbarListInSmallScreen from "./closeNavbarListInSmallScreen.js";
import openNavbarListInSmallScreen from "./openNavbarListInSmallScreen.js";

const openAndCloseScript = () => {
  buttonOfOpeningMenuInSmallScreen.addEventListener(
    "click",
    openNavbarListInSmallScreen
  );
  buttonOfClosingMenuInSmallScreen.addEventListener(
    "click",
    closeNavbarListInSmallScreen
  );
};

export default openAndCloseScript;
