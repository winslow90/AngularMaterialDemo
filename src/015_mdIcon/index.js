/**
 * Created by superman90 on 8/7/16.
 */
var app = angular.module('app', ['ngMaterial'])
//todo not sure the exact usage of the $mdIcon, perhaps the inferface to load the svg or icons
function SomeDirective($mdIcon) {
    // See if the icon has already been loaded, if not
    // then lookup the icon from the registry cache, load and cache
    // it for future requests.
    // NOTE: ID queries require configuration with $mdIconProvider
    $mdIcon('android').then(function(iconEl)    { element.append(iconEl); });
    $mdIcon('work:chair').then(function(iconEl) { element.append(iconEl); });
    // Load and cache the external SVG using a URL
    $mdIcon('img/icons/android.svg').then(function(iconEl) {
        element.append(iconEl);
    });
};
