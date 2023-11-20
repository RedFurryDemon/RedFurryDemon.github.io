//all generic, shared code in one place

//theme preferences

function showCookies() {
	console.log(`${document.cookie}`);
}

var theme = "dark";
var headerPosition = "static";

loadTheme();

function loadTheme() {
	if (
		document.cookie.split("; ").find((row) =>
		row.startsWith("themePreference"))
	) {
		//cookie exists, read it!
		console.log("cookie exists");
		theme = document.cookie
		.split("; ")
		.find((row) => row.startsWith("themePreference="))
		?.split("=")[1];
		setTheme();
		console.log("theme: " + theme);
	} else {
		//read system pref
		console.log("no cookie, reading system pref");
		if (window.matchMedia("(prefers-color-scheme: light)").matches) {
			console.log("light!");
			theme = "light";
		}
		setTheme();
	}
}

function setTheme(){
	document.getElementById("theme_css").href = "style/theme_" + theme + ".css";
}

function changeTheme(){
	if (theme == "light"){
		theme = "dark";
	} else {
		theme = "light";
	}
	setTheme();
	changeThemeIcon();
	saveThemePreference();
}

function changeThemeIcon(){
	if (theme == "light"){
		document.getElementById("eye_icon").classList.remove("icon-eye_filled_day");
		document.getElementById("eye_icon").classList.add("icon-eye_outlined_night");
	} else {
		document.getElementById("eye_icon").classList.remove("icon-eye_outlined_night");
		document.getElementById("eye_icon").classList.add("icon-eye_filled_day");
	}
}

function saveThemePreference() {
    document.cookie = "themePreference=" + theme + "; max-age=31536000; SameSite=None; Secure";
	console.log("cookie saved: " + theme);
	  //"doSomethingOnlyOnce=true; expires=Fri, 31 Dec 9999 23:59:59 GMT; SameSite=None; Secure";
}

function changeHeaderAnchoring() {
	if (headerPosition == "fixed"){
		headerPosition = "static";
		document.getElementById("header_id").style.position = "static";
		document.getElementById("pin_icon").innerHTML = "pin";
	} else {
		headerPosition = "fixed";
		document.getElementById("header_id").style.position = "fixed";
		document.getElementById("pin_icon").innerHTML = "unpin";
	}
}

//standard display page function

function loadNav() {
	displayHeader()
	displayFooter();
}

//element.innerHtml is fine as long as there's no user input

//header & footer

function displayHeaderDEPRECATED() {
	let header = document.getElementById("header_id");
	header.innerHTML = `
		<a class="link_nav" href="index.html">home</a>
		<a class="link_nav" href="nav_scratchpad.html">scratchpad</a>
		<a class="link_nav" href="nav_resources.html">resources</a>
		<a class="link_nav" href="nav_about.html">about</a>
		<button id="eye_icon" class="link_nav icon-eye_filled_day" title="dark/light theme" onclick="changeTheme()" tabindex="0"></button>
		<button id="pin_icon" class="link_nav" title="pin/unpin header" onclick="changeHeaderAnchoring()" tabindex="0">pin</button>
	`;
	changeThemeIcon();
}

function displayHeader() {
	let header = document.getElementById("header_id");

let link_index_tn = document.createTextNode("home");
let link_index = document.createElement("a");
link_index.appendChild(link_index_tn);
link_index.classList.add("link_nav");
link_index.setAttribute("href", "index.html");

let link_scratchpad_tn = document.createTextNode("scratchpad");
let link_scratchpad = document.createElement("a");
link_scratchpad.appendChild(link_scratchpad_tn);
link_scratchpad.classList.add("link_nav");
link_scratchpad.setAttribute("href", "nav_scratchpad.html");

let link_resources_tn = document.createTextNode("resources");
let link_resources = document.createElement("a");
link_resources.appendChild(link_resources_tn);
link_resources.classList.add("link_nav");
link_resources.setAttribute("href", "nav_resources.html");

let link_about_tn = document.createTextNode("about");
let link_about = document.createElement("a");
link_about.appendChild(link_about_tn);
link_about.classList.add("link_nav");
link_about.setAttribute("href", "nav_about.html");

let b_eye = document.createElement("button");
b_eye.classList.add("link_nav", "icon-eye_filled_day");
b_eye.setAttribute("id", "eye_icon");
b_eye.setAttribute("onclick", "changeTheme()");
b_eye.setAttribute("title", "change color theme");
b_eye.setAttribute("aria-label", "change color theme");
b_eye.setAttribute("tabindex", "0");

header.append(link_index,link_scratchpad, link_resources, link_about, b_eye);
}

function displayFooter() {
	let footer = document.getElementById("footer_id");
	footer.innerHTML = `
		<a href="https://www.furaffinity.net/user/redfurrydemon/" class="link_nav">furaffinity</a>
		<a href="https://www.deviantart.com/redfurrydemon" class="link_nav">deviantart</a>
		<a href="https://github.com/RedFurryDemon" class="link_nav">github</a>
	`;
}

function hide(element) {
	document.getElementById(element).style.display = "none";
}