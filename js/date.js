// Show a smol digital clock
document.onreadystatechange = () => {
	const date = new Date()
	document.getElementById("time").innerText = `${date.toTimeString([], { hour: '2-digit', minute: '2-digit' }).replace(/ GMT.*/, "")}`
}

// update indicator every second
setInterval(() => {
	const date = new Date()
	document.getElementById("time").innerText = `${date.toTimeString([], { hour: '2-digit', minute: '2-digit' }).replace(/ GMT.*/, "")}`
}, 1000)
