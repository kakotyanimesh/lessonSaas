"use client"

import { useRef, useState } from "react"
import { Button } from "./button"
import { Input } from "./Input"
import { motion } from "motion/react"
import { Notification } from "./Notification"
import { signIn } from "next-auth/react"

export default function SignIn () {
    const emailRef = useRef<HTMLInputElement>(null)
    const passwordRef = useRef<HTMLInputElement>(null)
    const [errmsg, setErrorMsg] = useState("")
    const [timerId, settimerId] = useState<NodeJS.Timer | null>(null)

    const errNotification = (msg : string) => {

        if(timerId){
            // @ts-ignore
            clearTimeout(timerId)
        }

        setErrorMsg(msg)
        const id = setTimeout(() => {
            setErrorMsg("")
        }, 3000);

        settimerId(id)
    }


    

    const logInUser = async() => {
        if(!emailRef.current?.value || !passwordRef.current?.value){
            return errNotification("Empty Input fields ")
        }
        try {
            const res = await signIn("credentials", {
                email : emailRef.current.value,
                password : emailRef.current.value,
                redirect : true,
                callbackUrl : "/dashboard"
            })
            
        } catch (error) {
            errNotification("signIn falied idk why try again after sometime")
        }
    }

    return (
        <div className="flex ui-justify-center ui-items-center ui-min-h-screen">
            <div className="ui-w-72 md:ui-w-96 p-4 ui-space-y-6 ui-bg-gradient-to-tr ui-from-gray-400 ui-to-blue-200 ui-shadow-lg hover:ui-shadow-blue-400 transition ui-duration-600 ui-rounded-md">
                <h1 className="sm:ui-text-3xl ui-text-xl font-[400] ui-text-center">Welcome to  LessonFlow</h1>
                <Input placeholder="LessonFlow@gmail.com" Ref={emailRef} varientsType="default" type="email" label="email" />
                <Input placeholder="password" varientsType="default" Ref={passwordRef} type="password" label="password"/>
                <Button title="sign in" onClick={() => logInUser()} varientstype="primary" />
                <div>
                <Button title="signin with google" onClick={() => signIn("google")} varientstype="primary"/>
                </div>
            </div>
            
            <motion.div initial={{y : 20}} animate={{y : 0, scale : 1.01, transition : {duration : 1, ease : "easeIn"}}} className="absolute ui-bottom-10 right-3">
                {errmsg && <Notification msg={errmsg}/>}
            </motion.div>
        </div>
    )
}