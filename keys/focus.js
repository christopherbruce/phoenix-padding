let focus = ( direction ) => {
    let window;
    if ( Window.focused() === undefined ) {
        window = Window.recent()[0];
    } else {
        window = Window.focused();
    }

    let neighbors = window.neighbors( direction );

    if ( neighbors === undefined || neighbors.length > 0 ) {
        let index = 0;

        while ( index < neighbors.length ) {
            if ( neighbors[index] === undefined) { return; }

            if( !neighbors[index].isVisible() || focusIgnoredApps.indexOf(neighbors[index].app().name()) > -1 ) {
                index++;
            } else { break; }
        }

        if ( neighbors[index] === undefined ) { return; }

        neighbors[index].focus();
    }
}

// Get focus on window in direction
var focusEast = new Key('right', MOD_S, () => {
    focus( 'east' );
});

var focusNorth = new Key('up', MOD_S, () => {
    focus( 'north' );
});

var focusWest = new Key('left', MOD_S, () => {
    focus( 'west' );
});

var focusSouth = new Key('down', MOD_S, () => {
    focus( 'south' );
});
