const MOD = ['alt', 'ctrl', 'cmd'];
const MOD_S = [...MOD, 'shift'];
let VERBOSE = true;
const HALF_CORRECTION = -2; // Fix padding issues for half screen windows

var scr = Screen.main().flippedVisibleFrame();

// Padding Values
var paddingTop = 15;
var paddingLeft = 15;
var paddingRight = 30;
var paddingBottom = 35;
var paddingCenter = 10;
var paddingMiddle = 20;

const focusIgnoredApps = [
  "iTerm2",
  "Finder"
];

var windowLocations = function(scr) {
  scr = scr.flippedVisibleFrame();
  // Computed sizes
  var rightWidth = ((scr.width - paddingLeft) - paddingRight) * .33;
  var leftWidth = ((scr.width - paddingLeft) - paddingRight) * .67;
  var halfHeight = (((scr.height - paddingTop) - paddingBottom) / 2) + HALF_CORRECTION;
  return {
    full: {
        y: scr.y + paddingTop,
        x: scr.x + paddingLeft,
        width: scr.width - paddingRight,
        height: scr.height - paddingBottom
    },
    left: {
        y: scr.y + paddingTop,
        x: scr.x + paddingLeft,
        width: leftWidth - paddingCenter,
        height: scr.height - paddingBottom
    },
    right: {
        y: scr.y + paddingTop,
        x: scr.x + (leftWidth + paddingLeft) + paddingCenter,
        width: rightWidth,
        height: scr.height - paddingBottom
    },
    //Corners
    topRight: {
        y: scr.y + paddingTop,
        x: scr.x + (leftWidth + paddingLeft) + paddingCenter,
        width: rightWidth,
        height: halfHeight
    },
    bottomRight: {
        y: scr.y + (halfHeight + paddingTop) + paddingMiddle,
        x: scr.x + (leftWidth + paddingLeft) + paddingCenter,
        width: rightWidth,
        height: halfHeight
    },
    topLeft: {
        y: scr.y + paddingTop,
        x: scr.x + paddingLeft,
        width: leftWidth - paddingCenter,
        height: halfHeight
    },
    bottomLeft: {
        y: scr.y + (halfHeight + paddingTop) + paddingMiddle,
        x: scr.x + paddingLeft,
        width: leftWidth - paddingCenter,
        height: halfHeight
    }
  }
}
