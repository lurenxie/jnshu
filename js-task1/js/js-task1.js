var getboxelement = document.getElementsByClassName('one');
var nineArray = [0, 1, 2, 3, 4, 5, 6, 7, 8];
var changeVar = null;
//从array数组中获取num个随机元素并输出
function getRandomArray(array, num) {
    var sliceArray = array.slice(0);
    var lengthArray = array.length;
    var min = lengthArray - num,returnArray = [],index,i = 0;
    while(lengthArray --> min) {
        index = Math.floor((lengthArray+1)*Math.random());
        returnArray[i] = sliceArray[index];
        sliceArray.splice(index,1);
        i++;
    }
    return(returnArray);
}
//获取随机颜色
function getColot() {
    var r=Math.floor(Math.random()*256);
    var g=Math.floor(Math.random()*256);
    var b=Math.floor(Math.random()*256);
    return "rgb("+r+','+g+','+b+")";//所有方法的拼接都可以用ES6新特性`其他字符串{$变量名}`替换
}
//随机改变三个方块颜色
function runChangecolor() {
    var radonmArray = getRandomArray(nineArray, 3);
    // alert(radonmArray);
    getboxelement[radonmArray[0]].style.backgroundColor = getColot();
    getboxelement[radonmArray[1]].style.backgroundColor = getColot();
    getboxelement[radonmArray[2]].style.backgroundColor = getColot();
}
//恢复所有格子原色
function recoverColor() {
    for (var i= 0 ;i < getboxelement.length ;i++) {
        getboxelement[i].style.backgroundColor = '#FF9900';
    }
}
//给id为footer-btn1的dom节点添加按键事件句柄，使鼠标按下该节点时执行匿名函数
document.getElementById('footer-btn1').addEventListener('click',function() {
    clearInterval(changeVar);
    recoverColor();
    changeVar = setInterval("runChangecolor()", 200);
});
//给id为footer-btn2的dom节点添加按键事件句柄，使鼠标按下该节点时执行匿名函数
document.getElementById('footer-btn2').addEventListener('click',function () {
    clearInterval(changeVar);
    recoverColor();
});
