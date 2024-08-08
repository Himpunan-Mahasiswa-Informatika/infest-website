import Image from "next/image";
import React from "react";
import { WhatsApp } from "../icons/whatsApp";
import { Linkedin } from "../icons/linkedin";
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
    iconComponent: <Tiktok width="21" height="21" className="mb-2 mr-1" />,
    url: "",
  },
  {
    id: "instagram",
    iconComponent: <Instagram />,
    url: "",
  },
];

const FooterMobile = () => {
  return (
    <div className="bg-secondary border-t border-primary-yellow w-full flex flex-col px-8 py-6 gap-4 text-white items-center">
      <Image
        src={"/assets/images/logo-infest-usk.png"}
        width={60}
        height={0}
        alt="logo-infest-usk"
      />
      <div className="flex gap-2 mt-2">
        {socialAccounts.map((account) => (
          <Link
            key={account.id}
            href={account.url}
            className="hover:scale-110 duration-200"
          >
            {account.iconComponent}
          </Link>
        ))}
      </div>
      <div className="text-sm text-center">
        <p className="font-bold uppercase">Alamat</p>
        <p className="mt-2.5 text-xs">
          Jl. Tgk. Chik Pante Kulu No. 5 Darussalam, Banda Aceh 23111
        </p>
      </div>
      <div className="flex flex-col gap-3 w-full mt-2.5">
        <p className="text-xs text-center">
          Hak Cipta © 2024 | Himpunan Mahasiswa Informatika
        </p>
      </div>
    </div>
  );
};

export default FooterMobile;
