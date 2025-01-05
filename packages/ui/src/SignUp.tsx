"use client"

import { Button } from "./button.tsx"
import { Input } from "./Input.tsx"
import axios from "axios"
import { useRef, useState } from "react"
import { useRouter } from "next/navigation"
import { Notification } from "./Notification.tsx"
import { motion } from "motion/react"
import { signIn  } from "next-auth/react"

export default function SignUp() {
    const router = useRouter()
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

    const registerUser = async () => {
        if(!emailRef.current?.value || !passwordRef.current?.value){
            return errNotification("Empty Input fields ")
            
        }
        try {
            // user try to register 
            const res = await axios.post('http://localhost:3000/api/auth/register', {
                email : emailRef.current?.value,
                password : passwordRef.current?.value
            })

            // if registration successfull then automatic login via next auth 
            if(res.status === 200){
                const result = await signIn('credentials', {
                    email : emailRef?.current?.value,
                    password : passwordRef?.current?.value,
                    redirect : false
                    // redirect false so no redirect to another page for error handle
                })

                if(result?.error){
                    errNotification("LogIn failed after registration")
                    // if err then notification
                    return
                }

                // if no err then redirect to dashboard page 
                router.push("/dashboard")
            }
            
            
            
        } catch (error) {
            if(axios.isAxiosError(error) && error.response){
                if(error.response.status === 409){
                    errNotification("user already exists !!")
                } else {
                    errNotification("An unexpected err || Invalid email Id")
                }
            } else {
                errNotification("may be the server is dead !! ")
            }
            
        }
    }

    
    

    return (
        <div>       
            <div className="flex flex-col justify-center items-center min-h-screen">
                <div className="w-72 md:w-96 p-4 space-y-6 bg-gradient-to-tr from-gray-400 to-blue-200 shadow-lg hover:shadow-blue-400 transition duration-600 rounded-md">
                    <h1 className="sm:text-3xl  text-xl font-[400] text-center">
                        Welcome to  LessonFlow
                    </h1>     

                    <Input placeholder="lessonFlow@gmail.com" Ref={emailRef} label='email' type="email" varientsType="default" />
                    <Input placeholder="Password..." label='Password' Ref={passwordRef} type="password" varientsType="default" />

                    <Button title="SIGNUP" varientstype="primary" onClick={() => registerUser()}/>
                </div>
            </div>
            <motion.div initial={{y : 20}} animate={{y : 0, scale : 1.01, transition : {duration : 1, ease : "easeIn"}}} className="absolute ui-bottom-10 right-3">
                {errmsg && <Notification msg={errmsg}/>}
            </motion.div>
       </div>
       
    )
}