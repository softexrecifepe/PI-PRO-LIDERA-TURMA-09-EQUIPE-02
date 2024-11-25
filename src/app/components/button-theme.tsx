"use client"

import { useTheme } from "next-themes"

export function ButtonTheme(){
    const { setTheme } = useTheme();
    return(
        <div>
            <button onClick={() => setTheme("light")}>light</button>
            <button onClick={() => setTheme("dark")}>dark</button>
        </div>
    )

    
}