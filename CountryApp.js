// Part 1
// Create a Node.js application that does the following:
// - Takes in one parameter from the command line, the name of a country. Note: command line arguments can be read from the global array `process.argv`
// - Reads and parses the `countries.json` file. Note: you must use readFile and not readFileSync. Get it here: countries.jsonView in a new window
// - Outputs information about that specific country. Must be in the following format:
// Country: <country name>
// Top Level Domain: <tld>

var fs = require('fs');					//makes sure the file system module will be used
var obj;							//creates an empty variable to be used and for the parsed data to be added to later

fs.readFile('countries.json', 'utf8', function (err, data) {			//file system method that reads through the given file
	if (err) {
		throw err;					//throws me an error message is there is an error
	} 
	var obj = JSON.parse(data);		//stores the parsed file into var obj

	for (var i=0; i < obj.length; i++) {			//loops through the parsed file
		if (process.argv[2] === obj[i].name) {		//compares if the parsed file object.name matches the name I enter in the command prompt
   		console.log("Country: " + obj[i].name + '\n' + "Top Level Domain: " + obj[i].topLevelDomain);		//log the name and domain of the country if it matches my entry
    	}
 	}
	
	});


// Hints:
// - Use JSON.parse (https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/JSON/parse (Links to an external site.)Links to an external site.) to parse JSON data from files into a JavaScript object.
// - Try first completing the assignment without creating a separate module - Extracting the second module out is significantly more difficult.