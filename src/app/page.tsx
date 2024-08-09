"use client";

import { Header } from "../components/header";
import { HeroSwiper } from "../components/heroSection/heroSwiper";
import { DocumentationDesktop } from "../components/aboutSection/documentationDekstop";
import { DocumentationMobile } from "../components/aboutSection/documentationMobile";
import Image from "next/image";
import { CompetitionSwiper } from '../components/competitionSection/competitionSwiper';
import { useScreenSize } from "@/libs/hooks/screenSizeValidation";
import Marquee from "react-fast-marquee";
import { PartnerCard } from '../components/cards/partnerCard';
import { infestDescription } from '../data/tentangInfestSection';
import { partners } from '../data/partner';
import FooterDekstop from "@/components/footer/footerDekstop";
import FooterMobile from "@/components/footer/footerMobile";
import { SeminarSwiperImages } from "@/components/seminarSection/seminarSwiperImages";
import Link from "next/link";
import { LegacyRef, useRef, useState } from "react";
import { SwiperRef } from "swiper/react";

const Home = () => {
  const { isMobile, isTablet, isDesktop } = useScreenSize();
  const swiperRef: LegacyRef<SwiperRef> | null = useRef(null);
  const [activeKompetisiIndex, setActiveKompetisiIndex] = useState(0);

  const slideTo = (index: number) => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slideTo(index);
      setActiveKompetisiIndex(index);
    }
  };
  return (
    <div className=" h-full w-full flex flex-col overflow-x-hidden">
      <div>
        <Header />
      </div>
      <div id="hero">
        <HeroSwiper />
      </div>
      <div id="tentang-infest" className="flex flex-col w-full pt-14 px-8 md:px-12 lg:px-16 gap-12 relative bg-gradient-to-b from-primary via-transparent to-primary">
        <Image
          src={"/assets/images/pattern.png"}
          fill
          sizes="100vw"
          alt="dokumentasi-tentang-infest-usk"
          className="absolute inset-0 -z-10 object-cover opacity-10"
        />
        <h2 className={`text-[26vw] lg:text-[10rem] text-center text-primary-yellow font-imbue -mb-12`}>
          TENTANG INFEST
        </h2>
        <p className={`text-white text-[0.9rem] md:text-base text-center`}>
          {infestDescription}
        </p>
        {isDesktop && (
          <div className="w-full h-[50vh] relative flex z-20">
            <DocumentationDesktop />
          </div>
        )}
        {(isMobile || isTablet) && (
          <div className="flex -mx-2">
            <DocumentationMobile />
          </div>
        )}
        <div className="bg-gradient-to-r from-transparent to-transparent via-primary-yellow from-10% to-90% w-full h-[0.1rem] lg:mt-[42vh]"></div>{/* line separator*/}
      </div>
      <div id="seminar" className="flex flex-col w-full pt-14 lg:pt-32 px-8 md:px-16 gap-12 relative bg-gradient-to-t from-primary to-transparent">
        <Image
          src={"/assets/images/asset-pattern-infest-1.png"}
          width={700}
          height={700}
          alt="asset-pattern-infest-1"
          className="absolute right-0 top-0 md:-top-52 -z-10 object-cover opacity-50"
        />    
        <Image
          src={"/assets/images/asset-pattern-infest-2.png"}
          width={800}
          height={800}
          alt="asset-pattern-infest-2"
          className="absolute left-0 bottom-32 md:-top-20 -z-10 object-cover opacity-50"
        />    
        <Image
          src={"/assets/images/asset-pattern-infest-1.png"}
          width={700}
          height={700}
          alt="asset-pattern-infest-1"
          className="absolute rotate-180 left-0 top-48 -z-10 object-cover opacity-70"
        />    
        <div className="flex flex-col lg:flex-row lg:justify-between gap-14 w-full">        
          <div className="flex flex-col w-full lg:w-1/2 text-white gap-10">        
            <h2 className="text-[26vw] lg:text-[10rem] text-primary-yellow font-imbue lg:-mt-14 text-center lg:text-start">
              SEMINAR
            </h2>
            <p className="lg:text-justify -mt-8 lg:-mt-14 text-center">
              Informatics Festival 2024 menyelenggarakan tiga cabang lomba bergengsi. 
              Uji keterampilan desain dan kreativitas Anda di Kompetisi UI/UX, tantang kemampuan teknis dan analitis di Kompetisi COINS, 
              serta tunjukkan strategi dan kerjasama tim terbaik di Kompetisi E-sports. 
              Bergabunglah dan buktikan keahlian Anda di ajang prestisius ini, serta dapatkan pengalaman berharga dan peluang emas untuk bersinar di dunia digital!
            </p>
            <div className="bg-primary-yellow/40 w-full h-[0.6px]"></div>
            <ul className="flex w-full divide-x-[0.6px] divide-primary-yellow/40">
              <li className="flex flex-col gap-3 items-center w-full pr-2">
                <p className="font-bold">Waktu</p>
                <p className="lg:text-sm text-xs text-center">10.00 WIB, 28 September 2024</p>
              </li>
              <li className="flex flex-col gap-3 items-center w-[130%] px-2">
                <p className="font-bold">Tempat</p>
                <p className="lg:text-sm text-xs text-center">Auditorium Multipurpose FMIPA USK</p>
              </li>
              <li className="pl-4 flex h-full items-end w-full justify-end">
                <Link href={"google.com"} className="box text-xs font-bold flex flex-col w-full h-full items-center justify-center gap-2 py-3 shadow-balance-yellow-primary hover:scale-105 duration-200 hover:bg-black">
                  <Image
                    src={"/assets/images/arrow.png"}
                    alt="arrow-daftar-seminar"
                    width={40}
                    height={40}
                  />
                  <p className="text-wrap text-center text-[0.58rem] md:text-[0.66rem]">DAFTAR SEKARANG</p>
                </Link>
              </li>
            </ul>
          </div>
          <SeminarSwiperImages/>
        </div>    
        <div className="bg-gradient-to-r from-transparent to-transparent via-primary-yellow from-10% to-90% w-full h-[0.1rem] mt-8 lg:mt-12"></div>{/* line separator*/}
      </div>
      <div id="kompetisi" className="flex flex-col relative w-full pt-14 lg:pt-32 px-8 md:px-16 gap-12 bg-gradient-to-b from-primary via-transparent to-primary">
        <Image
          src={"/assets/images/gold_confet.png"}
          fill
          sizes="100vw"
          alt="confetti-infest-usk"
          className="absolute inset-0 -z-10 object-left object-cover opacity-50"
        />
        <div className="flex flex-col lg:flex-row gap-14">    
          {(isDesktop) && (
            <div className="overflow-hidden pb-10 lg:w-1/2 -mx-8 lg:-mx-0">
              <CompetitionSwiper swiperRef={swiperRef} setActiveIndex={setActiveKompetisiIndex}/>
            </div>
          )}
          <div className="flex flex-col lg:w-1/2 w-full gap-10">
            <h2 className="text-[26vw] lg:text-[10rem] text-center lg:text-start text-primary-yellow font-imbue lg:-mt-14">
              KOMPETISI
            </h2>
            <p className="text-white text-center lg:text-justify -mt-8 lg:-mt-14">
              Informatics Festival 2024 menyelenggarakan tiga cabang lomba bergengsi. 
              Uji keterampilan desain dan kreativitas Anda di Kompetisi UI/UX, tantang kemampuan teknis dan analitis di Kompetisi COINS, 
              serta tunjukkan strategi dan kerjasama tim terbaik di Kompetisi E-sports. 
              Bergabunglah dan buktikan keahlian Anda di ajang prestisius ini, serta dapatkan pengalaman berharga dan peluang emas untuk bersinar di dunia digital!
            </p>
            <div className="bg-primary-yellow/40 w-full h-[0.6px] lg:mt-4"></div>
            <div className="w-full flex justify-between gap-2.5 z-50">
              <button onClick={() => slideTo(0)} className={`${activeKompetisiIndex == 0 && 'bg-primary-yellow/60'} shadow-lg shadow-black border border-primary-yellow/40 rounded-xl font-bold px-4 py-3 w-full text-white text-xs lg:text-sm lg:hover:scale-105 duration-200`}>UI/UX</button>
              <button onClick={() => slideTo(1)} className={`${activeKompetisiIndex == 1 && 'bg-primary-yellow/60'} shadow-lg shadow-black border border-primary-yellow/40 rounded-xl font-bold px-4 py-3 w-full text-white text-xs lg:text-sm lg:hover:scale-105 duration-200`}>COINS</button>
              <button onClick={() => slideTo(2)} className={`${activeKompetisiIndex == 2 && 'bg-primary-yellow/60'} shadow-lg shadow-black border border-primary-yellow/40 rounded-xl font-bold px-4 py-3 w-full text-white text-xs lg:text-sm lg:hover:scale-105 duration-200`}>E-SPORTS</button>
            </div>
          </div>   
          {(isMobile || isTablet) && (
            <div className="overflow-hidden pb-10 lg:w-1/2 -mx-8 lg:mx-0 md:mt-6">
              <CompetitionSwiper swiperRef={swiperRef} setActiveIndex={setActiveKompetisiIndex}/>
            </div>
          )} 
        </div>
        <div className="bg-gradient-to-r from-transparent to-transparent via-primary-yellow from-10% to-90% w-full h-[0.1rem] mt-8 lg:mt-11"></div>{/* line separator*/}
      </div>
      <div id="kerja-sama" className="flex flex-col relative w-full py-14 bg-gradient-to-b from-transparent to-secondary from-[35%]">
        <h2 className="text-[26vw] lg:text-[10rem] text-center text-primary-yellow font-imbue">
          KERJA SAMA
        </h2>
        <Marquee direction="left" autoFill={true}>
          {partners.map((partner) => (
            <PartnerCard key={partner.nama} logoSrc={partner.src}/>
          ))}
        </Marquee>
      </div>
      <div id="kontak" className="footer">
        {(isDesktop || isTablet) && (
          <FooterDekstop/>
        )}
        {isMobile && (
          <FooterMobile/>
        )}
      </div>
    </div>
  );
};

export default Home;
