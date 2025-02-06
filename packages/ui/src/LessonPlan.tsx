"use client"
import { Button } from "./button";
import { Input } from "./Input";

export default async function LessonPlan(){
    return (
        <div>
            <Input label="Subject" type="text" varientsType="default" placeholder="Mathematics" />
            <Input label="Topic" type="text" varientsType="default" placeholder="Algbra" />
            <Input label="Grade" type="text" varientsType="default" placeholder="SIX" />
            <Input label="durartion of class" type="text" varientsType="default" placeholder="30" />
            <Button title="Generate a lessonPlan" varientstype="primary" onClick={() => alert("hiii")}/>
        </div>
    )
}