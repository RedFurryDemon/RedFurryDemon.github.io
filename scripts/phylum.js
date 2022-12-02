//stuff for phylogenetic trees

const descriptions = document.querySelectorAll(".clade_desc");
const clades = document.querySelectorAll(".clade, .species");

document.getElementById("b_toggleDesc").addEventListener("click", toggleDescriptions);
document.getElementById("b_toggleIndent").addEventListener("click", toggleIndentation);

//fold/show clades
var toggler = document.getElementsByClassName("clade_name");
var i;

for (i = 0; i < toggler.length; i++) {
	toggler[i].addEventListener("click", function () {
		this.parentElement.querySelector(".clade_desc").classList.toggle("clade_desc_hidden");
		this.classList.toggle("clade_name_hidden");
		//https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelectorAll
		var subclades = this.parentElement.querySelectorAll(".clade, .species");

		subclades.forEach((userItem) => {
			userItem.classList.toggle("hidden");
		});
	});
}

//toggle descriptions
function toggleDescriptions() {
	descriptions.forEach((description) => {
		description.classList.toggle("hidden");
	});
	clades.forEach((clade) => {
		clade.classList.toggle("clade_name_spacing");
	});
}

//toggle indentation
function toggleIndentation() {
	clades.forEach((clade) => {
		clade.classList.toggle("clade_no_indent");
	});
}