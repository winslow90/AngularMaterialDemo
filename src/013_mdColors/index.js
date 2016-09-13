/**
 * Created by superman90 on 8/7/16.
 */
var app =angular.module('app', ['ngMaterial'])
    .config(function($mdAriaProvider){
        $mdAriaProvider.disableWarnings();
    });

app.controller('myCtrl', function ($mdColors,$rootScope,$timeout) {
    //TODO did not work out for the injection fo mdcolors
    var color = $mdColors.getThemeColor('red-200-0.5');
    this.color = color;
    //setTimeout(function(){
    //    $mdColors.applyThemeColors(angular.element(document.querySelectorAll("#sometext")),color);
    //    $rootScope.$apply();
    //},0);
    $timeout(function(){
        $mdColors.applyThemeColors(angular.element(document.querySelectorAll("#sometext")),color);
        //$rootScope.$apply();
    });
});
