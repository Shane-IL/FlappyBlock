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
        BoardManager.setClassToNode(_position, Global.NodeClasses.flapperClass);
    };

    this.refreshFlapper = function () {
        BoardManager.resetNode(_position);
        _position = Global.Constants.InitialFlapperPosition;

    };

    this.flap = function(){
        _position.top += 1;
    };

    this.sink = function(){
        _position.top += -1;
    };


};