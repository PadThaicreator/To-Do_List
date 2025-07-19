const { app, BrowserWindow } = require('electron');
const path = require('path');

function createWindow() {
  const win = new BrowserWindow({
    width: 1920,
    height: 1080,
    title: "My ToDo App",
    webPreferences: {
      nodeIntegration: false,
    },
  });

  win.loadURL('http://localhost:3000'); // ชี้ไปที่ Next.js dev server
}

app.whenReady().then(() => {
  createWindow();
  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit();
});
