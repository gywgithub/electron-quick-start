// Modules to control application life and create native browser window
const {app, BrowserWindow} = require('electron')

// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the JavaScript object is garbage collected.
let mainWindow

function createWindow () {
  // Create the browser window.
  mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true
    }
  })

  // and load the index.html of the app.
  // mainWindow.loadFile('index.html')
  // mainWindow.loadURL('https://www.baidu.com'); // ok
  // mainWindow.loadURL('https://baike.baidu.com/item/hello/18757954?fr=aladdin'); // ok

  // mainWindow.loadURL('https://imjoy.io');  // ok
  // mainWindow.loadURL('https://imjoy.io/#/app'); // error
  // mainWindow.loadURL('https://imjoy.io/#/app?token=79863a5f-febb-4a06-945c-1ddb6e460b41'); // error
  
  // mainWindow.loadURL('http://192.168.199.172:8000/app?token=123'); // error

  // mainWindow.loadURL('http://192.168.199.172:8000') // ok

  mainWindow.loadURL('http://192.168.199.172:8000/app') // error
  

  // Open the DevTools.
  // mainWindow.webContents.openDevTools()

  // Emitted when the window is closed.
  console.log(111)
  mainWindow.on('closed', function (e) {
    console.log(222)
    // Dereference the window object, usually you would store windows
    // in an array if your app supports multi windows, this is the time
    // when you should delete the corresponding element.
    e.preventDefault();
    mainWindow.destroy();
    mainWindow = null
  })
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on('ready', createWindow)

// Quit when all windows are closed.
app.on('window-all-closed', function () {
  console.log(333)
  // On macOS it is common for applications and their menu bar
  // to stay active until the user quits explicitly with Cmd + Q
  if (process.platform !== 'darwin') app.quit()
})

app.on('activate', function () {
  // On macOS it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (mainWindow === null) createWindow()
})

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and require them here.
