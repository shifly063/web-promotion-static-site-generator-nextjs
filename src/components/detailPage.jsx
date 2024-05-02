import { useRouter } from "next/router";
import myData from "@/utils/dataWisata";
// import { Link } from "next/link";
import Link from "next/link";
import React, { useState } from "react";
import Image from "next/image";
import Carousel from '@/components/CarouselHome'
import LogoWa from '@/assets/images/whatsapp.png'
import Navbar from "@/components/navbar";
import Contacts from "@/components/Contacts";

// export async function getStaticProps() {
//   // Kembalikan data sebagai props
//   return {
//     props: {
//       data: myData,
//     },
//   };
// }

export default function DetailPage({datas}) {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };
  return (
      // <div  className="bg-white w-full text-red-500">{router.query.id}</div>
      <div
      style={{
          backgroundImage: `url(${datas.map((datas) => datas.image1)})`,
        }}
        className="bg-cover bg-center py-16"
        >
      <div>
        <section
          // style={{ backgroundImage: "url('/IMG_6453.JPG')" }}
          className=" bg-transparent"
          >
          <div className="relative lg:pt-20 pb-0 lg:pb-20 z-1">
            <div className="container mx-auto px-4">
              <div className="flex flex-wrap -mx-4">
                <div className="w-full px-4 mb-12 lg:mb-0 flex items-center">
                  <div className="w-full text-center ">
                    <div className="mx-auto lg:mx-0">
                      <h2 className="mb-3 text-4xl lg:text-5xl font-bold font-heading grid">
                        <span className="text-white">
                          Selengkapnya tentang
                          {/* {data['title']} */}
                        </span>
                        <span className="text-green-600"> {datas.map((datas) => datas.title)}</span>
                      </h2>
                    </div>
                    <div className="max-w-sm mx-auto lg:mx-0">
                      {/* <div className="flex">
                      <Link
                        className="flex mb-3 lg:mb-0 lg:mr-3 w-full lg:w-auto py-2 px-6 leading-loose bg-green-600 hover:bg-green-700 text-white font-semibold rounded-l-xl rounded-t-xl transition duration-200"
                        href=""
                      >
                      <Image  width={20} height={20} src={LogoWa} alt="Logo WhatsApp" className="my-auto mr-2"/>
                        Hubungi Kami
                      </Link>
                    </div> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      <div className="py-10 bg-slate-200 radius-for-skewed rounded-3xl mx-auto lg:rounded-tr-3xl lg:w-3/4 w-full">
        {/* {data.map(item => ( */}
        <div className="container mx-auto px-10 py-10">
          <div className="flex items-center">
            <div className="w-full lg:w-1/2">
              <span className="hidden lg:grid text-green-600 text-2xl font-bold py-2">
              {datas.map((datas) => datas.tag)}
              </span>
              {/* <h2 className="hidden lg:grid mb-6 text-4xl lg:text-5xl font-bold font-heading">
              {datas.map((datas) => datas.tag)}
              </h2> */}
              <div className="mb-6 max-w-sm text-justify">
                <span className="text-[#597E52] font-semibold ">
                  {datas.map((datas) => datas.des)}
                </span>
              </div>
            </div>
            
            <div className="w-full hidden lg:grid lg:w-1/2 px-4">
                <div className="hidden lg:flex flex-wrap">
                  <img
                    className="w-full lg:w-1/2 lg:w-1/3 h-64 p-2 object-cover lg:rounded-xl rounded-br-none"
                    src= {datas.map((datas) => datas.image1)}
                    alt={datas.map((datas) => datas.tag)}
                  />
                  <img
                    className="w-full lg:w-1/2 lg:w-2/3 h-64 p-2 object-cover lg:rounded-xl rounded-bl-none"
                    src= {datas.map((datas) => datas.image2)}
                    alt={datas.map((datas) => datas.tag)}
                  />
                </div>
                <div className="flex flex-wrap ">
                  <img
                    className="w-full lg:w-1/2 lg:w-2/3 h-64 p-2 object-cover lg:rounded-xl rounded-br-none"
                    src= {datas.map((datas) => datas.image3)}
                    alt={datas.map((datas) => datas.tag)}
                  />
                  <img
                    className="w-full lg:w-1/2 lg:w-1/3 h-64 p-2 object-cover lg:rounded-xl rounded-bl-none"
                    src= {datas.map((datas) => datas.image4)}
                    alt={datas.map((datas) => datas.tag)}
                  />
                </div>
              </div>
            </div>
            <button
              onClick={openModal}
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              >
              Baca Selengkapnya
            </button>
            {isOpen && (
              <div className="fixed inset-0 flex items-center justify-center z-0 lg:w-3/4 w-full mx-auto overflow-y-auto max-h-full m-20 rounded-xl">
                {/* <div className="absolute inset-0 bg-black opacity-50"></div> */}
                <div className="bg-white p-8 rounded shadow-lg z-0 animate-slide-down max-h-full overflow-y-auto">
                  <div className="text-center">
                    <span className="font-bold text-2xl text-black">{datas.map((datas) => datas.title)}</span>
                  </div>
                  <div className="rounded-lg bg-gray-200 p-4">
                    {/* <span>asjsjdk</span> */}
                    <p className="text-lg text-black text-justify">
                      {datas.map((datas) => datas["des-Full"])}
                    </p>
                  </div>
                  <div className="flex justify-end pt-4">
                    <button
                      onClick={closeModal}
                      className="text-white font-bold bg-blue-600 p-2 rounded-xl hover:text-blue-400 focus:outline-none w-1/4"
                    >
                      close
                    </button>
                  </div>
                </div>
              </div>
            )}
        </div>
        {/* ))} */}
      </div>
    </div>
  );
}
