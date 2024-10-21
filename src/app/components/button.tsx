"use client";
import React from 'react';
interface ButtonProps {
    onClick: () => void;
    label?: string;
    disabled?: boolean;
}
export function Button({onClick, label = "Cadastre-se!", disabled = false}: ButtonProps) {
    return (
        <button onClick={onClick} disabled={disabled} className={`rounded-xl bg-gradient-to-r from-button-orange to-button-green p-1 font-semibold shadow-md transition ease-in-out duration-300`}>
           <div className='w-full h-full rounded-lg px-4 py-1 bg-box hover:bg-slate-200'>{label}</div>
        </button>
    )
}