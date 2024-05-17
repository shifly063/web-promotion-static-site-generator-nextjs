// async function getAllServices() {
//     const res = await fetch(process.env.BASE_URL + "api/AllService");
//     if (!res.ok) {
//         throw new Error("AllService List Calling Fail");
//     }
//     return res.json();
// }
import HeroImage from "@/assets/images/heroTop.webp";

export default function Services() {
  // const data = await getAllServices();
  return (
    <div className="w-full lg:w-[70%] py-0  bg-slate-300 radius-for-skewed rounded-3xl lg:rounded-tl-full lg:juftify-end lg:text-end juftify-center text-center ml-auto">
      {/* {data.map(item => ( */}
      <div className="container mx-auto px-4 py-0 lg:py-10">
        <div className="flex flex-wrap items-center">
          <div className="w-full lg:w-1/6 flex text-left justify-start">
            {/* <div className="rounded-full bg-black mx-auto h-[300px] w-[300px]">
              <div className="absolute rounded-full bg-gray-600 mx-auto h-[200px] w-[200px]">
                
              </div>
            </div> */}
            {/* <div className="rounded-tr-full rounded-bl-full bg-black mx-auto h-[200px] w-[200px]">
              <div className="rounded-tr-full rounded-bl-full bg-gray-600 mx-auto h-[100px]">
                .
              </div>
            </div> */}

            {/* <div className="mb-4 flex flex-wrap items-end">
                                        <div className="mb-4 lg:mb-0 w-full lg:w-2/3 px-3">
                                            <img className="hidden lg:grid w-full h-32 lg:h-48 object-cover rounded shadow-2xl" src={'https://agency.teamrabbil.com/files/hub-01-18-projectmanagement-Hero-1200x900-software-tips.jpg'} alt=""  loading="lazy"/>
                                        </div>
                                        <div className="w-full lg:w-1/3 px-3">
                                            <img className="hidden lg:grid w-full h-32 object-cover rounded shadow-2xl" src={'https://agency.teamrabbil.com/files/hub-01-18-projectmanagement-Hero-1200x900-software-tips.jpg'} alt=""  loading="lazy"/>
                                        </div>
                                    </div>
                                    <div className="flex flex-wrap items-start">
                                        <div className="mb-4 lg:mb-0 w-full lg:w-1/3 px-3">
                                            <img className="hidden lg:grid w-full h-32 object-cover rounded shadow-2xl" src={'https://agency.teamrabbil.com/files/hub-01-18-projectmanagement-Hero-1200x900-software-tips.jpg'} alt=""  loading="lazy"/>
                                        </div>
                                        <div className="w-full lg:w-2/3 px-3">
                                            <img className="hidden lg:grid w-full h-32 lg:h-48 object-cover rounded shadow-2xl" src={'https://agency.teamrabbil.com/files/hub-01-18-projectmanagement-Hero-1200x900-software-tips.jpg'} alt=""  loading="lazy"/>
                                        </div>
                                    </div> */}
          </div>

          <div className="mb-12 lg:mb-0 w-full lg:w-5/6 flex px-4">
            <div>
              <span className="text-green-600 text-2xl font-bold">
                DESA WISATA
              </span>
              <h1 className="mb-6 text-4xl lg:text-5xl font-bold font-heading">
                Sendangduwur
              </h1>
              {/* <div className="mb-6"> */}
                <span className="text-[#597E52] font-light">
                  Desa Wisata Sendangduwur, yang terletak di Kecamatan Paciran,
                  Kabupaten Lamongan, telah diakui sebagai warisan budaya
                  nasional. Terkenal sebagai destinasi wisata religi, desa ini
                  dikenal karena makam Sunan Sendang yang menjadi tujuan ziarah
                  bagi pengunjung. Selain itu, Desa Sendangduwur juga menonjol
                  dengan beragam potensi UMKM, termasuk kerajinan batik tulis,
                  perhiasan emas, dan bordir.
                </span>
              {/* </div> */}
            </div>
          </div>
        </div>
      </div>
      {/* ))} */}
    </div>
  );
}
