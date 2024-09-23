const { contextBridge, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld('UltraCam', {
  captureScreen: (mode, settings) => ipcRenderer.invoke('capture-screen', { mode, settings }),
  getCaptureModes: () => ipcRenderer.invoke('get-capture-modes'),
  getCaptureSettings: () => ipcRenderer.invoke('get-capture-settings'),
  setCaptureSetting: (key, value) => ipcRenderer.invoke('set-capture-setting', { key, value }),
  getDefaultSettings: () => ipcRenderer.invoke('get-default-settings'),
});