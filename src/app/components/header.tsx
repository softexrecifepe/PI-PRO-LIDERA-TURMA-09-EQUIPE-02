import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import logolidera from '../resources/pro-lidera-skills-logo-transformed.jpeg';

export function Header() {
    return (
        <header className="bg-box flex items-center justify-between p-4 h-[64px] w-full m-0 fixed top-0 left-0 z-50">
            <div className="flex items-center">
                <Image 
                    src={logolidera} 
                    alt="Logo do Pro Lidera Skills" 
                    className="h-full" 
                    width={64} 
                    height={64} 
                />
                <h1 className="ml-4 font-semibold text-lg titulo-principal">Pro Lidera Skills</h1>
            </div>
            <nav className="flex items-center space-x-6">
                <Link href="/" aria-label="Página inicial" className="text-base hover:text-blue-500 transition-colors duration-200">
                    Página inicial
                </Link>
                <Link href="/sobre" aria-label="Sobre o programa" className="text-base hover:text-blue-500 transition-colors duration-200">
                    Sobre o programa
                </Link>
            </nav>
        </header>
    );
}
