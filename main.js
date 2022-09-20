// Modules to control application life and create native browser window
const { app, BrowserWindow } = require("electron");
const electron = require("electron");
const path = require("path");
const isDev = require("electron-is-dev");
const screenElectron = electron.screen;

function createWindow() {
  const mainScreen = screenElectron.getPrimaryDisplay();
  const dimensions = mainScreen.size;

  // Create the browser window.
  const mainWindow = new BrowserWindow({
    width: dimensions.width,
    height: dimensions.height,
    minWidth: 1250,
    minHeight: 700,
    show: false,
    // titleBarStyle: 'customButtonsOnHover',
    // titleBarOverlay: true,
    // titleBarOverlay: {
    //   color: '#2f3241',
    //   symbolColor: '#74b1be',
    //   height: 50
    // },
    webPreferences: {
      preload: path.join(__dirname, "preload.js"),
    },
    icon: "public/Union.png",
  });
  mainWindow.loadFile("public/index.html");
  // and load the index.html of the app.
  const splash = new BrowserWindow({
    width: 800,
    height: 560,
    transparent: true,
    frame: false,
    alwaysOnTop: true,
    icon: "public/Union.png",
  });

  mainWindow.removeMenu();
  mainWindow.setMenu(null);

  mainWindow.loadURL(
    isDev
      ? "http://localhost:3000"
      : `file://${path.join(__dirname, "../build/index.html")}`
  );
  // Open the DevTools.
  // if (isDev) {
  //   mainWindow.webContents.openDevTools({ mode: "detach" });
  // }

  splash.loadFile("./public/splash/splash.html");
  splash.center();
  setTimeout(function () {
    splash.close();
    mainWindow.center();
    mainWindow.show();
  }, 15000);
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.whenReady().then(() => {
  createWindow();

  app.on("activate", function () {
    // On macOS it's common to re-create a window in the app when the
    // dock icon is clicked and there are no other windows open.
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });
});

// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.
app.on("window-all-closed", function () {
  if (process.platform !== "darwin") app.quit();
});

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and require them here.
