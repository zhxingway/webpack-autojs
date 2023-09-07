const cWXRemind = require('../sdk/wxRemind.js');
const cUtils = require('../sdk/utils.js');

const token = 'b3741d83bc3c41d7921863afa83e66e5';
const wxRemind = new cWXRemind(token, "每日任务");
const utils = new cUtils();

auto();
auto.waitFor();

utils.setStandardXY(1080, 2400, 0, 20);


bSuccess = utils.startApp('淘宝', true, false);
sleep(1000);
utils.keys_back();
bSuccess = utils.startApp('淘宝', false, true);
sleep(1000);
if (bSuccess) {
    
    utils.waitNodeAndClickNode("允许", "", "android:id/button1", "android.widget.Button", "",2000,2);
    sleep(1000);

    utils.waitNodeAndClickNode("左上角签到", "", "", "android.widget.FrameLayout", "签到");
    sleep(8000);

    utils.waitNodeAndClickNode("立即签到", "立即签到", "", "android.widget.Button", "");

    utils.waitNodeAndClickNode("关闭日历提醒", "关闭", "", "android.widget.Button", "");    

    utils.waitNodeAndClickNode("点击领取", "点击领取", "", "android.widget.Button", "");

    utils.toastAndInfo('等待红包');
    sleep(30000);

    utils.waitNodeAndClickNode("关闭红包提醒", "关闭", "", "android.widget.Button", "");

    for(let i=0;i<2;i++){
        utils.waitNodeAndClickNode("赚元宝", "赚元宝", "", "android.widget.Button", "");

        utils.waitNodeAndClickNode(`去逛逛${i+1}`, "去逛逛", "", "android.widget.Button", "");
        sleep(6000);
        for(let j=0;j<6;j++){
            utils.swipeUp();
            sleep(6000);
        }
        sleep(6000);
        utils.keys_back();
    }

    utils.waitNodeAndClickNode("点击领取", "点击领取", "", "android.widget.Button", "");

    utils.stopApp('淘宝');
}

