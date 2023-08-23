/**
推送到微信
用法：
var cWXRemind = require('./wxRemind.js');
var remind = new cWXRemind('your_token', 'your_script_name');
remind.pushMessage('your_message');

*/

function cWXRemind(token, scriptName) {
    this.token = token;
    this.scriptName = scriptName;
  }
  
  cWXRemind.prototype.pushMessage = function(content) {
    let sendUrl = `http://www.pushplus.plus/send?token=${this.token}`;
    sendUrl += `&title=${this.scriptName}&content=${content}`;
    console.info(sendUrl);
  
    var result = http.get(sendUrl);
    if (result.statusCode == 200) {
      toast(`pushMessage ${content} success.`);
      console.log(`pushMessage ${content} success.`);
    } else {
      toast(`pushMessage ${content} failed.`);
      console.error(`pushMessage ${content} failed.`);
    }
  };
  
  module.exports = cWXRemind;
  