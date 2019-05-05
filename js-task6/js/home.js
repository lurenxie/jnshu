angular.module('myApp').controller("homeCtrl",function ($scope,$state,httpService,$cookieStore) {
//封装了左侧导航栏，这里可以直接添加相应的栏
    $scope.expanders = [{
        title: '后台管理',
        text: [{context: '模块管理',url: 'home.artList'}, {context: '角色管理',url: 'home.artList'}, {context: '密码修改',url: 'home.artList'}, {context: '账户管理',url: 'home.artList'} ]
    }, {
        title: '信息管理',
        text: [{context: '公司列表',url: 'home.artList'}, {context: '职业列表',url: 'home.artList'}]
    }, {
        title: '内容管理',
        text: [{context: 'Article列表',url: 'home.artList'}]
    }
    ];
    $scope.expanders1 = []; //记录所有菜单
    $scope.addExpander = function (expander) {
        $scope.expanders1.push(expander);
    };
    $scope.goToExpander = function (selectedExpander) {
        $scope.expanders1.forEach(function (item, index) {//隐藏非当前选项卡,实现切换功能
            if (item !== selectedExpander) {
                item.showMe = false;
            }
        })
    };
    //退出登录
    $scope.exitHome = function () {
        httpService.exitHome().then(
            function successCallback(response) {
                if (response.data.code === 0) {
                    $cookieStore.put("loginStatus",false);
                    sessionStorage.clear();
                    $state.go('login');
                }
                else {
                    alert('code:' + response.data.code + ' message:' + response.data.message);
                }
                },
            function errorCallback(response) {
                console.log(response);
                });
    };
});
