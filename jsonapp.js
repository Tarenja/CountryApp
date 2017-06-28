// Part 2
// - For the purposes of this exercise, you must create a separate module for reading and parsing the JSON file, named "json-file-reader".
// - This module should have a function that takes in a filename and a callback function as a parameter. It should then read that file, then parse the JSON. Finally, it should call the callback function and pass the parsed JSON to it.
// - One way to think of this module is as a helper that can read and parse any JSON file. It has nothing to do with 'countries', so to speak.
// - Another way to think of it is as a small wrapper to fs.readFile, except that this function only works with JSON files.

// - The output of the application should have the following format: 

// Country: <country name>
// Top Level Domain: <tld>


var filereader = require('./json-file-reader.js');			//makes sure the module I created will be used

filereader.readParse('countries.json', function (obj) {		//accessing the function inside the module, this will automatically fill in and run where in the module we had the callback function
	for (var i=0; i < obj.length; i++) {					//loops through the parsed file
		if (process.argv[2] === obj[i].name) {				//compares if the parsed file object.name matches the name I enter in the command prompt
   			console.log("Country: " + obj[i].name + '\n' + "Top Level Domain: " + obj[i].topLevelDomain); //log the name and domain of the country if it matches my entry
    	}
	};

});