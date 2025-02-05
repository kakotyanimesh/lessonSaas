import { z } from "zod";

export const lessonObject = z.object({
    lessonName : z.string(),
    class : z.number(),
    duration : z.number(),
    grade : z.number()
})