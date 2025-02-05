import { LessonPlanObject } from "@repo/common/types";
import { error } from "console";
import { NextRequest, NextResponse } from "next/server";
import { GoogleGenerativeAI } from "@google/generative-ai";
import { conceptualpart, curricularParagraph, essentialQuestionPart, factualKnowledgepart, formativeAssesmentPart, overview, proceduralpart, summarisationPart, teachingPointPart } from "../../../lib/prompt";
import { data, div, sub } from "motion/react-client";
import prisma from "@repo/db";
import { getServerSession } from "next-auth";
import { createDocs } from "../../../lib/googledocs";





export async function POST(req : NextRequest) {
    const parsedObject = LessonPlanObject.safeParse(await req.json())
    console.log(parsedObject.data);
    
    const session = await getServerSession();

    
    if(!session || !session.user?.email || !session.accessToken){
        return NextResponse.json({
            msg : "no email od"
        })
    }


    if(!parsedObject.success){
        return NextResponse.json(
            {
                msg : `zod error : ${JSON.stringify(parsedObject.error.errors)}`
            },
            {status : 500}
        )
    }

    const { subject, topic, grade, duration } = parsedObject.data

    const overviewPrompt = overview({subject, topic, grade})
    const curricularParagraphPrompt = curricularParagraph({subject, topic, grade})
    const factualKnowledgepartPrompt = factualKnowledgepart({subject, topic, duration})
    const conceptualpartPrompt = conceptualpart({subject, topic, duration})
    const proceduralpartPrompt = proceduralpart({subject, topic, duration})
    const essentialQuestionPartPrompt = essentialQuestionPart({subject, topic, duration})
    const teachingPointPartPrompt = teachingPointPart({subject, topic, duration})
    const formativeAssesmentPartPrompt = formativeAssesmentPart({subject, topic, duration})
    const summarisationPartPrompt = summarisationPart({subject, topic, duration})

    try {
        const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY as string)
        const model = genAI.getGenerativeModel({model : "gemini-1.5-flash-8b"})

        const result = await model.generateContent(overviewPrompt)
        // const ress = JSON.parse(result as unknown as string)

        
        const ress = result.response.candidates![0].content.parts[0].text


        const [overview, curricularParagraph, factualKnowledgepart, conceptualpart, proceduralpart, essentialQuestionPart, teachingPointPart, formativeAssesmentPart, summarisationPart ] = await Promise.all([
            model.generateContent(overviewPrompt),
            model.generateContent(curricularParagraphPrompt),
            model.generateContent(factualKnowledgepartPrompt),
            model.generateContent(conceptualpartPrompt),
            model.generateContent(proceduralpartPrompt),
            model.generateContent(essentialQuestionPartPrompt),
            model.generateContent(teachingPointPartPrompt),
            model.generateContent(formativeAssesmentPartPrompt),
            model.generateContent(summarisationPartPrompt)

        ])

        const overviewText = overview.response.candidates![0].content.parts[0].text
        const curricularParagraphText = curricularParagraph.response.candidates![0].content.parts[0].text
        const factualKnowledgepartText = factualKnowledgepart.response.candidates![0].content.parts[0].text
        const conceptualpartText = conceptualpart.response.candidates![0].content.parts[0].text
        const proceduralpartText = proceduralpart.response.candidates![0].content.parts[0].text
        const essentialQuestionPartText = essentialQuestionPart.response.candidates![0].content.parts[0].text

        const teachingPointPartText = teachingPointPart.response.candidates![0].content.parts[0].text
        const formativeAssesmentPartText = factualKnowledgepart.response.candidates![0].content.parts[0].text
        const summarisationPartText = summarisationPart.response.candidates![0].content.parts[0].text
        // ! will remove the possible undefined error 


        const fullContnent  = `
            Overview : ${overviewText}
            Curricular Paragraph : ${curricularParagraphText}
            Factual Knowledge: ${factualKnowledgepartText}
            Conceptual Part: ${conceptualpartText}
            Procedural Part: ${proceduralpartText}
            Essential Question: ${essentialQuestionPartText}
            Teaching Points: ${teachingPointPartText}
            Formative Assessment: ${formativeAssesmentPartText}
            Summarisation: ${summarisationPartText}
        `

        const fileName = `${subject}-${topic}-${grade}`

        const googleDocsId = await createDocs(fileName, fullContnent, session.accessToken)


        const lessonPlan = await prisma.lessonPlan.create({
            data:{
                userEmail : session?.user?.email,
                subjectType : subject,
                topic : topic,
                grade : grade,
                googleDocsId : googleDocsId as string
            }
        })


        return NextResponse.json({
            
            msg : "lesson plan generated",
            lessonPlan

        })
        
    } catch (error) {
        return NextResponse.json(
            {
                err : error + "gemini error !!"
            },
            {
                status : 500
            }
        )       
    }
}




