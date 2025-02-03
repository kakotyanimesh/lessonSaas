"use client"
import TestCard from "@repo/ui/Test";
import * as motion from "motion/react-client"


export default function Testimonial(){
    const testimonialArray = [
        {
            image : "/images/personOne.jpg",
            name : "ANIMESH KAKOTY",
            schoolName : "TEZPUR UNIVERSITY",
            desc : "This platform has completely transformed how I prepare my lessons. The AI-generated materials are incredibly relevant and save me hours of work."
        },
        {
            image : "/images/personOne.jpg",
            name : "ANIMESH KAKOTY",
            schoolName : "TEZPUR UNIVERSITY",
            desc : "This platform has completely transformed how I prepare my lessons. The AI-generated materials are incredibly relevant and save me hours of work."
        },
        {
            image : "/images/personOne.jpg",
            name : "ANIMESH KAKOTY",
            schoolName : "TEZPUR UNIVERSITY",
            desc : "This platform has completely transformed how I prepare my lessons. The AI-generated materials are incredibly relevant and save me hours of work."
        }
    ]
    return (
        <div className="md:my-36 my-24 flex flex-col space-y-6 justify-center items-center text-center">
            <h1 className="text-4xl font-bold">What Teachers Say</h1>
            <div className="flex flex-col md:flex-row gap-16 ">
            {
                testimonialArray.map((test, index) => (
                    <TestCard name={test.name} image={test.image} schoolName={test.schoolName} desc={test.desc}/>
                ))
            }
           </div>
        </div>
    )
}