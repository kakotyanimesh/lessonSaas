"use client"

import React from "react"

interface ButtonProps {
    title : string,
    onClick : (event : React.MouseEvent<HTMLButtonElement, MouseEvent>) => void,
    varientstype : "default" | "primary" | "secondary",
    style ?: string
}

const varients = {
    "default" : "ui-bg-blue-400 font-bold",
    "primary" : "ui-bg-gradient-to-r ui-from-cyan-500 ui-to-blue-700 ui-text-white ui-px-2 ui-py-2 ui-rounded-md",
    "secondary" :"ui-bg-slate-300 ui-rounded-md ui-px-2 ui-py-2 md:ui-text-sm"
}


export const Button = ({title, onClick, varientstype,style} : ButtonProps) => {
    return (
        <button onClick={onClick} className={`${varients[varientstype]} ${style}`}>
            {title} 
        </button>
    )
}