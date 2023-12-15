// export type DragonBorn = 'Dragonborn'
// export type Elf = 'Elf'
// export type Gnome = 'Gnome'
// export type Halfing = 'Halfing'
// export type HalfElf = 'Half-Elf'
// export type HalfOrc = 'Half-Orc'
// export type Human = 'Human'
// export type Tiefling = 'Tiefling'

import { Dwarf, HillDwarf, MountainDwarf } from './dwarf'
import { Elf, HighElf, WoodElf } from './elf'

export type Size = 'Small' | 'Medium' | 'Large' | 'Huge'
export type Races =
    | Dwarf
    | Dwarf<HillDwarf>
    | Dwarf<MountainDwarf>
    | Elf
    | Elf<WoodElf>
    | Elf<HighElf>

export type Languages =
    | 'Common'
    | 'Dwarvish'
    | 'Elvish'
    | 'Giant'
    | 'Gnomish'
    | 'Goblin'
    | 'Halfing'
    | 'Orc'
