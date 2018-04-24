# Phoenix Padding
A simple [phoenix](https://github.com/kasper/phoenix) setup that provides padding between the windows.

![example](example.png)

Uses a *super mod* <kbd>ctrl + alt + cmd</kbd> thanks to [Jaredk3nt](https://github.com/Jaredk3nt/phoenix-padding) phoenix setup.

### Window Sizing Shortcuts

**Left Half:**
<kbd>&larr;</kbd> + <kbd>[ctrl + alt + cmd]</kbd>

**Right Half:**
<kbd>&rarr;</kbd> + <kbd>[ctrl + alt + cmd]</kbd>

**Left Half of next display:**
<kbd>&larr;</kbd> + <kbd>[ctrl + alt + cmd]</kbd> + <kbd>shift</kbd>

**Right Half of next display:**
<kbd>&rarr;</kbd> + <kbd>[ctrl + alt + cmd]</kbd> + <kbd>shift</kbd>

**Shift current window to bottom:**
Window must currently be positioned with in either the left half or right half
<kbd>&darr;</kbd> + <kbd>[ctrl + alt + cmd]</kbd>

**Shift current window to top:**
Window must currently be positioned with in either the left half or right half
<kbd>&uarr;</kbd> + <kbd>[ctrl + alt + cmd]</kbd>

**Top Right Corner:**
<kbd>]</kbd> + <kbd>[ctrl + alt + cmd]</kbd>

**Bottom Right Corner:**
<kbd>'</kbd> + <kbd>[ctrl + alt + cmd]</kbd>

**Top Left Corner:**
<kbd>[</kbd> + <kbd>[ctrl + alt + cmd]</kbd>

**Bottom Left Corner:**
<kbd>;</kbd> + <kbd>[ctrl + alt + cmd]</kbd>

**Maximize (not fullscreen):**
<kbd>return</kbd> + <kbd>[ctrl + alt + cmd]</kbd>

**Maximize on next display (not fullscreen):**
<kbd>return</kbd> + <kbd>[ctrl + alt + cmd]</kbd> + <kbd>shift</kbd>

### Focus Shortcuts

Skips apps in focusIgnoredApps array. (See /keys/constants.js)

**Gain Focus**
Focus the most recent window if no windows are focused, shows error modal if no windows available to focus. <kbd>`</kbd> + <kbd>[ctrl + alt + cmd]</kbd>

**Focus North Neighbor:**
<kbd>home</kbd> + <kbd>[ctrl + alt + cmd]</kbd>

**Focus South Neighbor:**
<kbd>end</kbd> + <kbd>[ctrl + alt + cmd]</kbd>

**Focus East Neighbor:**
<kbd>pageDown</kbd> + <kbd>[ctrl + alt + cmd]</kbd>

**Focus West Neighbor:**
<kbd>forwardDelete</kbd> + <kbd>[ctrl + alt + cmd]</kbd>

### Bonus Shortcuts

**Show Visible Window Info:**
Show icons and names of all visible windows at the center of the window
<kbd>i</kbd> + <kbd>[ctrl + alt + cmd]</kbd>
