myApp.controller("loginCtrl",function ($scope,$http,$state) {
    $scope.name = 'admin';
    $scope.pwd = '123456';
    $scope.longinClick = function () {
        var loginRel = {
            method: 'post',
            url: '/carrots-admin-ajax/a/login',
            data: $.param({name: $scope.name, pwd: $scope.pwd}),//序列化
            headers: {'Content-Type': 'application/x-www-form-urlencoded'}
        };
        $http(loginRel).then(
            function successCallback(response) {
                $scope.messageCallback = response;
                console.log($scope.messageCallback);
                $scope.callbackMessages = '登录成功';
                $state.go('home');
        },
            function errorCallback(response) {
                $scope.callbackMessages = '登录失败';
            }
        );
        return false;
    }
});








// var errorMessage = document.getElementById("errorMessage");
// function submitMassege() {
//     var xmlHttp = new XMLHttpRequest();
//     var xmlText;
//     var input1Value = document.getElementById("input1").value;
//     var input2Value = document.getElementById("input2").value;
//     var url="/carrots-admin-ajax/a/login";
//     xmlHttp.onreadystatechange = function() {
//         console.log(xmlHttp.readyState);
//         if (xmlHttp.readyState === 4) {
//             if (xmlHttp.status === 200) {
//                 xmlText = JSON.parse(xmlHttp.responseText);
//                 console.log(xmlText);
//                 if (xmlText.message === "success") {
//                     alert("登录成功");
//                     return false;
//                 }
//                 else {
//                     errorMessage.innerHTML = "密码错误失败";
//                     return false;
//                 }
//             }
//         }
//     };
//     xmlHttp.open("POST",url,false);
//     xmlHttp.setRequestHeader("content-type","application/x-www-form-urlencoded;charset=utf-8");
//     xmlHttp.send("name=" + input1Value + "&pwd=" + input2Value);
// }