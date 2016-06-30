var path = require('path');
//var modal = require('jquery.modal');

//require the data
var friends = require('../data/friends.js').friends;
var totalDiff = 0;
var allDiffs = [];
var bestMatch = 0;

module.exports = function(app){

	app.get('/api/friends', function(request, response){

		response.json(friends); 
	});

	app.post('/api/friends', function(request, response){

		for(var j=0; j < friends.length; j++){

			for(var i=0; i < 10; i++){

				totalDiff += Math.abs(parseInt(request.body.scores[i]) - parseInt(friends[j].scores[i]));
			}
			allDiffs.push(totalDiff);
			totalDiff = 0;
		}

		for(var x = 1; x < allDiffs.length; x++){

			if(allDiffs[x] < allDiffs[bestMatch])
				bestMatch = x;
		}	

		var newFriend = request.body;

		friends.push(newFriend);

		allDiffs.length = 0;

		response.send(true);


		console.log("best match is " + bestMatch);


	});

}

// 	// -----------------------------------------------------------

// 	app.post('/api/clear', function(req, res){
// 		// Empty out the arrays of data
// 		userData = [];

// 		console.log(tableData);
// 	})
// }