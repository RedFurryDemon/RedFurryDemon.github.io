//all generic, shared code in one place

function scrollFunction() {
	if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
		scrollButton.style.display = "block";
	} else {
		scrollButton.style.display = "none";
	}
}

// When the user clicks on the button, scroll to the top of the document
function scrollToTop() {
	document.body.scrollTop = 0; // For Safari
	document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

//yes, I am well aware that setting ielement.innerHtml is unsafe
//but doing this in a safer way isn't really worth the effort

//header & footer

function displayHeader(headerText) {
	let header = document.getElementById("header_id");
	header.innerHTML = `
		<div class="header_navbar">
			<a class="link_button" href="index.html">home</a>
			<a class="link_button" href="scratchpad.html">scratchpad</a>
			<a class="link_button" href="resources.html">resources</a>
			<a class="link_button" href="about.html">about</a>
		</div>
		<div class="header_title">
			<h1>` + headerText + `<h1>
		</div>
	`;
}
function displayFooter() {
	let footer = document.getElementById("footer_id");
	footer.innerHTML = `
		<a href="https://www.furaffinity.net/user/redfurrydemon/" class="link_button">furaffinity</a>
		<a href="https://www.deviantart.com/redfurrydemon" class="link_button">deviantart</a>
		<a href="https://github.com/RedFurryDemon" class="link_button">github</a>
	`;
}
function displayScrollButton() {
	let scrollButtonDiv = document.getElementById("scrollButton_id");
	scrollButtonDiv.innerHTML = `
		<button onclick="scrollToTop()" id="scrollButton" class="link_button">scroll to top</button>
	`;
	var scrollButton = document.getElementById("scrollButton");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = scrollFunction();
}