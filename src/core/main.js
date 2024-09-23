const { app, BrowserWindow, ipcMain } = require('electron');
const path = require('path');
const { captureScreen, getCaptureModes, getCaptureSettings, setCaptureSetting } = require('./core/capture');
const { defaultSettings } = require('./core/capture/settings');

function createWindow() {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      preload: path.join(__dirname, 'electron/preload.js'),
    },
  });

  win.loadFile('src/ui/app.jsx');

  // Open the DevTools.
  // win.webContents.openDevTools();

  // Communicate with the renderer process
  ipcMain.on('capture-screen', (event, args) => {
    const mode = args.mode || 'FULL_SCREEN';
    const settings = getCaptureSettings();
    captureScreen(mode, settings)
      .then((imagePath) => {
        event.reply('capture-result', imagePath);
      })
      .catch((error) => {
        console.error('Error capturing screen:', error);
        event.reply('capture-error', error.message);
      });
  });

  ipcMain.on('get-capture-modes', (event) => {
    event.reply('capture-modes', getCaptureModes());
  });

  ipcMain.on('get-capture-settings', (event) => {
    event.reply('capture-settings', getCaptureSettings());
  });

  ipcMain.on('set-capture-setting', (event, args) => {
    setCaptureSetting(args.key, args.value);
    event.reply('setting-updated', true);
  });

  ipcMain.on('get-default-settings', (event) => {
    event.reply('default-settings', defaultSettings);
  });
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.whenReady().then(() => {
  createWindow();

  app.on('activate', () => {
    // On macOS it's common to re-create a window in the app when the
    // dock icon is clicked and there are no other windows open.
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });
});

// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit();
});

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and require them here.