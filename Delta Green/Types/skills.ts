type Skills<T> = {
    name: T
    base: number
    currentLevel?: number
}

type Accounting = 'Accounting'
type Anthropology = 'Anthropology'

const accounting: Skills<Accounting> = {
    name: 'Accounting',
    base: 10,
    currentLevel: 10,
}

const anthropology: Skills<Anthropology> = {
    name: 'Anthropology',
    base: 10,
    currentLevel: 10,
}
