import { T } from 'vitest/dist/reporters-OH1c16Kq.js'
import { Races } from './Races/race'
import { Dwarf } from './Races/dwarf'
import { Elf, WoodElf } from './Races/elf'

export type gender = 'male' | 'female'

export interface Character<T extends Races, U> {
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

export class PlayerCharacter implements Character<Races, number> {
    age: number
    name: string
    race: Races
    gender: gender

    constructor(name: string, age: number, race: Races, gender: gender) {
        this.name = name
        this.age = age
        this.race = race
        this.gender = gender
    }
}
