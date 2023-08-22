//"ui";
auto();
auto.waitFor();

let { start_app, click_item, set_volume, wait_befor_click } = require('./lib.js');

// 编写主函数：程序启动后执行的逻辑代码。
//

// 启动应用：传入参数依次为：主函数，要启动的 App 名称，当前应用描述，是否语音播报执行状态。
//start_app(main, '中国移动广东', '移动签到', true);
launchApp('中国移动广东');

sleep(10000);

id("com.kingpoint.gmcchh:id/image_first").desc("签到有礼").click();

sleep(5000);

let bSuccess = false;
for (let i = 0; i < 3; i++) {
    sleep(2000);
    if (id("com.kingpoint.gmcchh:id/txTitle").text("签到有礼").exists()) {        
        click(705, 1096);        
        bSuccess = true;
        break;
    }
}
if(bSuccess){
    toast("签到成功。");
}
else
{
    log("error。签到失败。");
}
