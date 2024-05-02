import myData from '@/utils/dataImage';
import myWisata from '@/utils/dataWisata';
import Navbar from '@/components/navbar';
import Contacts from '@/components/Contacts';

export async function getStaticProps() {
  // Kembalikan data sebagai props
  return {
    props: {
      data: myData,
      datas: myWisata
    },
  };
}
export default function Galeri ({data, datas}) {
    // const data = await getData();
    console.log(data);
    console.log(datas);
    return (
        <>
        <Navbar data={datas}/>
        <section >
            <div className="pt-28 pb-10 bg-gray-200 radius-for-skewed" >
                <div className="container px-4 mx-auto">
                    <div className="mb-16 flex flex-wrap justify-center lg:justify-center items-center">
                        <div className="text-center lg:text-center">
                            {/* <span className="text-green-600 font-bold">
                            Desa Wisata
                            </span> */}
                            <h2 className="text-4xl lg:text-5xl font-bold font-heading text-[#86A789]">
                                Galeri Kami
                            </h2>
                        </div>
                    </div>
                    <div className="flex flex-wrap mx-4 mb-4">

                        {
                            data.map((item,i)=>{
                                return(
                                    <div key={i} className="w-full lg:w-1/2 lg:w-1/4 mb-2 px-2">
                                        <div className="bg-white rounded-xl overflow-hidden shadow-2xl">
                                        <a target="_blank" href={item.image}>
                                            <img className="object-cover w-full h-full transition-all duration-1000 transform hover:scale-110 "
                                                 src={item.image}
                                                 alt={item.alt}/>
                                        </a>
                                </div>
                            </div>
                                )
                            })
                        } 
                    </div>

                </div>
            </div>
        </section>
        <Contacts/>
        </>
    );
};