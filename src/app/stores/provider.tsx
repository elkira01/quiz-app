'use client'

import {type ReactNode, createContext, useRef, useContext} from "react";
import {useStore} from 'zustand'
import {type Store, createAppStore} from "@/app/stores/appStore/store";

export type AppStoreApi = ReturnType<typeof createAppStore>

export const AppStoreContext = createContext<AppStoreApi | undefined>(undefined)

export interface AppStoreProviderProps {
    children: ReactNode
}

export const AppStoreProvider = ({
    children,
}: AppStoreProviderProps) => {
    const storeRef = useRef<AppStoreApi>()


    if(!storeRef.current){
        storeRef.current = createAppStore()
    }

    return (
        <AppStoreContext.Provider value={storeRef.current}>
            {children}
        </AppStoreContext.Provider>
    )
}

export const useAppStore = <T,>(
    selector: (state: Store) => T,
) => {
    const appStoreContext = useContext(AppStoreContext)

    if(!appStoreContext){
        throw new Error('useAppStore must be used within AppStoreProvider')
    }

    return useStore(appStoreContext, selector);
}