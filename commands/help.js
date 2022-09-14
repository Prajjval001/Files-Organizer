let fs = require("fs");
let path = require("path");

//help Implemented
function helpFn(dirPath){
    console.log(`
        List of all commands: 
                           node  main.js tree "dictPath" 
                           node main.js organize "dictPath" 
                           node main.js help
    `);
}

module.exports = {
    heplKey: helpFn
}