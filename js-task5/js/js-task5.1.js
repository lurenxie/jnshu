var errorMessage = document.getElementById("errorMessage");
function submitMassege() {
    var xmlHttp = new XMLHttpRequest();
    var xmlText;
    var input1Value = document.getElementById("input1").value;
    var input2Value = document.getElementById("input2").value;
    var url="/carrots-admin-ajax/a/login";
    xmlHttp.onreadystatechange = function() {
        console.log(xmlHttp.readyState);
        if (xmlHttp.readyState === 4) {
            if (xmlHttp.status === 200) {
                xmlText = JSON.parse(xmlHttp.responseText);
                console.log(xmlText);
                if (xmlText.message === "success") {
                    alert("登录成功");
                    return false;
                }
               else {
                    errorMessage.innerHTML = "密码错误失败";
                    return false;
                }
            }
        }
    };
    xmlHttp.open("POST",url,false);
    xmlHttp.setRequestHeader("content-type","application/x-www-form-urlencoded;charset=utf-8");
    xmlHttp.send("name=" + input1Value + "&pwd=" + input2Value);
}























