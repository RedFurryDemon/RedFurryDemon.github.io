const RESOURCE_MULT = 1;
const WEAPON_MULT = 0.2;
const AMMO_MULT = 1;
const ARMOR_MULT = 0.1;
const ARMOR_SPECIAL_MULT = 0.15;
const SADDLE_MULT = 0.4;
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
		name_sc: "Allosaurus fragilis",
		name_test: "Allosaurus",
		category: ["regular", "na_dinosaur"],
		prize: PRIZE_TIER_B1
	},
	s_direbear = {
		species_name: "Arctodus dirus",
		name_sc: "Arctodus simus",
		name_test: "Dire bear",
		category: ["regular", "synapsid"],
		prize: PRIZE_TIER_C
		//note: "Vernacular name: dire bear"
	},
	s_argentavis = {
		species_name: "Argentavis atrocollum",
		name_sc: "Argentavis magnificens",
		name_test: "Argentavis",
		category: ["regular", "bird"],
		prize: PRIZE_TIER_C
	},
	s_arthropleura = {
		species_name: "Arthropleura fellisanguis",
		name_sc: "Arthropleura cristata",
		name_test: "Arthropleura",
		category: ["regular", "invertebrate"],
		prize: PRIZE_TIER_B2
	},
	s_baryonyx = {
		species_name: "Baryonyx aquafulgur",
		name_sc: "Baryonyx walkeri",
		name_test: "Baryonyx",
		category: ["regular", "na_dinosaur"],
		prize: PRIZE_TIER_C
	},
	s_direwolf = {
		species_name: "Canis maxdirus",
		name_sc: "Canis dirus",
		name_test: "Direwolf",
		category: ["regular", "synapsid"],
		prize: PRIZE_TIER_C
		//note: "Vernacular name: direwolf"
	},
	s_megalodon = {
		species_name: "Carcharodon ultramegalodon",
		name_sc: "Carcharodon megalodon",
		name_test: "Megalodon",
		category: ["regular", "fish"],
		prize: PRIZE_TIER_C
		//note: "Vernacular name: megalodon"
	},
	s_carnotaurus = {
		species_name: "Carnotaurus pressor",
		name_sc: "Carnotaurus sastrei",
		name_test: "Carnotaurus",
		category: ["regular", "na_dinosaur"],
		prize: PRIZE_TIER_C
	},
	s_alpha_carnotaurus = {
		species_name: "Carnotaurus pressor",
		name_sc: "Carnotaurus sastrei",
		name_test: "Carnotaurus",
		category: ["alpha", "na_dinosaur"],
		prize: PRIZE_TIER_A3,
		note: "Doesn't have an implant."
	},
	s_chalicotherium = {
		species_name: "Chalicotherium obsidioequus",
		name_sc: "Chalicotherium goldfussi",
		name_test: "Chalicotherium",
		category: ["regular", "synapsid"],
		prize: PRIZE_TIER_B1
	},
	s_daeodon = {
		species_name: "Daeodon comedentis",
		name_sc: "Daeodon shoshonensis",
		name_test: "Daeodon",
		category: ["regular", "dungeon", "synapsid"],
		prize: PRIZE_TIER_A2
	},
	s_plesiosaurus = {
		species_name: "Elasmosaurus remuspissa",
		name_sc: "Elasmosaurus platyurus",
		name_test: "Plesiosaurus",
		category: ["regular", "nd_reptile"],
		prize: PRIZE_TIER_B1
		//note: "Vernacular name: plesiosaurus"
	},
	s_electrophorus = {
		species_name: "Electrophorus beluadomito",
		species_name: "Electrophorus electricus",
		name_test: "Electrophorus",
		category: ["regular", "fish"],
		prize: PRIZE_TIER_C
	},
	s_giganotosaurus = {
		species_name: "Giganotosaurus furiosus",
		name_sc: "Giganotosaurus carolinii",
		name_test: "Giganotosaurus",
		category: ["regular", "na_dinosaur"],
		prize: PRIZE_TIER_S
	},
	s_kaprosuchus = {
		species_name: "Kaprosuchus paludentium",
		name_sc: "Kaprosuchus saharicus",
		name_test: "Kaprosuchus",
		category: ["regular", "nd_reptile"],
		prize: PRIZE_TIER_C
	},
	s_liopleurodon = {
		species_name: "Liopleurodon magicus",
		name_sc: "Liopleurodon ferox",
		name_test: "Liopleurodon",
		category: ["regular", "nd_reptile"],
		prize: PRIZE_TIER_S,
		note: "Needs to be killed in a single strike."
	},
	s_manta = {
		species_name: "Manta mobula",
		name_sc: "Mobula mobular",
		name_test: "Manta",
		category: ["regular", "fish"],
		prize: PRIZE_TIER_C
	},
	s_megalosaurus = {
		species_name: "Megalosaurus noctedominus",
		name_sc: "Megalosaurus bucklandii",
		name_test: "Megalosaurus",
		category: ["regular", "dungeon", "na_dinosaur"],
		prize: PRIZE_TIER_A2
	},
	s_megatherium = {
		species_name: "Megatherium formipavor",
		name_sc: "Megatherium altiplanicum",
		name_test: "Megatherium",
		category: ["regular", "dungeon", "synapsid"],
		prize: PRIZE_TIER_A2
	},
	s_angler = {
		species_name: "Melanocetus anglerpescum",
		name_sc: "Ceratias tentaculatus",
		name_test: "Anglerfish",
		category: ["regular", "fish"],
		prize: PRIZE_TIER_C
		//note: "Vernacular name: anglerfish"
	},
	s_mosasaurus = {
		species_name: "Mosasaurus suspirita",
		name_sc: "Mosasaurus hoffmannii",
		name_test: "Mosasaurus",
		category: ["regular", "nd_reptile"],
		prize: PRIZE_TIER_A2
	},
	s_alpha_mosasaurus = {
		species_name: "Mosasaurus suspirita",
		name_sc: "Mosasaurus hoffmannii",
		name_test: "Mosasaurus",
		category: ["alpha", "nd_reptile"],
		prize: PRIZE_TIER_A1,
		note: "Doesn't have an implant."
	},
	s_pegomastax = {
		species_name: "Pegomastax fructarator",
		name_sc: "Pegomastax africana",
		name_test: "Pegomastax",
		category: ["regular", "dungeon", "na_dinosaur"],
		prize: PRIZE_TIER_B3
	},
	s_terrorbird = {
		species_name: "Phorusrhacos rapidesultor",
		name_sc: "Phorusrhacos longissimus",
		name_test: "Terror bird",
		category: ["regular", "bird"],
		prize: PRIZE_TIER_C
		//note: "Vernacular name: terror bird"
	},
	s_pulmonoscorpius = {
		species_name: "Pulmonoscorpius gigantus",
		name_sc: "Pulmonoscorpius kirktonensis",
		name_test: "Pulmonoscorpius",
		category: ["regular", "invertebrate"],
		prize: PRIZE_TIER_C
	},
	s_purlovia = {
		species_name: "Purlovia maxima",
		name_test: "Purlovia",
		category: ["regular", "synapsid"],
		prize: PRIZE_TIER_B2
	},
	s_jerboa = {
		species_name: "Renopila amplexus",
		name_sc: "Pedetes capensis",
		name_test: "Jerboa",
		category: ["regular", "dungeon", "synapsid"],
		prize: PRIZE_TIER_B3
		//note: "Vernacular name: jerboa"
	},
	s_sarcosuchus = {
		species_name: "Sarcosuchus excubitor",
		name_sc: "Sarcosuchus imperator",
		name_test: "Sarcosuchus",
		category: ["regular", "nd_reptile"],
		prize: PRIZE_TIER_C
	},
	s_smilodon = {
		species_name: "Smilodon brutalis",
		name_sc: "Smilodon fatalis",
		name_test: "Sabertooth",
		category: ["regular", "synapsid"],
		prize: PRIZE_TIER_C
		//note: "Vernacular name: sabertooth"
	},
	s_spinosaurus = {
		species_name: "Spinosaurus aquareliga",
		name_sc: "Spinosaurus aegyptiacus",
		name_test: "Spinosaurus",
		category: ["regular", "na_dinosaur"],
		prize: PRIZE_TIER_B1
	},
	s_therizinosaurus = {
		species_name: "Therizinosaurus multiensis",
		name_sc: "Therizinosaurus cheloniformis",
		name_test: "Therizinosaurus",
		category: ["regular", "na_dinosaur"],
		prize: PRIZE_TIER_B1
		//note: "Vernacular name: danger floof"
	},
	s_titanoboa = {
		species_name: "Titanoboa exornantur",
		name_sc: "Titanoboa cerrejonensis",
		name_test: "Titanoboa",
		category: ["regular", "nd_reptile"],
		prize: PRIZE_TIER_B2
	},
	s_titanosaurus = {
		species_name: "Titanosaurus vagacastrum",
		name_sc: "Titanosaurus blanfordi",
		name_test: "Titanosaurus",
		category: ["regular", "na_dinosaur", "no_implant"],
		prize: PRIZE_TIER_S,
		note: "The implant is inaccessible in ordinary circumstances."
	},
	s_troodon = {
		species_name: "Troodon magnanimus",
		name_sc: "Troodon formosus",
		name_test: "Troodon",
		category: ["regular", "dungeon", "na_dinosaur"],
		prize: PRIZE_TIER_A2
	},
	s_tusoteuthis = {
		species_name: "Tusoteuthis vampyrus",
		name_sc: "Tusoteuthis longa",
		name_test: "Tusoteuthis",
		category: ["regular", "invertebrate"],
		prize: PRIZE_TIER_A2
	},
	s_tyrannosaurus = {
		species_name: "Tyrannosaurus dominium",
		name_sc: "Tyrannosaurus rex",
		name_test: "Rex",
		category: ["regular", "na_dinosaur"],
		prize: PRIZE_TIER_B1
		//note: "Vernacular name: rex"
	},
	s_alpha_tyrannosaurus = {
		species_name: "Tyrannosaurus dominium",
		name_sc: "Tyrannosaurus rex",
		name_test: "Rex",
		category: ["alpha", "na_dinosaur"],
		prize: PRIZE_TIER_A1,
		note: "Doesn't have an implant."
	},
	s_utahraptor = {
		species_name: "Utahraptor prime",
		name_sc: "Utahraptor ostrommaysi",
		name_test: "Raptor",
		category: ["regular", "na_dinosaur"],
		prize: PRIZE_TIER_C
	},
	s_alpha_utahraptor = {
		species_name: "Utahraptor prime",
		name_sc: "Utahraptor ostrommaysi",
		name_test: "Raptor",
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
	res_ingots = {
		name: "metal ingots",
		category: ["basic", "spawnable"],
		cost: RESOURCE_COST_B,
		stack: STACK_TIER_COMMON
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
	/*res_flowers = {
		name: "rare flowers",
		category: ["basic", "non-spawnable", "spoiling", "unavailable"],
		cost: RESOURCE_COST_B,
		stack: STACK_TIER_UNCOMMON_SPOILING
	},*/
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
	res_black_pearls = {
		name: "black pearls",
		category: ["basic", "spawnable"],
		cost: RESOURCE_COST_C,
		stack: STACK_TIER_UNCOMMON
	},
	/*res_stimulant = {
		name: "stimulant",
		category: ["derived", "non-spawnable", "unavailable"],
		cost: RESOURCE_COST_C,
		stack: STACK_TIER_UNCOMMON
	},
	res_bug_repellent = {
		name: "bug repellent",
		category: ["derived", "non-spawnable", "spoiling", "unavailable"],
		cost: RESOURCE_COST_C,
		stack: STACK_TIER_UNCOMMON
	},
	res_honey = {
		name: "honey",
		category: ["derived", "non-spawnable", "spoiling", "unavailable"],
		cost: RESOURCE_COST_C,
		stack: STACK_TIER_UNCOMMON,
		note: "To prevent it from spoiling, provide fising rods (1 rod per jar)."
	},*/
	res_mushrooms = {
		name: "rare mushrooms",
		category: ["basic", "non-spawnable"],
		cost: RESOURCE_COST_C,
		stack: STACK_TIER_UNCOMMON
	},
	/*res_jerky_normal = {
		name: "cooked meat jerky",
		category: ["derived", "non-spawnable", "spoiling", "unavailable"],
		cost: RESOURCE_COST_C,
		stack: STACK_TIER_UNCOMMON
	},
	res_jerky_prime = {
		name: "prime meat jerky",
		category: ["derived", "non-spawnable", "spoiling", "unavailable"],
		cost: RESOURCE_COST_C,
		stack: STACK_TIER_UNCOMMON
	},*/
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
	/*res_org_polymer = {
		name: "organic polymer",
		category: ["basic", "non-spawnable", "spoiling", "unavailable"],
		cost: 5 * RESOURCE_MULT,
		stack: STACK_TIER_UNCOMMON_SPOILING,
		note: "Available in bigger quantities on European mornings."
	},*/
	res_polymer = {
		name: "polymer",
		category: ["derived", "spawnable"],
		cost: 5 * RESOURCE_MULT,
		stack: STACK_TIER_COMMON
	},
	/*res_dust = {
		name: "potent dust",
		category: ["basic", "non-spawnable", "res_special", "unavailable"],
		cost: 50 * RESOURCE_MULT,
		stack: 25 * RESOURCE_MULT
	},*/
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
		quality: 238,
		cost: 238 * WEAPON_MULT
	},
	item_sword = {
		name: "sword",
		category: ["weapon"],
		quality: 90,
		cost: 90 * WEAPON_MULT
	},
	item_bow = {
		name: "bow",
		category: ["weapon"],
		quality: 281,
		cost: 281 * WEAPON_MULT
	},
	item_crossbow = {
		name: "crossbow",
		category: ["weapon"],
		quality: 95,
		cost: 95 * WEAPON_MULT
	},
	item_compound_bow = {
		name: "compound bow",
		category: ["weapon"],
		quality: 75,
		cost: 75 * WEAPON_MULT
	},
	item_longneck = {
		name: "longneck rifle",
		category: ["weapon"],
		quality: 1131,
		cost: 1131 * WEAPON_MULT
	},
	item_shotgun = {
		name: "shotgun",
		category: ["weapon"],
		quality: 353,
		cost: 353 * WEAPON_MULT
	},
	item_simple_pistol = {
		name: "simple pistol",
		category: ["weapon"],
		quality: 532,
		cost: 532 * WEAPON_MULT
	},
	item_pickaxe = {
		name: "metal pick",
		category: ["weapon"],
		quality: 229,
		cost: 229 * WEAPON_MULT
	},
	item_hatchet = {
		name: "metal hatchet",
		category: ["weapon"],
		quality: 281,
		cost: 281 * WEAPON_MULT
	},
	item_fishing_rod = {
		name: "fishing rod",
		category: ["weapon"],
		quality: 100,
		cost: 100 * WEAPON_MULT
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
	item_tranq_dart = {
		name: "tranquilizer dart",
		category: ["ammunition"],
		quality: STACK_TIER_UNCOMMON,
		cost: 10 * AMMO_MULT
	},
	item_hide_hat = {
		name: "hide hat",
		category: ["armor"],
		quality: 185,
		cost: 185 * ARMOR_MULT
	},
	item_hide_shirt = {
		name: "hide shirt",
		category: ["armor"],
		quality: 296,
		cost: 296 * ARMOR_MULT
	},
	item_hide_gloves = {
		name: "hide gloves",
		category: ["armor"],
		quality: 215,
		cost: 215 * ARMOR_MULT
	},
	item_hide_pants = {
		name: "hide pants",
		category: ["armor"],
		quality: 256,
		cost: 256 * ARMOR_MULT
	},
	item_hide_boots = {
		name: "hide boots",
		category: ["armor"],
		quality: 239,
		cost: 239 * ARMOR_MULT
	},
	item_chitin_helmet = {
		name: "chitin helmet",
		category: ["armor"],
		quality: 438,
		cost: 438 * ARMOR_MULT
	},
	item_chitin_gauntlets = {
		name: "chitin gauntlets",
		category: ["armor"],
		quality: 231,
		cost: 231 * ARMOR_MULT
	},
	item_chitin_chestpiece = {
		name: "chitin chestpiece",
		category: ["armor"],
		quality: 174,
		cost: 174 * ARMOR_MULT
	},
	item_chitin_leggings = {
		name: "chitin leggings",
		category: ["armor"],
		quality: 430,
		cost: 430 * ARMOR_MULT
	},
	item_chitin_boots = {
		name: "chitin boots",
		category: ["armor"],
		quality: 519,
		cost: 519 * ARMOR_MULT
	},
	/*item_ghillie_mask = {
		name: "ghillie mask",
		category: ["armor"],
		quality: 0,
		cost: 8 * ARMOR_SPECIAL_MULT
	},*/
	item_fur_cap = {
		name: "fur cap",
		category: ["armor"],
		quality: 412,
		cost: 412 * ARMOR_MULT
	},
	item_fur_leggings = {
		name: "fur leggings",
		category: ["armor"],
		quality: 489,
		cost: 489 * ARMOR_MULT
	},
	item_flak_helmet = {
		name: "flak helmet",
		category: ["armor"],
		quality: 1360,
		cost: 1360 * ARMOR_MULT
	},
	item_flak_gauntlets = {
		name: "flak gauntlets",
		category: ["armor"],
		quality: 1161,
		cost: 1161 * ARMOR_MULT
	},
	item_flak_chestpiece = {
		name: "flak chestpiece",
		category: ["armor"],
		quality: 1058,
		cost: 1058 * ARMOR_MULT
	},
	item_flak_leggings = {
		name: "flak leggings",
		category: ["armor"],
		quality: 1310,
		cost: 1310 * ARMOR_MULT
	},
	item_flak_boots = {
		name: "flak boots",
		category: ["armor"],
		quality: 1187,
		cost: 1187 * ARMOR_MULT
	},
	item_scuba_mask = {
		name: "scuba mask",
		category: ["armor"],
		quality: 0,
		cost: 5
	},
	item_scuba_tank = {
		name: "scuba tank",
		category: ["armor"],
		quality: 0,
		cost: 15
	},
	item_scuba_leggings = {
		name: "scuba leggings",
		category: ["armor"],
		quality: 5,
		cost: 10
	},
	item_scuba_flippers = {
		name: "scuba flippers",
		category: ["armor"],
		quality: 0,
		cost: 5
	},
	item_wooden_shield = {
		name: "wooden shield",
		category: ["armor"],
		quality: 250,
		cost: 250 * ARMOR_MULT
	},
	/*item_riot_shield = {
		name: "riot shield",
		category: ["armor"],
		quality: 2300,
		cost: 0.1 * ARMOR_MULT
	},*/
	saddle_ankylosaurus = {
		name: "saddle: ankylosaurus",
		category: ["saddle"],
		quality: 25,
		cost: 25 * SADDLE_MULT
	},
	saddle_argentavis = {
		name: "saddle: argentavis",
		category: ["saddle"],
		quality: 116,
		cost: 116 * SADDLE_MULT
	},
	saddle_brontosaurus = {
		name: "saddle: brontosaurus",
		category: ["saddle"],
		quality: 309,
		cost: 309 * SADDLE_MULT
	},
	saddle_doedicurus = {
		name: "saddle: doedicurus",
		category: ["saddle"],
		quality: 25,
		cost: 25 * SADDLE_MULT
	},
	saddle_gallimimus = {
		name: "saddle: gallimimus",
		category: ["saddle"],
		quality: 25,
		cost: 25 * SADDLE_MULT
	},
	saddle_ichtyosaurus = {
		name: "saddle: ichtyosaurus",
		category: ["saddle"],
		quality: 255,
		cost: 255 * SADDLE_MULT
	},
	saddle_iguanodon = {
		name: "saddle: iguanodon",
		category: ["saddle"],
		quality: 25,
		cost: 25 * SADDLE_MULT
	},
	saddle_mammoth = {
		name: "saddle: mammoth",
		category: ["saddle"],
		quality: 25,
		cost: 25 * SADDLE_MULT
	},
	saddle_parasaurolophus = {
		name: "saddle: parasaurolophus",
		category: ["saddle"],
		quality: 25,
		cost: 25 * SADDLE_MULT
	},
	saddle_pelagornis = {
		name: "saddle: pelagornis",
		category: ["saddle"],
		quality: 25,
		cost: 25 * SADDLE_MULT
	},
	saddle_phiomia = {
		name: "saddle: phiomia",
		category: ["saddle"],
		quality: 58,
		cost: 58 * SADDLE_MULT
	},
	saddle_procoptodon = {
		name: "saddle: procoptodon",
		category: ["saddle"],
		quality: 25,
		cost: 25 * SADDLE_MULT
	},
	saddle_pulmonoscorpius = {
		name: "saddle: pulmonoscorpius",
		category: ["saddle"],
		quality: 115,
		cost: 115 * SADDLE_MULT
	},
	saddle_raptor = {
		name: "saddle: raptor",
		category: ["saddle"],
		quality: 283,
		cost: 283 * SADDLE_MULT
	},
	saddle_rex = {
		name: "saddle: tyrannosaurus",
		category: ["saddle"],
		quality: 25,
		cost: 25 * SADDLE_MULT
	},
	saddle_sabertooth = {
		name: "saddle: sabertooth",
		category: ["saddle"],
		quality: 84,
		cost: 84 * SADDLE_MULT
	},
	saddle_spino = {
		name: "saddle: spinosaurus",
		category: ["saddle"],
		quality: 25,
		cost: 25 * SADDLE_MULT
	},
	saddle_stegosaurus = {
		name: "saddle: stegosaurus",
		category: ["saddle"],
		quality: 248,
		cost: 248 * SADDLE_MULT
	},
	saddle_triceratops = {
		name: "saddle: triceratops",
		category: ["saddle"],
		quality: 269,
		cost: 269 * SADDLE_MULT
	},
	saddle_other = {
		name: "saddle: other engram-quality saddle",
		category: ["saddle"],
		quality: 25,
		cost: 25 * SADDLE_MULT
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
	}
];