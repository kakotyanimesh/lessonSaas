"use client"

import { Button } from "@repo/ui/button"
import { Input } from "@repo/ui/input"
import axios from "axios"
import { useRef } from "react"
import { Notification } from "@repo/ui/Notification"

export default function SignUp() {
    const emailRef = useRef<HTMLInputElement>(null)
    const passwordRef = useRef<HTMLInputElement>(null)


    const registerUser = async () => {
        if(!emailRef.current?.value && !passwordRef.current?.value){
            return alert("empty")
        }
        try {
            const user = await axios.post('http://localhost:3000/api/auth/register', {
                email : emailRef.current?.value,
                password : passwordRef.current?.value
            })

            console.log(user.data);
            
        } catch (error) {
            console.log(error);
        }
    }

    return (        
       <div className="relative flex flex-col justify-center items-center min-h-screen">
         <div className="w-72 md:w-96 p-4 space-y-6 bg-gradient-to-tr from-gray-400 to-blue-200 shadow-lg hover:shadow-blue-400 transition duration-600 rounded-md">
            <h1 className="sm:text-3xl  text-xl font-[400] text-center">
                Welcome to  LessonFlow
            </h1>     
             
            <Input placeholder="lessonFlow@gmail.com" Ref={emailRef} label='email' type="email" varientsType="default" />
            <Input placeholder="Password..." label='Password' Ref={passwordRef} type="password" varientsType="default" />
            
            <Button title="SIGNUP" varientstype="primary" onClick={() => registerUser()}/>
        </div>
        <div className="abosolute top-10">
            <Notification msg="user already exist"/>
        </div>
       </div>
       
       
    )
}