var stateArray = sessionStorage.getItem("stateArray");//获取打乱后的字符串,储存玩家
var dateArray = sessionStorage.getItem("dateArray");//获取字符串，储存天数
console.log(stateArray);
console.log(dateArray);

//判断传过来的数组是否为空并按逗号划分开来，sessionstorge传过来的是一串字符，不是数组，这步很重要，不然后面因为数组是空会卡住
if (stateArray==null || (stateArray != null && stateArray.length == 0)) {}
else {stateArray = stateArray.split(",");}

//增加标签函数
function setPeople(number) {
    var peopleText =
        "<div>" + "<span>" + number +"号被杀手杀死了，真实身份是水民" + "</span>\n" + "</div>";
    $(".main-wrap2").append(peopleText);
}

$(document).ready(function () {
    //页面跳转
    $("#talkPage").click(function() {
        window.location.href = "../html/js-task4.2.html";
    });

    //按上个页面传来的数组，将死亡人号显示出来
    for (var i = 0; i < stateArray.length; i++) {
        if (stateArray[i] === dateArray + "3") {
            setPeople(i + 1);
        }
    }
    //跳转到下个页面
    $(".foot-box2").click(function () {
        window.location.href = "../html/js-task4.4.html";
    });
});