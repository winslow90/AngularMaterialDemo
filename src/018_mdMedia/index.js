/**
 * Created by superman90 on 8/7/16.
 */
var app = angular.module('app', ['ngMaterial']);

app.controller('MyController', function($mdMedia, $scope) {
    $scope.$watch(function() { return $mdMedia('lg'); }, function(big) {
        $scope.bigScreen = big;
    });
    $scope.$watch(()=>{return $mdMedia('sm');}, function(value) {
        $scope.screenIsSmall = value;
    });
    $scope.$watch(()=>{return $mdMedia('(min-width: 1234px)');}, function(value) {
        $scope.customQuery = value;
    });
    $scope.$watch(()=>{return $mdMedia('max-width: 300px');}, function(value) {
        $scope.anotherCustom = value;
    });
});