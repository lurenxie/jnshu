'use strict';
var myApp = angular.module('myApp', ['ui.router','oc.lazyLoad','ngMessages']);
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
        .state('home.articleList',{
            url: "/articleList",
            templateUrl: "/html/article/articleList.html",
        })
        .state('home.articleDetails',{
            url: "/articleDetails",
            templateUrl: "/html/article/articleDetails.html",
        })
}]);