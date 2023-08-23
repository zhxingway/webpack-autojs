//"ui";
const cWXRemind = require('../sdk/wxRemind.js');
const cUtils = require('../sdk/utils.js');

const token = 'b3741d83bc3c41d7921863afa83e66e5';
const wxRemind = new cWXRemind(token, "每日任务");
const utils = new cUtils();

auto();
auto.waitFor();

//wxRemind.pushMessage('开始');

///////////
bSuccess = utils.startApp('中国移动广东', true, true);
if (bSuccess) {
    utils.waitNodeAndClickNode("关闭弹窗", "", "com.kingpoint.gmcchh:id/img_close", "", "关闭");

    utils.waitNodeAndClickNode("右上角签到", "","com.kingpoint.gmcchh:id/image_first", "","签到有礼");

    sleep(5000);

    utils.waitNodeAndClickPoint("签到", "签到有礼","com.kingpoint.gmcchh:id/txTitle", "",  "", 705, 1096);
}

bSuccess = utils.startApp('淘宝', true, true);
if (bSuccess) {
    utils.waitNodeAndClickNode("左上角签到", "", "签到", "android.widget.FrameLayout","");
    sleep(1000);

    utils.waitNodeAndClickNode("右上角签到", "com.kingpoint.gmcchh:id/image_first", "签到有礼", "", "");

    sleep(5000);

    utils.waitNodeAndClickPoint("签到", "com.kingpoint.gmcchh:id/txTitle", "", "签到有礼", "", 705, 1096);
}

/////////////