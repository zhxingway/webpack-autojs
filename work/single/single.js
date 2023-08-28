const cWXRemind = require('../sdk/wxRemind.js');
const cUtils = require('../sdk/utils.js');

const token = 'b3741d83bc3c41d7921863afa83e66e5';
const wxRemind = new cWXRemind(token, "每日任务");
const utils = new cUtils();

auto();
auto.waitFor();

console.show();
console.log(`debug`);
utils.console_setGlobalLogConfig(file="zxf_test",maxFileSize=0,rootLevel="INFO",maxBackupSize=0);
console.log(`debug`);
console.info(`info`);
console.warn(`warn`);
console.error(`warn`);
debugger;

//wxRemind.pushMessage('开始');

///////////
//utils.waitNodeAndClickNode("赚元宝", "赚元宝", "", "android.widget.Button", "");

//utils.waitNodeAndClickNode(`去逛逛${1}`, "去逛逛", "", "android.widget.Button", "");

