/*Class Name: Bug
 *Purpose:    To have a bug in the game, not a virus-bug literally!
*/



function Bug(x, y) {
    "use strict";
    this.x = x;
    this.y = y;
    this.image = new Image();
    
    function draw() {
        context.drawImage(this.image, this.x, this.y);
    }
}