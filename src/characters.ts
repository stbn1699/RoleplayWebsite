export const CHARACTER_NAMES = [
    'elina',
    'eliot',
    'robin',
    'finn',
    'lyra',
    'luiza',
    'cypher',
    'thalia',
    'iris',
    'alix',
    'cecily',
    'inessa',
    'rae',
] as const

export type CharacterName = typeof CHARACTER_NAMES[number]

export function isCharacterName(value: unknown): value is CharacterName {
    return typeof value === 'string' && CHARACTER_NAMES.includes(value as CharacterName)
}
