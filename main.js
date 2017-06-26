const electron = require('electron');
const app = electron.app;
const BrowserWindow = electron.BrowserWindow;

let mainWindow = null;

app.on('ready', () => {
    mainWindow = new BrowserWindow({
        width: 1250,
        height: 800
    });
    mainWindow.openDevTools();
    mainWindow.loadURL(`file://${__dirname}/app/index.html`);
});

app.on('close', (event) => {
    event.preventDefault;
});

exports.loadPage = (page) => {
    mainWindow.loadURL(`file://${__dirname}/app/` + page + `.html`);
}

exports.start = () => {
   
    var speed = 0;
    var rpmRotation = 1200;

    setInterval(function(){

        try {
            mainWindow.webContents.send('speed', speed);                                                
            mainWindow.webContents.send('rpm', rpmRotation);                                                
        } catch (error) {
            // Ignore this for now
        }
        if(speed++ >= 120)
            speed = 0;

        rpmRotation -= 10
        if(rpmRotation < 240)
            rpmRotation = 1200;
    }, 50);
    
}