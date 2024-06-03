import Navbar from "@/components/navbar/Navbar";
import Image from "next/image";

export default function Home() {
  return (
    <div className="">
      <section style={{backgroundImage:"url('/home1.png')"}} className="bg-cover min-h-screen pt-3">
        <Navbar/>
        <div className="w-full pt-16">
          <div className="flex flex-col px-16 gap-8">
            <div className="flex flex-col gap-2 font-orelega text-[#EF6E16] text-7xl tracking-wide">
              <h2>Guided by expertise</h2>
              <h2>Fueled by passion</h2>  
              <h2>Built on trust</h2>
            </div>
            <div className="flex flex-col gap-2 text-white text-3xl tracking-widest">
              <h4>California’s Commercial and</h4> 
              <h4>Residential Specialists.</h4>
            </div>
          </div>
          <div className="w-full flex justify-center py-10">
            <button className="text-[#EF6E16] border-white border-4 rounded-md font-semibold font-jost tracking-wider px-5 py-2 text-2xl bg-black/70">Free Consultation</button>
          </div>
        </div>
      </section>
      <section className="py-10">

      </section>
    </div>
  );
}
