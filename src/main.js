const electron = require('electron')
const path = require('path')
const {app, BrowserWindow} = electron
const appMenu = require('./menus/applicationMenu')
const trayMenu = require('./menus/trayMenu')

app.on('ready', _ => {
    const mainWin = new BrowserWindow({
        width: 800,
        height: 600,
        icon: path.join(`${__dirname}`, `../assets/timer.ico`)
    })
    mainWin.loadURL(`file://${__dirname}/pomo-timer/pomo-timer.html`)
    appMenu.setup()
    trayMenu.setup()
})
