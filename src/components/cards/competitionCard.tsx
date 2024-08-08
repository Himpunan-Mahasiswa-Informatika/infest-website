import { montserrat } from "@/fonts/fonts";
import React from "react";
import { Arrow } from "../icons/arrow";
import Link from "next/link";
import Image from "next/image";

interface CompetitionCardProps {
    namaLomba: string;
    deskripsiSingkat: string;
    linkPendaftaran: string;
    fotoDepan: string;
    kepanjangan: string;
    jadwalPendaftaran: string;
    jadwalPelaksanaan: string;
    totalHadiah: string;
}

export const CompetitionCard = (props: CompetitionCardProps) => {
  return (
    <div className="flex flex-col group h-full w-full px-6 py-8 justify-between bg-gradient-to-b from-primary-yellow/40 to-black via-black/80 lg:hover:bg-black/40 relative rounded-xl text-white">
      <div className="absolute w-full h-full inset-0 -z-10">
        <Image
          src={props.fotoDepan}
          alt="foto-depan-lomba-infest-usk"
          fill
          sizes="(max-width: 1024px) 100vw, 50vw"
          className="rounded-lg object-cover"
        />
      </div>
      <div className="flex flex-col gap-2 items-center lg:group-hover:scale-[1.16] duration-300">
        <h3 className="font-cattedrale text-white text-6xl lg:text-7xl">{props.namaLomba}</h3>
        <p className="text-xs md:text-[0.8rem] font-bold">{props.kepanjangan}</p>
      </div>
      <div className="flex flex-col gap-1 lg:group-hover:scale-105 duration-300 lg:group-hover:px-2">
        <p className="font-bold text-xs md:text-sm">Pendaftaran</p>
        <p className={`text-xs md:text-[0.8rem] w-full font-normal text-left`}>{props.jadwalPendaftaran}</p>
      </div>
      <div className="flex flex-col gap-1 lg:group-hover:scale-105 duration-300 lg:group-hover:px-2">
        <p className="font-bold text-xs md:text-sm">Pelaksanaan</p>
        <p className={`text-xs md:text-[0.8rem] w-full font-normal text-left`}>{props.jadwalPelaksanaan}</p>
      </div>
      <div className="flex flex-col gap-1">
        <p className="font-bold text-xs md:text-sm lg:group-hover:scale-105 duration-300 lg:group-hover:px-2">Total Hadiah</p>
        <p className={`text-xs md:text-[0.86rem] w-full font-normal text-left`}>{props.totalHadiah}</p>
      </div>
      <div className="flex flex-col md:flex-row gap-2.5 md:gap-4">
        <Link href={props.linkPendaftaran} className={`rounded-2xl duration-200 bg-black/60 border hover:scale-[1.03] hover:border-secondary-yellow/30 border-secondary-yellow flex justify-between items-center text-xs w-full px-4 py-2 gap-4 ${montserrat.className}`}>
          <p className="font-medium">Buku Panduan</p>
          <Arrow />
        </Link>
        <Link href={props.linkPendaftaran} className={`rounded-2xl duration-200 bg-black/60 border hover:scale-[1.03] hover:border-secondary-yellow/30 border-secondary-yellow flex justify-between items-center text-xs w-full px-4 py-2 gap-4 ${montserrat.className}`}>
          <p className="font-medium">Daftar Sekarang</p>
          <Arrow />
        </Link>
      </div>
    </div>
  );
};
