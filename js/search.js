// Implements a simple search bar with custom bangs

function search(query) {
	query = query.replace(/^[ ]/g,'') // Remove leading spaces
	if (query.substr(1, 1) == ' ') { // check if it's a bang (i.e. `y querywhichgoestoyoutube` and `a normal query` are parsed here, but `yquery` is not)
		switch(query.substr(0, 1)){
			case 'y':
				query = query.substr(2);
				window.location=(
					'https://www.youtube.com/results?search_query=' +
					query.replace(' ', '%20')); // %20 is Space
			break;
			case 'w':
				query = query.substr(2);
				window.location=(
					'https://wikipedia.org/w/index.php?search=' +
					query.replace(' ', '%20'));
			break;
			case 'l':
				query = query.substr(2);
				window.location=(
					'http://93.174.95.27/search.php?req=' +
					query.replace(' ', '%20'));
			break;
			case 'r':
				query = query.substr(2);
				window.location=(
					'https://www.reddit.com/search?q=' +
					query.replace(' ', '%20'));
			break;
			case 'a':
				query = query.substr(2);
				window.location=(
					'https://www.amazon.it/s/?field-keywords=' +
					query.replace(' ', '%20'));
			break;
			default:
				window.location=('https://duckduckgo.com/' +
					query.replace(' ', '%20'));
		}
	} else { // this is were `normal query` will be parsed
		window.location=('https://duckduckgo.com/' +
			query.replace(' ', '%20'));
	}
}

sinput = document.getElementById('q');
// Pressing space (in Insert mode) focuses search bar
document.addEventListener('keydown', event => {
	if (event.code == 'Space') {
		sinput.focus();
	}
});
// Enter accepts the search
if (!!sinput) {
	sinput.addEventListener('keydown', event => {
		if (event.code == 'Enter') {
			var query = sinput.value;
			search(query);
		}
	});
}
