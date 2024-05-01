// import Image from "next/image";
import { Inter } from "next/font/google";
import Hero from "@/components/Hero.jsx";
// import Brands from "@/components/Brands";
// import HowWorks from "@/components/HowWorks";
// import Stats from "@/components/Stats";
// import FeaturedProject from "@/components/FeaturedProject";
// import Contacts from "@/components/Contacts";
// import Services from "@/components/Services";
// import Testimonial from "@/components/Testimonial";
// import Project from "@/components/Project";

const inter = Inter({ subsets: ["latin"] });

export async function getStaticProps() {
  try {
    // Panggil API untuk mendapatkan data HeroList
    const response = await fetch("https://agency.teamrabbil.com/api/HeroList");

    // Periksa apakah responsenya berhasil (kode status 200)
    if (!response.ok) {
      throw new Error("Failed to fetch data");
    }

    // Ambil data JSON dari respons
    const data = await response.json();
    console.log(data);
    // Kembalikan data sebagai props
    return {
      props: {
        data // Menggunakan data dari respons API
      },
    };
  } catch (error) {
    console.error("Error fetching data:", error.message);
    return {
      props: {
        posts: null, // Kembalikan null jika terjadi kesalahan
      },
    };
  }
}
async function getData() {
const res = await fetch("https://agency.teamrabbil.com/api/HeroList");
if (!res.ok) {
  throw new Error("BrandList Calling Fail");
}
return res.json();
}

export default function Home({data}) {
  console.log(data);
  return (
    
    <>
    {/* <Testimonial/> */}
    <div 
        style={{ backgroundImage: "url('/IMG_6453.JPG')" }} className="bg-cover bg-center">
      <Hero data={data}/>
      {/* <Services/> */}
    </div>
    {/* <Brands/>
    <Project/> */}
    {/* <HowWorks/> */}
    {/* <Stats/> */}
    {/* <FeaturedProject/> */}
    {/* <Contacts/> */}
</>
  
  )
}
