let fs = require("fs");
let path = require("path");
let types = require("../extension/utility").typesKey;

function organizeFn(dirPath){
    //console.log("organize command implemented for", dirPath);
    // 1. input -> given directory path
    let destPath;
    if(dirPath == undefined){
        destPath = process.cwd();
        return;
    }else {
        let doexit = fs.existsSync(dirPath);
        if(doexit){
            // 2. create -> organized files -> directory
            destPath = path.join(dirPath,"organized_files");
            if(fs.existsSync(destPath)== false){
                fs.mkdirSync(destPath);
            }
            
        } else {
            console.log("kindly enter correct Path");
            return;
        }

    }
    organizer(dirPath, destPath);




}

function organizer(src, dest){
    // 3. get the type of files in directory
    
    let childNames = fs.readdirSync(src);
    //console.log(childNames);
    for(let i =0; i< childNames.length; i++){
        let childAddress = path.join(src, childNames[i]);
        let isFile = fs.lstatSync(childAddress).isFile();
        if(isFile){
            //console.log(childNames[i]);
            let category = getcategory(childNames[i]);
            console.log(childNames[i], "belongs to --->>", category);

            // 4. copy / cut files and add into organized directory of different tyes of categories
            sendFiles(childAddress,dest,category);


        }
    }

}
function sendFiles(srcFilePath, dest, category){
    let categoryPath = path.join(dest, category);
    if(fs.existsSync(categoryPath) == false){
        fs.mkdirSync(categoryPath);
    }
    let fileName = path.basename(srcFilePath);
    let destFilePath = path.join(categoryPath,fileName);
    fs.copyFileSync(srcFilePath, destFilePath);
    fs.unlinkSync(srcFilePath);
    console.log(fileName, "copied to", category);

}

function getcategory(name){
    let ext = path.extname(name);
    //console.log(ext);
    ext = ext.slice(1);
    for(let type in types){
        let cTypeArray = types[type];
        for(let i = 0; i< cTypeArray.length; i++){
            if(ext==cTypeArray[i]){
                return type;
            }
        }   
    }
    return "others";
}

module.exports={
    organizeKey: organizeFn
}