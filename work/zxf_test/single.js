
const cWXRemind = require('../sdk/wxRemind.js');
const cUtils = require('../sdk/utils.js');

const token = 'b3741d83bc3c41d7921863afa83e66e5';
const wxRemind = new cWXRemind(token, "每日任务");
const utils = new cUtils();

bSuccess = utils.startApp('中国移动广东', true, true);
if (bSuccess) {
    utils.waitNodeAndClickNode("关闭弹窗", "", "com.kingpoint.gmcchh:id/img_close", "", "关闭");

    utils.waitNodeAndClickNode("右上角签到", "","com.kingpoint.gmcchh:id/image_first", "","签到有礼");

    sleep(5000);

    utils.waitNodeAndClickPoint("签到", "签到有礼","com.kingpoint.gmcchh:id/txTitle", "",  "", 705, 1096);
}

let bExist = id("com.kingpoint.gmcchh:id/txTitle").text("签到有礼").exists();
toast(bExist);
log(bExist);

let object = id("com.kingpoint.gmcchh:id/txTitle").text("签到有礼").find();
toast(object.nonEmpty());
log(object.nonEmpty());
