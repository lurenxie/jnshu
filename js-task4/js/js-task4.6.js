var stateArray = sessionStorage.getItem("stateArray");//获取打乱后的字符串,储存玩家
var dateArray = sessionStorage.getItem("dateArray");//获取字符串，储存天数
//测试用数据
// var stateArray = "a3,a4,b3,b5,c3,c4,2";
// var dateArray = "c";

console.log(stateArray);
console.log(dateArray);

//判断传过来的数组是否为空并按逗号划分开来，sessionstorge传过来的是一串字符，不是数组，这步很重要，不然后面因为数组是空会卡住
if (stateArray==null || (stateArray != null && stateArray.length == 0)) {}
else {stateArray = stateArray.split(",");}

console.log(stateArray);
console.log(dateArray);

var dateNumber;//天数转化为Unicode 编码
var chinaDate = ["一","二","三","四","五","六","七","八","九","九","十","十一","十二","十三","十四"];
var dateNumbern, dateNumberm, dateNumberu, killPeople = 0, civilPeople = 0;

$(document).ready(function () {
    //将天数字符转化为数字
    dateNumber = dateArray.charCodeAt(0);
    console.log(dateNumber);
    for (var i = 1; i < dateNumber - 96; i++) {
        //根据天数克隆菜单并修改相应的天数名
        $(".wrap2-box:first").clone().appendTo(".main-wrap2");
        $(".text1-left").eq(i).text("第" + chinaDate[i] + "天");
    }
    //添加历史信息
    for (var n = 0; n < stateArray.length; n++) {
        if (stateArray[n].indexOf("3") > 0) {
            dateNumbern = stateArray[n].replace(/3/,"");
            dateNumbern = dateNumbern.charCodeAt(0) -96;
            $(".nightDie").eq(dateNumbern - 1).text("晚上：" + (n + 1) + "号被杀手杀了,他是水民");
            civilPeople++;
        }
        else if (stateArray[n].indexOf("4") > 0) {
            dateNumberm = stateArray[n].replace(/4/,"");
            dateNumberm = dateNumberm.charCodeAt(0) -96;
            $(".dayDie").eq(dateNumberm - 1).text("白天：" + (n + 1) + "号被投票杀了,他是杀手");
            killPeople++;
        }
        else if (stateArray[n].indexOf("5") > 0) {
            dateNumberu = stateArray[n].replace(/5/,"");
            dateNumberu = dateNumberu.charCodeAt(0) -96;
            $(".dayDie").eq(dateNumberu - 1).text("白天：" + (n + 1) + "号被投票杀了,他是水民");
            civilPeople++;
        }
        else {}
    }
    for (var m = 0; m < stateArray.length; m++) {
        if (stateArray[m] === "2") {
            civilPeople++;
        }
        else {}
    }
    console.log(killPeople);
    console.log(civilPeople);
    $(".killPeopleNum").text("杀 手：" + killPeople + "人");
    $(".civilPeopleNum").text("水 民：" + civilPeople + "人");
    $(".wrap1-text1").text("本轮游戏共抓出杀手" + killPeople + "人，共经历了" + (dateNumber - 96) + "个白天，在杀人游戏中击败了67%的玩家！");
    //跳转到下个页面
    $(".foot-left").click(function () {
        window.location.href = "../../js-task2/html/js-task2.html";
    });


});