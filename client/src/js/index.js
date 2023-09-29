//Import Workbox
import { Workbox } from "workbox-window";
// Import editor
import Editor from "./editor";
//database
import "./database";
//Import CSS
import "../css/style.css";

//Query selector to select id=main and assign to constant
const main = document.querySelector("#main");
//Set main to empty string
main.innerHTML = "";

const loadSpinner = () => {
  const spinner = document.createElement("div");
  spinner.classList.add("spinner");
  spinner.innerHTML = `
  <div class="loading-container">
  <div class="loading-spinner" />
  </div>
  `;
  main.appendChild(spinner);
};

const editor = new Editor();

if (typeof editor === "undefined") {
  loadSpinner();
}

// Check if service workers are supported
if ("serviceWorker" in navigator) {
  // register workbox service worker
  const workboxSW = new Workbox("./src-sw.js");
  workboxSW.register();
} else {
  console.error("Service workers are not supported in this browser.");
}

//Service worker to be added at the entry point of the application