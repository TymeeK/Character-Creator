import { Dwarf, HillDwarf } from '@/DnD/Races/dwarf'
import { Race } from '@/DnD/Races/race'
import { expect, describe, test } from 'vitest'

describe('Creating dwarf races', () => {
    const hillDwarf: HillDwarf = {
        name: 'Hill Dwarf',
        abilityScoreIncrease: {
            wis: 1,
        },
        ability: 'Dwarven Toughness',
    }
    const dwarf: Dwarf<HillDwarf> = {
        size: 'Small',
        languages: ['Common', 'Dwarvish'],
        abilities: [
            'Darkvision',
            'Dwarven Combat Training',
            'Stonecunning',
            'Tool Proficiency',
        ],
        subrace: hillDwarf,
    }
    const race: Race<Dwarf<HillDwarf>> = {
        name: 'Gorlock the destroyer',
        age: 20,
        speed: 25,
        race: dwarf,
    }
    test('Testing hill dwarf creation', () => {
        expect(race).toBeTruthy()
        expect(race.name).toBe('Gorlock the destroyer')
        expect(race.age).toBe(20)
        expect(race.speed).toBe(25)
        expect(race.race.abilities).toBeTruthy()
        expect(race.race.languages).toBeTruthy()
        expect(race.race.size).toBe('Small')
        expect(race.race.subrace?.ability).toBe('Dwarven Toughness')
        expect(race.race.subrace?.abilityScoreIncrease).toStrictEqual({
            wis: 1,
        })
        expect(race.race.subrace?.name).toBe('Hill Dwarf')
    })
})
