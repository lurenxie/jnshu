var inputNumber = 4;


var mainbox3input = document.getElementById("numberinput");
var mainbox3icoWidth = document.getElementById("changeicowidth");
var mainbox3icomargin = document.getElementById("changeicomargin");


function changePage() {
    window.location.href = "../html/js-task2.2.html";
}
function backPage() {
    window.location.href = "../html/js-task2.html";
}
//input表单输入后执行函数
function changeValue() {
    inputNumber = mainbox3input.value;
    if (inputNumber < 4 || inputNumber > 18) {
        mainbox3input.value = 4;
        alert("输入值必须为4~18之间数字");
        mainbox3icoWidth.style.width = 10 + 'px';
        mainbox3icomargin.style.marginLeft = 0;
        return(false);
    }
    alert(inputNumber);
    inputNumber -= 4;
    mainbox3icoWidth.style.width = inputNumber * 10 + 15 + 'px';
    mainbox3icomargin.style.marginLeft = inputNumber * 10 + 'px';
}
//点击减号按钮后执行函数
function changeWidthLeft() {
    var box = mainbox3icoWidth;
    var ico = mainbox3icomargin;
    var icoWidth = window.getComputedStyle(box).width;
    var icoMargin = window.getComputedStyle(ico).marginLeft;
    if (parseInt(icoMargin) <= 0) {
        return(false);
    }
    // alert(icoWidth);
    icoWidth = parseInt(icoWidth) - 10 + "px";
    icoMargin = parseInt(icoMargin) - 10 + "px";
    mainbox3icoWidth.style.width = icoWidth;
    mainbox3icomargin.style.marginLeft = icoMargin;
    inputNumber -= 1;
    mainbox3input.value = inputNumber;
}
//点击加号按钮后执行函数
function changeWidthRight() {
    var box = mainbox3icoWidth;
    var ico = mainbox3icomargin;
    var icoWidth = window.getComputedStyle(box).width;
    var icoMargin = window.getComputedStyle(ico).marginLeft;
    if (parseInt(icoMargin) >= 140) {
        return(false);
    }
    // alert(icoWidth);
    icoWidth = parseInt(icoWidth) + 10 + "px";
    icoMargin = parseInt(icoMargin) + 10 + "px";
    mainbox3icoWidth.style.width = icoWidth;
    mainbox3icomargin.style.marginLeft = icoMargin;
    inputNumber += 1;
    mainbox3input.value = inputNumber;
}
//拖动进度条执行函数
mainbox3icomargin.onmousedown = function(event) {
    var event = event || window.event;
    var mousedefaultx = event.clientX;
    mousedefaultx = parseInt(mousedefaultx);
    mainbox3icomargin.onmousemove = function(event) {
        var event = event || window.event;
        var mouseValuex = event.clientX;
        var box = mainbox3icoWidth;
        var ico = mainbox3icomargin;
        var icoWidth = window.getComputedStyle(box).width;
        var icoMargin = window.getComputedStyle(ico).marginLeft;
        mouseValuex = parseInt(mouseValuex);
        if (mouseValuex - mousedefaultx >= 10) {
            mousedefaultx = mouseValuex;
            icoWidth = parseInt(icoWidth) + 10 + "px";
            icoMargin = parseInt(icoMargin) + 10 + "px";
            mainbox3icoWidth.style.width = icoWidth;
            mainbox3icomargin.style.marginLeft = icoMargin;
            inputNumber += 1;
            mainbox3input.value = inputNumber;
        }
        else if (mouseValuex - mousedefaultx <= -10) {
            mousedefaultx = mouseValuex;
            icoWidth = parseInt(icoWidth) - 10 + "px";
            icoMargin = parseInt(icoMargin) - 10 + "px";
            mainbox3icoWidth.style.width = icoWidth;
            mainbox3icomargin.style.marginLeft = icoMargin;
            inputNumber -= 1;
            mainbox3input.value = inputNumber;
        }
        // window.getSelection ? window.getSelection().removeAllRanges() : document.selection.empty();
    };
};
document.onmouseup = function() {
    mainbox3icomargin.onmousemove = null;
};
