var Room = {
		createNew : function(paper){
			var room = Shape.createNew(paper);
			
			room.tables = [];
			
			room.add = function(table){
				this.tables.push(table);
			};
			
			room.remove = function(){
				for(var table in this.tables){
					table.remove();
				}
				//delete region
				this.instance.remove();
			};
			
			return room;
		}
};

var RectRoom = {
		createNew : function(paper,config){
			var room = Room.createNew(paper);
			room.instance = paper.rect(config.x, config.y, config.width, config.height, config.r);
			room.instance.attr({"fill":"url(../seat/img/laminate_0_2_1.jpg)"});
			room.instance.toBack();
			return room;
		}
};
