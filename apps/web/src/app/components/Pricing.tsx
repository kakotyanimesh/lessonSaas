import PricingCard from "@repo/ui/pricing";
import { BookOpen } from 'lucide-react';
import { fontOne } from "../layout";


export default function Pricing(){
    const featuresArrayfree = [
        {
            featureName : "5 AI-generated lessons/month"
        },
        
        {
            featureName : "Basic worksheet templates"
        },
        
        {
            featureName : "Community support"
        }
        
    ]

    const featuresArrayPaid = [
        {
            featureName : "Unlimited AI generations"
        },
        
        {
            featureName : "Advanced customization"
        },
        
        {
            featureName : "Priority support"
        },
        {
            featureName : "Analytics dashboard"
        },
    ]
    return (
        <div>
            <div className="flex md:flex-row flex-col justify-center gap-20 md:mt-36 mt-24 ">
            <PricingCard tier="Free" price="0" features={featuresArrayfree} icons={<BookOpen size={20} color="#1d10e0" strokeWidth={2.5} />}/> 
            <PricingCard tier="Pro" price="0" features={featuresArrayPaid} icons={<BookOpen size={20} color="#1d10e0" strokeWidth={2.5} />}/> 
        </div>
        </div>
    )
}