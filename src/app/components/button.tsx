"use client";
import Link from 'next/link';
import React from 'react';

export function Button({label = "Cadastre-se!", disabled = false}) {
    return (
        <button disabled={disabled} className={`rounded-xl bg-gradient-to-r from-button-orange to-button-green px-1 py-2 font-semibold shadow-md transition ease-in-out duration-300`}>
           <Link href="/quests1-2" className='w-full h-full rounded-lg px-4 py-1 bg-box hover:bg-slate-200'>{label}</Link>
        </button>
    )
}