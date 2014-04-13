e/* Created by Shane on 17/03/2014.
 */

var Pipes = new function() {

    var _this = this;
    var _pipes=[];
    var _tailNode;
    var _gapcount = 4;

    this.newPipe = function(){
      _pipes.push({column1: {top: Global.Constants.GridWidth-3, left: 0}})
    };

    this.refreshSnake = function(){
        GameLogic.setCurrentDirection(Global.SnakeDirections.Left);
        if(_pipes.length>0){
            _this.resetSnakeNodes();
        }
        _pipes.length =0;
        for (var i = 0; i < Global.Constants.InitialSnakeLength; i++) {
            _pipes.push(
                {position:{top: Global.Constants.InitialSnakePosition.top, left: Global.Constants.InitialSnakePosition.left+i}})
        }
        this.renderAll();

    };

    this.occupiesNode = function(position){
          for(var i=0; i<_pipes.length; i++){
              if($.equalObjects(position, _pipes[i].position))return true;
          }
        return false;
    };

    this.eatingSelf = function(position){
        for(var i=1; i<_pipes.length; i++){
            if($.equalObjects((position), _pipes[i].position))return true;
        }
        return false;
    };

    this.renderAll = function(){
        for(var i=0; i<_pipes.length; i++){
            BoardManager.setClassToNode(_pipes[i].position,Global.NodeClasses.snakeClass);
        }
    };

    this.resetSnakeNodes = function(){
        for(var i=0; i<_pipes.length; i++){
            BoardManager.resetNode(_pipes[i].position);
        }
    };

    this.isAlive = function(){
        if(_this.eatingSelf(_pipes[0].position)) return false;
        else if(GameLogic.isWall(_pipes[0].position)) return false;
        else if (Holes.inHole(_pipes[0].position)) return false;
        else return true;
    };

    this.hasEaten = function(){
        if($.equalObjects(Flapper.getPosition(), _pipes[0].position)){
            Flapper.refreshFlapper();
            Holes.refreshHoles();
            _growing = 3;
            GameLogic.incrementScore();
        }
    };

    this.getSnakeArray = function(){
        return _pipes;
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