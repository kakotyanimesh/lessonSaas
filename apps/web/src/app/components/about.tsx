import Card from "@repo/ui/card";
import { Brain, PenTool,FileSpreadsheet  } from 'lucide-react';


export default function About(){
    return (
        <div className="flex md:flex-row flex-col justify-between md:my-36 my-16">
            <Card width="340" textH1="AI powered lesson plan" textP1="Generate comprehensive lesson plans in seconds" icons={<Brain size={36} color="#1270d3" strokeWidth={3} absoluteStrokeWidth />}/>
            <Card width="340" textH1="Customizable Worksheets" textP1="Create engaging worksheets tailored to your needs" icons={<FileSpreadsheet size={36} color="#1270d3" strokeWidth={3} absoluteStrokeWidth />}/>
            <Card width="340" textH1="Interactive Teaching Aids" textP1="Design dynamic learning materials effortlessly" icons={<PenTool size={36} color="#1270d3" strokeWidth={3} absoluteStrokeWidth />}/>
        </div>
    )
}