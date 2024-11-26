import Link from 'next/link';
import React from 'react';

export function Button({ buttonText, href, onClick, disabled = false, type }: {buttonText: string, href?: string, onClick?: () => void, disabled?: boolean, type: any}) {
    return (
        <button 
            disabled={disabled} 
            type={type}
            onClick={onClick}  // Associa a função onClick ao botão
            className={`rounded-xl bg-gradient-to-r from-button-orange to-button-green dark:bg-gradient-to-r dark:from-button-oranged dark:to-button-greend px-1 py-2 font-semibold shadow-md`}
        >
            {href ? (
                <Link href={href} className='w-full h-full rounded-lg px-4 py-1 bg-box dark:bg-boxd transition ease-in-out delay-75 hover:bg-slate-200 dark:hover:bg-slate-900 duration-300'>
                    {buttonText}
                </Link>
            ) : (
                <span className='w-full h-full rounded-lg px-4 py-1 bg-box dark:bg-boxd transition ease-in-out delay-75 hover:bg-slate-200 dark:hover:bg-slate-800 duration-300'>
                    {buttonText}
                </span>
            )}
        </button>
    );
}
