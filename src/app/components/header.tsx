import React from 'react';
import Link from 'next/link';
import { ButtonTheme } from './button-theme';

export function Header() {
    return (
        <header className="bg-box flex items-center justify-between p-4 h-[64px] w-full m-0 top-0 left-0 z-50 dark:bg-boxd">
            <div className="flex items-center">
                <Link href="/" className="ml-4 font-semibold text-lg titulo-principal hover:text-blue-500 transition-colors duration-200">Pro Lidera Skills</Link>
            </div>
            <nav className="flex items-center space-x-6">
                <Link href="/" aria-label="Página inicial" className="text-base hover:text-blue-500 transition-colors duration-200">
                    Página inicial
                </Link>
                <Link href="/sobre" aria-label="Sobre o programa" className="text-base hover:text-blue-500 transition-colors duration-200">
                    Sobre o programa
                </Link>
            </nav>
            <ButtonTheme/>
        </header>
    );
}
