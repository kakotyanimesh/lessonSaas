

import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import NavBar from "./components/Navbar";
import Body from "./components/Body";
import About from "./components/about";
import Works from "./components/works";
import Testimonial from "./components/testimonial";
import Pricing from "./components/Pricing";


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
        <Testimonial/>
        <Pricing/>
      </div>
    </div>
  );
}
