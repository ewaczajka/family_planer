export const useLocalStorage = () => {
    const remove = key => {
        window.localStorage.removeItem(key)
    }

    const add = (key, value) => {
        window.localStorage.setItem(key, value)
    }

    const get = key => {
        return window.localStorage.getItem(key)
    }

    return {
        remove,
        add,
        get,
    }
}
