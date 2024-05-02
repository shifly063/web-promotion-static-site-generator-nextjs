import Image from "next/image";
import Navbar from "@/components/navbar";
import Contacts from "@/components/Contacts";
import Hero from "@/components/Hero";
import Brands from "../components/Brands";
import HowWorks from "@/components/HowWorks";
import Stats from "@/components/Stats";
import FeaturedProject from "@/components/FeaturedProject";
import Services from "@/components/Services";
import Testimonial from "@/components/Testimonial";
import Project from "@/components/Project";
import HomePage from "@/pages/home";

import myData from "@/utils/dataWisata";

export async function getStaticProps() {
  // Kembalikan data sebagai props
  return {
    props: {
      data: myData,
    },
  };
}

export default function Home({ data }) {
  console.log(data);
  return (
    <>
      {/* <HomePage data={data}/> */}

      <Navbar data={data} />
      <div
        style={{
          backgroundImage: "url('/IMG_6453.JPG')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        loading="lazy"
        className="lg:pb-0 pb-10"
      >
        <Hero data={data} />
        <Services loading="lazy"/>
      </div>
      <Brands />
      <Project data={data}/>
      <Contacts/>
      {/* <Testimonial/>
      <HowWorks/>
      <Stats/>
      <FeaturedProject/> */}
    </>
  );
}
