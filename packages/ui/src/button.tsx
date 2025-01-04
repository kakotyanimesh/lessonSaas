"use client"

import React from "react"

interface ButtonProps {
    title : string,
    onClick : (event : React.MouseEvent<HTMLButtonElement, MouseEvent>) => void,
    varientstype : "default" | "primary" | "secondary"
}

const varients = {
    "default" : "ui-bg-blue-400 ",
    "primary" : "ui-bg-gradient-to-r ui-from-cyan-500 ui-to-blue-700 ui-text-white ui-px-2 ui-py-1 ui-rounded-md",
    "secondary" :"ui-border-2 border-blue-400 ui-p-3"
}


export const Button = ({title, onClick, varientstype} : ButtonProps) => {
    return (
        <button onClick={onClick} className={`${varients[varientstype]} ui-w-full`}>
            {title} 
        </button>
    )
}