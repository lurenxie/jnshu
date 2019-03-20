var changeVar1 = null;
var changeVar2 = null;
var changeVar3 = null;
function getColot() {
    var r=Math.floor(Math.random()*256);
    var g=Math.floor(Math.random()*256);
    var b=Math.floor(Math.random()*256);
    return "rgb("+r+','+g+','+b+")";//所有方法的拼接都可以用ES6新特性`其他字符串{$变量名}`替换
}
function changeColor() {
    var numberTen =  Math.ceil(Math.random()*9);
    var nodeId = "one" + numberTen;
    var nodeName = document.getElementById(nodeId);
    nodeName.style.background = getColot();
    numberTen = null;
    nodeId = null;
    nodeName = null;
}
function loadFooterbtn1() {
    changeVar1=setInterval("changeColor()", 1000);
    changeVar2=setInterval("changeColor()", 1000);
    changeVar3=setInterval("changeColor()", 1000);
}
function loadFooterbtn2() {
    clearInterval(changeVar1);
    clearInterval(changeVar2);
    clearInterval(changeVar3);
    for (i=1; i<=9 ; i++)  {
        var nodeId = "one" + i;
        var nodeName = document.getElementById(nodeId);
        nodeName.style.background = '#FF9900';
    }
}
