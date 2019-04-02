var stateArray = sessionStorage.getItem("stateArray");//获取打乱后的字符串,储存玩家
var dateArray = sessionStorage.getItem("dateArray");//获取字符串，储存天数
//测试用数据
// var stateArray = "b4,1,2,2,c5,b5";
// var dateArray = "c";

console.log(stateArray);
console.log(dateArray);
var dateNumber;//天数转化为Unicode 编码
var bedPeople = 0, goodPeople = 0;//杀手和水民个数
var setUrl;//设置不同情况下跳转网址
var chinaDate = ["一","二","三","四","五","六","七","八","九","九","十","十一","十二","十三","十四",];

//判断传过来的数组是否为空并按逗号划分开来，sessionstorge传过来的是一串字符，不是数组，这步很重要，不然后面因为数组是空会卡住
if (stateArray==null || (stateArray != null && stateArray.length == 0)) {}
else {stateArray = stateArray.split(",");}

//将天数字符转化为数字
dateNumber = dateArray.charCodeAt(0);
console.log(dateNumber);
// dateArray = String.fromCharCode(dateNumber + 1);
// console.log(dateArray);

//增加标签函数
function setPeople(number, type) {
    var peopleText =
        "<div>" + "<span>" + number +"号被投票投死了，真实身份是" + type +"</span>\n" + "</div>";
    $(".main-wrap2").append(peopleText);
}

$(document).ready(function () {
    //页面跳转
    $("#countPage").click(function() {
        window.location.href = "../html/js-task4.4.html";
    });

    //按上个页面传来的数组，将死亡人号显示出来,顺便将存活的水民和杀手个数做个统计
    for (var i = 0; i < stateArray.length; i++) {
        switch (stateArray[i]) {
            case "1": bedPeople++; break;
            case "2": goodPeople++; break;
            case dateArray + "3": break;
            case dateArray + "4": setPeople(i + 1, "杀手"); break;
            case dateArray + "5": setPeople(i + 1, "水民"); break;
        }
    }
    console.log(bedPeople);
    console.log(goodPeople);
    //计算游戏结果
    if (bedPeople >= goodPeople - 1) {
        $("#changeUrlName").text("进入游戏结算");
        setUrl = "../html/js-task4.7.html";
    }
    else if (bedPeople < goodPeople && bedPeople === 0) {
        $("#changeUrlName").text("进入游戏结算");
        setUrl = "../html/js-task4.6.html";
    }
    else {
        $("#changeUrlName").text("第" + chinaDate[dateNumber - 96] + "天");
        //将第一天的代表a转化为第二天b
        dateArray = String.fromCharCode(dateNumber + 1);
        sessionStorage.setItem("dateArray",dateArray);
        console.log(dateArray);
        setUrl = "../html/js-task4.html";
    }
    //跳转到下个页面
    $(".foot-box2").click(function () {
            window.location.href = setUrl;
    });
});