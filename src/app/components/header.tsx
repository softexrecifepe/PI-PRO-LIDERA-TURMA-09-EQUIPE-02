import React from 'react'
import lidera from '../resources/Lidera.png'

export function Header() {
    return(
        <div className="w-[100%] ">
            <header className="bg-box p-0 h-32 flex gap-5 text-right w-[100%] m-0">
                <h1 className="my-auto ml-14 font-semibold pl-2 text-3xl">Pro Lidera Skills</h1>
                <h1 className="text-2xl ml-auto my-auto mr-14">Página inicial</h1>
                <h1 className="text-2xl my-auto mr-14">Sobre o programa</h1>
            </header>
        </div>
    )
}