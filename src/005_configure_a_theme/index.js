/**
 * Created by superman90 on 8/7/16.
 */
angular.module('app', ['ngMaterial'])
    .config(function($mdThemingProvider){

        //You can specify a color palette for a given color intention by calling the appropriate configuration method
        // (theme.primaryPalette, theme.accentPalette, theme.warnPalette, theme.backgroundPalette).
        $mdThemingProvider.theme('default')
            .primaryPalette('pink')
            .accentPalette('orange');

        //You can mark a theme as dark by calling theme.dark().
        //$mdThemingProvider.theme('default')
        //    .dark();


        //You can specify the hues from a palette that will be used by an intention group by default and for the md-hue-1, md-hue-2, md-hue-3 classes.
        //
        //    By default, shades 500, 300 800 and A100 are used for primary and warn intentions, while A200, A100, A400 and A700 are used for accent.
        //$mdThemingProvider.theme('default')
        //    .primaryPalette('pink', {
        //        'default': '400', // by default use shade 400 from the pink palette for primary intentions
        //        'hue-1': '100', // use shade 100 for the <code>md-hue-1</code> class
        //        'hue-2': '600', // use shade 600 for the <code>md-hue-2</code> class
        //        'hue-3': 'A100' // use shade A100 for the <code>md-hue-3</code> class
        //    })
        //    // If you specify less than all of the keys, it will inherit from the
        //    // default shades
        //    .accentPalette('purple', {
        //        'default': '200' // use shade 200 for default, and keep all other shades the same
        //    });


        //As mentioned before, Angular Material ships with the Material Design Spec's color palettes built in.
        // In the event that you need to define a custom color palette, you can use $mdThemingProvider to define it,
        // thereby making it available to your theme for use in its intention groups. Note that you must specify
        // all hues in the definition map.
        //$mdThemingProvider.definePalette('amazingPaletteName', {
        //    '50': 'ffebee',
        //    '100': 'ffcdd2',
        //    '200': 'ef9a9a',
        //    '300': 'e57373',
        //    '400': 'ef5350',
        //    '500': 'f44336',
        //    '600': 'e53935',
        //    '700': 'd32f2f',
        //    '800': 'c62828',
        //    '900': 'b71c1c',
        //    'A100': 'ff8a80',
        //    'A200': 'ff5252',
        //    'A400': 'ff1744',
        //    'A700': 'd50000',
        //    'contrastDefaultColor': 'light',    // whether, by default, text (contrast)
        //                                        // on this palette should be dark or light
        //    'contrastDarkColors': ['50', '100', //hues which contrast should be 'dark' by default
        //        '200', '300', '400', 'A100'],
        //    'contrastLightColors': undefined    // could also specify this if default was 'dark'
        //});
        //$mdThemingProvider.theme('default')
        //    .primaryPalette('amazingPaletteName')

        //Sometimes it is easier to extend an existing color palette to change a few properties than to define
        // a whole new palette. You can use $mdThemingProvider.extendPalette to quickly extend an existing color palette.
        //var neonRedMap = $mdThemingProvider.extendPalette('red', {
        //    '500': '#ff0000',
        //    'contrastDefaultColor': 'dark'
        //});
        //// Register the new color palette map with the name <code>neonRed</code>
        //$mdThemingProvider.definePalette('neonRed', neonRedMap);
        //// Use that theme for the primary intentions
        //$mdThemingProvider.theme('default')
        //    .primaryPalette('neonRed');
    });
