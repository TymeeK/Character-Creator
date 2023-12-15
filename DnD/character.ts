export type gender = 'male' | 'female'

export interface Character<T, U> {
    name: string
    age: number
    race: T
    class: U
    gender: gender
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
    modifiers: T
}

const score: AbilityScore<number> = {
    str: 10,
    dex: 10,
    con: 10,
    int: 10,
    wis: 10,
    cha: 10,
}

export class PlayerCharacter implements Character<T> {
    age: number
    name: string
    race: T
    gender: gender

    constructor(name: string, age: number, race: T, gender: gender) {
        this.name = name
        this.age = age
        this.race = race
        this.gender = gender
    }
}
