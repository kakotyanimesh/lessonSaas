import { getServerSession } from "next-auth";
import LessonPlan from "@repo/ui/lessonPlan"

export default async function dashboard() {
    const session = await getServerSession()

    return <div>
        {/* {session?.user?.email} */}
        <LessonPlan/>
    </div>
}