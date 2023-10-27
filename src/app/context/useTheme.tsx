'use client'

import { PropsWithChildren, createContext, useContext, useState } from 'react'

type Themes = "dark" | "light" | "system"
type ThemeState = {
    theme: Themes
    setTheme(theme: Themes): void
}
type ThemeProviderProps = {
    initialTheme: Themes
} & PropsWithChildren

const ThemeContext = createContext<ThemeState | null>(null)

const useTheme = ():ThemeState => {
    
    const context = useContext(ThemeContext)

    if(!context){
        throw new Error("Please use ThemeProvider in parent component")
    }

    return context
}

export const ThemeProvider = (props: ThemeProviderProps) => {
    const [theme, setTheme] = useState<Themes>(props.initialTheme)
    return (
        <ThemeContext.Provider value={{ theme, setTheme }}>
            {props.children}
        </ThemeContext.Provider>
    )
}

export default useTheme