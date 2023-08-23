
let { startApp, clickNode, waitNodeAndClickPoint } = require('./lib.js');

waitNodeAndClickPoint("com.kingpoint.gmcchh:id/txTitle", "", "", "签到有礼", 705, 1096, "签到");

let bExist = id("com.kingpoint.gmcchh:id/txTitle").text("签到有礼").exists();
toast(bExist);
log(bExist);

let object = id("com.kingpoint.gmcchh:id/txTitle").text("签到有礼").find();
toast(object.nonEmpty());
log(object.nonEmpty());
