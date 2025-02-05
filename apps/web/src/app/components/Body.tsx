"use client"
import { Button } from "@repo/ui/button";
import { motion } from "motion/react"


export default function Body(){
    return (
        <motion.div initial={{opacity : 0, y : +100}} whileInView={{opacity : 1, y: 1, }} className="flex flex-col space-y-10 justify-center items-center text-center md:my-36 my-16">
            
                <div className="flex flex-col space-y-5">
                    <h1 className="font-bold md:text-7xl text-5xl">Revolutionize Teaching with AI</h1>
                    <p className="md:text-xl text-lg">Create professional teaching materials in minutes, not hours</p>
                </div>
                <Button title="Get Started for free" varientstype="primary" onClick={() => alert("hii")}/>
           
        </motion.div>
    )
}