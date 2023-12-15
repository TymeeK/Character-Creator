import {
    Dwarf,
    DwarfSubrace,
    HillDwarf,
    MountainDwarf,
} from '@/DnD/Races/dwarf'
import { Race } from '@/DnD/Races/race'
import { expect, describe, test } from 'vitest'

describe('Creating dwarf races', () => {
    const hillDwarf: DwarfSubrace<HillDwarf> = {
        size: 'Small',
        speed: 25,
        languages: ['Common', 'Dwarvish'],
        constitutionIncrease: 2,
        abilities: [
            'Darkvision',
            'Dwarven Combat Training',
            'Stonecunning',
            'Tool Proficiency',
        ],
        subrace: {
            name: 'Hill Dwarf',
            scoreIncrease: { wis: 1 },
            ability: 'Dwarven Toughness',
        },
    }
    const race: Race<DwarfSubrace<HillDwarf>> = hillDwarf

    const mountainDwarf: Race<DwarfSubrace<MountainDwarf>> = {
        size: 'Small',
        speed: 25,
        languages: ['Common', 'Dwarvish'],
        constitutionIncrease: 2,
        abilities: [
            'Darkvision',
            'Dwarven Combat Training',
            'Stonecunning',
            'Tool Proficiency',
        ],
        subrace: {
            name: 'Mountain Dwarf',
            scoreIncrease: { str: 2 },
            ability: 'Dwarven Armor Training',
        },
    }

    test('Testing hill dwarf creation', () => {
        expect(race).toBeTruthy()
        expect(race.size).toBe('Small')
        expect(race.speed).toBe(25)
        expect(race.abilities).toBeTruthy()
        expect(race.constitutionIncrease).toBe(2)
        expect(race.languages).toBeTruthy()
        expect(race.subrace.ability).toBe('Dwarven Toughness')
        expect(race.subrace.scoreIncrease).toStrictEqual({
            wis: 1,
        })
        expect(race.subrace?.name).toBe('Hill Dwarf')
    })
})
