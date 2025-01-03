import { NextRequest, NextResponse } from "next/server";
import { userSchemaObject } from "@repo/zod"
import prisma from "@repo/db";
import bcrypt from 'bcryptjs'
// import { handleErrorUser } from "@repo/utilss/errorhandle";


// user creation 
export async function  POST(req : NextRequest) {
    const parsedObject = userSchemaObject.safeParse(await req.json())

    if(!parsedObject.success){
        return NextResponse.json(
            {
                msg : "zod error validation failed",
                err : parsedObject.error.errors
            },
            {status : 400}
        )
    }

    const { email, password } = parsedObject.data
    try {
        const hasedPassword = await bcrypt.hash(password , 10)
        const user = await prisma.user.create({
            data: {
                email,
                password : hasedPassword
            }, select : {
                email : true
            }
        })

        return NextResponse.json(
            {
                msg : 'user created',
                email : user.email
            },
            {status : 200}
        )
    } catch (error) {
        // @ts-ignore
        if(error instanceof Error && error.code === 'P2002'){
            return NextResponse.json(
                {msg : 'user already exits'},
                {status : 400}
            )
        }

        return NextResponse.json(
            {msg : `something went wrong while creating the user error : ${error}`},
            {status : 500}
        )
    }
}


// export function GET(){
//     return NextResponse.json({
//         msg : 'hii '
//     })
// }