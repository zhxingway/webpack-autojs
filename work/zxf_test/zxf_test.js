//"ui";
auto();
auto.waitFor();

let { startApp, clickNode, waitNodeAndClickPoint } = require('./lib.js');

startApp('中国移动广东');

clickNode("com.kingpoint.gmcchh:id/img_close", "关闭", "", "", "关闭弹窗", 1000, 2);

clickNode("com.kingpoint.gmcchh:id/image_first", "签到有礼", "", "", "右上角签到");

sleep(5000);

waitNodeAndClickPoint("com.kingpoint.gmcchh:id/txTitle", "", "", "签到有礼", 705, 1096, "签到");
