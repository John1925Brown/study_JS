import countTimer from "./modules/countTimer";
import toogleMenu from "./modules/toogleMenu";
import togglePopup from "./modules/togglePopup";
import smoothScrolling from "./modules/smoothScrolling";
import tabs from "./modules/tabs";
import sliderFunc from "./modules/sliderFunc";
import ourTeamChangeImages from "./modules/ourTeamChangeImages";
import inputsValidation from "./modules/inputsValidation";
import calc from "./modules/calc";
import setForm from "./modules/setForm";

//Timer
countTimer("10-june-2023");

// Menu
toogleMenu();

// popup-window
togglePopup();

// smoothScrolling
smoothScrolling();

// tabs
tabs();

// slider
sliderFunc();

// ourTeam change images
ourTeamChangeImages();

// Inputs Validation
inputsValidation();

// Calculator
calc(100);

// send-ajax-form
setForm();
