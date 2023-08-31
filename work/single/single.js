const cWXRemind = require('../sdk/wxRemind.js');
const cUtils = require('../sdk/utils.js');

const token = 'b3741d83bc3c41d7921863afa83e66e5';
const wxRemind = new cWXRemind(token, "每日任务");
const utils = new cUtils();

auto();
auto.waitFor();



utils.stopApp('淘宝');



