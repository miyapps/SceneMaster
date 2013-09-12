var Table = {
		createNew : function(paper){
			var table = Shape.createNew(paper);		
			
			table.seats = [];
			
			table.add = function(seat){
				this.seats.push(seat);
			};
			
			table.remove = function(){
				for(seat in this.seats){
					seat.remove();
				}
				//delete table
				//this.instance.remove();
			};
			
			return table;
		}
};

var RectTable = {
		createNew : function(paper,config){
			var table = Table.createNew(paper);
			table.instance = paper.rect(config.x, config.y, config.width, config.height, config.r);
			table.instance.attr({"fill":"#241b1a"});
			table.setSeats = function(){
				
			};
			return table;
		}
};