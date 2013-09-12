var Factory = {
	Create : function(type,paper){
		var types = {
				"RectRegion" : RectRegion,
				"RectTable" : RectTable,
				"RectSeat" : RectSeat
		};
		return types[type].createNew(type,paper);
	}
};