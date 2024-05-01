import Image from "next/image";
import { Inter } from "next/font/google";
import Hero from "@/components/Hero";
import Brands from "../components/Brands";
import HowWorks from "@/components/HowWorks";
import Stats from "@/components/Stats";
import FeaturedProject from "@/components/FeaturedProject";
import Contacts from "@/components/Contacts";
import Services from "@/components/Services";
import Testimonial from "@/components/Testimonial";
import Project from "@/components/Project";
import Navbar from "@/components/navbar";

const inter = Inter({ subsets: ["latin"] });

// import myData from '@/utils/dataWisata';

// export async function getStaticProps() {
//   // Kembalikan data sebagai props
//   return {
//     props: {
//       data: myData,
//     },
//   };
// }

export default function HomePage({data}) {
  console.log(data);
  return (
    <>
    <Navbar data={data}/>
      {/* <Testimonial/> */}
      <div
        style={{ backgroundImage: "url('/IMG_6453.JPG')" }}
        className="bg-cover bg-center mt-16"
      >
        <Hero data={data}/>
        <Services />
      </div>
      <Brands />
      <Project data={data}/>
      {/* <HowWorks/> */}
      {/* <Stats/> */}
      {/* <FeaturedProject/> */}
      <Contacts/>
    </>
  );
}
