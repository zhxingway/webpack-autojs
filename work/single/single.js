const cWXRemind = require('../sdk/wxRemind.js');
const cUtils = require('../sdk/utils.js');

const token = 'b3741d83bc3c41d7921863afa83e66e5';
const wxRemind = new cWXRemind(token, "每日任务");
const utils = new cUtils();

auto();
auto.waitFor();

//wxRemind.pushMessage('开始');

///////////
bSuccess = utils.startApp('淘宝', true, true);
sleep(1000);
if (bSuccess) {
    utils.waitNodeAndClickNode("允许", "", "android:id/button1", "android.widget.Button", "");
    sleep(1000);

    utils.waitNodeAndClickNode("左上角签到", "", "", "android.widget.FrameLayout", "签到");
    sleep(8000);

    utils.waitNodeAndClickNode("立即签到", "立即签到", "", "android.widget.Button", "");

    sleep(20000);


}
