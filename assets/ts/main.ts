// Update the random text below the logo.

/**
 * Picks a random element from an array.
 * @param array The array to pick from.
 */
function pick<T>(array: T[]): T {
	return array[Math.floor(Math.random() * array.length)];
}

function onLoaded() {
	document.getElementById("subname").innerHTML = pick([
		"Founding Order of Zetrith",
		"Mod Mismatch Thing_Deff: Count Diff",
		"Soon&trade;",
		"Squashing Git Commits",
		"Arbiter has joined",
		"Suprisingly not dead!",
		"We're at it again!",
		"Now with 50% less desyncs!",
		"Simulating..."
	]) + "<br />";
}

if (document.readyState !== "loading") {
	onLoaded();
} else {
	document.addEventListener("DOMContentLoaded", onLoaded);
}
