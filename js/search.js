// Implements a simple search bar with custom bangs

// space to focus search
document.addEventListener("keydown", event => {
	if (event.code == 'Space') {
		document.getElementById("q").focus();
	}
});

String.prototype.replaceChars = function(character, replacement) {
	var str = this;
	var a;
	var b;
	for (var i=0; i < str.length; i++) {
		if (str.charAt(i) == character) {
			a = str.substr(0, i) + replacement;
			b = str.substr(i + 1);
			str = a + b;
		}
	}
	return str;
}

function search(query) {
	switch(query.substr(0, 1)){
		case 'y':
			query = query.substr(2);
			window.open('https://www.youtube.com/results?search_query=' +
			query.replaceChars(' ', '%20'), '_self');
		break;
		case 'w':
			query = query.substr(2);
			window.open(
			'https://www.wikipedia.org/w/index.php?title=Special:Search&search=' +
			query.replaceChars(' ', '%20'), '_self');
		break;
		case 'r':
			query = query.substr(2);
			window.open(
			'https://www.reddit.com/search?q=' +
			query.replaceChars(' ', '%20'), '_self');
		break;
		default:
			window.open('https://duckduckgo.com/' +
			query.replaceChars(' ', '%20'), '_self');
	}
}

sinput = document.getElementById('q');
if (!!sinput) {
	sinput.addEventListener('keypress', function(a) {
	var key = a.keyCode;
	if (key == 13) {
		var query = this.value;
		search(query);
		sinput.value = '';
	}
	});
}
