'use strict';
var myApp = angular.module('myApp', ['ui.router', 'ngCookies', 'oc.lazyLoad','ngMessages','ui.bootstrap','angularFileUpload'])
.run(function ($rootScope,$location, $state, $cookieStore,$uibModal,httpService ) {
    //路由跳转时检查是否为登录状态
    $rootScope.$on("$stateChangeSuccess",function(){
        if(!$cookieStore.get("loginStatus") && $location.path() !== "/login"){
            $state.go("login");
        }
    });
    //modal
    //删除确认
    $rootScope.alert = function (id,searchParams) {
        var uibModal  = $uibModal.open ({
            html: true,
            show: false,
            templateUrl: 'html/myModal.html',
            resolve : {
                            data : function() {//data作为modal的controller传入的参数
                                return $rootScope.data;//用于传递数据
                            }
                        },
            controller: function ($scope) {
                $scope.ok = function () {
                    httpService.deleteArticle(id);
                    uibModal.close();
                    $state.go('home.artList',searchParams,{reload: true});
                };
                $scope.cancel = function() {
                    uibModal.close();
                }
            }
        });
    };
    //上下线确认
    $rootScope.changeStatus = function (id,status,searchParams) {
        var uibModal  = $uibModal.open ({
            html: true,
            show: false,
            templateUrl: 'html/myModal.html',
            resolve : {
                data : function() {//data作为modal的controller传入的参数
                    return $rootScope.data;//用于传递数据
                }
            },
            controller: function ($scope) {
                $scope.ok = function () {
                    status = status !== 1 ? 1 : 2;
                    httpService.changeStatus(id,status);
                    uibModal.close();
                    $state.go('home.artList',searchParams,{reload: true});
                };
                $scope.cancel = function() {
                    uibModal.close();
                }
            }
        });
    };




})
.config(["$stateProvider","$urlRouterProvider","$ocLazyLoadProvider",function ($stateProvider,$urlRouterProvider,$ocLazyLoadProvider) {
    //封装下懒加载的设置
    var lazyLoadFun = function(pageJsUrl) {
        return function($ocLazyLoad) {
            return $ocLazyLoad.load(pageJsUrl,{serie: true});
        }
    };
    //路由重定向
    $urlRouterProvider.otherwise( '/login');
    $stateProvider
        .state('login',{
            url: "/login",
            templateUrl: "html/login.html",
            controller: "loginCtrl"
        })
        .state('home',{
            url: "/home",
            templateUrl: "/html/home.html",
            controller: "homeCtrl",
            resolve: {
                loadMyCtrl: lazyLoadFun(["js/home.js","css/home.css"])
            }
        })
        .state('home.artList',{
            url: "/artList?size&page&type&startAt&endAt&status",
            templateUrl: "/html/article/artList.html",
            controller: "artListCtrl",
            resolve: {
                loadMyCtrl: lazyLoadFun(["js/artList.js","css/artList.css"])
            }
        })
        .state('home.artDetails',{
            url: "/artDetails?id&size&page",
            templateUrl: "/html/article/artDetails.html",
            controller: "artDetailsCtrl",
            resolve: {
                loadMyCtrl: lazyLoadFun(["js/artDetails.js","css/artDetails.css"])
            }
        })
}]);