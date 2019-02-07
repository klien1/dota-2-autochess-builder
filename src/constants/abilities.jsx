// Warrior x 9
// (3): Armor increased by 7 for all friendly warriors.
// (6): Armor increased by an additional 8 for all friendly warriors.
// (9): Armor increased by an additional 9 for all friendly warriors.
const warriorStart = 7;
export const WARRIOR3 = `Armor increased by ${warriorStart} for all friendly warriors.`;
export const WARRIOR6 = `Armor increased by ${warriorStart +
	8} for all friendly warriors.`;
export const WARRIOR9 = `Armor increased by ${warriorStart +
	8 +
	9} for all friendly warriors.`;
// Elf x 8
// (3): Evasion increased by 25% for all friendly elfs.
// (6): Evasion increased by 25% for all friendly elfs.
const elfStart = 25;
export const ELF3 = `Evasion increased by ${25}% for all friendly elfs.`;
export const ELF6 = `Evasion increased by ${elfStart +
	25}% for all friendly elfs.`;
// Assassin x 8
// (3): All friendly assasins have 10% chance to deal 3.5x damage.
// (6): All friendly assasins have 20% chance to deal 4.5x damage.
const assassinStart = 10;
export const ASSASSIN3 = `All friendly assassins have ${assassinStart}% chance to deal 4x damage.`;
export const ASSASSIN6 = `All friendly assassins have ${assassinStart +
	20}% chance to deal 4x damage.`;
// Mage x 7
// (3): Magic resistance decreased by 40% for all enemies.
// (6): Magic resistance decreased by an additional 40% for all enemies.
const mageStart = 40;
export const MAGE3 = `Magic resistance decreased by ${mageStart}% for all enemies.`;
export const MAGE6 = `Magic resistance decreased by ${mageStart +
	40}% for all enemies.`;
// Human x 7
// (2): All friendly humans have 20% chance to disarm target for 3s on damage deal.
// (4): All friendly humans have 25% chance to disarm target for 3s on damage deal.
// (6): All friendly humans have 30% chance to disarm target for 3s on damage deal.
const humanStart = 20;
export const HUMAN2 = `All friendly humans have ${humanStart}% chance to disarm target for 3s on damage deal.`;
export const HUMAN4 = `All friendly humans have ${humanStart +
	25}% chance to disarm target for 3s on damage deal.`;
export const HUMAN6 = `All friendly humans have ${humanStart +
	25 +
	30}% chance to disarm target for 3s on damage deal.`;
// Knight x 6
// (2): All friendly knights +25% chance to get a shield.
// (4): All friendly knights +35% chance to get a shield.
// (6): All friendly knights +45% chance to get a shield.
export const KNIGHT2 = `All friendly knights +25% chance to get a shield.`;
export const KNIGHT4 = `All friendly knights +35% chance to get a shield.`;
export const KNIGHT6 = `All friendly knights +45% chance to get a shield.`;
// Goblin x 6
// (3): Armor and hp regeneration increased by 15 for a random ally.
// (6): Armor and hp regeneration increased by 15 for all friendly goblins.
export const GOBLIN3 = `Armor and hp regeneration increased by 15 for a random ally.`;
export const GOBLIN6 = `Armor and hp regeneration increased by 15 for all friendly goblins and armor and hp regeneration increase by 15 for a random ally.`;
// Warlock x 6
// (3): Lifesteal increased by 20% for all allies.
// (6): Lifesteal increased by 30% for all allies.
const warlockStart = 20;
export const WARLOCK3 = `Lifesteal increased by ${warlockStart}% for all allies.`;
export const WARLOCK6 = `Lifesteal increased by ${warlockStart +
	30}% for all allies.`;
// Hunter x 6
// (3): Attack damage increased by 25% for all friendly hunters.
// (6): Attack damage increased by 35% for all friendly hunters.
const hunterStart = 25;
export const HUNTER3 = `Attack damage increased by ${25}% for all friendly hunters.`;
export const HUNTER6 = `Attack damage increased by ${hunterStart +
	35}% for all friendly hunters.`;
// Beast x 6
// (2): Attack damage increased by 10% for all allies.
// (4): Attack damage increased by 15% for all allies.
// (6): Attack damage increased by 20% for all allies.
const beastStart = 10;
export const BEAST2 = `Attack damage increased by ${10}% for all allies.`;
export const BEAST4 = `Attack damage increased by ${beastStart +
	15}% for all allies.`;
export const BEAST6 = `Attack damage increased by ${beastStart +
	15 +
	20}% for all allies.`;
// Mech x 5
// (2): HP regeneration increased by 15 for all friendly mechs.
// (4): HP regeneration increased by 25 for all friendly mechs.
const mechStart = 15;
export const MECH2 = `HP regeneration increased by ${mechStart} for all friendly mechs.`;
export const MECH4 = `HP regeneration increased by ${mechStart +
	25} for all friendly mechs.`;
// Undead x 4
// (2): Armor decreased by 5 for all enemies.
// (4): Armor decreased by 7 for all enemies.
const undeadStart = 5;
export const UNDEAD2 = `Armor decreased by ${undeadStart} for all enemies.`;
export const UNDEAD4 = `Armor decreased by 7 for all enemies.`;
// Orc x 4
// (2): Max HP increased by 250 for all friendly orcs.
// (4): Max HP increased by 350 for all friendly orcs.
const orcStart = 250;
export const ORC2 = `Max HP increased by ${orcStart} for all friendly orcs.`;
export const ORC4 = `Max HP increased by ${orcStart +
	350} for all friendly orcs.`;
// Troll x 4
// (2): Attack speed increased by 30 for all friendly trolls.
// (4): Attack speed increased by 30 for all allies.
export const TROLL2 = `Attack speed increased by 30 for all friendly trolls.`;
export const TROLL4 = `Attack speed increased by 30 for all allies and attack speed increased by 60 for all friendly trolls.`;
// Druid x 4
// (2): two ★druids can upgrade to a ★★druid.
// (4): two ★★druids can upgrade to a ★★★druid.
export const DRUID2 = `Two ★druids can upgrade to a ★★druid.`;
export const DRUID4 = `Two ★★druids can upgrade to a ★★★druid.`;
// Naga x 4
// (2): Magic resistance increased by 20 for all allies.
// (4): Magic resistance increased by 40 for all allies.
const nagaStart = 20;
export const NAGA2 = `Magic resistance increased by ${nagaStart}% for all allies.`;
export const NAGA4 = `Magic resistance increased by ${nagaStart +
	40}% for all allies.`;
// Element x 4
// (2): All friendly elements have 30% chance to turn attacker into stone for 3s when attacked by melee chesses.
// (4): All allies have 30% chance to turn attacker into stone for 3s when attacked by melee chesses.
export const ELEMENT2 = `All friendly elements have 30% chance to turn attacker into stone for 3s when attacked by melee chesses.`;
export const ELEMENT4 = `All allies have 30% chance to turn attacker into stone for 3s when attacked by melee chesses.`;
// Dragon x 3
// (3): All friendly dragons have 100 mana when battle starts.
export const DRAGON3 = `All friendly dragons have 100 mana when battle starts.`;
// Shaman x 2
// (2): Hex an enemy when battle starts.
export const SHAMAN2 = `Hex an enemy when battle starts.`;
// Demon x 5
export const DEMON1 = `Single Demon deals 50% extra pure damage to its target`;
// Demon Hunter x 2
export const DEMONHUNTER1 = `Negate enemy demon's Fel Power`;
export const DEMONHUNTER2 = `All ally demons keep their power and ${DEMONHUNTER1}`;
// Dwarf x 2
// Ogre x 1
