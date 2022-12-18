export const useLocalStorage = () => {
	const remove = key => {
		window.localStorage.removeItem(key)
		debugger
	}

	const add = (key, value) => {
		window.localStorage.setItem(key, value)
		debugger
	}

	const get = key => {
		window.localStorage.getItem(key)
	}

	return {
		remove,
		add,
		get,
	}
}
