// Implements a simple search bar with custom bangs

// space to focus search
document.addEventListener("keydown", event => {
	if (event.code == 'Space') {
		document.getElementById("q").focus();
	}
});
