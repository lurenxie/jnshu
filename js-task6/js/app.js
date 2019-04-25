'use strict';
var myApp = angular.module('myApp', ['ui.router','oc.lazyLoad','ngMessages','ui.bootstrap','angularFileUpload']);
myApp.config(["$stateProvider","$urlRouterProvider","$ocLazyLoadProvider",function ($stateProvider,$urlRouterProvider,$ocLazyLoadProvider) {
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