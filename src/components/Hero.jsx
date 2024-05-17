import Link from "next/link";
import Image from "next/image";
import LogoWa from '@/assets/images/whatsapp.png';
import HeroImage from '@/assets/images/heroTop.webp';

function Hero({ data }) {
  console.log(data);
  
  return (
    <div>
      <section className="bg-transparent pt-16">
        <div className="relative pt-12 lg:pt-20 pb-0 lg:pb-12 z-1">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap -mx-4">
              <div className="w-full lg:w-1/2 px-4 mb-12 lg:mb-0 flex items-center">
                <div className="w-full text-center lg:text-left">
                  <div className="max-w-md mx-auto lg:mx-0">
                    <h2 className="mb-3 text-4xl lg:text-5xl font-bold font-heading grid">
                      <span className="text-[#4F6F52]">Selamat Datang</span>
                      <span className="text-green-600"> di Desa Kami</span>
                    </h2>
                  </div>
                  <div className="lg:max-w-sm mx-auto lg:mx-0">
                    <p className="mb-6 text-gray-400 leading-loose">
                      Desa yang terletak di atas bukit dengan keseimbangan tradisi dan modernitasnya
                    </p>
                    <div className="flex lg:justify-start justify-center">
                      <Link
                        className="flex mb-3 lg:mb-0 lg:mr-3 w-auto py-2 px-6 leading-loose bg-green-600 hover:bg-green-700 text-white font-semibold rounded-l-xl rounded-t-xl transition duration-200"
                        href=""
                      >
                        <Image  width={20} height={20} loading="lazy" src={LogoWa} alt="Logo WhatsApp" className="my-auto mr-2"/>
                        Hubungi Kami
                      </Link>
                    </div>
                  </div>
                </div>
                
              </div>
              
              {/* Removed unnecessary images */}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Hero;
