export const details: readonly {
	symbol: string
	atomicNumber: number
	group: number
	period: number
	radioactive: boolean
	atomicMass: readonly (number | null)[] | null
	electrons: number[]
	category: string
	undiscovered?: true
}[] = [
	{
		symbol: "H",
		atomicNumber: 1,
		group: 1,
		period: 1,
		radioactive: false,
		atomicMass: [1.008, 0.0002],
		electrons: [1],
		category: "nonmetal"
	},
	{
		symbol: "He",
		atomicNumber: 2,
		group: 18,
		period: 1,
		radioactive: false,
		atomicMass: [4.0026, 0.0001],
		electrons: [2],
		category: "nobleGas"
	},
	{
		symbol: "Li",
		atomicNumber: 3,
		group: 1,
		period: 2,
		radioactive: false,
		atomicMass: [6.94, 0.06],
		electrons: [2, 1],
		category: "alkaliMetal"
	},
	{
		symbol: "Be",
		atomicNumber: 4,
		group: 2,
		period: 2,
		radioactive: false,
		atomicMass: [9.0122, 0.0001],
		electrons: [2, 2],
		category: "alkalineEarthMetal"
	},
	{
		symbol: "B",
		atomicNumber: 5,
		group: 13,
		period: 2,
		radioactive: false,
		atomicMass: [10.81, 0.02],
		electrons: [2, 3],
		category: "metalloid"
	},
	{
		symbol: "C",
		atomicNumber: 6,
		group: 14,
		period: 2,
		radioactive: false,
		atomicMass: [12.011, 0.002],
		electrons: [2, 4],
		category: "nonmetal"
	},
	{
		symbol: "N",
		atomicNumber: 7,
		group: 15,
		period: 2,
		radioactive: false,
		atomicMass: [14.007, 0.001],
		electrons: [2, 5],
		category: "nonmetal"
	},
	{
		symbol: "O",
		atomicNumber: 8,
		group: 16,
		period: 2,
		radioactive: false,
		atomicMass: [15.999, 0.001],
		electrons: [2, 6],
		category: "nonmetal"
	},
	{
		symbol: "F",
		atomicNumber: 9,
		group: 17,
		period: 2,
		radioactive: false,
		atomicMass: [18.998, 0.001],
		electrons: [2, 7],
		category: "halogen"
	},
	{
		symbol: "Ne",
		atomicNumber: 10,
		group: 18,
		period: 2,
		radioactive: false,
		atomicMass: [20.18, 0.001],
		electrons: [2, 8],
		category: "nobleGas"
	},
	{
		symbol: "Na",
		atomicNumber: 11,
		group: 1,
		period: 3,
		radioactive: false,
		atomicMass: [22.99, 0.001],
		electrons: [2, 8, 1],
		category: "alkaliMetal"
	},
	{
		symbol: "Mg",
		atomicNumber: 12,
		group: 2,
		period: 3,
		radioactive: false,
		atomicMass: [24.305, 0.002],
		electrons: [2, 8, 2],
		category: "alkalineEarthMetal"
	},
	{
		symbol: "Al",
		atomicNumber: 13,
		group: 13,
		period: 3,
		radioactive: false,
		atomicMass: [26.982, 0.001],
		electrons: [2, 8, 3],
		category: "postTransitionMetal"
	},
	{
		symbol: "Si",
		atomicNumber: 14,
		group: 14,
		period: 3,
		radioactive: false,
		atomicMass: [28.085, 0.001],
		electrons: [2, 8, 4],
		category: "metalloid"
	},
	{
		symbol: "P",
		atomicNumber: 15,
		group: 15,
		period: 3,
		radioactive: false,
		atomicMass: [30.974, 0.001],
		electrons: [2, 8, 5],
		category: "nonmetal"
	},
	{
		symbol: "S",
		atomicNumber: 16,
		group: 16,
		period: 3,
		radioactive: false,
		atomicMass: [32.06, 0.02],
		electrons: [2, 8, 6],
		category: "nonmetal"
	},
	{
		symbol: "Cl",
		atomicNumber: 17,
		group: 17,
		period: 3,
		radioactive: false,
		atomicMass: [35.45, 0.01],
		electrons: [2, 8, 7],
		category: "halogen"
	},
	{
		symbol: "Ar",
		atomicNumber: 18,
		group: 18,
		period: 3,
		radioactive: false,
		atomicMass: [39.95, 0.16],
		electrons: [2, 8, 8],
		category: "nobleGas"
	},
	{
		symbol: "K",
		atomicNumber: 19,
		group: 1,
		period: 4,
		radioactive: false,
		atomicMass: [39.098, 0.001],
		electrons: [2, 8, 8, 1],
		category: "alkaliMetal"
	},
	{
		symbol: "Ca",
		atomicNumber: 20,
		group: 2,
		period: 4,
		radioactive: false,
		atomicMass: [40.078, 0.004],
		electrons: [2, 8, 8, 2],
		category: "alkalineEarthMetal"
	},
	{
		symbol: "Sc",
		atomicNumber: 21,
		group: 3,
		period: 4,
		radioactive: false,
		atomicMass: [44.956, 0.001],
		electrons: [2, 8, 9, 2],
		category: "transitionMetal"
	},
	{
		symbol: "Ti",
		atomicNumber: 22,
		group: 4,
		period: 4,
		radioactive: false,
		atomicMass: [47.867, 0.001],
		electrons: [2, 8, 10, 2],
		category: "transitionMetal"
	},
	{
		symbol: "V",
		atomicNumber: 23,
		group: 5,
		period: 4,
		radioactive: false,
		atomicMass: [50.942, 0.001],
		electrons: [2, 8, 11, 2],
		category: "transitionMetal"
	},
	{
		symbol: "Cr",
		atomicNumber: 24,
		group: 6,
		period: 4,
		radioactive: false,
		atomicMass: [51.996, 0.001],
		electrons: [2, 8, 13, 1],
		category: "transitionMetal"
	},
	{
		symbol: "Mn",
		atomicNumber: 25,
		group: 7,
		period: 4,
		radioactive: false,
		atomicMass: [54.938, 0.001],
		electrons: [2, 8, 13, 2],
		category: "transitionMetal"
	},
	{
		symbol: "Fe",
		atomicNumber: 26,
		group: 8,
		period: 4,
		radioactive: false,
		atomicMass: [55.845, 0.002],
		electrons: [2, 8, 14, 2],
		category: "transitionMetal"
	},
	{
		symbol: "Co",
		atomicNumber: 27,
		group: 9,
		period: 4,
		radioactive: false,
		atomicMass: [58.933, 0.001],
		electrons: [2, 8, 15, 2],
		category: "transitionMetal"
	},
	{
		symbol: "Ni",
		atomicNumber: 28,
		group: 10,
		period: 4,
		radioactive: false,
		atomicMass: [58.693, 0.001],
		electrons: [2, 8, 16, 2],
		category: "transitionMetal"
	},
	{
		symbol: "Cu",
		atomicNumber: 29,
		group: 11,
		period: 4,
		radioactive: false,
		atomicMass: [63.546, 0.001],
		electrons: [2, 8, 18, 1],
		category: "transitionMetal"
	},
	{
		symbol: "Zn",
		atomicNumber: 30,
		group: 12,
		period: 4,
		radioactive: false,
		atomicMass: [65.38, 0.02],
		electrons: [2, 8, 18, 2],
		category: "transitionMetal"
	},
	{
		symbol: "Ga",
		atomicNumber: 31,
		group: 13,
		period: 4,
		radioactive: false,
		atomicMass: [69.723, 0.008],
		electrons: [2, 8, 18, 3],
		category: "postTransitionMetal"
	},
	{
		symbol: "Ge",
		atomicNumber: 32,
		group: 14,
		period: 4,
		radioactive: false,
		atomicMass: [72.63, 0.008],
		electrons: [2, 8, 18, 4],
		category: "metalloid"
	},
	{
		symbol: "As",
		atomicNumber: 33,
		group: 15,
		period: 4,
		radioactive: false,
		atomicMass: [74.922, 0.001],
		electrons: [2, 8, 18, 5],
		category: "metalloid"
	},
	{
		symbol: "Se",
		atomicNumber: 34,
		group: 16,
		period: 4,
		radioactive: false,
		atomicMass: [78.971, 0.008],
		electrons: [2, 8, 18, 6],
		category: "nonmetal"
	},
	{
		symbol: "Br",
		atomicNumber: 35,
		group: 17,
		period: 4,
		radioactive: false,
		atomicMass: [79.904, 0.003],
		electrons: [2, 8, 18, 7],
		category: "halogen"
	},
	{
		symbol: "Kr",
		atomicNumber: 36,
		group: 18,
		period: 4,
		radioactive: false,
		atomicMass: [83.7982, 0.002],
		electrons: [2, 8, 18, 8],
		category: "nobleGas"
	},
	{
		symbol: "Rb",
		atomicNumber: 37,
		group: 1,
		period: 5,
		radioactive: false,
		atomicMass: [85.468, 0.001],
		electrons: [2, 8, 18, 8, 1],
		category: "alkaliMetal"
	},
	{
		symbol: "Sr",
		atomicNumber: 38,
		group: 2,
		period: 5,
		radioactive: false,
		atomicMass: [87.62, 0.01],
		electrons: [2, 8, 18, 8, 2],
		category: "alkalineEarthMetal"
	},
	{
		symbol: "Y",
		atomicNumber: 39,
		group: 3,
		period: 5,
		radioactive: false,
		atomicMass: [88.906, 0.001],
		electrons: [2, 8, 18, 9, 2],
		category: "transitionMetal"
	},
	{
		symbol: "Zr",
		atomicNumber: 40,
		group: 4,
		period: 5,
		radioactive: false,
		atomicMass: [91.224, 0.002],
		electrons: [2, 8, 18, 10, 2],
		category: "transitionMetal"
	},
	{
		symbol: "Nb",
		atomicNumber: 41,
		group: 5,
		period: 5,
		radioactive: false,
		atomicMass: [92.906, 0.001],
		electrons: [2, 8, 18, 12, 1],
		category: "transitionMetal"
	},
	{
		symbol: "Mo",
		atomicNumber: 42,
		group: 6,
		period: 5,
		radioactive: false,
		atomicMass: [95.95, 0.01],
		electrons: [2, 8, 18, 13, 1],
		category: "transitionMetal"
	},
	{
		symbol: "Tc",
		atomicNumber: 43,
		group: 7,
		period: 5,
		radioactive: false,
		atomicMass: [97, null],
		electrons: [2, 8, 18, 13, 2],
		category: "transitionMetal"
	},
	{
		symbol: "Ru",
		atomicNumber: 44,
		group: 8,
		period: 5,
		radioactive: false,
		atomicMass: [101.07, 0.02],
		electrons: [2, 8, 18, 15, 1],
		category: "transitionMetal"
	},
	{
		symbol: "Rh",
		atomicNumber: 45,
		group: 9,
		period: 5,
		radioactive: false,
		atomicMass: [102.91, 0.01],
		electrons: [2, 8, 18, 16, 1],
		category: "transitionMetal"
	},
	{
		symbol: "Pd",
		atomicNumber: 46,
		group: 10,
		period: 5,
		radioactive: false,
		atomicMass: [106.42, 0.01],
		electrons: [2, 8, 18, 18],
		category: "transitionMetal"
	},
	{
		symbol: "Ag",
		atomicNumber: 47,
		group: 11,
		period: 5,
		radioactive: false,
		atomicMass: [107.87, 0.01],
		electrons: [2, 8, 18, 18, 1],
		category: "transitionMetal"
	},
	{
		symbol: "Cd",
		atomicNumber: 48,
		group: 12,
		period: 5,
		radioactive: false,
		atomicMass: [112.41, 0.01],
		electrons: [2, 8, 18, 18, 2],
		category: "transitionMetal"
	},
	{
		symbol: "In",
		atomicNumber: 49,
		group: 13,
		period: 5,
		radioactive: false,
		atomicMass: [114.82, 0.01],
		electrons: [2, 8, 18, 18, 3],
		category: "postTransitionMetal"
	},
	{
		symbol: "Sn",
		atomicNumber: 50,
		group: 14,
		period: 5,
		radioactive: false,
		atomicMass: [118.71, 0.01],
		electrons: [2, 8, 18, 18, 4],
		category: "postTransitionMetal"
	},
	{
		symbol: "Sb",
		atomicNumber: 51,
		group: 15,
		period: 5,
		radioactive: false,
		atomicMass: [121.76, 0.01],
		electrons: [2, 8, 18, 18, 5],
		category: "metalloid"
	},
	{
		symbol: "Te",
		atomicNumber: 52,
		group: 16,
		period: 5,
		radioactive: false,
		atomicMass: [127.6, 0.03],
		electrons: [2, 8, 18, 18, 6],
		category: "metalloid"
	},
	{
		symbol: "I",
		atomicNumber: 53,
		group: 17,
		period: 5,
		radioactive: false,
		atomicMass: [126.9, 0.01],
		electrons: [2, 8, 18, 18, 7],
		category: "halogen"
	},
	{
		symbol: "Xe",
		atomicNumber: 54,
		group: 18,
		period: 5,
		radioactive: false,
		atomicMass: [131.29, 0.01],
		electrons: [2, 8, 18, 18, 8],
		category: "nobleGas"
	},
	{
		symbol: "Cs",
		atomicNumber: 55,
		group: 1,
		period: 6,
		radioactive: false,
		atomicMass: [132.91, 0.01],
		electrons: [2, 8, 18, 18, 8, 1],
		category: "alkaliMetal"
	},
	{
		symbol: "Ba",
		atomicNumber: 56,
		group: 2,
		period: 6,
		radioactive: false,
		atomicMass: [137.37, 0.01],
		electrons: [2, 8, 18, 18, 8, 2],
		category: "alkalineEarthMetal"
	},
	{
		symbol: "La",
		atomicNumber: 57,
		group: 3,
		period: 6,
		radioactive: false,
		atomicMass: [138.91, 0.01],
		electrons: [2, 8, 18, 18, 9, 2],
		category: "lanthanide"
	},
	{
		symbol: "Ce",
		atomicNumber: 58,
		group: 3,
		period: 6,
		radioactive: false,
		atomicMass: [140.12, 0.01],
		electrons: [2, 8, 18, 19, 9, 2],
		category: "lanthanide"
	},
	{
		symbol: "Pr",
		atomicNumber: 59,
		group: 3,
		period: 6,
		radioactive: false,
		atomicMass: [140.91, 0.01],
		electrons: [2, 8, 18, 21, 8, 2],
		category: "lanthanide"
	},
	{
		symbol: "Nd",
		atomicNumber: 60,
		group: 3,
		period: 6,
		radioactive: false,
		atomicMass: [144.24, 0.01],
		electrons: [2, 8, 18, 22, 8, 2],
		category: "lanthanide"
	},
	{
		symbol: "Pm",
		atomicNumber: 61,
		group: 3,
		period: 6,
		radioactive: false,
		atomicMass: [145, null],
		electrons: [2, 8, 18, 23, 8, 2],
		category: "lanthanide"
	},
	{
		symbol: "Sm",
		atomicNumber: 62,
		group: 3,
		period: 6,
		radioactive: false,
		atomicMass: [150.36, 0.02],
		electrons: [2, 8, 18, 24, 8, 2],
		category: "lanthanide"
	},
	{
		symbol: "Eu",
		atomicNumber: 63,
		group: 3,
		period: 6,
		radioactive: false,
		atomicMass: [151.96, 0.01],
		electrons: [2, 8, 18, 25, 8, 2],
		category: "lanthanide"
	},
	{
		symbol: "Gd",
		atomicNumber: 64,
		group: 3,
		period: 6,
		radioactive: false,
		atomicMass: [157.25, 0.03],
		electrons: [2, 8, 18, 25, 9, 2],
		category: "lanthanide"
	},
	{
		symbol: "Tb",
		atomicNumber: 65,
		group: 3,
		period: 6,
		radioactive: false,
		atomicMass: [158.93, 0.01],
		electrons: [2, 8, 18, 27, 8, 2],
		category: "lanthanide"
	},
	{
		symbol: "Dy",
		atomicNumber: 66,
		group: 3,
		period: 6,
		radioactive: false,
		atomicMass: [162.5, 0.01],
		electrons: [2, 8, 18, 28, 8, 2],
		category: "lanthanide"
	},
	{
		symbol: "Ho",
		atomicNumber: 67,
		group: 3,
		period: 6,
		radioactive: false,
		atomicMass: [164.93, 0.01],
		electrons: [2, 8, 18, 29, 8, 2],
		category: "lanthanide"
	},
	{
		symbol: "Er",
		atomicNumber: 68,
		group: 3,
		period: 6,
		radioactive: false,
		atomicMass: [167.26, 0.01],
		electrons: [2, 8, 18, 30, 8, 2],
		category: "lanthanide"
	},
	{
		symbol: "Tm",
		atomicNumber: 69,
		group: 3,
		period: 6,
		radioactive: false,
		atomicMass: [168.93, 0.01],
		electrons: [2, 8, 18, 31, 8, 2],
		category: "lanthanide"
	},
	{
		symbol: "Yb",
		atomicNumber: 70,
		group: 3,
		period: 6,
		radioactive: false,
		atomicMass: [173.05, 0.02],
		electrons: [2, 8, 18, 32, 8, 2],
		category: "lanthanide"
	},
	{
		symbol: "Lu",
		atomicNumber: 71,
		group: 3,
		period: 6,
		radioactive: false,
		atomicMass: [174.97, 0.01],
		electrons: [2, 8, 18, 32, 9, 2],
		category: "lanthanide"
	},
	{
		symbol: "Hf",
		atomicNumber: 72,
		group: 4,
		period: 6,
		radioactive: false,
		atomicMass: [178.49, 0.01],
		electrons: [2, 8, 18, 32, 10, 2],
		category: "transitionMetal"
	},
	{
		symbol: "Ta",
		atomicNumber: 73,
		group: 5,
		period: 6,
		radioactive: false,
		atomicMass: [180.95, 0.01],
		electrons: [2, 8, 18, 32, 11, 2],
		category: "transitionMetal"
	},
	{
		symbol: "W",
		atomicNumber: 74,
		group: 6,
		period: 6,
		radioactive: false,
		atomicMass: [183.84, 0.01],
		electrons: [2, 8, 18, 32, 12, 2],
		category: "transitionMetal"
	},
	{
		symbol: "Re",
		atomicNumber: 75,
		group: 7,
		period: 6,
		radioactive: false,
		atomicMass: [186.21, 0.01],
		electrons: [2, 8, 18, 32, 13, 2],
		category: "transitionMetal"
	},
	{
		symbol: "Os",
		atomicNumber: 76,
		group: 8,
		period: 6,
		radioactive: false,
		atomicMass: [190.23, 0.03],
		electrons: [2, 8, 18, 32, 14, 2],
		category: "transitionMetal"
	},
	{
		symbol: "Ir",
		atomicNumber: 77,
		group: 9,
		period: 6,
		radioactive: false,
		atomicMass: [192.22, 0.01],
		electrons: [2, 8, 18, 32, 15, 2],
		category: "transitionMetal"
	},
	{
		symbol: "Pt",
		atomicNumber: 78,
		group: 10,
		period: 6,
		radioactive: false,
		atomicMass: [195.08, 0.02],
		electrons: [2, 8, 18, 32, 17, 1],
		category: "transitionMetal"
	},
	{
		symbol: "Au",
		atomicNumber: 79,
		group: 11,
		period: 6,
		radioactive: false,
		atomicMass: [196.97, 0.01],
		electrons: [2, 8, 18, 32, 18, 1],
		category: "transitionMetal"
	},
	{
		symbol: "Hg",
		atomicNumber: 80,
		group: 12,
		period: 6,
		radioactive: false,
		atomicMass: [200.59, 0.01],
		electrons: [2, 8, 18, 32, 18, 2],
		category: "transitionMetal"
	},
	{
		symbol: "Tl",
		atomicNumber: 81,
		group: 13,
		period: 6,
		radioactive: false,
		atomicMass: [204.38, 0.01],
		electrons: [2, 8, 18, 32, 18, 3],
		category: "postTransitionMetal"
	},
	{
		symbol: "Pb",
		atomicNumber: 82,
		group: 14,
		period: 6,
		radioactive: false,
		atomicMass: [207.2, 1.1],
		electrons: [2, 8, 18, 32, 18, 4],
		category: "postTransitionMetal"
	},
	{
		symbol: "Bi",
		atomicNumber: 83,
		group: 15,
		period: 6,
		radioactive: false,
		atomicMass: [208.98, 0.01],
		electrons: [2, 8, 18, 32, 18, 5],
		category: "postTransitionMetal"
	},
	{
		symbol: "Po",
		atomicNumber: 84,
		group: 16,
		period: 6,
		radioactive: true,
		atomicMass: [209, null],
		electrons: [2, 8, 18, 32, 18, 6],
		category: "postTransitionMetal"
	},
	{
		symbol: "At",
		atomicNumber: 85,
		group: 17,
		period: 6,
		radioactive: true,
		atomicMass: [210, null],
		electrons: [2, 8, 18, 32, 18, 7],
		category: "halogen"
	},
	{
		symbol: "Rn",
		atomicNumber: 86,
		group: 18,
		period: 6,
		radioactive: true,
		atomicMass: [222, null],
		electrons: [2, 8, 18, 32, 18, 8],
		category: "nobleGas"
	},
	{
		symbol: "Fr",
		atomicNumber: 87,
		group: 1,
		period: 7,
		radioactive: true,
		atomicMass: [223, null],
		electrons: [2, 8, 18, 32, 18, 8, 1],
		category: "alkaliMetal"
	},
	{
		symbol: "Ra",
		atomicNumber: 88,
		group: 2,
		period: 7,
		radioactive: true,
		atomicMass: [226, null],
		electrons: [2, 8, 18, 32, 18, 8, 2],
		category: "alkalineEarthMetal"
	},
	{
		symbol: "Ac",
		atomicNumber: 89,
		group: 3,
		period: 7,
		radioactive: true,
		atomicMass: [227, null],
		electrons: [2, 8, 18, 32, 18, 9, 2],
		category: "actinide"
	},
	{
		symbol: "Th",
		atomicNumber: 90,
		group: 3,
		period: 7,
		radioactive: true,
		atomicMass: [232.04, 0.01],
		electrons: [2, 8, 18, 32, 18, 10, 2],
		category: "actinide"
	},
	{
		symbol: "Pa",
		atomicNumber: 91,
		group: 3,
		period: 7,
		radioactive: true,
		atomicMass: [231.04, 0.01],
		electrons: [2, 8, 18, 32, 20, 9, 2],
		category: "actinide"
	},
	{
		symbol: "U",
		atomicNumber: 92,
		group: 3,
		period: 7,
		radioactive: true,
		atomicMass: [238.03, 0.01],
		electrons: [2, 8, 18, 32, 21, 9, 2],
		category: "actinide"
	},
	{
		symbol: "Np",
		atomicNumber: 93,
		group: 3,
		period: 7,
		radioactive: true,
		atomicMass: [237, null],
		electrons: [2, 8, 18, 32, 22, 9, 2],
		category: "actinide"
	},
	{
		symbol: "Pu",
		atomicNumber: 94,
		group: 3,
		period: 7,
		radioactive: true,
		atomicMass: [244, null],
		electrons: [2, 8, 18, 32, 24, 8, 2],
		category: "actinide"
	},
	{
		symbol: "Am",
		atomicNumber: 95,
		group: 3,
		period: 7,
		radioactive: true,
		atomicMass: [243, null],
		electrons: [2, 8, 18, 32, 25, 8, 2],
		category: "actinide"
	},
	{
		symbol: "Cm",
		atomicNumber: 96,
		group: 3,
		period: 7,
		radioactive: true,
		atomicMass: [247, null],
		electrons: [2, 8, 18, 32, 25, 9, 2],
		category: "actinide"
	},
	{
		symbol: "Bk",
		atomicNumber: 97,
		group: 3,
		period: 7,
		radioactive: true,
		atomicMass: [247, null],
		electrons: [2, 8, 18, 32, 27, 8, 2],
		category: "actinide"
	},
	{
		symbol: "Cf",
		atomicNumber: 98,
		group: 3,
		period: 7,
		radioactive: true,
		atomicMass: [251, null],
		electrons: [2, 8, 18, 32, 28, 8, 2],
		category: "actinide"
	},
	{
		symbol: "Es",
		atomicNumber: 99,
		group: 3,
		period: 7,
		radioactive: true,
		atomicMass: [252, null],
		electrons: [2, 8, 18, 32, 29, 8, 2],
		category: "actinide"
	},
	{
		symbol: "Fm",
		atomicNumber: 100,
		group: 3,
		period: 7,
		radioactive: true,
		atomicMass: [257, null],
		electrons: [2, 8, 18, 32, 30, 8, 2],
		category: "actinide"
	},
	{
		symbol: "Md",
		atomicNumber: 101,
		group: 3,
		period: 7,
		radioactive: true,
		atomicMass: [258, null],
		electrons: [2, 8, 18, 32, 31, 8, 2],
		category: "actinide"
	},
	{
		symbol: "No",
		atomicNumber: 102,
		group: 3,
		period: 7,
		radioactive: true,
		atomicMass: [259, null],
		electrons: [2, 8, 18, 32, 32, 8, 2],
		category: "actinide"
	},
	{
		symbol: "Lr",
		atomicNumber: 103,
		group: 3,
		period: 7,
		radioactive: true,
		atomicMass: [266, null],
		electrons: [2, 8, 18, 32, 32, 8, 3],
		category: "actinide"
	},
	{
		symbol: "Rf",
		atomicNumber: 104,
		group: 4,
		period: 7,
		radioactive: true,
		atomicMass: [267, null],
		electrons: [2, 8, 18, 32, 32, 10, 2],
		category: "transitionMetal"
	},
	{
		symbol: "Db",
		atomicNumber: 105,
		group: 5,
		period: 7,
		radioactive: true,
		atomicMass: [268, null],
		electrons: [2, 8, 18, 32, 32, 11, 2],
		category: "transitionMetal"
	},
	{
		symbol: "Sg",
		atomicNumber: 106,
		group: 6,
		period: 7,
		radioactive: true,
		atomicMass: [269, null],
		electrons: [2, 8, 18, 32, 32, 12, 2],
		category: "transitionMetal"
	},
	{
		symbol: "Bh",
		atomicNumber: 107,
		group: 7,
		period: 7,
		radioactive: true,
		atomicMass: [270, null],
		electrons: [2, 8, 18, 32, 32, 13, 2],
		category: "transitionMetal"
	},
	{
		symbol: "Hs",
		atomicNumber: 108,
		group: 8,
		period: 7,
		radioactive: true,
		atomicMass: [269, null],
		electrons: [2, 8, 18, 32, 32, 14, 2],
		category: "transitionMetal"
	},
	{
		symbol: "Mt",
		atomicNumber: 109,
		group: 9,
		period: 7,
		radioactive: true,
		atomicMass: [278, null],
		electrons: [2, 8, 18, 32, 32, 15, 2],
		category: "transitionMetal"
	},
	{
		symbol: "Ds",
		atomicNumber: 110,
		group: 10,
		period: 7,
		radioactive: true,
		atomicMass: [281, null],
		electrons: [2, 8, 18, 32, 32, 16, 2],
		category: "transitionMetal"
	},
	{
		symbol: "Rg",
		atomicNumber: 111,
		group: 11,
		period: 7,
		radioactive: true,
		atomicMass: [282, null],
		electrons: [2, 8, 18, 32, 32, 17, 2],
		category: "transitionMetal"
	},
	{
		symbol: "Cn",
		atomicNumber: 112,
		group: 12,
		period: 7,
		radioactive: true,
		atomicMass: [285, null],
		electrons: [2, 8, 18, 32, 32, 18, 2],
		category: "transitionMetal"
	},
	{
		symbol: "Nh",
		atomicNumber: 113,
		group: 13,
		period: 7,
		radioactive: true,
		atomicMass: [286, null],
		electrons: [2, 8, 18, 32, 32, 18, 3],
		category: "postTransitionMetal"
	},
	{
		symbol: "Fl",
		atomicNumber: 114,
		group: 14,
		period: 7,
		radioactive: true,
		atomicMass: [289, null],
		electrons: [2, 8, 18, 32, 32, 18, 4],
		category: "postTransitionMetal"
	},
	{
		symbol: "Mc",
		atomicNumber: 115,
		group: 15,
		period: 7,
		radioactive: true,
		atomicMass: [289, null],
		electrons: [2, 8, 18, 32, 32, 18, 5],
		category: "postTransitionMetal"
	},
	{
		symbol: "Lv",
		atomicNumber: 116,
		group: 16,
		period: 7,
		radioactive: true,
		atomicMass: [293, null],
		electrons: [2, 8, 18, 32, 32, 18, 6],
		category: "postTransitionMetal"
	},
	{
		symbol: "Ts",
		atomicNumber: 117,
		group: 17,
		period: 7,
		radioactive: true,
		atomicMass: [294, null],
		electrons: [2, 8, 18, 32, 32, 18, 7],
		category: "halogen"
	},
	{
		symbol: "Og",
		atomicNumber: 118,
		group: 18,
		period: 7,
		radioactive: true,
		atomicMass: [294, null],
		electrons: [2, 8, 18, 32, 32, 18, 8],
		category: "nobleGas"
	},
	{
		symbol: "Uue",
		atomicNumber: 119,
		group: 1,
		period: 8,
		radioactive: true,
		atomicMass: [322, null],
		electrons: [2, 8, 18, 32, 32, 18, 8, 1],
		category: "unknown",
		undiscovered: true
	},
	{
		symbol: "Ubn",
		atomicNumber: 120,
		group: 2,
		period: 8,
		radioactive: true,
		atomicMass: [325, null],
		electrons: [2, 8, 18, 32, 32, 18, 8, 2],
		category: "unknown",
		undiscovered: true
	},
	{
		symbol: "Ubu",
		atomicNumber: 121,
		group: 3,
		period: 8,
		radioactive: true,
		atomicMass: null,
		electrons: [2, 8, 18, 32, 32, 18, 8, 3],
		category: "superactinide",
		undiscovered: true
	},
	{
		symbol: "Ubb",
		atomicNumber: 122,
		group: 3,
		period: 8,
		radioactive: true,
		atomicMass: null,
		electrons: [2, 8, 18, 32, 32, 18, 9, 3],
		category: "superactinide",
		undiscovered: true
	},
	{
		symbol: "Ubt",
		atomicNumber: 123,
		group: 3,
		period: 8,
		radioactive: true,
		atomicMass: null,
		electrons: [2, 8, 18, 32, 32, 19, 9, 3],
		category: "superactinide",
		undiscovered: true
	},
	{
		symbol: "Ubq",
		atomicNumber: 124,
		group: 3,
		period: 8,
		radioactive: true,
		atomicMass: null,
		electrons: [2, 8, 18, 32, 32, 21, 8, 3],
		category: "superactinide",
		undiscovered: true
	},
	{
		symbol: "Ubp",
		atomicNumber: 125,
		group: 3,
		period: 8,
		radioactive: true,
		atomicMass: null,
		electrons: [2, 8, 18, 32, 33, 21, 8, 3],
		category: "superactinide",
		undiscovered: true
	},
	{
		symbol: "Ubh",
		atomicNumber: 126,
		group: 3,
		period: 8,
		radioactive: true,
		atomicMass: null,
		electrons: [2, 8, 18, 32, 34, 20, 9, 3],
		category: "superactinide",
		undiscovered: true
	},
	{
		symbol: "Ubs",
		atomicNumber: 127,
		group: 3,
		period: 8,
		radioactive: true,
		atomicMass: null,
		electrons: [2, 8, 18, 32, 35, 20, 8, 4],
		category: "superactinide",
		undiscovered: true
	},
	{
		symbol: "Ubo",
		atomicNumber: 128,
		group: 3,
		period: 8,
		radioactive: true,
		atomicMass: null,
		electrons: [2, 8, 18, 32, 36, 20, 8, 4],
		category: "superactinide",
		undiscovered: true
	},
	{
		symbol: "Ube",
		atomicNumber: 129,
		group: 3,
		period: 8,
		radioactive: true,
		atomicMass: null,
		electrons: [2, 8, 18, 32, 37, 20, 8, 4],
		category: "superactinide",
		undiscovered: true
	},
	{
		symbol: "Utn",
		atomicNumber: 130,
		group: 3,
		period: 8,
		radioactive: true,
		atomicMass: null,
		electrons: [2, 8, 18, 32, 38, 20, 8, 4],
		category: "superactinide",
		undiscovered: true
	},
	{
		symbol: "Utu",
		atomicNumber: 131,
		group: 3,
		period: 8,
		radioactive: true,
		atomicMass: null,
		electrons: [2, 8, 18, 32, 39, 20, 8, 4],
		category: "superactinide",
		undiscovered: true
	},
	{
		symbol: "Utb",
		atomicNumber: 132,
		group: 3,
		period: 8,
		radioactive: true,
		atomicMass: null,
		electrons: [2, 8, 18, 32, 40, 20, 8, 4],
		category: "superactinide",
		undiscovered: true
	},
	{
		symbol: "Utt",
		atomicNumber: 133,
		group: 3,
		period: 8,
		radioactive: true,
		atomicMass: null,
		electrons: [2, 8, 18, 32, 40, 21, 8, 4],
		category: "superactinide",
		undiscovered: true
	},
	{
		symbol: "Utq",
		atomicNumber: 134,
		group: 3,
		period: 8,
		radioactive: true,
		atomicMass: null,
		electrons: [2, 8, 18, 32, 40, 22, 8, 4],
		category: "superactinide",
		undiscovered: true
	},
	{
		symbol: "Utp",
		atomicNumber: 135,
		group: 3,
		period: 8,
		radioactive: true,
		atomicMass: null,
		electrons: [2, 8, 18, 32, 41, 22, 8, 4],
		category: "superactinide",
		undiscovered: true
	},
	{
		symbol: "Uth",
		atomicNumber: 136,
		group: 3,
		period: 8,
		radioactive: true,
		atomicMass: null,
		electrons: [2, 8, 18, 32, 42, 22, 8, 4],
		category: "superactinide",
		undiscovered: true
	},
	{
		symbol: "Uts",
		atomicNumber: 137,
		group: 3,
		period: 8,
		radioactive: true,
		atomicMass: null,
		electrons: [2, 8, 18, 32, 43, 21, 9, 4],
		category: "superactinide",
		undiscovered: true
	},
	{
		symbol: "Uto",
		atomicNumber: 138,
		group: 3,
		period: 8,
		radioactive: true,
		atomicMass: null,
		electrons: [2, 8, 18, 32, 44, 21, 9, 4],
		category: "superactinide",
		undiscovered: true
	},
	{
		symbol: "Ute",
		atomicNumber: 139,
		group: 13,
		period: 8,
		radioactive: true,
		atomicMass: null,
		electrons: [2, 8, 18, 32, 45, 20, 10, 4],
		category: "unknown",
		undiscovered: true
	},
	{
		symbol: "Uqn",
		atomicNumber: 140,
		group: 14,
		period: 8,
		radioactive: true,
		atomicMass: null,
		electrons: [2, 8, 18, 32, 46, 21, 9, 4],
		category: "unknown",
		undiscovered: true
	},
	{
		symbol: "Uqu",
		atomicNumber: 141,
		group: 3,
		period: 8,
		radioactive: true,
		atomicMass: null,
		electrons: [2, 8, 18, 32, 47, 20, 10, 4],
		category: "superactinide",
		undiscovered: true
	},
	{
		symbol: "Uqb",
		atomicNumber: 142,
		group: 3,
		period: 8,
		radioactive: true,
		atomicMass: null,
		electrons: [2, 8, 18, 32, 48, 20, 10, 4],
		category: "superactinide",
		undiscovered: true
	},
	{
		symbol: "Uqt",
		atomicNumber: 143,
		group: 3,
		period: 8,
		radioactive: true,
		atomicMass: null,
		electrons: [2, 8, 18, 32, 49, 20, 10, 4],
		category: "superactinide",
		undiscovered: true
	},
	{
		symbol: "Uqq",
		atomicNumber: 144,
		group: 3,
		period: 8,
		radioactive: true,
		atomicMass: null,
		electrons: [2, 8, 18, 32, 50, 19, 11, 4],
		category: "superactinide",
		undiscovered: true
	},
	{
		symbol: "Uqp",
		atomicNumber: 145,
		group: 3,
		period: 8,
		radioactive: true,
		atomicMass: null,
		electrons: [2, 8, 18, 32, 50, 21, 10, 4],
		category: "superactinide",
		undiscovered: true
	},
	{
		symbol: "Uqh",
		atomicNumber: 146,
		group: 3,
		period: 8,
		radioactive: true,
		atomicMass: null,
		electrons: [2, 8, 18, 32, 50, 22, 10, 4],
		category: "superactinide",
		undiscovered: true
	},
	{
		symbol: "Uqs",
		atomicNumber: 147,
		group: 3,
		period: 8,
		radioactive: true,
		atomicMass: null,
		electrons: [2, 8, 18, 32, 50, 23, 10, 4],
		category: "superactinide",
		undiscovered: true
	},
	{
		symbol: "Uqo",
		atomicNumber: 148,
		group: 3,
		period: 8,
		radioactive: true,
		atomicMass: null,
		electrons: [2, 8, 18, 32, 50, 24, 10, 4],
		category: "superactinide",
		undiscovered: true
	},
	{
		symbol: "Uqe",
		atomicNumber: 149,
		group: 3,
		period: 8,
		radioactive: true,
		atomicMass: null,
		electrons: [2, 8, 18, 32, 50, 24, 11, 4],
		category: "superactinide",
		undiscovered: true
	},
	{
		symbol: "Upn",
		atomicNumber: 150,
		group: 3,
		period: 8,
		radioactive: true,
		atomicMass: null,
		electrons: [2, 8, 18, 32, 50, 24, 12, 6],
		category: "superactinide",
		undiscovered: true
	},
	{
		symbol: "Upu",
		atomicNumber: 151,
		group: 3,
		period: 8,
		radioactive: true,
		atomicMass: null,
		electrons: [2, 8, 18, 32, 50, 26, 11, 4],
		category: "superactinide",
		undiscovered: true
	},
	{
		symbol: "Upb",
		atomicNumber: 152,
		group: 3,
		period: 8,
		radioactive: true,
		atomicMass: null,
		electrons: [2, 8, 18, 32, 50, 27, 11, 4],
		category: "superactinide",
		undiscovered: true
	},
	{
		symbol: "Upt",
		atomicNumber: 153,
		group: 3,
		period: 8,
		radioactive: true,
		atomicMass: null,
		electrons: [2, 8, 18, 32, 50, 29, 10, 4],
		category: "superactinide",
		undiscovered: true
	},
	{
		symbol: "Upq",
		atomicNumber: 154,
		group: 3,
		period: 8,
		radioactive: true,
		atomicMass: null,
		electrons: [2, 8, 18, 32, 50, 30, 10, 4],
		category: "superactinide",
		undiscovered: true
	},
	{
		symbol: "Upp",
		atomicNumber: 155,
		group: 3,
		period: 8,
		radioactive: true,
		atomicMass: null,
		electrons: [2, 8, 18, 32, 50, 31, 10, 4],
		category: "superactinide",
		undiscovered: true
	},
	{
		symbol: "Uph",
		atomicNumber: 156,
		group: 4,
		period: 8,
		radioactive: true,
		atomicMass: null,
		electrons: [2, 8, 18, 32, 50, 32, 10, 4],
		category: "unknown",
		undiscovered: true
	},
	{
		symbol: "Ups",
		atomicNumber: 157,
		group: 5,
		period: 8,
		radioactive: true,
		atomicMass: null,
		electrons: [2, 8, 18, 32, 50, 32, 11, 4],
		category: "unknown",
		undiscovered: true
	},
	{
		symbol: "Upo",
		atomicNumber: 158,
		group: 6,
		period: 8,
		radioactive: true,
		atomicMass: null,
		electrons: [2, 8, 18, 32, 50, 32, 12, 4],
		category: "unknown",
		undiscovered: true
	},
	{
		symbol: "Upe",
		atomicNumber: 159,
		group: 7,
		period: 8,
		radioactive: true,
		atomicMass: null,
		electrons: [2, 8, 18, 32, 50, 32, 12, 4, 1],
		category: "unknown",
		undiscovered: true
	},
	{
		symbol: "Uhn",
		atomicNumber: 160,
		group: 8,
		period: 8,
		radioactive: true,
		atomicMass: null,
		electrons: [2, 8, 18, 32, 50, 32, 13, 4, 1],
		category: "unknown",
		undiscovered: true
	},
	{
		symbol: "Uhu",
		atomicNumber: 161,
		group: 9,
		period: 8,
		radioactive: true,
		atomicMass: null,
		electrons: [2, 8, 18, 32, 50, 32, 14, 4, 1],
		category: "unknown",
		undiscovered: true
	},
	{
		symbol: "Uhb",
		atomicNumber: 162,
		group: 10,
		period: 8,
		radioactive: true,
		atomicMass: null,
		electrons: [2, 8, 18, 32, 50, 32, 16, 4],
		category: "unknown",
		undiscovered: true
	},
	{
		symbol: "Uht",
		atomicNumber: 163,
		group: 11,
		period: 8,
		radioactive: true,
		atomicMass: null,
		electrons: [2, 8, 18, 32, 50, 32, 17, 4],
		category: "unknown",
		undiscovered: true
	},
	{
		symbol: "Uhq",
		atomicNumber: 164,
		group: 12,
		period: 8,
		radioactive: true,
		atomicMass: null,
		electrons: [2, 8, 18, 32, 50, 32, 18, 4],
		category: "unknown",
		undiscovered: true
	},
	{
		symbol: "Uhp",
		atomicNumber: 165,
		group: 1,
		period: 9,
		radioactive: true,
		atomicMass: null,
		electrons: [2, 8, 18, 32, 50, 32, 18, 4, 1],
		category: "unknown",
		undiscovered: true
	},
	{
		symbol: "Uhh",
		atomicNumber: 166,
		group: 2,
		period: 9,
		radioactive: true,
		atomicMass: null,
		electrons: [2, 8, 18, 32, 50, 32, 18, 4, 2],
		category: "unknown",
		undiscovered: true
	},
	{
		symbol: "Uhs",
		atomicNumber: 167,
		group: 13,
		period: 9,
		radioactive: true,
		atomicMass: null,
		electrons: [2, 8, 18, 32, 50, 32, 18, 4, 3],
		category: "unknown",
		undiscovered: true
	},
	{
		symbol: "Uho",
		atomicNumber: 168,
		group: 14,
		period: 9,
		radioactive: true,
		atomicMass: null,
		electrons: [2, 8, 18, 32, 50, 32, 18, 4, 4],
		category: "unknown",
		undiscovered: true
	},
	{
		symbol: "Uhe",
		atomicNumber: 169,
		group: 15,
		period: 8,
		radioactive: true,
		atomicMass: null,
		electrons: [2, 8, 18, 32, 50, 32, 18, 5, 4],
		category: "unknown",
		undiscovered: true
	},
	{
		symbol: "Usn",
		atomicNumber: 170,
		group: 16,
		period: 8,
		radioactive: true,
		atomicMass: null,
		electrons: [2, 8, 18, 32, 50, 32, 18, 6, 4],
		category: "unknown",
		undiscovered: true
	},
	{
		symbol: "Usu",
		atomicNumber: 171,
		group: 17,
		period: 8,
		radioactive: true,
		atomicMass: null,
		electrons: [2, 8, 18, 32, 50, 32, 18, 7, 4],
		category: "unknown",
		undiscovered: true
	},
	{
		symbol: "Usb",
		atomicNumber: 172,
		group: 18,
		period: 8,
		radioactive: true,
		atomicMass: null,
		electrons: [2, 8, 18, 32, 50, 32, 18, 8, 4],
		category: "unknown",
		undiscovered: true
	}
]
