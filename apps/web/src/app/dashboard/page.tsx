import { getServerSession } from "next-auth"
import NavbarLp from "../components/LessonPlanNavbar"
import LpCard from "../components/LpCard"
import SearchBar from "../components/SearchBar"

export default async function dashboard() {
    const session = await getServerSession()
    
    return (
        <div className="container mx-auto px-4 md:px-20">
            <NavbarLp/>
            <SearchBar/>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20 max-w-6xl mx-auto">
                <LpCard title="Introduction to Photosynthesis" grade="7th" subject="science" modifiedDate="3/12/2024"/>
                <LpCard title="Introduction to Photosynthesis" grade="7th" subject="science" modifiedDate="3/12/2024"/> 
                <LpCard title="Introduction to Photosynthesis" grade="7th" subject="science" modifiedDate="3/12/2024"/>
            </div>
        </div>
    )
 }