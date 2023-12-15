export interface Character<T> {
    name: string
    age: number
    race: T
    gender: boolean
    level: number
    abilityScore: AbilityScore<number>
    modifiers: Modifiers<AbilityScore<number>>
}

export interface AbilityScore<T extends number> {
    str: T
    dex: T
    con: T
    int: T
    wis: T
    cha: T
}

export interface Modifiers<T extends AbilityScore<number>> {
    calculateModifiers: (score: T) => T
}

const score: AbilityScore<number> = {
    str: 10,
    dex: 10,
    con: 10,
    int: 10,
    wis: 10,
    cha: 10,
}

// export class Class implements Character {
//     private name: string
//     private age: number
//     private species: string
//     private gender: boolean

//     constructor(name: string, age: number, species: string, gender: boolean) {
//         this.name = name
//         this.age = age
//         this.species = species
//         this.gender = gender
//     }
// }
