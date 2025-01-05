
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";


export default async function Page() {
  const session =await getServerSession()

  if(session) {
    redirect("/dashboard")
  }
  return (
    <div className="">
      <h1 className="bg-red-200">building lesson Flow </h1>
      
      {/* <Button title="GET STARTED primary" onClick={() => alert("hi there")} varientstype="primary"/> */}
      {/* <Button title="GET STARTED" onClick={() => alert("hi there")} varientstype="secondary"/> */}
      <h1>
        {
          session
        }
      </h1>
    </div>
  );
}
