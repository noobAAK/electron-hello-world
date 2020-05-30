const path = require('path');
const url = require('url');
const Electron = require('electron');
const app = Electron.app ;
const browserWindow = Electron.BrowserWindow ;

let win ;
function createWindow(){
    win = new browserWindow();
    win.loadURL(url.format({
        pathname:path.join(__dirname,'index.html'),
        protocol:'file',
        //slashes:true
    }))
}


app.on('ready',createWindow);
console.log("main process working fine !!!");