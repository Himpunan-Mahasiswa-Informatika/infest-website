import Image from "next/image";
import React from "react";
import { WhatsApp } from "../icons/whatsApp";
import { Linkedin } from '../icons/linkedin';
import { Tiktok } from "../icons/tiktok";
import { Instagram } from "../icons/instagram";
import Link from "next/link";

const socialAccounts = [
  {
    id: "linkedin",
    iconComponent: <Linkedin />,
    url: "",
  },
  {
    id: "whatsApp",
    iconComponent: <WhatsApp />,
    url: "",
  },
  {
    id: "tiktok",
    iconComponent: <Tiktok width="21" height="21" className="mb-2 mr-1"/>,
    url: "",
  },
  {
    id: "instagram",
    iconComponent: <Instagram />,
    url: "",
  },
]

const FooterDekstop = () => {
  return (
    <div className="bg-secondary border-t border-primary-yellow w-full flex justify-between px-8 md:px-12 py-6 text-white">    
        <div className="flex flex-col justify-end text-sm">
          <p className="font-bold text-base uppercase">Alamat</p>
          <p className="text-sm mt-3">
            Jl. Tgk. Chik Pante Kulu No. 5 Darussalam, Banda Aceh 23111
          </p>
        </div>
        <Image
          src={"/assets/images/logo-infest-usk.png"}
          width={70}
          height={0}
          alt="logo-infest-usk"
        />
        <div className="flex flex-col gap-2 justify-end text-sm items-end">
          <div className="flex gap-2">
            {socialAccounts.map((account) => (
              <Link key={account.id} href={account.url} className="hover:scale-110 duration-200">
                {account.iconComponent}
              </Link>
            ))}
          </div>
          <p className="text-sm text-end">Hak Cipta © 2024 | Himpunan Mahasiswa Informatika</p>
        </div>
    </div>
  );
};

export default FooterDekstop;
