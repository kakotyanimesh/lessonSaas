"use client"
import { ArrowRight } from 'lucide-react';
import { motion } from "motion/react"

interface CardInterface {
    title : string,
    grade : string,
    subject : string,
    modifiedDate : string
}

export default function LpCard({title, grade, subject, modifiedDate} : CardInterface){
    return (
        <motion.div whileHover={{scale : 1.05}} className='group'>
            <div className="bg-white/50 w-fit p-10 rounded-md  shadow-2xl hover:shadow-white/50 transition duration-200 ">
                <div className='flex flex-row items-center justify-center gap-1'>
                    <h1 className="font-bold text-xl group-hover:text-blue-600">{title}</h1>
                    <ArrowRight  className='group-hover:text-blue-600' strokeWidth={1.7} />
                </div>
                <p className="text-sm font-semibold">{grade}. {subject}</p>

                <p>{modifiedDate}</p>
            </div>
        </motion.div>
    )
}