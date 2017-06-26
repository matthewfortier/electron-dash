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

    setInterval(function(){

        try {
            mainWindow.webContents.send('speed', speed);                                                
        } catch (error) {
            // Ignore this for now
        }
        if(speed++ >= 120)
            speed = 0;

    }, 50);
    
}