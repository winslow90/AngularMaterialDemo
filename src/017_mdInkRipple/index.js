/**
 * Created by superman90 on 8/7/16.
 */
var app = angular.module('app', ['ngMaterial']);

app.factory('$myElementInkRipple', function($mdInkRipple) {
    return {
        attach: function (scope, element, options) {
            return $mdInkRipple.attach(scope, element, angular.extend({
                center: false,
                dimBackground: true
            }, options));
        }
    };
});
app.controller('myController', function ($scope, $element, $myElementInkRipple) {
    this.onClick = function (ev) {
        $myElementInkRipple.attach($scope, angular.element(ev.target), { center: true });
        //$myElementInkRipple.attach($scope, angular.element(document.querySelectorAll('.mydiv')), { center: true });
    }
});