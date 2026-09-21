import { useEffect, useState } from 'react'

type ResourceState<T> = {
    data: T | null
    isLoading: boolean
    hasError: boolean
}

export function useJsonResource<T>(load: (signal: AbortSignal) => Promise<T>) {
    const [state, setState] = useState<ResourceState<T>>({
        data: null,
        isLoading: true,
        hasError: false,
    })

    useEffect(() => {
        const controller = new AbortController()

        setState({ data: null, isLoading: true, hasError: false })

        load(controller.signal)
            .then((data) => setState({ data, isLoading: false, hasError: false }))
            .catch((error: unknown) => {
                if (error instanceof DOMException && error.name === 'AbortError') return
                setState({ data: null, isLoading: false, hasError: true })
            })

        return () => controller.abort()
    }, [load])

    return state
}
