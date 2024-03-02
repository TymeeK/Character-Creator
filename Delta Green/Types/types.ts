interface Agent<T> {
  name: string
  stats: Statistics<number>
  derivedStats?: DerivedStats<number>
  profession: T
}

export type Statistics<T extends number> = {
  Strength: T
  Dexterity: T
  Constitution: T
  Intelligence: T
  Power: T
  Charisma: T
}

type DerivedStats<T extends number> = {
  hp: T
  wp: T
  san: T
  bp: T
}

type CalculateDerivedStats<T extends Statistics<number>> = (
  stats: T
) => DerivedStats<number>
