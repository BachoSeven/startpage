// Implements a simple search bar with custom bangs

document.addEventListener("keydown", event => {
	if (event.code == 'Space') { // space to focus search
		document.getElementById("q").focus();
	}
});
