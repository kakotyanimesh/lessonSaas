import prisma from "@repo/db";
import { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { NextResponse } from "next/server";
import bcrypt from 'bcryptjs'


export const authOptions : NextAuthOptions = {
    providers : [
        CredentialsProvider({
            name : 'email',
            credentials : {
                email : {label : "email", type : "email" , placeholder: "animeshkakoty33@gmail.com"},
                password : { label : "password" , type : "password", placeholder : "LessonFlow@69"}
            },
            // @ts-ignore
            async authorize(credentials){
                if(!credentials?.email || !credentials?.password){
                    throw new Error("Please provide all required credentials ")
                }

                try {
                    const user = await prisma.user.findUnique({
                        where : {
                            email : credentials.email
                        }
                    })

                    if(!user){
                        throw new Error("User not found ")
                    }

                    const isvalid = await bcrypt.compare(credentials.password , user.password)

                    if(!isvalid){
                        throw new Error("Invalid password ")
                    }
                    
                    return {
                        id : user.id,
                        email : user.email
                    }
                    // this two things returns in the token format
                } catch (error) {
                    throw error
                }
            },

        })
    ],
    /**
         * Flow 
         * providers authorize method will return information like user id and email in a tokan format
         * that token is only handle by the session method of callback object 
         * so in the session method => 1. session and 2. token 
         * create a object in session ( session.user ) and store the information like email and id from the token that the authorized method returns
         * in the jwt method again extract the info like email etc and store it in the token which is a proper jwt token
         * things to remember 
            * authorized method return info in tokenized format
            * access those token in session method of callback object
            * make object name user inside session (as user is available in jwt method) to store the info from the token of authorized method
            * return the session
            * in the jwt method from the user object of session extract the user information and store it in the pure jwt token that we get from the jwt method
    */
    callbacks : {
        async jwt({token, user}){
            if(user){
                token.sub = user.id
                token.email = user.email
            }
            return token
        },

        async session({session, token} : any){
            session.user.id = token.sub,
            session.user.email = token.email 

            return session
            
        }
    },
    pages : {
        signIn : '/signin'
    } ,//change to default page
    session : {
        strategy : 'jwt',
        maxAge : 30 * 24 * 60 * 60
    },
    secret : process.env.AUTH_SECRET || 'secreTe'
}