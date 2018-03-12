// Setup
var collection = {
	"2548": {
		"album": "Slippery When Wet",
		"artist": "Bon Jovi",
		"tracks": [ 
			"Let It Rock", 
			"You Give Love a Bad Name" 
		]
	},
	"2468": {
		"album": "1999",
		"artist": "Prince",
		"tracks": [ 
			"1999", 
			"Little Red Corvette" 
		]
	},
	"1245": {
		"artist": "Robert Palmer",
		"tracks": [ ]
	},
	"5439": {
		"album": "ABBA Gold"
	}
};
// Keep a copy of the collection for tests
var collectionCopy = JSON.parse(JSON.stringify(collection));

// Only change code below this line
function updateRecords(id, prop, value) {
	// if there's a value of prop - not an empty string
	if (value) {

		// special logic for tracks, dealing with array
		if (prop === "tracks") {
			
			// is there an existing property already initialized 
			if (collection[id].hasOwnProperty("tracks")) {

				// need to push the tracks into an existing array 
				collection[id][prop].push(value);
			} else {

				// need to make an empty array 
				// then push into it
				collection[id][prop] = [value];
			}
		
		// not a tracks prop, it's a simple assignment 
		} else {
			collection[id][prop] = value;
		}
	
	// in case we're deleting that property if it's been assigned an empty string
	} else {
		delete collection[id][prop];
	} 

	// return the whole collection back after internal edit
	return collection;
}
