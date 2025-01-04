import React from "react"

interface InputProps {
    placeholder : string,
    Ref ?: React.Ref<HTMLInputElement>,
    type : string,
    varientsType : 'primary' | 'default',
    label : string
}


const varients = {
    'primary' : 'ui-p-2 ui-bg-red-400',
    'default' : 'ui-py-2 ui-px-3 ui-w-full ui-rounded-md ui-outline-none ui-border-2 hover:ui-border-slate-400 ui-transition ui-duration-600'
}

export const Input = ({placeholder, Ref, type, varientsType , label} : InputProps) => {
    return (
        <div className="ui-w-full ui-text-md  ui-text-black">
            <label className="ui-p-2">{label}</label>
            <input type={type} placeholder={placeholder} ref={Ref} className={`${varients[varientsType]}`} />
        </div>
    )
} 