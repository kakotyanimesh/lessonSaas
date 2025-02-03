import { z } from "zod"

export const userSchemaObject = z.object({
    email : z.string().email({message : "provide a valid email address"}),
    password : z.string().max(25, {message: "max 20 character of password is allowed"})
})


export const updateUserSchemaObject = z.object({
    email : z.string().email({message : "provide a valid email address"}),
    password : z.string().max(25, {message: "max 20 character of password is allowed"}),
    fullName : z.string().min(4, {message : "min 4 character needed"}).max(20, {message : "max 20 character is allowed"}),
    Institute : z.string().min(10, {message : "min 10 character is needed"}).max(40, {message : "max 40 of institute name"}),
})


export const LessonPlanObject = z.object({
    subject : z.string().max(30, {message : 'max 30 character of subject is allowed'}),
    topic : z.string().max(30, {message : "max 30 character of topic is allowed"}),
    class : z.number(),
    lessonPlanLink : z.string()
})