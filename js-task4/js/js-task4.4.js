var stateArray = sessionStorage.getItem("stateArray");//获取打乱后的字符串,储存玩家
var dateArray = sessionStorage.getItem("dateArray");//获取字符串，储存天数
console.log(stateArray);
console.log(dateArray);
var signNum = null;

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
    $("#votePage").click(function() {
        window.location.href = "../html/js-task4.3.html";
    });
    //将获取的玩家人数按方块显示出来
    for(var i = 0; i < stateArray.length; i++) {
        if (stateArray[i] === "1") {setPeople("未知", (i + 1) + "号");}
        else if (stateArray[i] === "2") {setPeople("未知", (i + 1) + "号");}
        else {setPeople("已死", (i + 1) + "号");}
    }
    //添加点击句柄，实现点击标记功能
    $(".box").click(function () {
        if ($(this)[0].innerText.indexOf("已死") >= 0) {alert("鞭尸过分了吧？");}
        else {
            //判断是否有其他的已经被标记，如果有就取消其他的标记，然后标记这个
            if (signNum != null) { $(".box-ico").eq(signNum).css("opacity" , "0");}
            $(this).find(".box-ico").css("opacity" , "1");
            signNum = $(this).index();
        }
    });
    //确认并将死亡人数赋值到浏览器存储数组，然后跳转到下个页面
    $("#killPage").click(function () {
        if (stateArray[signNum] === "1") {stateArray[signNum] = dateArray + "4";}
        else {stateArray[signNum] = dateArray + "5";}
        sessionStorage.setItem("stateArray",stateArray);
        console.log(stateArray);
        window.location.href = "../html/js-task4.5.html";
    });
});
