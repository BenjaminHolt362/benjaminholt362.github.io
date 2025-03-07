// your function here
function toggleDarkMode()
{
	document.querySelector("body").classList.toggle("dark-mode");
}

document.querySelector("button").addEventListener("click", toggleDarkMode)