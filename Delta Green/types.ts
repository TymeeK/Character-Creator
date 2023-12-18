interface Agent {
    name: string
    stats: Statistics<number>
    derivedStats?: DerivedStats
}

interface Statistics<T extends number> {
    str: T
    dex: T
    con: T
    pow: T
    cha: T
}

type DerivedStats = {
    hp: number
    wp: number
    san: number
    bp: number
}

type CalculateDerivedStats<T extends Statistics<number>> = (
    stats: T
) => DerivedStats

const calculateStats: CalculateDerivedStats<Statistics<number>> = stats => {
    const sanity = stats.pow * 5
    const derivedStats: DerivedStats = {
        hp: Math.ceil((stats.str + stats.con) / 2),
        wp: stats.pow,
        san: stats.pow * 5,
        bp: sanity - stats.pow,
    }
    return derivedStats
}
