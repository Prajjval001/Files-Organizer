let fs = require("fs");
let path = require("path");
function treeFn(dirPath){
    //let destPath;
    if(dirPath == undefined){
        // to take path of current working directory if undefined process.cwd();
        treeHelper( process.cwd(), "");
        return;
    } else {
        let doexit = fs.existsSync(dirPath);
        if(doexit){
            treeHelper(dirPath, "");
        } else {
            console.log("kindly enter correct Path");
            return;
        }
    }
}

function treeHelper(dirPath, indent){
    // check file or folder 
    let isFile = fs.lstatSync(dirPath).isFile();
    if(isFile == true){
       let fileName = path.basename(dirPath);
       console.log(indent + "||------" + fileName);
    } else {
        let dirName = path.basename(dirPath)
        console.log(indent + "|______" + dirName);
        let childrens = fs.readdirSync(dirPath);
        for(let i=0; i<childrens.length; i++){
            let childPath = path.join(dirPath, childrens[i]);
            treeHelper(childPath, indent+ "\t");
        }

    }

}

module.exports={
    treeKey: treeFn
}