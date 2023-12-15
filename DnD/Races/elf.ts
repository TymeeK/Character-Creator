import { Size, Languages } from './race'

export type Increase = { wis: 1 } | { int: 1 }
export type name = 'Wood Elf' | 'High Elf'
export type Speed = 30
export type DexterityIncrease = 2
export type RaceAbility =
    | 'Darkvision'
    | 'Keen Senses'
    | 'Fey Ancestry'
    | 'Trance'

export type SubraceScoreIncrease = { wis: 1 } | { int: 1 }
export type WoodElfAbilities =
    | 'Elf Weapon Training'
    | 'Fleet of Foot'
    | 'Mask of the Wild'

export type HighElfAbilities =
    | 'Elf Weapon Training'
    | 'Cantrip'
    | 'Extra Language'

export interface WoodElf {
    name: Extract<name, 'Wood Elf'>
    scoreIncrease: Extract<SubraceScoreIncrease, { wis: 1 }>
    ability: WoodElfAbilities[]
}

export interface HighElf {
    name: Extract<name, 'High Elf'>
    scoreIncrease: Extract<SubraceScoreIncrease, { int: 1 }>
    ability: HighElfAbilities[]
}
export interface Elf<T = void> {
    size: Extract<Size, 'Medium'>
    speed: Speed
    languages: Extract<Languages, 'Common' | 'Elvish'>
    dexterityIncrease: DexterityIncrease
    abilities: RaceAbility[]
    subrace?: T
}
