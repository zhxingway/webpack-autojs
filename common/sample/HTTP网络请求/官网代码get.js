console.show();
var r = http.get("www.baidu.com");
log("code = " + r.statusCode);
log("html = " + r.body.string());

//采用回调形式的GET请求如下：
console.show();
http.get("www.baidu.com", {}, function(res, err){
    if(err){
        console.error(err);
        return;
    }
    log("code = " + res.statusCode);
    log("html = " + res.body.string());
});


//如果要增加HTTP头部信息，则在options参数中添加，例如：
console.show();
var r = http.get("www.baidu.com", {
    headers: {
        'Accept-Language': 'zh-cn,zh;q=0.5',
        'User-Agent': 'Mozilla/5.0(Macintosh;IntelMacOSX10_7_0)AppleWebKit/535.11(KHTML,likeGecko)Chrome/17.0.963.56Safari/535.11'
    }
});
log("code = " + r.statusCode);
log("html = " + r.body.string());

//一个请求天气并解析返回的天气JSON结果的例子如下：
var city = "广州";
var res = http.get("http://www.sojson.com/open/api/weather/json.shtml?city=" + city);
if(res.statusCode != 200){
    toast("请求失败: " + res.statusCode + " " + res.statusMessage);
}else{
    var weather = res.body.json();
    log(weather);
    toast(util.format("温度: %s 湿度: %s 空气质量: %s", weather.data.wendu,
        weather.data.shidu, weather.quality));
}
