import { isCharacter, isContext, type Character, type Context } from '../types/data'

const DATA_PATHS = {
    characters: '/Data/Characters.json',
    contexts: '/Data/Contexts.json',
} as const

async function loadJson<T>(
    path: string,
    validate: (value: unknown) => value is T,
    signal: AbortSignal,
): Promise<T[]> {
    const response = await fetch(path, { signal })

    if (!response.ok) {
        throw new Error(`Unable to load ${path} (${response.status})`)
    }

    const data: unknown = await response.json()

    if (!Array.isArray(data) || !data.every(validate)) {
        throw new Error(`Invalid data format in ${path}`)
    }

    return data
}

export function loadCharacters(signal: AbortSignal) {
    return loadJson<Character>(DATA_PATHS.characters, isCharacter, signal)
}

export function loadContexts(signal: AbortSignal) {
    return loadJson<Context>(DATA_PATHS.contexts, isContext, signal)
}
