#!/usr/bin/env node
//to make it cross platform/global

let inputArr = process.argv.slice(2);
const { dir } = require("console");

let fs = require("fs");
let path = require("path");

let helpObj = require("./commands/help");
let treeObj = require("./commands/tree");
let organizeObj = require("./commands/organize");
let types = require("./extension/utility");


//console.log(inputArr);
// node  main.js tree -> "dictPath"
// node main.js organize "dictPath"
// node main.js help
let command = inputArr[0];

switch(command){
    case "tree":
        treeObj.treeKey(inputArr[1]);
        break;
    case "organize":
        organizeObj.organizeKey(inputArr[1]);
        break;
    case "help":
        helpObj.heplKey();
        break;
    default:
        console.log("🙏please input right command");
        break;        
}


