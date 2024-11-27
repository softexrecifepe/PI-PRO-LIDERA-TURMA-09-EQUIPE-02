"use client"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMoon } from '@fortawesome/free-solid-svg-icons'
import { faSun } from '@fortawesome/free-solid-svg-icons'
import { useTheme } from "next-themes"

export function ButtonTheme(){
    const { systemTheme, theme, setTheme } = useTheme();
    const currentTheme = theme === "system" ? systemTheme : theme;

    
    return(
        <div className='rounded-xl shadow-md overflow-hidden'>
            <button className=' bg-box dark:bg-boxd' onClick={() => setTheme(currentTheme === "dark" ? "light" : "dark")}>
            <FontAwesomeIcon className="rounded-xl text-box  bg-boxd px-4 py-2 m-1" icon={faSun}/> 
            <FontAwesomeIcon className='rounded-xl dark:text-boxd  dark:bg-box px-4 py-2 m-1' icon={faMoon}/>
            </button>
        </div>
    )
}