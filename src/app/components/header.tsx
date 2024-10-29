import React from 'react'
import Link from 'next/link'

export function Header() {
    return(
            <header className="bg-box p-0 h-32 flex gap-5 text-right w-[100%] m-0 header-titulo">
                <h1 className="my-auto ml-14 font-semibold pl-2 text-3xl">Pro Lidera Skills</h1>
                <Link href="/" className="text-2xl ml-auto my-auto mr-14">Página inicial</Link>
                <h1 className="text-2xl my-auto mr-14">Sobre o programa</h1>
            </header>
    )
}