/*
‼️巴啦啦小魔仙全身变！乌拉乌拉乌拉
*/
var body = $response.body;
var url = $request.url;
var obj = JSON.parse(body);

const vip = '/userInfo';

if (url.indexOf(vip) != -1) {
    obj.data.level = 2;
    obj.data.isExpire = false;
    obj.data.expireTime = "2209-12-31T23:59:59+08:00";
    body = JSON.stringify(obj);
}
$done({body});
