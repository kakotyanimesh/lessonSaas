
"use client"
import { Button } from "@repo/ui/button"

export default function Page(): JSX.Element {
  return (
    <div className="">
      {/* <h1 className="bg-red-200">building lesson Flow </h1> */}
      
      <Button title="GET STARTED primary" onClick={() => alert("hi there")} varientstype="primary"/>
      {/* <Button title="GET STARTED" onClick={() => alert("hi there")} varientstype="secondary"/> */}
    </div>
  );
}
