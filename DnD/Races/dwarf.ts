import type { size, languages } from './race'

export type SubraceAbility = 'Dwarven Toughness' | 'Dwarven Armor Training'

//TODO There are various tools we can add
export type RaceAbility =
    | 'Darkvision'
    | 'Dwarven Combat Training'
    | 'Tool Proficiency'
    | 'Stonecunning'

export interface HillDwarf {
    name: string
    abilityScoreIncrease: {
        wis: number
    }
    ability: Extract<SubraceAbility, 'Dwarven Toughness'>
}

export interface MountainDwarf {
    name: string
    abilityScoreIncrease: {
        str: number
    }
    ability: Extract<SubraceAbility, 'Dwarven Armor Training'>
}

type Subrace<T extends HillDwarf | MountainDwarf> = T

export interface Dwarf<T extends Subrace<HillDwarf | MountainDwarf>> {
    size: Extract<size, 'Small'>
    languages: Extract<languages, 'Common' | 'Dwarvish'>[]
    abilities: RaceAbility[]
    subrace?: T
}
