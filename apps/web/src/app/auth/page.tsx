import SignUp from "@repo/ui/SignUp";
import { getServerSession } from "next-auth";

export default function Page() {
    return (
        <div>
            <SignUp/>
        </div>
    )
}

// "use client"

// import { Button } from "@repo/ui/button"
// import { Input } from "@repo/ui/input"
// import axios from "axios"
// import { useRef, useState } from "react"
// import { Notification } from "@repo/ui/Notification"
// import { motion } from "motion/react"
// import { signIn  } from "next-auth/react"

// export default function SignUp() {
//     const emailRef = useRef<HTMLInputElement>(null)
//     const passwordRef = useRef<HTMLInputElement>(null)
//     const [errmsg, setErrorMsg] = useState("")
//     const [timerId, settimerId] = useState<NodeJS.Timer | null>(null)
    


//     const errNotification = (msg : string) => {
//         if(timerId){
//             // @ts-ignore
//             clearTimeout(timerId)
//         }

//         setErrorMsg(msg)

//         const id = setTimeout(() => {
//             setErrorMsg("")
//         }, 3000);

//         settimerId(id)
//     }

//     const registerUser = async () => {
//         if(!emailRef.current?.value && !passwordRef.current?.value){
//             return errNotification("Empty Input fields ")
//         }
//         try {
//             await axios.post('/api/auth/register', {
//                 email : emailRef.current?.value,
//                 password : passwordRef.current?.value
//             })

//             // console.log(user.data);
            
//             await signIn();
            
            
//         } catch (error) {
//             if(axios.isAxiosError(error) && error.response){
//                 if(error.response.status === 409){
//                     errNotification("user already exists !!")
//                 } else {
//                     errNotification("An unexpected err || Invalid email Id")
//                 }
//             } else {
//                 errNotification("may be the server is dead !! ")
//             }
            
//         }
//     }

    
    

//     return (
//         <div>       
//             <div className="flex flex-col justify-center items-center min-h-screen">
//                 <div className="w-72 md:w-96 p-4 space-y-6 bg-gradient-to-tr from-gray-400 to-blue-200 shadow-lg hover:shadow-blue-400 transition duration-600 rounded-md">
//                     <h1 className="sm:text-3xl  text-xl font-[400] text-center">
//                         Welcome to  LessonFlow
//                     </h1>     

//                     <Input placeholder="lessonFlow@gmail.com" Ref={emailRef} label='email' type="email" varientsType="default" />
//                     <Input placeholder="Password..." label='Password' Ref={passwordRef} type="password" varientsType="default" />

//                     <Button title="SIGNUP" varientstype="primary" onClick={() => registerUser()}/>
//                 </div>
//             </div>
//             <motion.div initial={{y : 20}} animate={{y : 0, scale : 1.01, transition : {duration : 1, ease : "easeIn"}}} className="absolute ui-bottom-10 right-3">
//                 {errmsg && <Notification msg={errmsg}/>}
//             </motion.div>
//        </div>
       
//     )
// }