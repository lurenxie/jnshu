var getInputText = document.getElementById("mainbox3box1input");
var getInputRange = document.getElementById("mainbox3box2box2input");
var getBtnAdd = document.getElementById("mainbox3box2box1");
var getBtnMin = document.getElementById("mainbox3box2box3");
var getSpanSum = document.getElementById("mainbox1-box2box1span1");
var getSpanKill = document.getElementById("mainbox1-box2box1span2");
var getSpanPeo = document.getElementById("mainbox1-box2box1span3");

//页面跳转
function changePage() {
    window.location.href = "../html/js-task2.2.html";
}
function backPage() {
    window.location.href = "../html/js-task2.html";
}
//根据输入值同时改变玩家配比、玩家人数和滑块以及背景色位置
function changeAll(i) {
    //玩家人数input
    getInputText.value = i;
    //滑块位置
    getInputRange.value = i;
    //滑块背景位置
    var n = Number(((i-3.5)/15)*100).toFixed(0) + "%";
    getInputRange.style.backgroundSize = n + ' ' + '100%';
    //玩家配比
    var m = Math.floor(Number(i)/4);
    getSpanSum.innerText = Number(i);
    getSpanKill.innerText = m;
    getSpanPeo.innerText = Number(i) - m;
}
//change人数输入框
getInputText.addEventListener('change', function() {
    var i = getInputText.value;
    if (i < 4 || i > 18) {
        alert("输入值必须为4~18之间数字");
        getInputText.value = 4;
        getInputRange.value = 4;
        getInputRange.style.backgroundSize = '0 100%';
        return(false);
    }
    changeAll(i);
});
//MouseMove滑块
getInputRange.addEventListener('change', function() {
    var i = getInputRange.value;
    changeAll(i);
});
//click左减按钮
getBtnAdd.addEventListener('click', function() {
    var i = getInputText.value;
    if (i <= 4) {return;}
    changeAll(Number(i) - 1);
});
// click右加按钮
getBtnMin.addEventListener('click', function() {
    var i = getInputText.value;
    if (i >= 18) {return;}
    changeAll(Number(i) + 1);
});
//这里是一个bug，具体描述可以见坑乎和日报
// getBtnMin.addEventListener('click', function() {
//     var i = getInputText.value;
//     //玩家人数input
//     getInputText.value = Number(i) + 1;
//     //滑块位置
//     getInputRange.value = Number(i) + 1;
//     //滑块背景位置
//     var n = Number(((i-3.5)/15)*100).toFixed(0) + "%";
//     getInputRange.style.backgroundSize = n + ' ' + '100%';
// });