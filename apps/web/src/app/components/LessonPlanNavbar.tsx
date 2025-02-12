"use client";
import { Button } from "@repo/ui/button";
import LessonPlan from "@repo/ui/lessonPlan";
import axios from "axios";
import { BookCopy } from "lucide-react";
import { useRef, useState } from "react";

export default function NavbarLp() {
  const [openModal, setOpenModal] = useState(false);

  const subjectRef = useRef<HTMLInputElement>(null);
  const topicRef = useRef<HTMLInputElement>(null);
  const gradeRef = useRef<HTMLInputElement>(null);
  const durationRef = useRef<HTMLInputElement>(null);

  const createLp = async () => {
    const res = await axios.post("http://localhost:3000/api/lesson", {
        data : {
            subject : subjectRef.current?.value, 
            topic : topicRef.current?.value,
            grade : gradeRef.current?.value,
            duration : durationRef.current?.value
        }
    })

    console.log(res);
    
    setOpenModal(false);
  };

  return (
    <div className="flex flex-row justify-between items-center my-6 px-6 md:px-10">
      
      <div className="flex items-center gap-4 md:gap-6">
        <BookCopy size={36} color="#1657c0" absoluteStrokeWidth />
        <h1 className="text-xl md:text-3xl font-bold text-gray-800">
          Lesson Planner
        </h1>
      </div>

      
      <Button
        title="Create Lesson Plan"
        varientstype="primary"
        onClick={() => setOpenModal(true)}
      />

      {openModal && (
        <div className="fixed inset-0 z-50 flex justify-center items-center bg-black/30 backdrop-blur-sm">
          <div className="bg-white p-6 md:p-8 rounded-2xl shadow-xl w-full max-w-md">
            <LessonPlan
              onClick={createLp}
              subjectRef={subjectRef}
              topicRef={topicRef}
              durationRef={durationRef}
              gradeRef={gradeRef}
            />
            <div className="flex justify-end mt-4">
              {/* <Button
                title="Close"
                varientstype="secondary"
                onClick={() => setOpenModal(false)}
              /> */}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
