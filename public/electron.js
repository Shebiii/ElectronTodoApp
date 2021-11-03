const path = require("path")

const { app, BrowserWindow } = require("electron")
const isDev = require("electron-is-dev")

function createWindow() {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    // webPreferences: {
    //   nodeIntegration: true,
    // },
  })
  win.loadURL(
    isDev
      ? "http://localhost:3000"
      : `file://${path.join(__dirname, "../build/index.html")}`
  )

  // Open the DevTools.
  if (isDev) {
    win.webContents.openDevTools({ mode: "detach" })
  }
}
app.whenReady().then(createWindow)

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit()
  }
})

app.on("activate", () => {
  // On macOS it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow()
  }
})

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and require them here.
