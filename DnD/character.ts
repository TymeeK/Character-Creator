import { T } from 'vitest/dist/reporters-OH1c16Kq.js'

export type gender = 'male' | 'female'

export interface Character<T, U> {
    name: string
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

export class PlayerCharacter implements Character<T, U> {
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
