"use client"
import { ReactElement } from "react"
import { Button } from "./button"

interface PricingTypes {
    tier : "Free" | "Pro",
    price : string,
    features : Feature[],
    icons : ReactElement
}


interface Feature{
    featureName : string
}


export default function PricingCard({tier, price, features, icons} : PricingTypes) {
    return (
        <div className={`${tier === "Pro" ? "ui-border-blue-900 ui-border-2" : ""} ui-w-[300px] md:ui-w-[500px] ui-bg-gradient-to-t ui-px-10 ui-py-10 ui-rounded-2xl ui-bg-blue-100 ui-space-y-3`}>
            <h1 className="ui-font-bold ui-text-3xl">{tier}</h1>
            <h2 className="font-bold ui-text-3xl">${price}</h2>
            {
                features.map((feature, index) => (
                    <div className="flex ui-flex-row ui-text-xl ui-items-center ui-gap-2">
                        <div>{icons}</div>
                        <h1>{feature.featureName}</h1>
                    </div>
                ))
            }
            <div className={`flex ui-justify-center  ${tier === "Free" ? "ui-pt-[40px]" : ""}`}>
            <Button style="ui-w-full" title="Get started" varientstype={`${tier === "Pro" ? "primary" : "secondary"}`} onClick={() => alert("adad")}/>
            </div>

        </div>
    )
}