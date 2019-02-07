import * as ability from '../constants/abilities';

export default {
	Warrior: [
		{ 3: ability.WARRIOR3 },
		{ 6: ability.WARRIOR6 },
		{ 9: ability.WARRIOR9 }
	],
	Elf: [{ 3: ability.ELF3 }, { 6: ability.ELF6 }],
	Assassin: [{ 3: ability.ASSASSIN3 }, { 6: ability.ASSASSIN6 }],
	Mage: [{ 3: ability.MAGE3 }, { 6: ability.MAGE6 }],
	Human: [{ 2: ability.HUMAN2 }, { 4: ability.HUMAN4 }, { 6: ability.HUMAN6 }],
	Knight: [
		{ 2: ability.KNIGHT2 },
		{ 4: ability.KNIGHT4 },
		{ 6: ability.KNIGHT6 }
	],
	Goblin: [{ 3: ability.GOBLIN3 }, { 6: ability.GOBLIN6 }],
	Warlock: [{ 3: ability.WARLOCK3 }, { 6: ability.WARLOCK6 }],
	Hunter: [{ 3: ability.HUNTER3 }, { 6: ability.HUNTER6 }],
	Beast: [{ 2: ability.BEAST2 }, { 4: ability.BEAST4 }, { 6: ability.BEAST6 }],
	Mech: [{ 2: ability.MECH2 }, { 4: ability.MECH4 }],
	Undead: [{ 2: ability.UNDEAD2 }, { 4: ability.UNDEAD4 }],
	Orc: [{ 2: ability.ORC2 }, { 4: ability.ORC4 }],
	Troll: [{ 2: ability.TROLL2 }, { 4: ability.TROLL4 }],
	Druid: [{ 2: ability.DRUID2 }, { 4: ability.DRUID4 }],
	Naga: [{ 2: ability.NAGA2 }, { 4: ability.NAGA4 }],
	Element: [{ 2: ability.ELEMENT2 }, { 4: ability.ELEMENT4 }],
	Dragon: [{ 3: ability.DRAGON3 }],
	Shaman: [{ 2: ability.SHAMAN2 }],
	Demon: [{ 1: ability.DEMON1 }],
	'Demon Hunter': [{ 1: ability.DEMONHUNTER1 }, { 2: ability.DEMONHUNTER2 }]
};
