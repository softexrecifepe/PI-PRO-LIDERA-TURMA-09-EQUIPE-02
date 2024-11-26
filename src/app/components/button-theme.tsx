"use client"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMoon } from '@fortawesome/free-solid-svg-icons'
import { faSun } from '@fortawesome/free-solid-svg-icons'
import { useTheme } from "next-themes"

export function ButtonTheme(){
    const { setTheme } = useTheme();
    return(
        <div>
            <button onClick={() => setTheme("light")}><FontAwesomeIcon icon={faSun}/></button>
            <button onClick={() => setTheme("dark")}><FontAwesomeIcon icon={faMoon}/></button>
        </div>
    )

    
}