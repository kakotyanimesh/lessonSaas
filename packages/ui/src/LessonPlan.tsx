"use client"
import { Button } from "./button";
import { Input } from "./Input";

export default function LessonPlan(){
    return (
        <div className="ui-w-72 ui-flex ui-flex-col ui-justify-center ui-items-center ui-space-y-5">
            <Input label="Subject" type="text" varientsType="default" placeholder="Mathematics" />
            <Input label="Topic" type="text" varientsType="default" placeholder="Algbra" />
            <Input label="Grade" type="text" varientsType="default" placeholder="SIX" />
            <Input label="durartion of class" type="text" varientsType="default" placeholder="30" />
            <Button title="Generate a lessonPlan" varientstype="primary" onClick={() => alert("hiiiaads")}/>
        </div>
    )
}