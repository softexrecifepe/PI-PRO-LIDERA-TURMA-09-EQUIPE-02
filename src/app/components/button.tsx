import Link from 'next/link';
import React from 'react';

interface ButtonProps {
    buttonText: string;
    href?: string;  // Torna o href opcional
    onClick?: () => void;  // Adiciona a função onClick opcional
    disabled?: boolean;
}

export function Button({ buttonText, href, onClick, disabled = false }: ButtonProps) {
    return (
        <button 
            disabled={disabled} 
            onClick={onClick}  // Associa a função onClick ao botão
            className={`rounded-xl bg-gradient-to-r from-button-orange to-button-green px-1 py-2 font-semibold shadow-md`}
            type='submit'
            form="register"
            value="submit"
        >
            {href ? (
                <Link href={href} className='w-full h-full rounded-lg px-4 py-1 bg-box transition ease-in-out delay-75 hover:bg-slate-200 duration-300'>
                    {buttonText}
                </Link>
            ) : (
                <span className='w-full h-full rounded-lg px-4 py-1 bg-box transition ease-in-out delay-75 hover:bg-slate-200 duration-300'>
                    {buttonText}
                </span>
            )}
        </button>
    );
}
