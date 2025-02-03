import Image from "next/image";
import { fontOne } from "../layout";

export default function Works(){
    return (
        <div className={fontOne.className}>
            <div className="flex justify-center  items-center text-center md:text-4xl text-md bg-gradient-to-r from-cyan-800 via-pink-600 to-blue-700 text-transparent bg-clip-text font-bold">
                <h1>We make it                    
                    easy for educators and their students to create, customize, and manage AI-powered learning materials effortlessly.</h1>
            </div>
        </div>
    )
}