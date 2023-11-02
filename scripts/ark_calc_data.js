const RESOURCE_MULT = 1;
const WEAPON_MULT = 1;
const AMMO_MULT = 1;
const ARMOR_MULT = 1;
const ARMOR_SPECIAL_MULT = 1.5;
const SADDLE_MULT = 1;
const SERVICE_MULT = 1;

const PRIZE_TIER_S = 250;
const PRIZE_TIER_A1 = 25;
const PRIZE_TIER_A2 = 15;
const PRIZE_TIER_A3 = 10;
const PRIZE_TIER_B1 = 2;
const PRIZE_TIER_B2 = 2;
const PRIZE_TIER_B3 = 2;
const PRIZE_TIER_C = 1;

//RFD - one of these is deprecated, but which one?

const RESOURCE_COST_A = 5 * RESOURCE_MULT;
const RESOURCE_COST_B = 10 * RESOURCE_MULT;
const RESOURCE_COST_C = 15 * RESOURCE_MULT;

const RESOURCE_COST_VERY_CHEAP = 5 * RESOURCE_MULT;
const RESOURCE_COST_CHEAP = 10 * RESOURCE_MULT;
const RESOURCE_COST_NORMAL = 15 * RESOURCE_MULT;
const RESOURCE_COST_EXPENSIVE = 5 * RESOURCE_MULT;
const RESOURCE_COST_VERY_EXPENSIVE = 10 * RESOURCE_MULT;

const STACK_TIER_VERY_COMMON = 200 * RESOURCE_MULT;
const STACK_TIER_COMMON = 100 * RESOURCE_MULT;
const STACK_TIER_UNCOMMON = 20 * RESOURCE_MULT;
const STACK_TIER_UNCOMMON_SPOILING = 25 * RESOURCE_MULT;

const species_list = [
	s_allosaurus = {
		species_name: "Allosaurus therotribus",
		category: ["regular", "na_dinosaur"],
		prize: PRIZE_TIER_B1
	},
	s_direbear = {
		species_name: "Arctodus dirus",
		category: ["regular", "synapsid"],
		prize: PRIZE_TIER_C,
		note: "Vernacular name: dire bear"
	},
	s_argentavis = {
		species_name: "Argentavis atrocollum",
		category: ["regular", "bird"],
		prize: PRIZE_TIER_C
	},
	s_arthropleura = {
		species_name: "Arthropleura fellisanguis",
		category: ["regular", "invertebrate"],
		prize: PRIZE_TIER_B2
	},
	s_baryonyx = {
		species_name: "Baryonyx aquafulgur",
		category: ["regular", "na_dinosaur"],
		prize: PRIZE_TIER_C
	},
	s_direwolf = {
		species_name: "Canis maxdirus",
		category: ["regular", "synapsid"],
		prize: PRIZE_TIER_C,
		note: "Vernacular name: direwolf"
	},
	s_megalodon = {
		species_name: "Carcharodon ultramegalodon",
		vernacular_name: "Megalodon",
		category: ["regular", "fish"],
		prize: PRIZE_TIER_C
	},
	s_carnotaurus = {
		species_name: "Carnotaurus pressor",
		category: ["regular", "na_dinosaur"],
		prize: PRIZE_TIER_C
	},
	s_alpha_carnotaurus = {
		species_name: "Carnotaurus pressor",
		category: ["alpha", "na_dinosaur"],
		prize: PRIZE_TIER_A3,
		note: "Doesn't have an implant."
	},
	s_chalicotherium = {
		species_name: "Chalicotherium obsidioequus",
		category: ["regular", "synapsid"],
		prize: PRIZE_TIER_B1
	},
	s_daeodon = {
		species_name: "Daeodon comedentis",
		category: ["regular", "dungeon", "synapsid"],
		prize: PRIZE_TIER_A2
	},
	s_plesiosaurus = {
		species_name: "Elasmosaurus remuspissa",
		category: ["regular", "nd_reptile"],
		prize: PRIZE_TIER_B1,
		note: "Vernacular name: plesiosaurus"
	},
	s_electrophorus = {
		species_name: "Electrophorus beluadomito",
		category: ["regular", "fish"],
		prize: PRIZE_TIER_C
	},
	s_giganotosaurus = {
		species_name: "Giganotosaurus furiosus",
		category: ["regular", "na_dinosaur"],
		prize: PRIZE_TIER_S
	},
	s_kaprosuchus = {
		species_name: "Kaprosuchus paludentium",
		category: ["regular", "nd_reptile"],
		prize: PRIZE_TIER_C
	},
	s_liopleurodon = {
		species_name: "Liopleurodon magicus",
		category: ["regular", "nd_reptile"],
		prize: PRIZE_TIER_S,
		note: "Needs to be killed in a single strike."
	},
	s_megatherium = {
		species_name: "Megatherium formipavor",
		category: ["regular", "dungeon", "synapsid"],
		prize: PRIZE_TIER_A2
	},
	s_angler = {
		species_name: "Melanocetus anglerpescum",
		category: ["regular", "fish"],
		prize: PRIZE_TIER_C,
		note: "Vernacular name: anglerfish"
	},
	s_mosasaurus = {
		species_name: "Mosasaurus suspirita",
		category: ["regular", "nd_reptile"],
		prize: PRIZE_TIER_A2
	},
	s_alpha_mosasaurus = {
		species_name: "Mosasaurus suspirita",
		category: ["alpha", "nd_reptile"],
		prize: PRIZE_TIER_A1,
		note: "Doesn't have an implant."
	},
	s_pegomastax = {
		species_name: "Pegomastax fructarator",
		category: ["regular", "dungeon", "na_dinosaur"],
		prize: PRIZE_TIER_B3
	},
	s_terrorbird = {
		species_name: "Phorusrhacos rapidesultor",
		category: ["regular", "bird"],
		prize: PRIZE_TIER_C,
		note: "Vernacular name: terror bird"
	},
	s_pulmonoscorpius = {
		species_name: "Pulmonoscorpius gigantus",
		category: ["regular", "invertebrate"],
		prize: PRIZE_TIER_C
	},
	s_purlovia = {
		species_name: "Purlovia maxima",
		category: ["regular", "synapsid"],
		prize: PRIZE_TIER_B2
	},
	s_jerboa = {
		species_name: "Renopila amplexus",
		category: ["regular", "dungeon", "synapsid"],
		prize: PRIZE_TIER_B3,
		note: "Vernacular name: jerboa"
	},
	s_sarcosuchus = {
		species_name: "Sarcosuchus excubitor",
		category: ["regular", "nd_reptile"],
		prize: PRIZE_TIER_C
	},
	s_smilodon = {
		species_name: "Smilodon brutalis",
		category: ["regular", "synapsid"],
		prize: PRIZE_TIER_C,
		note: "Vernacular name: sabertooth"
	},
	s_spinosaurus = {
		species_name: "Spinosaurus aquareliga",
		category: ["regular", "na_dinosaur"],
		prize: PRIZE_TIER_B1
	},
	s_therizinosaurus = {
		species_name: "Therizinosaurus multiensis",
		category: ["regular", "na_dinosaur"],
		prize: PRIZE_TIER_B1,
		note: "Vernacular name: danger floof"
	},
	s_titanoboa = {
		species_name: "Titanoboa exornantur",
		category: ["regular", "nd_reptile"],
		prize: PRIZE_TIER_B2
	},
	s_titanosaurus = {
		species_name: "Titanosaurus vagacastrum",
		category: ["regular", "na_dinosaur", "no_implant"],
		prize: PRIZE_TIER_S,
		note: "The implant is inaccessible in ordinary circumstances."
	},
	s_troodon = {
		species_name: "Troodon magnanimus",
		category: ["regular", "dungeon", "na_dinosaur"],
		prize: PRIZE_TIER_A2
	},
	s_tusoteuthis = {
		species_name: "Tusoteuthis vampyrus",
		category: ["regular", "invertebrate"],
		prize: PRIZE_TIER_A2
	},
	s_tyrannosaurus = {
		species_name: "Tyrannosaurus dominium",
		category: ["regular", "na_dinosaur"],
		prize: PRIZE_TIER_B1,
		note: "Vernacular name: rex"
	},
	s_alpha_tyrannosaurus = {
		species_name: "Tyrannosaurus dominium",
		category: ["alpha", "na_dinosaur"],
		prize: PRIZE_TIER_A1,
		note: "Doesn't have an implant."
	},
	s_utahraptor = {
		species_name: "Utahraptor prime",
		category: ["regular", "na_dinosaur"],
		prize: PRIZE_TIER_C
	},
	s_alpha_utahraptor = {
		species_name: "Utahraptor prime",
		category: ["alpha", "na_dinosaur"],
		prize: PRIZE_TIER_A3,
		note: "Doesn't have an implant."
	}
];

const resource_list = [
	res_fiber = {
		name: "fiber",
		category: ["basic", "spawnable"],
		cost: RESOURCE_COST_A,
		stack: STACK_TIER_VERY_COMMON
	},
	res_thatch = {
		name: "thatch",
		category: ["basic", "spawnable"],
		cost: RESOURCE_COST_A,
		stack: STACK_TIER_VERY_COMMON
	},
	res_wood = {
		name: "wood",
		category: ["basic", "spawnable"],
		cost: RESOURCE_COST_A,
		stack: STACK_TIER_VERY_COMMON
	},
	res_hide = {
		name: "hide",
		category: ["basic", "spawnable"],
		cost: RESOURCE_COST_A,
		stack: STACK_TIER_VERY_COMMON
	},
	res_flint = {
		name: "flint",
		category: ["basic", "spawnable"],
		cost: RESOURCE_COST_A,
		stack: STACK_TIER_VERY_COMMON
	},
	res_stone = {
		name: "stone",
		category: ["basic", "spawnable"],
		cost: RESOURCE_COST_A,
		stack: STACK_TIER_VERY_COMMON
	},
	res_metal = {
		name: "raw metal",
		category: ["basic", "spawnable"],
		cost: RESOURCE_COST_B,
		stack: STACK_TIER_VERY_COMMON
	},
	res_chitin = {
		name: "chitin",
		category: ["basic", "spawnable"],
		cost: RESOURCE_COST_B,
		stack: STACK_TIER_VERY_COMMON
	},
	res_pearls = {
		name: "silica pearls",
		category: ["basic", "spawnable"],
		cost: RESOURCE_COST_B,
		stack: STACK_TIER_COMMON
	},
	res_narco = {
		name: "narcotics",
		category: ["derived", "non-spawnable"],
		cost: RESOURCE_COST_B,
		stack: STACK_TIER_COMMON
	},
	res_biotoxin = {
		name: "biotoxin",
		category: ["basic", "spawnable", "spoiling"],
		cost: RESOURCE_COST_B,
		stack: STACK_TIER_COMMON
	},
	res_flowers = {
		name: "rare flowers",
		category: ["basic", "non-spawnable", "spoiling"],
		cost: RESOURCE_COST_B,
		stack: STACK_TIER_UNCOMMON_SPOILING
	},
	res_charcoal = {
		name: "charcoal",
		category: ["derived", "spawnable"],
		cost: 5 * RESOURCE_MULT,
		stack: STACK_TIER_COMMON
	},
	res_sparkpowder = {
		name: "sparkpowder",
		category: ["derived", "spawnable"],
		cost: 5 * RESOURCE_MULT,
		stack: STACK_TIER_COMMON
	},
	res_gunpowder = {
		name: "gunpowder",
		category: ["derived", "non-spawnable"],
		cost: 5 * RESOURCE_MULT,
		stack: STACK_TIER_COMMON
	},
	res_oil = {
		name: "oil",
		category: ["basic", "spawnable"],
		cost: RESOURCE_COST_C,
		stack: STACK_TIER_UNCOMMON
	},
	res_crystal = {
		name: "crystal",
		category: ["basic", "spawnable"],
		cost: RESOURCE_COST_C,
		stack: STACK_TIER_UNCOMMON
	},
	res_obsidian = {
		name: "obsidian",
		category: ["basic", "spawnable"],
		cost: RESOURCE_COST_C,
		stack: STACK_TIER_UNCOMMON
	},
	res_angler_gel = {
		name: "angler gel",
		category: ["basic", "spawnable"],
		cost: RESOURCE_COST_C,
		stack: STACK_TIER_UNCOMMON
	},
	res_pelt = {
		name: "pelt",
		category: ["basic", "spawnable"],
		cost: RESOURCE_COST_C,
		stack: STACK_TIER_COMMON
	},
	res_sap = {
		name: "sap",
		category: ["basic", "spawnable"],
		cost: RESOURCE_COST_C,
		stack: STACK_TIER_UNCOMMON
	},
	res_stimulant = {
		name: "stimulant",
		category: ["derived", "non-spawnable"],
		cost: RESOURCE_COST_C,
		stack: STACK_TIER_UNCOMMON
	},
	res_bug_repellent = {
		name: "bug repellent",
		category: ["derived", "non-spawnable", "spoiling"],
		cost: RESOURCE_COST_C,
		stack: STACK_TIER_UNCOMMON
	},
	res_mead = {
		name: "mead",
		category: ["derived", "non-spawnable", "spoiling"],
		cost: RESOURCE_COST_C,
		stack: STACK_TIER_UNCOMMON,
		note: "To prevent the mead from spoiling, provide fising rods (1 rod per mead jar)."
	},
	res_mushrooms = {
		name: "rare mushrooms",
		category: ["basic", "non-spawnable"],
		cost: RESOURCE_COST_C,
		stack: STACK_TIER_UNCOMMON
	},
	res_jerky_normal = {
		name: "cooked meat jerky",
		category: ["derived", "non-spawnable", "spoiling"],
		cost: RESOURCE_COST_C,
		stack: STACK_TIER_UNCOMMON
	},
	res_jerky_prime = {
		name: "prime meat jerky",
		category: ["derived", "non-spawnable", "spoiling"],
		cost: RESOURCE_COST_C,
		stack: STACK_TIER_UNCOMMON
	},
	res_electronics = {
		name: "electronics",
		category: ["derived", "spawnable"],
		cost: 5 * RESOURCE_MULT,
		stack: STACK_TIER_UNCOMMON
	},
	res_gasoline = {
		name: "gasoline",
		category: ["derived", "spawnable"],
		cost: 5 * RESOURCE_MULT,
		stack: STACK_TIER_UNCOMMON
	},
	res_paste = {
		name: "cementing paste",
		category: ["derived", "spawnable"],
		cost: 5 * RESOURCE_MULT,
		stack: STACK_TIER_COMMON
	},
	res_org_polymer = {
		name: "organic polymer",
		category: ["basic", "non-spawnable", "spoiling"],
		cost: 5 * RESOURCE_MULT,
		stack: STACK_TIER_UNCOMMON_SPOILING,
		note: "Available in bigger quantities on European mornings."
	},
	res_polymer = {
		name: "polymer",
		category: ["derived", "spawnable"],
		cost: 5 * RESOURCE_MULT,
		stack: STACK_TIER_COMMON
	},
	res_dust = {
		name: "potent dust",
		category: ["basic", "non-spawnable", "res_special"],
		cost: 50 * RESOURCE_MULT,
		stack: 25 * RESOURCE_MULT
	},
	res_balm = {
		name: "soothing balm",
		category: ["basic", "non-spawnable", "res_special"],
		cost: 250 * RESOURCE_MULT,
		stack: 1 * RESOURCE_MULT,
		note: "The regular variety (taming speed x10)."
	}];

const item_list = [
	item_pike = {
		name: "pike",
		category: ["weapon"],
		quality: 10,
		cost: 8 * WEAPON_MULT
	},
	item_sword = {
		name: "sword",
		category: ["weapon"],
		quality: 10,
		cost: 8 * WEAPON_MULT
	},
	item_compound_bow = {
		name: "compound bow",
		category: ["weapon"],
		quality: 10,
		cost: 8 * WEAPON_MULT
	},
	item_pickaxe = {
		name: "metal pick",
		category: ["weapon"],
		quality: 10,
		cost: 8 * WEAPON_MULT
	},
	item_hatchet = {
		name: "metal hatchet",
		category: ["weapon"],
		quality: 10,
		cost: 8 * WEAPON_MULT
	},
	item_fishing_rod = {
		name: "fishing rod",
		category: ["weapon"],
		quality: 10,
		cost: 8 * WEAPON_MULT
	},
	item_arrow_stone = {
		name: "arrow: stone",
		category: ["ammunition"],
		quality: STACK_TIER_COMMON,
		cost: 10 * AMMO_MULT
	},
item_arrow_tranq = {
		name: "arrow: tranq",
		category: ["ammunition"],
		quality: STACK_TIER_COMMON,
		cost: 20 * AMMO_MULT
	},
item_arrow_toxicant = {
		name: "arrow: toxicant",
		category: ["ammunition"],
		quality: STACK_TIER_COMMON,
		cost: 50 * AMMO_MULT
	},
	item_hide_set = {
		name: "armor set: hide",
		category: ["armor"],
		quality: 14 + 6 + 10 + 7 +23,
		cost: 8 * ARMOR_MULT
	},
	item_ghillie_set = {
		name: "armor set: ghillie",
		category: ["armor"],
		quality: 10 + 44 + 12 + 26 + 9,
		cost: 8 * ARMOR_SPECIAL_MULT
	},
	item_flak_set = {
		name: "armor set: flak",
		category: ["armor"],
		quality: 8 + 13 + 40 + 21 + 3,
		cost: 8 * ARMOR_MULT
	},
	item_riot_set = {
		name: "armor set: riot",
		category: ["armor"],
		quality: 24 + 5 + 18 + 20 + 55,
		//quality_armor: [24, 5, 18, 20, 55],
		cost: (24 + 5 + 18 + 20 + 55) * ARMOR_SPECIAL_MULT
	},
	item_scuba_set = {
		name: "armor set: scuba",
		category: ["armor"],
		quality: 10,
		cost: Math.floor(11.4 * ARMOR_SPECIAL_MULT)
	},
	item_wooden_shield = {
		name: "wooden shield",
		category: ["armor"],
		quality: 10,
		cost: 8 * ARMOR_MULT
	},
	item_riot_shield = {
		name: "riot shield",
		category: ["armor"],
		quality: 10,
		cost: 8 * ARMOR_MULT
	},
	saddle_argentavis = {
		name: "saddle: argentavis",
		category: ["saddle"],
		quality: 10,
		cost: 8 * SADDLE_MULT
	},
	saddle_gallimimus = {
		name: "saddle: gallimimus",
		category: ["saddle"],
		quality: 10,
		cost: 8 * SADDLE_MULT
	},
	saddle_mammoth = {
		name: "saddle: mammoth",
		category: ["saddle"],
		quality: 10,
		cost: 8 * SADDLE_MULT
	},
	saddle_phiomia = {
		name: "saddle: phiomia",
		category: ["saddle"],
		quality: 10,
		cost: 8 * SADDLE_MULT
	},
	saddle_raptor = {
		name: "saddle: raptor",
		category: ["saddle"],
		quality: 10,
		cost: 8 * SADDLE_MULT
	},
	saddle_rex = {
		name: "saddle: tyrannosaurus",
		category: ["saddle"],
		quality: 10,
		cost: 8 * SADDLE_MULT
	},
	saddle_spino = {
		name: "saddle: spinosaurus",
		category: ["saddle"],
		quality: 10,
		cost: 8 * SADDLE_MULT
	},
	saddle_giga = {
		name: "saddle: giganotosaurus",
		category: ["saddle"],
		quality: 10,
		cost: 8 * SADDLE_MULT
	},
	saddle_bronto = {
		name: "saddle: brontosaurus",
		category: ["saddle"],
		quality: 10,
		cost: 8 * SADDLE_MULT
	},
	service_levelup_wild_max = {
		name: "creature level-up: max",
		category: ["other"],
		quality: 450,
		cost: 50 * SERVICE_MULT
	},
	service_levelup_wild_natural = {
		name: "creature level-up: natural",
		category: ["other"],
		quality: 200,
		cost: 25 * SERVICE_MULT
	},
	service_levelup_tamed = {
		name: "creature level-up: tamed",
		category: ["other"],
		quality: 88,
		cost: 20 * SERVICE_MULT
	},
	service_teleport = {
		name: "moving resources or a tame",
		category: ["other"],
		quality: 1,
		cost: 20 * SERVICE_MULT
	},
	service_recolor = {
		name: "creature recolor",
		category: ["other"],
		quality: 1,
		cost: 5 * SERVICE_MULT
	}];