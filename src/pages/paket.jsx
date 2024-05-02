import myData from "@/utils/dataPaket";
import myDatas from "@/utils/dataWisata";
import Navbar from "@/components/navbar";
import Contacts from "@/components/Contacts";
import checklist from "@/assets/images/checkList.svg";
import Image from "next/image";
import Link from "next/link";

export async function getStaticProps() {
  // Kembalikan data sebagai props
  return {
    props: {
      data: myData,
      datas: myDatas,
    },
  };
}
export default function Paket({ data, datas }) {
  // const data = await getData();
  console.log(data);
  console.log(datas);
  return (
    <>
      <Navbar data={datas}/>
      <section>
        <div className="pt-28 pb-10 bg-gray-300 radius-for-skewed">
          <div className="container px-4 mx-auto">
            <div className="mb-16 flex flex-wrap justify-center lg:justify-center items-center">
              <div className="text-center lg:text-center">
                <h2 className="text-4xl lg:text-5xl font-bold font-heading text-[#86A789]">
                  Paket Wisata Kami
                </h2>
              </div>
            </div>
            <div className="flex flex-wrap mx-4 mb-4">
              {data.map((item, i) => {
                return (
                  <div key={i} className="w-full lg:w-1/2 lg:w-1/3 mb-2 px-2 transition duration-300 ease-in-out transform hover:scale-105">
                    <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-2xl">
                      <a target="_blank" href={item.image1}>
                        <img
                          className="object-cover w-full h-full"
                          src={item.image1}
                          alt={item.alt}
                        />
                      </a>
                      <div className="p-6">
                        <h3 className="lg:py-2 py-0 text-lg text-black font-base text-center font-heading  bg-gray-200 rounded-md">
                          {item.title}
                        </h3>
                        <div className=" justify-center text-center mx-auto gap-2 ">
                          {item.Fasilitas.map((fasilitas, index) => (
                            <>
                            <span
                              key={index}
                              className="flex text-green-600 hover:text-green-700 justify-center font-semibold gap-2 py-2"
                            >
                              <Image src={checklist} height={20} width={20} alt=""/>
                              <span>{fasilitas}</span>

                            </span>
                            <div className="border-t-2 border-gray-200 my-4"></div>

                            </>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
      <Contacts/>
    </>
  );
}
