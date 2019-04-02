var stateArray = sessionStorage.getItem("stateArray");//获取打乱后的字符串,储存玩家
var dateArray = sessionStorage.getItem("dateArray");//获取字符串，储存天数

//测试用数组，使用sessionStorage做存储
//人员数组1是活的杀手 2是活的水民 3是被杀的水民 4是被投死的杀手 5是被投死的水民
// var stateArray = ["2", "1", "1", "2", "2", "2", "2"];
// var dateArray = "a";//用来计算天数
//这里切记，存入sessionstorage后数组就变成了包含逗号的字符串
// sessionStorage.setItem("stateArray",stateArray);
// sessionStorage.setItem("dateArray",dateArray);
console.log(stateArray);
console.log(dateArray);

//判断传过来的数组是否为空并按逗号划分开来，sessionstorge传过来的是一串字符，不是数组，这步很重要，不然后面因为数组是空会卡住
if (stateArray==null || (stateArray != null && stateArray.length == 0)) {}
else {stateArray = stateArray.split(",");}

console.log(stateArray);
console.log(dateArray);

var dateNumber;//天数转化为Unicode 编码
var chinaDate = ["一","二","三","四","五","六","七","八","九","九","十","十一","十二","十三","十四",];
var dateNumbern, dateNumberm, dateNumberu;

//增加标签函数  $(".main-menu").append(noticeBox);
    var noticeBox =
        "<div class=\"menu-notice\">" +
            "<div>" +
                "<span class='dayDie'>白天XX死了</span>" +
            "</div>" +
            "<div>" +
                "<span class='nightDie'>白天XX死了</span>" +
            "</div>" +
        "</div>";

$(document).ready(function () {
    //根据当前天数设置菜单并显示前面天数的详细信息
    //将天数字符转化为数字
    dateNumber = dateArray.charCodeAt(0);
    // console.log(dateNumber);
    for (var i = 1; i < dateNumber - 96; i++) {
        //根据天数克隆菜单并修改相应的天数名
        $(".main-menu:last").clone().appendTo("main");
        $(".menuName").eq(i).text("第" + chinaDate[i] + "天");
        //每创建一个新的克隆菜单就将上一个菜单隐藏
        $(".main-content").eq(i-1).css("display","none");
        //在隐藏菜单的下面增加历史记录栏
        $(".main-menu").eq(i-1).append(noticeBox);
    }
    //增加点击隐藏历史记录栏功能
    // $(".hideHead").click(function () {
    //     $(".menu-notice").toggle(500);
    // });
    //添加历史信息
    for (var n = 0; n < stateArray.length; n++) {
        if (stateArray[n].indexOf("3") > 0) {
            dateNumbern = stateArray[n].replace(/3/,"");
            dateNumbern = dateNumbern.charCodeAt(0) -96;
            $(".dayDie").eq(dateNumbern - 1).text("晚上：" + (n + 1) + "号被杀手杀了,他是水民");
        }
        else if (stateArray[n].indexOf("4") > 0) {
            dateNumberm = stateArray[n].replace(/4/,"");
            dateNumberm = dateNumberm.charCodeAt(0) -96;
            $(".nightDie").eq(dateNumberm - 1).text("白天：" + (n + 1) + "号被投票杀了,他是杀手");
        }
        else if (stateArray[n].indexOf("5") > 0) {
            dateNumberu = stateArray[n].replace(/5/,"");
            dateNumberu = dateNumberu.charCodeAt(0) -96;
            $(".nightDie").eq(dateNumberu - 1).text("白天：" + (n + 1) + "号被投票杀了,他是水民");
        }
        else {}
    }
    //跳转去杀人界面
    $(".homePage").click(function () {
        window.location.href = "../html/js-task4.2.html";
    });
});












