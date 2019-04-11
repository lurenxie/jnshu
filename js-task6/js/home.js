angular.module('myApp').controller("homeCtrl",function ($scope) {
    //封装初始化各种效果函数
    var initializerFun = function() {
        $scope.spanLeft1 = true;
        $scope.spanLeft2 = true;
        $scope.spanLeft3 = true;
        $scope.bgManageSon = true;
        $scope.leftDivStyle1 = null;
        $scope.leftDivStyle2 = null;
        $scope.leftDivStyle3 = null;
        $scope.manageStyle1 = null;
        $scope.manageStyle2 = null;
        $scope.manageStyle3 = null;
    };
    initializerFun();
    //后台管理点击事件
    $scope.bgManageClick = function () {
        if ($scope.manageStyle1 !== null) {
            $scope.spanLeft1 = true;
            $scope.manageStyle1 = null;
            $scope.leftDivStyle1 = null;
            $scope.bgManageSon = true;
        }
        else {
            initializerFun();
            $scope.spanLeft1 = false;
            $scope.manageStyle1 = {"border-left" : "0.2rem solid #fff","background-color" : "#999"};
            $scope.leftDivStyle1 = {"margin" : " 0 0 0 1.8rem"};
            $scope.bgManageSon = false;
        }
    };
    //后台管理子页面列表管理点击事件
    $scope.artDetailsClick = function () {
        $scope.manageStyle1 = {"border-left" : "0.2rem solid #fff"};
        if ($scope.artListStyle !== null) {
            $scope.artListStyle = null;
            $scope.artDetailsStyle = {"background-color" : "#999"};
        }
        else ;
    };
    //后台管理子页面详情管理点击事件
    $scope.artListClick = function () {
        $scope.manageStyle1 = {"border-left" : "0.2rem solid #fff"};
        if ($scope.artDetailsStyle !== null) {
            $scope.artDetailsStyle = null;
            $scope.artListStyle = {"background-color" : "#999"};
        }
        else ;
    };
    //信息管理点击事件
    $scope.mgManageClick = function () {
        if ($scope.manageStyle2 !== null) {
            $scope.spanLeft2 = true;
            $scope.manageStyle2 = null;
            $scope.leftDivStyle2 = null;
        }
        else {
            initializerFun();
            $scope.spanLeft2 = false;
            $scope.manageStyle2 = {"border-left" : "0.2rem solid #fff","background-color" : "#999"};
            $scope.leftDivStyle2 = {"margin" : " 0 0 0 1.8rem"};
        }
    };
    //内容管理点击事件
    $scope.ctManageClick = function () {
        if ($scope.manageStyle3 !== null) {
            $scope.spanLeft3 = true;
            $scope.manageStyle3 = null;
            $scope.leftDivStyle3 = null;
        }
        else {
            initializerFun();
            $scope.spanLeft3 = false;
            $scope.manageStyle3 = {"border-left" : "0.2rem solid #fff","background-color" : "#999"};
            $scope.leftDivStyle3 = {"margin" : " 0 0 0 1.8rem"};
        }
    }
});