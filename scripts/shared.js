//all generic, shared code in one place

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