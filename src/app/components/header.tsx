import React from 'react'
import lidera from '../resources/Lidera.png'

export function Header() {
    return(
        <div className="w-[100%] ">
            <header className="bg-header p-0 h-32 flex gap-5 text-right w-[100%] m-0">
                <img className="w-24 h-24 ml-10 my-auto" src={lidera.src}/>
                <h1 className="my-auto font-semibold pl-2 text-3xl">Pro Lidera Skills</h1>
                <h1 className="text-3xl ml-auto my-auto mr-14">Sobre o programa</h1>
            </header>
        </div>
    )
}