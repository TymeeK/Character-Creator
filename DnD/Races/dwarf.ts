import type { size, languages } from './race'

export type SubraceAbility = 'Dwarven Toughness' | 'Dwarven Armor Training'
export type SubraceScoreIncrease = { wis: 1 } | { str: 2 }
export type ConstitutionIncrease = 2
export type Speed = 25
export type name = 'Hill Dwarf' | 'Mountain Dwarf'

export type RaceAbility =
    | 'Darkvision'
    | 'Dwarven Combat Training'
    | 'Tool Proficiency'
    | 'Stonecunning'

export interface HillDwarf {
    name: Extract<name, 'Hill Dwarf'>
    scoreIncrease: Extract<SubraceScoreIncrease, { wis: 1 }>
    ability: Extract<SubraceAbility, 'Dwarven Toughness'>
}

export interface MountainDwarf {
    name: Extract<name, 'Mountain Dwarf'>
    scoreIncrease: Extract<SubraceScoreIncrease, { str: 2 }>
    ability: Extract<SubraceAbility, 'Dwarven Armor Training'>
}

export interface Dwarf {
    size: Extract<size, 'Small'>
    speed: Speed
    languages: Extract<languages, 'Common' | 'Dwarvish'>[]
    constitutionIncrease: ConstitutionIncrease
    abilities: RaceAbility[]
}

export interface DwarfSubrace<T extends HillDwarf | MountainDwarf>
    extends Dwarf {
    subrace: T
}
