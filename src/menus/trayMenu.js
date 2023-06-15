const electron = require('electron')
const path = require('path')
const {app, Tray, Menu} = electron

class TrayMenu {
    constructor() {
        this.template = [
            {
                label: 'Open',
                click: _ => console.log('Display window')
            },
            {
                label: 'About',
                click: _ => console.log('About window')
            },
            {
                type: 'separator'
            },
            {
                label: 'Exit',
                click: _ => {
                    app.isQuitting = true
                    app.quit()
                }
            }
        ]
    }

    setup() {
        let iconFile = path.join(`${__dirname}`, `../../assets/timer.png`)
        console.log(iconFile)
    
        let tray = new Tray(iconFile)
        tray.setToolTip('Electron Pomodoro timer')
            
        let contextMenu = Menu.buildFromTemplate(this.template)
        tray.setContextMenu(contextMenu)
    }
}

module.exports = new TrayMenu()