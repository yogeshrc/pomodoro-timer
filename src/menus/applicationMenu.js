const electron = require('electron')
const Menu = electron.Menu
const pomoTimer = require('../pomo-timer/pomo-timer')

class ApplicationMenu {
    constructor() {
        this.template = [
            {
                label: 'File',
                accelerator: 'Alt+F',
                submenu: [
                    {
                        label: 'Play',
                        click: _ => pomoTimer.start()
                    },
                    {
                        label: 'Pause',
                        click: _ => pomoTimer.pause()
                    },
                    {
                        label: 'Reset',
                        click: _ => pomoTimer.reset()
                    },
                    {
                        type: 'separator'
                    },
                    {
                        label: 'Exit',
                        role: 'close'
                    }
                ]
            },
            {
                label: "Help",
                submenu: [
                    {
                        label: "About",
                        click: _ => console.log('Display the About dialog here')
                    }
                ]
            }
        ];
    }

    setup() {
        const menu = Menu.buildFromTemplate(this.template)
        Menu.setApplicationMenu(menu)
    }
}

module.exports = new ApplicationMenu()