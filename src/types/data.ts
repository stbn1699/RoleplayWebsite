import {type CharacterName, isCharacterName} from '../characters'
import {isContextName} from '../contexts'

export type Character = {
    id: number
    name: CharacterName
    age: number
}

export type Context = {
    id: number
    name: string
    universe: string[]
    nsfw: boolean
    character: string[]
    characterId?: number | number[]
}

export function isCharacter(value: unknown): value is Character {
    if (!value || typeof value !== 'object') return false

    const character = value as Record<string, unknown>
    return (
        typeof character.id === 'number' &&
        isCharacterName(character.name) &&
        typeof character.age === 'number'
    )
}

export function isContext(value: unknown): value is Context {
    if (!value || typeof value !== 'object') return false

    const context = value as Record<string, unknown>
    return (
        typeof context.id === 'number' &&
        isContextName(context.name) &&
        Array.isArray(context.universe) &&
        context.universe.every((item) => typeof item === 'string') &&
        typeof context.nsfw === 'boolean' &&
        Array.isArray(context.character) &&
        context.character.every((item) => isCharacterName(item)) &&
        (context.characterId === undefined ||
            typeof context.characterId === 'number' ||
            (Array.isArray(context.characterId) &&
                context.characterId.every((item) => typeof item === 'number')))
    )
}
