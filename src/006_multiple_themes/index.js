/**
 * Created by superman90 on 8/7/16.
 */
angular.module('app', ['ngMaterial']).config(function($mdThemingProvider){

    //Registering another theme
    $mdThemingProvider.theme('altTheme')
        .primaryPalette('purple');

    //Using another theme
    //$mdThemingProvider.setDefaultTheme('altTheme');

    //If you need this dynamic changing in your entire application (ie. on all md-theme directives)
    // you can use the $mdThemingProvider to enable it.
    $mdThemingProvider.alwaysWatchTheme(true);

    //Under the Hood
    //
    //Angular Material dynamically generates CSS for registered themes by injecting several <script> tags into
    // the <head> section of the application at runtime. Here is how that process currently works:
    //
    //    During the Angular Material build process, a function in gulp/util.js called themeBuildStream() compiles
    // all *-theme.scss files from components into a single CSS string that is injected into the material.core module
    // as a constant called $MD_THEME_CSS.
    //
    //    At runtime, a function in src/core/services/theming/theming.js called generateThemes() parses $MD_THEME_CSS
    // to generate the <style> tags that are added to the <head> section of the application. A closure variable called
    // GENERATED is used to keep track of the themes that have had their CSS generated.
    //
    //    For each of the four (4) palettes (e.g. primary, accent, warn and background) in each registered theme
    // (including the default theme), there are four (4) <style> tags added to the <head> section (e.g. .md-primary,
    // .md-primary.md-hue-1, .md-primary.md-hue-2, .md-primary.md-hue-3). Each registered theme results in 16 <style>
    // tags being generated.
});
