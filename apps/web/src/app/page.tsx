

import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import NavBar from "./components/Navbar";
import Body from "./components/Body";
import About from "./components/about";
import Works from "./components/works";


export default async function Page() {
  const session =await getServerSession()

  if(session) {
    redirect("/dashboard")
  }
  return (
    <div >
      <NavBar/>
      <div className="md:mx-32 mx-4">
        <Body/>
        <About/>
        <Works/>
      </div>
    </div>
  );
}
