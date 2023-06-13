const electron = require('electron')
const appMenu = require('./applicationMenu')
const app = electron.app
const BrowserWindow = electron.BrowserWindow

app.on('ready', _ => {
    const mainWin = new BrowserWindow({
        width: 800,
        height: 600
    })
    mainWin.loadURL(`file://${__dirname}/pomo-timer/pomo-timer.html`)
    appMenu()
})
