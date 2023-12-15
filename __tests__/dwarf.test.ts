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
    const race: Race<DwarfSubrace<HillDwarf>> = {
        race: hillDwarf,
    }

    const mountainDwarf: Race<DwarfSubrace<MountainDwarf>> = {
        race: {
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
        },
    }

    test('Testing hill dwarf creation', () => {
        expect(race).toBeTruthy()
        expect(race.race.size).toBe('Small')
        expect(race.race.speed).toBe(25)
        expect(race.race.abilities).toBeTruthy()
        expect(race.race.constitutionIncrease).toBe(2)
        expect(race.race.languages).toBeTruthy()
        expect(race.race.subrace.ability).toBe('Dwarven Toughness')
        expect(race.race.subrace.scoreIncrease).toStrictEqual({
            wis: 1,
        })
        expect(race.race.subrace?.name).toBe('Hill Dwarf')
    })
})
