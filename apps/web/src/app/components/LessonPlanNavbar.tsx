"use client"
import { Button } from '@repo/ui/button';
import { BookCopy } from 'lucide-react';


export default function NavbarLp(){
    return (
        <div className='flex flex-col justify-between '>
            <div className='flex flex-col gap-10'>
                <BookCopy size={36} color="#1657c0" absoluteStrokeWidth />
                <h1>Lesson Planner</h1>
            </div>
            <div>
                <Button title='createLessonPlan' varientstype='primary' onClick={() => alert("asdasd")} />
            </div>
        </div>
    )
}