//"ui";
let { start_app, click_item, set_volume, wait_befor_click } = require('./lib.js');

// 编写主函数：程序启动后执行的逻辑代码。
//

// 启动应用：传入参数依次为：主函数，要启动的 App 名称，当前应用描述，是否语音播报执行状态。
//start_app(main, '中国移动广东', '移动签到', true);
launchApp('中国移动广东');

sleep(3000);

//允许启动
id("button1").findOne().click();
