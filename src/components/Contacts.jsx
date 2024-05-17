"use client";
import Link from "next/link";
import Image from "next/image";
import whatsapp from "@/assets/images/whatsapp.svg";
import instagram from "@/assets/images/instagram.svg";
import email from "@/assets/images/email.svg";
import youtube from "@/assets/images/youtube.svg";

const Contacts = () => {
  return (
    <div
      className="bg-cover bg-center"
      style={{ backgroundImage: "url('/bgSD.png')" }}
    >
      <div className="container mx-auto py-8 px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="col-span-2 lg:col-span-2">
            <h2 className="mb-6 text-4xl lg:text-5xl font-bold font-heading text-white">
              Kemudahan dan Layanan
            </h2>
            <p className="text-white mb-6">
              Jadilah Bagian dari Petualangan Luar Biasa di Daerah Kami!
            </p>
            {/* Icon sosial media */}
            <div className="flex items-center">
              <Link href="#" className="mr-4 text-white hover:text-gray-400">
                <Image src={whatsapp} height={30} alt="Icon Whatsapp"/>
              </Link>
              <Link
                href="https://www.instagram.com/deswita_sendangduwur?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
                className="mr-4 text-white hover:text-gray-400"
              >
                <Image src={instagram} height={30} alt="Icon Instagram"/>
              </Link>
              <Link href="#" className="mr-4 text-white hover:text-gray-400">
                <Image src={email} height={30} alt="Icon Email"/>
              </Link>
              <Link
                href="https://youtube.com/@sendangduwur_mesuwur?si=Y1XGTWs2hItMaZi7"
                className="mr-4 text-white hover:text-gray-400"
              >
                <Image src={youtube} height={30} alt="Icon Youtube"/>
              </Link>
            </div>
          </div>
          <div className="flex flex-col space-y-4">
            <h3 className="text-xl font-semibold text-white">Kontak</h3>
            <p className="text-white">
              Jl. Sunan Ampel No.11, RT 001 RW 001 Kode Pos 62264
            </p>
            <p className="text-white">Kota Lamongan, Jawa Timur</p>
            <p className="text-white">Telepon: 123-456-7890</p>
            <p className="text-white">Email: info@contoh.com</p>
          </div>
        </div>
        <div className="border-t border-gray-600 mt-8 pt-4">
          <p className="text-center text-white">
            &copy; 2024 Desa Wisata Sendangduwur. Hak Cipta Dilindungi.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Contacts;
