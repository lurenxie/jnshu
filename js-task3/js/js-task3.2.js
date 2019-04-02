var stateArray = sessionStorage.getItem("stateArray");//获取打乱后的数组
var dateArray = "a";//用来计算天数
var i;

if (stateArray==null || (stateArray != null && stateArray.length == 0)) {
    // alert("数组为空");
}
else {
    stateArray = stateArray.split(",");
}
// alert(stateArray);
$(document).ready(function() {
    //页面跳转
    $("#changePage").click(function() {
        window.location.href = "../html/js-task3.html";
    });
    //克隆生成小方块并遍历dom给他们修改信息
    for (i = 1; i < stateArray.length; i++) {
        $(".box:first").clone().appendTo(".main-wrap");
        $(".main-wrap").find("span").eq((2 * i) - 1).text(i + "号");
        if (stateArray[i - 1] === "1") {
            $(".main-wrap").find("span").eq((2 * i) - 2).text("杀手");
        }
        else {
            $(".main-wrap").find("span").eq((2 * i) - 2).text("水民");
        }
    }
    if (stateArray[i - 1] === "1") {
        $(".main-wrap").find("span").eq((2 * i) - 2).text("杀手");
    }
    else {
        $(".main-wrap").find("span").eq((2 * i) - 2).text("水民");
    }
    $(".main-wrap").find("span").eq((2 * i) - 1).text(i + "号");

    $(".changePage").click(function () {
        sessionStorage.setItem("stateArray",stateArray);
        sessionStorage.setItem("dateArray",dateArray);
        window.location.href = "../../js-task4/html/js-task4.html";
    });


});