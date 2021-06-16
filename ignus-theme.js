ignusTheme = {}

ignusTheme.baseHue = 198;
ignusTheme.baseLightness = 50;

ignusTheme.designType = 'simple shadow' // flat, neumorphic, simple shadow, custom

ignusTheme.generateRSS = function () {
    ignusTextWhiteDuringColored = (ignusTheme.baseHue >=0 && ignusTheme.baseHue <=34) || (ignusTheme.baseHue >=195 && ignusTheme.baseHue <=360)
    if (ignusTextWhiteDuringColored) {
        ignusTextColorDuringColoredBackground = 'white';
    }
    else {
        ignusTextColorDuringColoredBackground = 'black';
    }

    ignusTextColorDuringColoredBackgroundOnHover = 'white';

    if (ignusTheme.designType == 'neumorphic') {
        ignusTheme.largeShadows = '-12px -12px 8px -2px hsla(198, 100%, 100%, 1), 4px 4px 20px -10px hsla(198, 100%, 0%, 0.5)';
        ignusTheme.smallShadows = '-2px -2px 10px 2px hsla(198, 100%, 100%, 1), 2px 2px 10px -3px hsla(198, 100%, 0%, 0.5)';
    }
    else if (ignusTheme.designType == 'flat') {
        ignusTheme.largeShadows = '0px 0px 0px 0px hsla(198, 100%, 0%, 0)';
        ignusTheme.smallShadows = '0px 0px 0px 0px hsla(198, 100%, 0%, 0)';
    }
    else if (ignusTheme.designType == 'simple shadow') {
        ignusTheme.largeShadows = '4px 4px 8px -6px hsla(0, 0%, 80%, 1)';
        ignusTheme.smallShadows = '4px 4px 10px -7px hsla(0, 0%, 70%, 1)';
    }

    ignusRSS = "<style id='ignus-style-root'>:root {"

    ignusRSS = ignusRSS + "--textcolor-for-colored-background: " + ignusTextColorDuringColoredBackground + ";"
    ignusRSS = ignusRSS + "--textcolor-for-colored-background-on-hover: " + ignusTextColorDuringColoredBackgroundOnHover + ";"
    ignusRSS = ignusRSS + "--base-hue: " + ignusTheme.baseHue + ";"
    ignusRSS = ignusRSS + "--base-lightness: " + ignusTheme.baseLightness + "%;"
    ignusRSS = ignusRSS + "--base-hue-in-deg: " + ignusTheme.baseHue + "deg;"
    ignusRSS = ignusRSS + "--large-shadows: " + ignusTheme.largeShadows + ";"
    ignusRSS = ignusRSS + "--small-shadows: " + ignusTheme.smallShadows + ";"
    
    ignusRSS = ignusRSS + "}</style>"

    return ignusRSS
}

ignusTheme.rss = ignusTheme.generateRSS();
$('head').append(ignusTheme.rss)

ignusTheme.setRSS = function (theRSS) {
    $('#ignus-style-root').html(theRSS)
}


ignusTheme.hsMoveLeft = function(carousalElement, scrollPercentAmount) {
    $(carousalElement).finish();
    var leftPos = $(carousalElement).scrollLeft();
    $(carousalElement).animate({scrollLeft: leftPos - window.innerWidth*0.01*scrollPercentAmount}, 300);
}

ignusTheme.hsMoveRight = function(carousalElement, scrollPercentAmount) {
    $(carousalElement).finish();
    var leftPos = $(carousalElement).scrollLeft();
    $(carousalElement).animate({scrollLeft: leftPos + window.innerWidth*0.01*scrollPercentAmount}, 300);
}