import SignIn from "@repo/ui/SignIn";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

export default async function signIn() {
    const session = await getServerSession()

    if(session){
        redirect("/dashboard")
    }
    
    return (
        <SignIn/>
    )
}