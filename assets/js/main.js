"use strict";
function pick(array) {
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
}
else {
    document.addEventListener("DOMContentLoaded", onLoaded);
}
