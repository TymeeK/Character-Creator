// export type DragonBorn = 'Dragonborn'
// export type Elf = 'Elf'
// export type Gnome = 'Gnome'
// export type Halfing = 'Halfing'
// export type HalfElf = 'Half-Elf'
// export type HalfOrc = 'Half-Orc'
// export type Human = 'Human'
// export type Tiefling = 'Tiefling'

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

export interface Race<T> {
    name: string
    age: number
    speed: number
    race: T
}
