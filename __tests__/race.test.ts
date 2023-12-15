import { Race } from '@/DnD/Races/race'
import { expect, describe, test } from 'vitest'

describe('Creating a basic race', () => {
    const race: Race<string> = {
        name: 'Gorlock the Destroyer',
        age: 20,
        speed: 25,
        race: 'Dwarf',
    }

    test('Created race', () => {
        expect(race).toBeTruthy()
        expect(race.name).toBe('Gorlock the Destroyer')
        expect(race.age).toBe(20)
        expect(race.speed).toBe(25)
        expect(race.race).toBe('Dwarf')
    })
})
