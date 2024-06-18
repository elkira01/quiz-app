import { createStore } from 'zustand/vanilla'

export type AppState = {
    loading: boolean
}

export type appReducers = {
    isLoading: (value: boolean) => void
}

export type Store = AppState & appReducers

export const defaultInitState: AppState = {
    loading: false,
}

export const createAppStore = (
    initState: AppState = defaultInitState,
) => {
    return createStore<Store>()((set) => ({
        ...initState,
        isLoading: () => set((state) => ({loading: state.loading}))
    }))
}