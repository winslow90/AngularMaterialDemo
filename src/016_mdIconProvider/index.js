/**
 * Created by superman90 on 8/7/16.
 */
var app = angular.module('app', ['ngMaterial']);

app.config(function($mdIconProvider) {
    // Configure URLs for icons specified by [set:]id.
    $mdIconProvider
        .defaultFontSet( 'fa' )                   // This sets our default fontset className.
        .defaultIconSet('app/icons.svg')       // Register a default set of SVG icons
        .iconSet('social', 'app/social.svg')   // Register a named icon set of SVGs
        .icon('android', 'app/android.svg')    // Register a specific icon (by name)
        .icon('work:chair', 'app/chair.svg');  // Register icon in a specific set

        //$mdIconProvider.defaultIconSet('app/app/icons.svg');
    })
    .run(function($templateRequest){
        // Pre-fetch icons sources by URL and cache in the $templateCache...
        // subsequent $templateRequest calls will look there first.
        var urls = [ 'imy/app/icons.svg', 'img/icons/android.svg'];
        angular.forEach(urls, function(url) {
            $templateRequest(url);
        });
    });