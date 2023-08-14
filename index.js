import calculate from "./calculate.js";
import copyToClipBoard from "./copyToClipBoard.js";
import {
  handleButtonPress,
  handleClearButton,
  handleTyping,
} from "./keyHandlers.js";
import themeSwitchet from "./themeSwitchet.js";

document.querySelectorAll(".charKey").forEach(function (charKeyBtn) {
  charKeyBtn.addEventListener("click", handleButtonPress);
});

document.getElementById("clear").addEventListener("click", handleClearButton);
document.getElementById("input").addEventListener("keydown", handleTyping);
document.getElementById("equal").addEventListener("click", calculate);
document
  .getElementById("copyToClipboard")
  .addEventListener("click", copyToClipBoard);
document
  .getElementById("themeSwitcher")
  .addEventListener("click", themeSwitchet);
