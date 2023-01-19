import { useEffect } from 'react'

export const useOnClickOutside = (ref, handler, ignoredRefs) => {
    useEffect(() => {
        const listener = e => {
            if (
                !ref.current ||
                ref.current.contains(e.target) ||
                ignoredRefs.current.includes(e.target)
            ) {
                return
            }
            handler()
        }
        document.addEventListener('click', listener, true)

        return () => {
            document.addEventListener('click', listener, true)
        }
    }, [])
}
