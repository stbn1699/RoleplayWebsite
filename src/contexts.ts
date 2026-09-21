export const CONTEXT_NAMES = [
    'intrusion',
    'privateParty',
    'regularClient',
    'inhabitualClient',
    'ambiguousFittings',
    'unexpectedHacking',
    'carNotBroken',
    'technicalTalk',
    'dangerousWomen',
    'newCollection',
    'musicAndFood',
    'fashionShow',
    'strangeNewWork',
    'kinkyMeeting',
    'collocation',
    'returnedProtection',
    'relationshipEvolution',
    'privateCircle',
    'enchantedClothes',
    'magicPact',
    'strangeCopilot',
    'ClandestineSexShop',
    'sandServant',
    'shipRepair',
    'bountyHunters',
] as const

export type ContextName = typeof CONTEXT_NAMES[number]

export function isContextName(value: unknown): value is ContextName {
    return typeof value === 'string' && CONTEXT_NAMES.includes(value as ContextName)
}
