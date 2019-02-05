import * as species from '../constants/heroRace';
import * as hClass from '../constants/heroClass';

export default {
	Abaddon: { heroClass: hClass.KNIGHT, heroRace: [species.UNDEAD], cost: 3 },
	Alchemist: { heroClass: hClass.WARLOCK, heroRace: [species.GOBLIN], cost: 4 },
	'Anti Mage': {
		heroClass: hClass.DEMON_HUNTER,
		heroRace: [species.ELF],
		cost: 1
	},
	Axe: { heroClass: hClass.WARRIOR, heroRace: [species.ORC], cost: 1 },
	'Bat Rider': { heroClass: hClass.KNIGHT, heroRace: [species.TROLL], cost: 1 },
	'Beast Master': {
		heroClass: hClass.HUNTER,
		heroRace: [species.ORC],
		cost: 2
	},
	'Bounty Hunter': {
		heroClass: hClass.ASSASSIN,
		heroRace: [species.GOBLIN],
		cost: 1
	},
	'Chaos Knight': {
		heroClass: hClass.KNIGHT,
		heroRace: [species.DEMON],
		cost: 2
	},
	Clockwerk: { heroClass: hClass.MECH, heroRace: [species.GOBLIN], cost: 1 },
	'Crystal Maiden': {
		heroClass: hClass.MAGE,
		heroRace: [species.HUMAN],
		cost: 2
	},
	Disruptor: { heroClass: hClass.SHAMAN, heroRace: [species.ORC], cost: 4 },
	Doom: { heroClass: hClass.WARRIOR, heroRace: [species.DEMON], cost: 4 },
	'Dragon Knight': {
		heroClass: hClass.KNIGHT,
		heroRace: [species.HUMAN, species.DRAGON],
		cost: 4
	},
	'Drow Ranger': {
		heroClass: hClass.HUNTER,
		heroRace: [species.UNDEAD],
		cost: 1
	},
	Enchantress: { heroClass: hClass.DRUID, heroRace: [species.BEAST], cost: 1 },
	Enigma: { heroClass: hClass.WARLOCK, heroRace: [species.ELEMENT], cost: 5 },
	Furion: { heroClass: hClass.DRUID, heroRace: [species.ELF], cost: 2 },
	Gyrocopter: { heroClass: hClass.MECH, heroRace: [species.DWARF], cost: 5 },
	Juggernaut: { heroClass: hClass.WARRIOR, heroRace: [species.ORC], cost: 2 },
	'Keeper of the Light': {
		heroClass: hClass.MAGE,
		heroRace: [species.HUMAN],
		cost: 4
	},
	Kunkka: { heroClass: hClass.WARRIOR, heroRace: [species.HUMAN], cost: 4 },
	Lich: { heroClass: hClass.MAGE, heroRace: [species.UNDEAD], cost: 5 },
	Lina: { heroClass: hClass.MAGE, heroRace: [species.HUMAN], cost: 3 },
	'Lone Druid': { heroClass: hClass.DRUID, heroRace: [species.BEAST], cost: 4 },
	Luna: { heroClass: hClass.KNIGHT, heroRace: [species.ELF], cost: 2 },
	Lycan: {
		heroClass: hClass.WARRIOR,
		heroRace: [species.HUMAN, species.BEAST],
		cost: 3
	},
	Medusa: { heroClass: hClass.HUNTER, heroRace: [species.NAGA], cost: 4 },
	Morphling: {
		heroClass: hClass.ASSASSIN,
		heroRace: [species.ELEMENT],
		cost: 2
	},
	Necrophos: { heroClass: hClass.WARLOCK, heroRace: [species.UNDEAD], cost: 4 },
	'Ogre Magi': { heroClass: hClass.MAGE, heroRace: [species.OGRE], cost: 1 },
	'Omni Knight': {
		heroClass: hClass.KNIGHT,
		heroRace: [species.HUMAN],
		cost: 3
	},
	'Phantom Assassin': {
		heroClass: hClass.ASSASSIN,
		heroRace: [species.ELF],
		cost: 3
	},
	Puck: {
		heroClass: hClass.MAGE,
		heroRace: [species.ELF, species.DRAGON],
		cost: 2
	},
	'Queen of Pain': {
		heroClass: hClass.ASSASSIN,
		heroRace: [species.DEMON],
		cost: 2
	},
	Razor: { heroClass: hClass.MAGE, heroRace: [species.ELEMENT], cost: 3 },
	'Sand King': {
		heroClass: hClass.ASSASSIN,
		heroRace: [species.BEAST],
		cost: 3
	},
	'Shadow Fiend': {
		heroClass: hClass.WARLOCK,
		heroRace: [species.DEMON],
		cost: 3
	},
	'Shadow Shaman': {
		heroClass: hClass.SHAMAN,
		heroRace: [species.TROLL],
		cost: 1
	},
	Slardar: { heroClass: hClass.WARRIOR, heroRace: [species.NAGA], cost: 2 },
	Slark: { heroClass: hClass.ASSASSIN, heroRace: [species.NAGA], cost: 3 },
	Sniper: { heroClass: hClass.HUNTER, heroRace: [species.DWARF], cost: 3 },
	Techies: { heroClass: hClass.MECH, heroRace: [species.GOBLIN], cost: 5 },
	'Templar Assassin': {
		heroClass: hClass.ASSASSIN,
		heroRace: [species.ELF],
		cost: 4
	},
	Terrorblade: {
		heroClass: hClass.DEMON_HUNTER,
		heroRace: [species.DEMON],
		cost: 3
	},
	Tidehunter: { heroClass: hClass.HUNTER, heroRace: [species.NAGA], cost: 5 },
	Timbersaw: { heroClass: hClass.MECH, heroRace: [species.GOBLIN], cost: 2 },
	Tinker: { heroClass: hClass.MECH, heroRace: [species.GOBLIN], cost: 1 },
	Tiny: { heroClass: hClass.WARRIOR, heroRace: [species.ELEMENT], cost: 1 },
	'Treant Protector': {
		heroClass: hClass.DRUID,
		heroRace: [species.ELF],
		cost: 2
	},
	'Troll Warlord': {
		heroClass: hClass.WARRIOR,
		heroRace: [species.TROLL],
		cost: 4
	},
	Tusk: { heroClass: hClass.WARRIOR, heroRace: [species.BEAST], cost: 1 },
	Venomancer: { heroClass: hClass.WARLOCK, heroRace: [species.BEAST], cost: 3 },
	Viper: { heroClass: hClass.ASSASSIN, heroRace: [species.DRAGON], cost: 3 },
	'Wind Ranger': { heroClass: hClass.HUNTER, heroRace: [species.ELF], cost: 3 },
	'Witch Doctor': {
		heroClass: hClass.WARLOCK,
		heroRace: [species.TROLL],
		cost: 2
	}
};
