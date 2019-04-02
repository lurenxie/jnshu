var stateArray = sessionStorage.getItem("stateArray");//获取打乱后的字符串,储存玩家
var dateArray = sessionStorage.getItem("dateArray");//获取字符串，储存天数
console.log(stateArray);
console.log(dateArray);
var killNum = null;

//判断传过来的数组是否为空并按逗号划分开来，sessionstorge传过来的是一串字符，不是数组，这步很重要，不然后面因为数组是空会卡住
if (stateArray==null || (stateArray != null && stateArray.length == 0)) {}
else {stateArray = stateArray.split(",");}

//增加标签函数
function setPeople(type,number) {
    var peopleBox =
        "<div class=\"box\" >\n" +
        "<div class=\"box-text1\">\n" +
        "<span>" + type + "</span>\n" +
        "</div>\n" +
        "<div class=\"box-text2\">\n" +
        "<span>" + number + "</span>\n" +
        "</div>\n" +
        "<div class=\"box-ico\">\n" +
        "<img src=\"../images2/box-ico.png\" alt=\"\">\n" +
        "</div>\n" +
        "</div>";
    $(".main-wrap").append(peopleBox);
}

//页面加载完层后执行函数
$(document).ready(function() {
    //页面跳转
    $("#kellPage").click(function() {
        window.location.href = "../html/js-task4.html";
    });
    //将获取的玩家人数按方块显示出来
    for(var i = 0; i < stateArray.length; i++) {
        if (stateArray[i] === "1") {setPeople("杀手", (i + 1) + "号");}
        else if (stateArray[i] === "2") {setPeople("水民", (i + 1) + "号");}
        else {setPeople("已死", (i + 1) + "号");}
    }
    //添加点击句柄，实现点击标记功能
    $(".box").click(function () {
        if ($(this)[0].innerText.indexOf("杀") >= 0) {alert("你选择自杀？");}
        else {
            if (killNum != null) { $(".box-ico").eq(killNum).css("opacity" , "0");}
            $(this).find(".box-ico").css("opacity" , "1");
            killNum = $(this).index();
        }
    });

    //确认并将死亡人数赋值到浏览器存储数组，然后跳转到下个页面
    $("#killPage").click(function () {
        stateArray[killNum] = dateArray + "3";
        sessionStorage.setItem("stateArray",stateArray);
        window.location.href = "../html/js-task4.3.html";
    });
});

