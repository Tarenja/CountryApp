// Part 2
// - For the purposes of this exercise, you must create a separate module for reading and parsing the JSON file, named "json-file-reader".
// - This module should have a function that takes in a filename and a callback function as a parameter. It should then read that file, then parse the JSON. 
// - Finally, it should call the callback function and pass the parsed JSON to it.
// - One way to think of this module is as a helper that can read and parse any JSON file. It has nothing to do with 'countries', so to speak.
// - Another way to think of it is as a small wrapper to fs.readFile, except that this function only works with JSON files.

var fs = require('fs');		//makes sure the file system module will be used

function readParse(filename, callback) {		//creates a function that takes in a file and a callback function as a parameter
	var obj;			//creates an empty variable to be used and for the parsed data to be added to later

	fs.readFile(filename, 'utf8', function (err, data) {		//file system method that reads through the given file
		if (err) {
			throw err;					//throws me an error message is there is an error
		} 
		var obj = JSON.parse(data);		//stores the parsed file into var obj
		callback(obj);					//calls the callback function which will run its code on the parsed file, this can be assigned any code/function we enter when calling this function in an app
	});
};

module.exports = {						//exports the function to be used in an app as a module
	readParse: readParse
};
	
