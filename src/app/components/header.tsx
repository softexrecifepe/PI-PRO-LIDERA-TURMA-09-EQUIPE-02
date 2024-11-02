import React from 'react'
import Link from 'next/link'

export function Header() {
    return(
            <header className="bg-box p-0 h-[64px] flex gap-5 text-right w-[100%] m-0 header-titulo">
                <Link href="/" className="my-auto ml-14 font-semibold pl-2 text-lg">Pro Lidera Skills</Link>
                <Link href="/" className="text-base ml-auto my-auto mr-14">Página inicial</Link>
                <h1 className="text-base my-auto mr-14">Sobre o programa</h1>
            </header>
    )
}