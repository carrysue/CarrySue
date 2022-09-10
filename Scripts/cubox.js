/******************************

脚本功能：cubox解锁
脚本作者：CarrySue
使用声明：⚠️此脚本仅供学习与交流，请勿转载与贩卖！⚠️⚠️⚠️


*******************************

[rewrite_local]
# > Cubox 解锁高级版订阅
^https:\/\/cubox\.pro\/c\/api\/userInfo url script-response-body https://raw.githubusercontent.com/carrysue/Quantumult-X/main/Scripts/cubox.js

[mitm] 
hostname = cubox.pro

*******************************/

var body = $response.body;
var url = $request.url;
var obj = JSON.parse(body);

const vip = '/userInfo';
const pay = '/userPay';

if (url.indexOf(vip) != -1) {
    obj.data.level = 2;
    obj.data.isExpire = false;
    obj.data.expireTime = "2209-12-31T23:59:59+08:00";
    body = JSON.stringify(obj);
}
if (url.indexOf(pay) != -1) {
    obj.data.level = 2;
    obj.data.isExpire = false;
    obj.data.expireTime = "2209-12-31T23:59:59+08:00";
    body = JSON.stringify(obj);
$done({body});
