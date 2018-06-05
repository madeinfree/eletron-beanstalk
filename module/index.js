require('dotenv').config();
const path = require('path');
const { app, BrowserWindow } = require('electron');

const isProduction = process.env.NODE_ENV === 'production';

function createWindow() {
  win = new BrowserWindow({ width: 800, height: 600 });

  win.loadFile(path.resolve(__dirname, '../src/index.html'));

  win.on('closed', () => {
    win = null;
    if (!isProduction) {
      console.log('Close');
    }
  });

  app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
      app.quit();
    }
  });

  app.on('activate', () => {
    if (win === null) {
      createWindow();
    }
  });
}

app.on('ready', createWindow);
