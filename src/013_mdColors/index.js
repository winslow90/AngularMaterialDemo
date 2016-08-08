/**
 * Created by superman90 on 8/7/16.
 */
var app =angular.module('app', ['ngMaterial']);

app.controller('myCtrl', function ($mdColors) {
    //TODO did not work out for the injection fo mdcolors
    this.color = $mdColors.getThemeColor('myTheme-red-200-0.5');
});
