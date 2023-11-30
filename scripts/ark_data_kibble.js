//const prime_any = "cooked prime meat, cooked prime fish meat, or prime meat jerky";
const prime_any = "any cooked or jerkied prime meat";

const kibble_list = [
	kibble_allosaurus = {
		name: "kibble: allosaurus",
		imprint: false,
		taming: ["griffin", "tapejara"],
		meat: [["cooked prime meat", 1]],
		other: [],
		plants: [["savoroot", 1], ["mejoberry", 2]],
		fiber: 3
	},
	kibble_ankylo = {
		name: "kibble: ankylosaurus",
		imprint: true,
		taming: ["carnotaurus"],
		meat: [["prime meat jerky", 1]],
		other: [],
		plants: [["savoroot", 1], ["mejoberry", 2]],
		fiber: 3
	},
	kibble_archaeopteryx = {
		name: "kibble: archaeopteryx",
		imprint: false,
		taming: ["diplocaulus"],
		meat: [["cooked fish meat", 1]],
		other: [],
		plants: [["longrass", 1], ["mejoberry", 2]],
		fiber: 3
	},
	kibble_argentavis = {
		name: "kibble: argentavis",
		imprint: false,
		taming: ["spinosaurus"],
		meat: [["prime meat jerky", 1]],
		other: [],
		plants: [["citronal", 1], ["mejoberry", 2]],
		fiber: 3
	},
	kibble_baryonyx = {
		name: "kibble: baryonyx",
		imprint: false,
		taming: ["megatherium"],
		meat: [["fish meat", 1]],
		other: [],
		plants: [["savoroot", 1], ["mejoberry", 2]],
		fiber: 3
	},
	kibble_bronto = {
		name: "kibble: brontosaurus",
		imprint: false,
		taming: ["sabertooth"],
		meat: [["cooked meat jerky", 1]],
		other: [],
		plants: [["rockarrot", 1], ["mejoberry", 2]],
		fiber: 3
	},
	kibble_carbonemys = {
		name: "kibble: carbonemys",
		imprint: true,
		taming: ["brontosaurus"],
		meat: [["prime meat jerky", 1]],
		other: [],
		plants: [["rockarrot", 1], ["mejoberry", 2]],
		fiber: 3
	},
	kibble_carno = {
		name: "kibble: carnotaurus",
		imprint: false,
		taming: ["dire bear", "direwolf", "triceratops"],
		meat: [["cooked meat", 1]],
		other: [],
		plants: [["savoroot", 1], ["mejoberry", 2]],
		fiber: 3
	},
	kibble_compy = {
		name: "kibble: compsognathus",
		imprint: false,
		taming: ["iguanodon", "pelagornis"],
		meat: [["cooked fish meat", 1]],
		other: [],
		plants: [["citronal", 1], ["mejoberry", 2]],
		fiber: 3
	},
	kibble_dilo = {
		name: "kibble: dilophosaurus",
		imprint: true,
		taming: ["ankylosaurus", "doedicurus", "equus", "pachycephalosaurus"],
		meat: [["cooked meat jerky", 1]],
		other: [],
		plants: [["citronal", 1], ["mejoberry", 2]],
		fiber: 3
	},
	kibble_dimetrodon = {
		name: "kibble: dimetrodon",
		imprint: true,
		taming: ["gallimimus"],
		meat: [["cooked meat jerky", 1]],
		other: [],
		plants: [["citronal", 1], ["mejoberry", 2]],
		fiber: 3
	},
	kibble_dimorph = {
		name: "kibble: dimorphodon",
		imprint: true,
		taming: ["megaloceros"],
		meat: [["cooked meat", 1]],
		other: [],
		plants: [["longrass", 1], ["mejoberry", 2]],
		fiber: 3
	},
	kibble_diplodocus = {
		name: "kibble: diplodocus",
		imprint: false,
		taming: ["allosaurus"],
		meat: [],
		other: [["rare flower", 1]],
		plants: [["savoroot", 1], ["mejoberry", 2]],
		fiber: 3
	},
	kibble_dodo = {
		name: "kibble: dodo",
		imprint: true,
		taming: ["ichtyosaurus", "mesopithecus", "pteranodon"],
		meat: [["cooked meat", 1]],
		other: [],
		plants: [["rockarrot", 1], ["mejoberry", 2]],
		fiber: 3
	},
	kibble_gallimimus = {
		name: "kibble: gallimimus",
		imprint: true,
		taming: ["castoroides", "terror bird"],
		meat: [["cooked meat jerky", 1]],
		other: [],
		plants: [["savoroot", 1], ["mejoberry", 2]],
		fiber: 3
	},
	kibble_griffin = {
		name: "kibble: griffin",
		imprint: false,
		taming: ["griffin", "unicorn"],
		meat: [[prime_any, 1]],
		other: [["snake plant seed", 1]],
		plants: [["citronal", 1], ["longrass", 1], ["savoroot", 1]],
		fiber: 10
	},
	kibble_iguanodon = {
		name: "kibble: iguanodon",
		imprint: false,
		taming: ["daeodon"],
		meat: [["prime meat jerky", 1]],
		other: [["rare mushroom", 1]],
		plants: [["mejoberry", 2]],
		fiber: 3
	},
	kibble_kairuku = {
		name: "kibble: kairuku",
		imprint: false,
		taming: ["angler"],
		meat: [["cooked meat", 1]],
		other: [],
		plants: [["savoroot", 1], ["mejoberry", 2]],
		fiber: 3
	},
	kibble_kaprosuchus = {
		name: "kibble: kaprosuchus",
		imprint: false,
		taming: [],
		meat: [["prime meat jerky", 1]],
		other: [],
		plants: [["savoroot", 1], ["mejoberry", 2]],
		fiber: 3
	},
	kibble_lystrosaurus = {
		name: "kibble: lystrosaurus",
		imprint: true,
		taming: ["diplodocus"],
		meat: [[prime_any, 1]],
		other: [],
		plants: [["rockarrot", 1], ["mejoberry", 2]],
		fiber: 3
	},
	kibble_megalosaurus = {
		name: "kibble: megalosaurus",
		imprint: false,
		taming: ["therizinosaurus"],
		meat: [["prime meat jerky", 2]],
		other: [],
		plants: [["rockarrot", 1], ["mejoberry", 2]],
		fiber: 3
	},
	kibble_moschops = {
		name: "kibble: moschops",
		imprint: false,
		taming: ["purlovia"],
		meat: [["cooked meat jerky", 1]],
		other: [],
		plants: [["savoroot", 1], ["mejoberry", 2]],
		fiber: 3
	},
	kibble_oviraptor = {
		name: "kibble: oviraptor",
		imprint: false,
		taming: ["megalosaurus"],
		meat: [["prime meat jerky", 1]],
		other: [],
		plants: [["longrass", 1], ["mejoberry", 2]],
		fiber: 3
	},
	kibble_pachy = {
		name: "kibble: pachycephalosaurus",
		imprint: true,
		taming: ["paraceratherium"],
		meat: [["cooked meat", 1]],
		other: [],
		plants: [["citronal", 1], ["mejoberry", 2]],
		fiber: 3
	},
	kibble_pachyrhino = {
		name: "kibble: pachyrhinosaurus",
		imprint: false,
		taming: ["baryonyx"],
		meat: [["cooked prime fish meat", 1]],
		other: [],
		plants: [["citronal", 1], ["mejoberry", 2]],
		fiber: 3
	},
	kibble_parasaur = {
		name: "kibble: parasaurolophus",
		imprint: true,
		taming: ["raptor"],
		meat: [["cooked meat", 1]],
		other: [],
		plants: [["rockarrot", 2], ["mejoberry", 2]],
		fiber: 3
	},
	kibble_pelagornis = {
		name: "kibble: pelagornis",
		imprint: false,
		taming: ["archaeopteryx"],
		meat: [],
		other: [["chitin", 10]],
		plants: [["citronal", 1], ["mejoberry", 2]],
		fiber: 3
	},
	kibble_pteranodon = {
		name: "kibble: pteranodon",
		imprint: true,
		taming: ["carbonemys"],
		meat: [["cooked meat", 1]],
		other: [],
		plants: [["rockarrot", 1], ["mejoberry", 2]],
		fiber: 3
	},
	kibble_pulmonoscorpius = {
		name: "kibble: pulmonoscorpius",
		imprint: false,
		taming: ["beelzebufo", "rex",],
		meat: [["prime meat jerky", 1]],
		other: [],
		plants: [["longrass", 1], ["mejoberry", 2]],
		fiber: 3
	},
	kibble_quetzal = {
		name: "kibble: quetzalcoatl",
		imprint: false,
		taming: ["dimetrodon", "giganotosaurus", "mosasaurus"],
		meat: [["prime meat jerky", 3]],
		other: [],
		plants: [["rockarrot", 3], ["mejoberry", 100]],
		fiber: 120
	},
	kibble_raptor = {
		name: "kibble: raptor",
		imprint: true,
		taming: ["mammoth"],
		meat: [["cooked meat jerky", 1]],
		other: [],
		plants: [["longrass", 1], ["mejoberry", 2]],
		fiber: 3
	},
	kibble_rex = {
		name: "kibble: rex",
		imprint: false,
		taming: ["plesiosaurus", "quetzalcoatl"],
		meat: [["prime meat jerky", 1]],
		other: [],
		plants: [["longrass", 1], ["mejoberry", 2]],
		fiber: 3
	},
	kibble_sarco = {
		name: "kibble: sarcosuchus",
		imprint: false,
		taming: ["stegosaurus"],
		meat: [["cooked meat jerky", 1]],
		other: [],
		plants: [["rockarrot", 1], ["mejoberry", 2]],
		fiber: 3
	},
	kibble_spino = {
		name: "kibble: spinosaurus",
		imprint: false,
		taming: ["megalodon"],
		meat: [["prime meat jerky", 1]],
		other: [],
		plants: [["savoroot", 1], ["mejoberry", 2]],
		fiber: 3
	},
	kibble_stego = {
		name: "kibble: stegosaurus",
		imprint: true,
		taming: ["argentavis"],
		meat: [["prime meat jerky", 1]],
		other: [],
		plants: [["citronal", 1], ["mejoberry", 2]],
		fiber: 3
	},
	kibble_tapejara = {
		name: "kibble: tapejara",
		imprint: false,
		taming: ["kaprosuchus"],
		meat: [["cooked prime meat", 1]],
		other: [],
		plants: [["rockarrot", 1], ["mejoberry", 2]],
		fiber: 3
	},
	kibble_terror_bird = {
		name: "kibble: terror bird",
		imprint: true,
		taming: ["woolly rhino"],
		meat: [["cooked meat", 1]],
		other: [],
		plants: [["citronal", 1], ["mejoberry", 2]],
		fiber: 3
	},
	kibble_theri = {
		name: "kibble: therizinosaurus",
		imprint: false,
		taming: ["basilosaurus"],
		meat: [],
		other: [["angler gel", 1]],
		plants: [["citronal", 1], ["mejoberry", 2]],
		fiber: 3
	},
	kibble_titanoboa = {
		name: "kibble: titanboa",
		imprint: false,
		taming: ["gigantopithecus", "dunkleosteus"],
		meat: [["cooked meat jerky", 1]],
		other: [],
		plants: [["longrass", 1], ["mejoberry", 2]],
		fiber: 3
	},
	kibble_trike = {
		name: "kibble: triceratops",
		imprint: true,
		taming: ["sarcosuchus"],
		meat: [["cooked meat jerky", 1]],
		other: [],
		plants: [["savoroot", 1], ["mejoberry", 2]],
		fiber: 3
	}];