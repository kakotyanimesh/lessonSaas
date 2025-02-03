import { ReactElement, ReactNode } from "react"

interface CardInterface {
    textH1 : string,
    textP1 : string,
    icons ?: ReactElement,
    width ?:string
}


export default function Card({textH1, textP1, icons, width} : CardInterface){
    return (
        <div className={`ui-shadow-md ui-p-14 ui-rounded-md ui-flex ui-flex-col ui-justify-center ui-items-center ui-text-center ui-w-[${width}px]`}>
            <div>{icons}</div>
            <h1 className="ui-text-2xl ui-font-bold">{textH1}</h1>
            <p className="ui-text-sm">{textP1}</p>
        </div>
    )
}