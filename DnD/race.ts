export type DragonBorn = 'Dragonborn'
export type Elf = 'Elf'
export type Gnome = 'Gnome'
export type Halfing = 'Halfing'
export type HalfElf = 'Half-Elf'
export type HalfOrc = 'Half-Orc'
export type Human = 'Human'
export type Tiefling = 'Tiefling'

export type size = 'Small' | 'Medium' | 'Large' | 'Huge'
export type languages =
    | 'Common'
    | 'Dwarvish'
    | 'Elvish'
    | 'Giant'
    | 'Gnomish'
    | 'Goblin'
    | 'Halfing'
    | 'Orc'

export interface Traits {
    abilityScoreInc?: number
    age: number
    size: size
    speed: number
    languages: languages[]
    subrace?: 
}
export interface Race<T> {
    race: T
    traits: Traits
}