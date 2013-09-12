var Seat = {
		createNew : function(paper) {
			var seat = Shape.createNew(paper);
			
			seat.person = [];
			
			seat.add = function() {
				
			};
			
			seat.remove = function(){
				//delete seat
			};
			
			return seat;
		}
};

var RectSeat = {
		createNew : function(paper,config){
			var seat = Seat.createNew(paper);
			seat.instance = paper.rect(config.x, config.y, config.width, config.height, config.r);
			seat.instance.attr({"fill":"blue", 'opacity':0.8});
			return seat;
		}
};