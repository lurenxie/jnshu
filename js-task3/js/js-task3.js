var numberOfPeople = sessionStorage.getItem("numberOfPeople");//获取总人数
var numberOfKillPeople = sessionStorage.getItem("numberOfKillPeople");//获取杀手人数
var stateArray = [];
var m,temp,o = 0,p=1;
$(document).ready(function() {
    //页面跳转
    $("#changePage").click(function() {
        window.location.href = "../../js-task2/html/js-task2.2.html";
    });
    //将传过来的数据放入数组当中
    for(var i = 0; i < numberOfPeople; i++) {
        if (i < numberOfKillPeople) {
            stateArray[i] = 1;
        }
        else {
            stateArray[i] = 2;
        }
    }
    console.log(stateArray);
    //用洗牌算法打乱数组
    for (var n = 0; n < stateArray.length - 1; n++) {
        m = Math.floor(Math.random()*stateArray.length);
        temp = stateArray[m];
        stateArray[m] = stateArray[n];
        stateArray[n] = temp;
    }
    sessionStorage.setItem("stateArray",stateArray);
    //点击的时候看牌
    $("button").click(function() {
        if (o === stateArray.length) {
            window.location.href = "../html/js-task3.2.html";
        }
        else if(p === 1) {
            $("#btnspan1").css("display","none");
            $("#btnspan2").css("display","block");
            $("#mainicobox1").css("display","none");
            $("#mainicobox2").css("display","block");
            p=2;
            if (stateArray[o] === 1) {$("#mainspan2").text('杀手');}
            else {$("#mainspan2").text('水民');}
            o++;
            $("#mainspan1").text(o);
            if (o === stateArray.length) {
                $("#btnspan2").css("display","none");
                $("#btnspan3").css("display","block");
            }
            $("#footerspan2").text(o + 1);
        }
        else {
            $("#btnspan1").css("display","block");
            $("#btnspan2").css("display","none");
            $("#mainicobox1").css("display","block");
            $("#mainicobox2").css("display","none");
            p=1;
            $("#mainspan1").text(o + 1);
            $("#footerspan1").text(o + 1);
        }
    });
});