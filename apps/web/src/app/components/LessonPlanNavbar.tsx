"use client"
import { Button } from '@repo/ui/button';
import LessonPlan from '@repo/ui/lessonPlan';
import { BookCopy } from 'lucide-react';
import { useState } from 'react';


export default function NavbarLp(){
    const [openModal, setOpenModal] = useState(false)
    return (
        <div className='flex flex-row justify-between  md:mx-20 mx-10 my-10 items-center '>
            <div className='flex flex-row md:gap-10 items-center'>
                <BookCopy size={36} color="#1657c0" absoluteStrokeWidth />
                <h1 className='md:text-3xl font-bold'>Lesson Planner</h1>
            </div>
            <div>
                <Button title='create Lesson Plan' varientstype='primary' onClick={() => setOpenModal(!openModal)} />
            </div>
            {
                openModal && <div className='absolute flex justify-center items-center'>
                    <LessonPlan/>
                </div>
            }
        </div>
    )
}