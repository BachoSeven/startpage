// Implements a simple search bar with custom bangs

function search(query) {
	query = query.replace(/^[ ]/g,'')
	switch(query.substr(0, 1)){
		case 'y':
			query = query.substr(2);
			window.open(
				'https://www.youtube.com/results?search_query=' +
				query.replace(' ', '%20'), '_self'); // %20 is Space
		break;
		case 'w':
			query = query.substr(2);
			window.open(
				'https://www.wikipedia.org/w/index.php?title=Special:Search&search=' +
				query.replace(' ', '%20'), '_self');
		break;
		case 'l':
			query = query.substr(2);
			window.open(
				'http://93.174.95.27/search.php?req=' +
				query.replace(' ', '%20'), '_self');
		break;
		case 'r':
			query = query.substr(2);
			window.open(
				'https://www.reddit.com/search?q=' +
				query.replace(' ', '%20'), '_self');
		break;
		default:
			window.open('https://duckduckgo.com/' +
				query.replace(' ', '%20'), '_self');
	}
}

sinput = document.getElementById('q');
// Typing (in Insert mode, when using Vimium) immediately focuses search bar
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
