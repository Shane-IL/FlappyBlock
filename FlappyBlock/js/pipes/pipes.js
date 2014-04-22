e/* Created by Shane on 17/03/2014.
 */

var Pipes = new function() {

    var _this = this;
    var _pipes=[];
    var _tailNode;
    var _gapcount = 2;

    this.newPipe = function(){
        var gap = Math.floor(Math.random()*(Global.Constants.GridHeight-1)+1);
            for(var i=0; i<Global.Constants.GridHeight; i++){
                if (i != gap) {
                    _pipes.push({position: {top: i, left: Global.Constants.GridWidth}})
                }
            }
    };





    this.move = function(direction){
        _tailNode= _pipes[_pipes.length-1];
        switch(direction)
        {
            case Global.SnakeDirections.Left:
                if(_growing<1)
                {
                    BoardManager.resetNode(_tailNode.position);
                    _tailNode.position.top= _pipes[0].position.top;
                    _tailNode.position.left = _pipes[0].position.left-1;
                    _pipes.unshift(_pipes.pop());
                    BoardManager.setClassToNode(_pipes[0].position, Global.NodeClasses.snakeClass)
                }
                else
                {
                    _pipes.unshift({position: {top: _pipes[0].position.top, left: _pipes[0].position.left-1}});
                    _growing--;
                    BoardManager.setClassToNode(_pipes[0].position, Global.NodeClasses.snakeClass)
                }
                break;
            case Global.SnakeDirections.Right:
                if(_growing<1)
                {
                    BoardManager.resetNode(_tailNode.position);
                    _tailNode.position.top= _pipes[0].position.top;
                    _tailNode.position.left = _pipes[0].position.left+1;
                    _pipes.unshift(_pipes.pop());
                    BoardManager.setClassToNode(_pipes[0].position, Global.NodeClasses.snakeClass)
                }
                else
                {
                    _pipes.unshift({position: {top: _pipes[0].position.top, left: _pipes[0].position.left+1}});
                    _growing--;
                    BoardManager.setClassToNode(_pipes[0].position, Global.NodeClasses.snakeClass)
                }
                break;
            case Global.SnakeDirections.Up:
                if(_growing<1)
                {
                    BoardManager.resetNode(_tailNode.position);
                    _tailNode.position.top= _pipes[0].position.top-1;
                    _tailNode.position.left = _pipes[0].position.left;
                    _pipes.unshift(_pipes.pop());
                    BoardManager.setClassToNode(_pipes[0].position, Global.NodeClasses.snakeClass)
                }
                else
                {
                    _pipes.unshift({position: {top: _pipes[0].position.top-1, left: _pipes[0].position.left}});
                    _growing--;
                    BoardManager.setClassToNode(_pipes[0].position, Global.NodeClasses.snakeClass)
                }
                break;
            case Global.SnakeDirections.Down:
                if(_growing<1)
                {
                    BoardManager.resetNode(_tailNode.position);
                    _tailNode.position.top= _pipes[0].position.top+1;
                    _tailNode.position.left = _pipes[0].position.left;
                    _pipes.unshift(_pipes.pop());
                    BoardManager.setClassToNode(_pipes[0].position, Global.NodeClasses.snakeClass)
                }
                else
                {
                    _pipes.unshift({position: {top: _pipes[0].position.top+1, left: _pipes[0].position.left}});
                    _growing--;
                    BoardManager.setClassToNode(_pipes[0].position, Global.NodeClasses.snakeClass)
                }
                break;
            default:
                break;
        }

    };
};