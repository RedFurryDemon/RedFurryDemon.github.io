//stuff for phylogenetic trees

//fold/show clades

var toggler = document.getElementsByClassName("clade_name");
var i;

for (i = 0; i < toggler.length; i++) {
	toggler[i].addEventListener("click", toggleSubclades());
}

function toggleSubclades() {
	this.classList.toggle("clade_name_hidden");
	this.parentElement.querySelector(".clade_desc").classList.toggle("clade_desc_hidden");

	var subclades = this.parentElement.querySelectorAll("div");
	subclades.forEach(
		element => element.classList.toggle("hidden")
	);
	var species = this.parentElement.querySelectorAll(".species");
	species.forEach(
		element => element.classList.toggle("hidden")
	);
}