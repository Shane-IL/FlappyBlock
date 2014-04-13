/**
 * Created by Shane on 17/03/2014.
 */

var Flapper = new function () {

    var _this = this;
    var _position = Global.Constants.InitialFlapperPosition;

    this.getPosition = function () {
        return  _position;
    };

    this.render = function(){

    };

    this.refreshFlapper = function () {
        if (!Pipes.occupiesNode(_position))BoardManager.setClassToNode(_position, Global.NodeClasses.defaultClass);
        do {
            _position.top = Math.floor((Math.random() * Global.Constants.GridHeight-1));
            _position.left = Math.floor((Math.random() * Global.Constants.GridWidth-1));
        } while (Pipes.occupiesNode(_position) || Holes.inHole(_position));
        BoardManager.setClassToNode(_position, Global.NodeClasses.flapperClass);
    };


};