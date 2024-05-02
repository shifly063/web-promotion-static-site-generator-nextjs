import React, { useState, useEffect } from "react";
// import CountUp from "react-countup";
// import { Statistic } from "antd";
// const formatter = (value) => <CountUp end={value} separator="," className="text-white text-3xl"/>;
import Image from "next/image";
import People from '@/assets/images/People.png'
import Point from '@/assets/images/imagePoint.png'
import Tourist from '@/assets/images/tourism.png'

function Brands () {
  return (
    <section className="lg:py-40 py-10 bg-cover bg-center" style={{ backgroundImage: "url('/bgSD.png')" }}>
      <div className="container mx-auto my-auto px-4 text-center lg:flex place-items-center">
        <div className="mx-auto lg:w-1/3 w-full">
          <h3 className="lg:text-4xl text-2xl font-heading text-[#D2E3C8] font-bold lg:text-end text-center lg:mb-0 mb-5">
            Lanskap Desa yang Mempesona 
          <span className="lg:text-4xl text-2xl font-heading font-bold text-[#1A4D2E] lg:text-end text-center lg:mb-0 mb-5 pl-2">
             dalam Warisan Budaya
          </span>
          </h3>
        </div>
        <div className="lg:flex grid lg:w-2/3 w-full">
          <div className="mb-2 lg:mb-0 w-full w-1/2 px-2 grid">
              <Image src={People} className="mx-auto" height={50}/>
              <span className="text-white text-3xl font-bold">1994</span>
              <span className="text-white lg:text-lg text-lg font-bold ">
                Jumlah Penduduk
              </span>
              {/* <Statistic value={112893} formatter={formatter}/> */}
          </div>
          <div className="mb-2 lg:mb-0 w-full w-1/2 px-2 grid">
              <Image src={Tourist} className="mx-auto" height={50}/>
              <span className="text-white text-3xl font-bold">10000</span>
              <span className="text-white lg:text-lg text-lg font-bold ">
                Jumlah Pengunjung Pertahun
                {/* <Statistic value={112893}  formatter={formatter}/> */}
              </span>
          </div>
          <div className="mb-2 lg:mb-0 w-full w-1/2 px-2 grid">
              <Image src={Point} className="mx-auto" height={50}/>
              <span className="text-white text-3xl font-bold">24,5 Ha</span>
              <span className="text-white lg:text-lg text-lg font-bold ">
                Luas Desa
                {/* <Statistic value={112893}  formatter={formatter}/> */}
              </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Brands;
