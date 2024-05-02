import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import logo from "@/assets/images/sdLogo.png";

const Navbar = ({ data }) => {
  console.log(data);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <nav className="bg-[#4F6F52] p-4 fixed w-full z-10 top-0">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <Image src={logo} className="w-8 lg:w-12" loading="lazy" alt=""/>
        </div>
        <div className="hidden lg:block">
          <div className="relative text-left">
            <button className="text-white px-4 py-2">
              <Link href="/"> Beranda </Link>
            </button>
            <button className="text-white px-4 py-2">
              <Link href="/paket"> Paket Wisata </Link>
            </button>
            <button onClick={toggleDropdown} className="text-white px-4 py-2">
              Tentang Kami
            </button>
            {isDropdownOpen && (
              <div className="absolute right-0 mt-2 w-50 bg-white border rounded-lg shadow-xl z-10">
                {data.map((item, i) => {
                  return (
                    <Link key={i} href={`/${item.id}`}>
                      <span className="block px-4 py-2 text-gray-800 hover:bg-gray-300">
                        {item.title}
                      </span>
                    </Link>
                  );
                })}
              </div>
            )}

            <button className="text-white px-4 py-2">
              <Link href="/galeri"> Galeri </Link>
            </button>
          </div>
        </div>
        <div className="lg:hidden block">
      <div className="relative text-right">
        <div>
          <button onClick={toggleSidebar} className="fixed top-4 right-4 lg:hidden text-white">
            Menu
          </button>
          <aside className={`bg-[#4F6F52] w-64 min-h-screen fixed top-0 right-0 transition-transform duration-300 ease-in-out transform ${isSidebarOpen ? 'translate-x-0' : 'translate-x-full'}`}>
            <div className="p-4">
              <div className="flex justify-end items-center mb-8">
                <button onClick={toggleSidebar} className="text-white lg:hidden">
                  Close
                </button>
              </div>
              <nav>
                <ul className="space-y-2 ">
                  {data.map((item, i) => (
                    <li key={i} className="bg-[#75A47F] rounded-xl">
                      <Link href={`/${item.id}`}>
                        <span className="block text-white hover:bg-white hover:text-gray-800 py-2 px-4">{item.title}</span>
                      </Link>
                    </li>
                  ))}
                  <li className="bg-[#75A47F] rounded-xl">
                    <Link href="/about">
                      <span className="block text-white hover:bg-white hover:text-gray-800 py-2 px-4">Tentang Kami</span>
                    </Link>
                  </li>
                  <li className="bg-[#75A47F] rounded-xl">
                    <Link href="/galeri">
                      <span className="block text-white hover:bg-white hover:text-gray-800 py-2 px-4">Galeri</span>
                    </Link>
                  </li>
                </ul>
              </nav>
            </div>
          </aside>
        </div>
      </div>
    </div>
      </div>
    </nav>
  );
};

export default Navbar;
