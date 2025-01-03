
import { getServerSession } from "next-auth";


export default async function Page() {
  const session =await getServerSession()
  return (
    <div className="">
      {/* <h1 className="bg-red-200">building lesson Flow </h1> */}
      
      {/* <Button title="GET STARTED primary" onClick={() => alert("hi there")} varientstype="primary"/> */}
      {/* <Button title="GET STARTED" onClick={() => alert("hi there")} varientstype="secondary"/> */}
      <h1>
        {
          session?.user?.email
        }
      </h1>
    </div>
  );
}
