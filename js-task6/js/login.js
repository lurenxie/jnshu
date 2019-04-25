myApp.controller("loginCtrl",function ($scope,$http,$state,httpService) {
    $scope.longinClick = function () {
        //post请求要求，更改请求头，序列化$.param后发送params
        httpService.loginHome($.param({name: $scope.name, pwd: $scope.pwd})).then(
            function successCallback(response) {
                if (response.data.code !== 0) {$scope.callbackMessages = 'code:' + response.data.code + ' message:' + response.data.message;}
                else {$state.go('home');}},
            function errorCallback(response) {$scope.callbackMessages = 'status:' + response.status + ' statusText:' + response.statusText;});
        return false;//防止form发送请求
    }
});
