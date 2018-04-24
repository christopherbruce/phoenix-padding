let movementModal = ( message, override = false ) => {
  window = Window.focused();
  screen = Screen.main().flippedVisibleFrame();

  Modal.build({
    origin( modal ) {
      return {
        x: ( screen.width / 2 ) - ( modal.width / 2 ),
        y: ( screen.height / 2 )
      }
    },
    weight: 20,
    duration: 1,
    appearance: 'dark',
    icon: window.app().icon(),
    text: override ? message + ' ' + window.app().name() : 'Moving ' + window.app().name() + ' to the ' + message
  }).show();
}

// Move focused window to left or right half
var leftHalf = new Key('left', MOD, () => {
  if ( VERBOSE ) { movementModal( 'left half' ); }
  Window.focused().setFrame(windowLocations(Screen.main()).left);
});

var rightHalf = new Key('right', MOD, () => {
  if ( VERBOSE ) { movementModal( 'right half' ); }
  Window.focused().setFrame(windowLocations(Screen.main()).right);
});

// Move focused window to left or right half of next display
var leftHalfND = new Key('left', MOD_S, () => {
  if ( VERBOSE ) { movementModal( 'left half of next display' ); }
  Window.focused().setFrame(windowLocations(Screen.main().next()).left);
});

var rightHalfND = new Key('right', MOD_S, () => {
  if ( VERBOSE ) { movementModal( 'right half of next display' ); }
  Window.focused().setFrame(windowLocations(Screen.main().next()).right);
});

// Move focused window to bottom or top half
var moveUp = new Key('up', MOD, () => {
  const windowX = Math.round(Window.focused().topLeft().x);
  const leftX = Math.round(windowLocations(Screen.main()).left.x);
  const rightX = Math.round(windowLocations(Screen.main()).right.x);
  if (leftX === windowX) {
    if ( VERBOSE ) { movementModal( 'top left' ); }
    Window.focused().setFrame(windowLocations(Screen.main()).topLeft);
  } else if (rightX == windowX) {
    if ( VERBOSE ) { movementModal( 'top right' ); }
    Window.focused().setFrame(windowLocations(Screen.main()).topRight);
  }
});

var moveDown = new Key('down', MOD, () => {
  const windowX = Math.round(Window.focused().topLeft().x);
  const leftX = Math.round(windowLocations(Screen.main()).left.x);
  const rightX = Math.round(windowLocations(Screen.main()).right.x);
  if (leftX === windowX) {
    if ( VERBOSE ) { movementModal( 'bottom left' ); }
    Window.focused().setFrame(windowLocations(Screen.main()).bottomLeft);
  } else if (rightX == windowX) {
    if ( VERBOSE ) { movementModal( 'bottom right' ); }
    Window.focused().setFrame(windowLocations(Screen.main()).bottomRight);
  }
});

// Move focused window to corners
var topRight = new Key(']', MOD, () => {
  if ( VERBOSE ) { movementModal( 'top right of next display' ); }
  Window.focused().setFrame(windowLocations(Screen.main()).topRight);
});

var topLeft = new Key('[', MOD, () => {
  if ( VERBOSE ) { movementModal( 'top left of next display' ); }
  Window.focused().setFrame(windowLocations(Screen.main()).topLeft);
});

var bottomRight = new Key('\'', MOD, () => {
  if ( VERBOSE ) { movementModal( 'bottom right of next display' ); }
  Window.focused().setFrame(windowLocations(Screen.main()).bottomRight);
});

var bottomLeft = new Key(';', MOD, () => {
  if ( VERBOSE ) { movementModal( 'bottom left of next display' ); }
  Window.focused().setFrame(windowLocations(Screen.main()).bottomLeft);
});

// Maximize window (not fullscreen)
var maximizeWindow = new Key('return', MOD, () => {
  if ( VERBOSE ) { movementModal( 'Maximizing', true); }
  Window.focused().setFrame(windowLocations(Screen.main()).full);//.maximize();
});

// Maximize window (not fullscreen) on next display
var maximizeWindowND = new Key('return', MOD_S, () => {
  if ( VERBOSE ) { movementModal( 'next display' ); }
  Window.focused().setFrame(windowLocations(Screen.main().next()).full);//.maximize();
});

let fullscreenWindow = new Key('f', MOD, () => {
  let w = Window.focused();
  if ( w.isFullScreen() ) {
    Window.focused().setFullScreen(false);
  } else {
    Window.focused().setFullScreen(true);
  }
});
