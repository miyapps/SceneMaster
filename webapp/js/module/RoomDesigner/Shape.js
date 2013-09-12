var Shape = {
		createNew : function(paper){
			var shape = {};
			shape.paper = paper;
			shape.instance=null;
			shape.add = function(table){};
			shape.remove = function(){};
			shape.select = function(){};
			shape.draggable = function(){
				this.instance.draggable();
			};
			shape.resizable = function(){
				this.instance.resizable();
			};
			shape.droppable = function(){
				this.instance.droppable();
			};
			return shape;
		}
};


(function(R) {
    R.el.draggable = function(move, start, up) {
        this._ui = this._ui || {};
 
        var that = this;
 
        this._ui.onMove = R.is(move, 'function') ?
        move : function(distanceX, distanceY, x, y, deltaX, deltaY) {
            that.translate(deltaX, deltaY);
        };
 
        this._ui.onStart = R.is(start, 'function') ? start : function(x, y) {
        };
 
        function onMove(distanceX, distanceY, x, y) {
            var deltaX = x - that._ui.lastX;
            var deltaY = y - that._ui.lastY;
            that._ui.lastX = x;
            that._ui.lastY = y;
            that._ui.onMove(distanceX, distanceY, x, y, deltaX, deltaY);
            that.paper.safari();
        };
 
        function onStart(x, y) {
            that._ui.lastX = x;
            that._ui.lastY = y;
            that._ui.onStart(x, y);
        };
 
        return this.drag(onMove, onStart, up);
    };
    R.el.resizable = function() {
        //todo resizable
    };
    R.el.droppable = function() {
    	//todo droppable
    };
})(Raphael);