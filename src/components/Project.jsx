// async function getData(){
//     const res=await fetch(process.env.BASE_URL+"api/AllProject");
//     if(!res.ok){
//         throw new Error("AllProject Calling Fail");
//     }
//     return res.json();

import Link from "next/link"
// import {data} from '@/utils/dataWisata'

export default function AllProject ({data}) {
    // const data = await getData();
    console.log(data);
    return (
        <section >
            <div className="py-20 bg-gray-200 radius-for-skewed" >
                <div className="container px-4 mx-auto">
                    <div className="mb-16 flex flex-wrap justify-center lg:justify-center items-center">
                        <div className="text-center lg:text-center">
                            <span className="text-gray-500 font-bold lg:text-lg">
                                Rekreasi dan hiburan terkemas dalam kehidupan sehari-hari yang autentik
                            </span>
                            <h2 className="text-green-600 text-2xl lg:text-4xl font-bold font-heading">
                                Kontinuitas pewarisan Sejarah dan Budaya
                            </h2>
                        </div>
                    </div>
                    <div className="flex flex-wrap mx-4 mb-4">

                        {
                            data.map((item,i)=>{
                                return(
                                    <div  className="w-full lg:w-1/3 mb-8 px-4">
                                        <div className="bg-white rounded-xl overflow-hidden shadow-2xl">
                                        <a target="_blank" href='#'>
                                            <img className="object-cover w-full h-full transition-all duration-1000 transform hover:scale-110 "
                                                 src={item.image1}
                                                 alt={item.tag}
                                                 loading="lazy"
                                                 />
                                        </a>
                                        <div className="p-2 lg:p-6">
                                        <span className="text-gray-400 text-xs lg:text-md">
                                            {item['tag']}
                                        </span>
                                        <h3 className="mb-4 text-md lg:text-xl text-black font-bold font-heading">
                                        {item['title']}
                                        </h3>
                                        <Link
                                        className="flex text-green-600 hover:text-green-700 font-bold"
                                        href={`/${item.id}`}
                                        >
                                        <svg
                                            className="mr-3 w-6 h-6"
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 20 20"
                                            fill="currentColor"
                                        >
                                            <path
                                            fillRule="evenodd"
                                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 1.414L10.586 9H7a1 1 0 100 2h3.586l-1.293 1.293a1 1 0 101.414 1.414l3-3a1 1 0 000-1.414z"
                                            clipRule="evenodd"
                                            />
                                        </svg>
                                        <span>Selengkapnya</span>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                                )
                            })
                        } 
                    </div>

                </div>
            </div>
        </section>
    );
};