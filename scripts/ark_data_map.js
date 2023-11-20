const location_list = [
	/*
	map_start0 = {
		name: "green obelisk",
		category: ["obelisk"],
		lat: 3,
		lon: 3
	},
	map_start1 = {
		name: "green obelisk",
		category: ["obelisk"],
		lat: 4.8,
		lon: 4.8
	},
	map_start2 = {
		name: "y",
		category: ["obelisk"],
		lat: 5,
		lon: 5
	},
	map_start3 = {
		name: "y",
		category: ["obelisk"],
		lat: 10,
		lon: 10
	},
	map_start4 = {
		name: "gy",
		category: ["obelisk"],
		lat: 15,
		lon: 15
	},
	map_end4 = {
		name: "y",
		category: ["obelisk"],
		lat: 85,
		lon: 85
	},
	map_end3 = {
		name: "y",
		category: ["obelisk"],
		lat: 90,
		lon: 90
	},
	map_end2 = {
		name: "green obelisk",
		category: ["obelisk"],
		lat: 92,
		lon: 92
	},
	map_end1 = {
		name: "green obelisk",
		category: ["obelisk"],
		lat: 94,
		lon: 94
	},
	*/
	obelisk_green = {
		name: "green obelisk",
		category: ["obelisk_green"],
		lat: 58.7,
		lon: 70.1,
		verified: true
	},
	obelisk_red = {
		name: "red obelisk",
		category: ["obelisk_red"],
		lat: 79.7,
		lon: 18.0,
		verified: true
	},
	obelisk_blue = {
		name: "blue obelisk",
		category: ["obelisk_blue"],
		lat: 25.4,
		lon: 25.6,
		verified: false
	},
	cave_hunter = {
		name: "Lower South Cave: Hunter",
		category: ["cave"],
		lat: 80.3,
		lon: 53.5,
		verified: false
	},
	cave_skylord = {
		name: "Northwest Hollow: Skylord",
		category: ["cave"],
		lat: 19.3,
		lon: 19,
		verified: false
	},
	cave_central = {
		name: "Central Cave: Clever",
		category: ["cave"],
		lat: 41.4,
		lon: 46.9,
		verified: false
	},
	cave_lava = {
		name: "Lava Cave: Massive",
		category: ["cave"],
		lat: 70.4,
		lon: 83.2,
		verified: true
	},
	cave_snow = {
		name: "Snow Cave: Strong",
		category: ["cave"],
		lat: 29.1,
		lon: 31.8,
		verified: false
	},
	cave_swamp = {
		name: "Swamp Cave: Immune",
		category: ["cave"],
		lat: 62.4,
		lon: 36.8,
		verified: true
	},
	grotto_01 = {
		name: "Unnamed Underwater Cave",
		category: ["grotto"],
		lat: 7.9,
		lon: 90.1,
		verified: false
	},
	grotto_02 = {
		name: "Unnamed Underwater Cave",
		category: ["grotto"],
		lat: 10.0,
		lon: 21.5,
		verified: false
	},
	grotto_03 = {
		name: "Unnamed Underwater Cave",
		category: ["grotto"],
		lat: 10.4,
		lon: 39.5,
		verified: false
	},
	grotto_04 = {
		name: "Unnamed Underwater Cave",
		category: ["grotto"],
		lat: 16.0,
		lon: 10.1,
		verified: false
	},
	grotto_05 = {
		name: "Unnamed Underwater Cave",
		category: ["grotto"],
		lat: 36.3,
		lon: 91.5,
		verified: false
	},
	grotto_06 = {
		name: "Unnamed Underwater Cave",
		category: ["grotto"],
		lat: 50.5,
		lon: 11.2,
		verified: false
	},
	grotto_07 = {
		name: "Unnamed Underwater Cave",
		category: ["grotto"],
		lat: 52.7,
		lon: 91.9,
		verified: false
	},
	grotto_08 = {
		name: "Unnamed Underwater Cave",
		category: ["grotto"],
		lat: 83.0,
		lon: 9.9,
		verified: false
	},
	grotto_09 = {
		name: "Unnamed Underwater Cave",
		category: ["grotto"],
		lat: 87.1,
		lon: 90.2,
		verified: false
	},
	grotto_10 = {
		name: "Unnamed Underwater Cave",
		category: ["grotto"],
		lat: 89.8,
		lon: 36.8,
		verified: false
	},
	grotto_11 = {
		name: "Unnamed Underwater Cave",
		category: ["grotto"],
		lat: 90.3,
		lon: 71.3,
		verified: false
	},
	grotto_12 = {
		name: "Unnamed Underwater Cave",
		category: ["grotto"],
		lat: 90.8,
		lon: 13.0,
		verified: false
	},
	ruin_swamp_house = {
		name: "ruins: house in the swamp",
		category: ["ruins"],
		lat: 67.3,
		lon: 47.6,
		verified: false
	},
	ruin_redwood_complex = {
		name: "Redwood Ruin Complex",
		category: ["ruins"],
		lat: 64.3,
		lon: 33.6,
		verified: true
	},
	ruin_redwood_colums = {
		name: "Redwood Ruin Complex",
		category: ["ruins"],
		lat: 52.1,
		lon: 57.5,
		verified: true
	},
	ruin_carno_church = {
		name: "ruins: church",
		category: ["ruins"],
		lat: 13.4,
		lon: 83.2,
		verified: false
	},
	ruin_griffin_mountain = {
		name: "ruins: columns at the Griffin Mountain",
		category: ["ruins"],
		lat: 35.3,
		lon: 75.6,
		verified: false
	},
	ruin_frozen_fang = {
		name: "Frozen Fang ruins",
		category: ["ruins"],
		lat: 26.1,
		lon: 50.7,
		verified: false
	},
	ruin_top_of_the_world = {
		name: "Top of the World",
		category: ["ruins"],
		lat: 43.6,
		lon: 64.5,
		verified: true
	},
	ruin_pulm_dossier = {
		name: "Ruined House",
		category: ["ruins"],
		lat: 80.5,
		lon: 60.3,
		verified: true
	},
	ruin_1 = {
		name: "Ruined House",
		category: ["ruins"],
		lat: 69.6,
		lon: 81.8,
		verified: true
	},
	base_hirschfeld = {
		name: "Hirschfeld Headquarters",
		owner: "Reyn & Amare",
		category: ["base"],
		lat: 87.4,
		lon: 54.9,
		verified: true
	},
	base_neytiri = {
		name: "Neytiri's Base",
		owner: "Neytiri",
		category: ["base"],
		lat: 61.1,
		lon: 38.1,
		verified: true
	},
	base_travagast = {
		name: "Travagast's Base",
		owner: "Travagast",
		category: ["base"],
		lat: 67.2,
		lon: 82.0,
		verified: true
	},
	outpost_volcano_crafting = {
		name: "volcano crafting station",
		owner: "Reyn & Amare",
		category: ["outpost"],
		lat: 42.6,
		lon: 39.5,
		verified: false
	},
	outpost_hatchery = {
		name: "Hatchery",
		owner: "Reyn & Amare",
		category: ["outpost"],
		lat: 86.9,
		lon: 54.6,
		verified: true
	},
];