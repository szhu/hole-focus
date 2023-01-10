// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// All of the Node.js APIs are available in this process.
const electron = require("electron");

const mainWindow = electron.remote.getCurrentWindow();

mainWindow.on("focus", () => {
  window.inBackground = false;
  mainWindow.setIgnoreMouseEvents(false);
  document.querySelector("#hole").style.outlineColor = "#00000088";
});

mainWindow.on("blur", () => {
  window.inBackground = true;
  mainWindow.setIgnoreMouseEvents(true);
  document.querySelector("#hole").style.outlineColor = "#000000ee";
});
