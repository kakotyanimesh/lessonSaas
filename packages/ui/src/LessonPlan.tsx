"use client"
import React, { Ref } from "react";
import { Button } from "./button";
import { Input } from "./Input";

interface ButtonProps {
    onClick : (event : React.MouseEvent<HTMLButtonElement, MouseEvent>) => void,
    subjectRef : React.Ref<HTMLInputElement>,
    topicRef : React.Ref<HTMLInputElement>,
    gradeRef : React.Ref<HTMLInputElement>,
    durationRef : React.Ref<HTMLInputElement>,
}

export default function LessonPlan({onClick, subjectRef, topicRef, gradeRef, durationRef} : ButtonProps){
    return (
        <div className="ui-w-72 ui-flex ui-flex-col ui-justify-center ui-items-center ui-space-y-5">
            <Input Ref={subjectRef} label="Subject" type="text" varientsType="default" placeholder="Mathematics" />
            <Input Ref={topicRef} label="Topic" type="text" varientsType="default" placeholder="Algbra" />
            <Input Ref={gradeRef} label="Grade" type="text" varientsType="default" placeholder="SIX" />
            <Input Ref={durationRef} label="durartion of class" type="text" varientsType="default" placeholder="30" />
            <div className="ui-flex ui-flex-row ui-gap-10">
                <Button title="cancel" varientstype="secondary" onClick={onClick}/>
                <Button title="Generate a lessonPlan" varientstype="primary" onClick={onClick}/>
            </div>
        </div>
    )
}