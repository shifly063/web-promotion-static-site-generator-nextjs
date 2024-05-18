import Image from "next/image";
import Navbar from "@/components/navbar";
import Contacts from "@/components/Contacts";
import Hero from "@/components/Hero";
import Brands from "../components/Brands";
import Services from "@/components/Services";
import Project from "@/components/Project";
import News from "@/components/News";
import Head from "next/head";
import myData from "@/utils/dataWisata";
import myNews from "@/utils/dataNews";

export async function getStaticProps() {
  // Kembalikan data sebagai props
  return {
    props: {
      data: myData,
      news: myNews
    },
  };
}

export default function Home({ data, news }) {
  console.log(data);
  console.log(news);
  return (
    <>
      {/* <HomePage data={data}/> */}

      <Navbar data={data} />
      <Head>
        <meta charset="UTF-8"/>
        <title>Desa Wisata Sendangduwur - Home</title>
        <meta name="keywords" content="Desa Wisata Sendangduwur, Wisata Edukasi, Edukasi Batik, Pasar Tradisional, Wisata Religi, Makam Sunan Sendang, Pasar Minggu Legi, Latar Cendhani, kuliner tradisional, Batik" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="Jelajahi keindahan alam dan budaya Desa Wisata Sendangduwur. Nikmati kegiatan seru, kuliner tradisional, dan penginapan nyaman. Ideal untuk liburan keluarga, pasangan, dan petualang solo. Kunjungi Desa Wisata Sendangduwur dan rasakan pesonanya!." />
        <link rel="canonical" href="https://deswitasendangduwur.netlify.app/" />
        <meta property="og:title" content="Desa Wisata Sendangduwur - Home" />
        <meta property="og:description" content="Jelajahi keindahan alam dan budaya Desa Wisata Sendangduwur. Nikmati kegiatan seru, kuliner tradisional, dan penginapan nyaman. Ideal untuk liburan keluarga, pasangan, dan petualang solo. Kunjungi Desa Wisata Sendangduwur dan rasakan pesonanya!." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://deswitasendangduwur.netlify.app/" />
        <meta property="og:image" content="https://i.pinimg.com/originals/43/d3/41/43d3415441a1b0fb44f36417ff47ff0c.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Desa Wisata Sendangduwur - Home" />
        <meta name="twitter:description" content="elajahi keindahan alam dan budaya Desa Wisata Sendangduwur. Nikmati kegiatan seru, kuliner tradisional, dan penginapan nyaman. Ideal untuk liburan keluarga, pasangan, dan petualang solo. Kunjungi Desa Wisata Sendangduwur dan rasakan pesonanya!." />
        <meta name="twitter:image" content="https://i.pinimg.com/originals/43/d3/41/43d3415441a1b0fb44f36417ff47ff0c.jpg" />
        <link rel="icon" href="/sdLogo.svg" />
      </Head>
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
      <News data={news}/>
      <Contacts/>
      {/* <Testimonial/>
      <HowWorks/>
      <Stats/>
      <FeaturedProject/> */}
    </>
  );
}
