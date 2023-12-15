import { size, languages } from './race'

export type Increase = { wis: 1 } | { int: 1 }
export type WoodElfAbility =
    | 'Elf Weapon Training'
    | 'Fleet of Foot'
    | 'Mask of the Wild'

export type WoodElfTrait = {
    scoreIncrease: Extract<Increase, { wis: 1 }>
    ability: WoodElfAbility
}

export interface WoodElf {
    name: string
}

type Subrace<T, U> = T

export interface Elf {
    size: Extract<size, 'Medium'>
    languages: 
}
