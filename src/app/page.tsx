import Image from "next/image";
import { FiBook } from "react-icons/fi";
import {
  SiDevdotto,
  SiDiscord,
  SiFacebook,
  SiGithub,
  SiInstagram,
  SiStackoverflow,
  SiSteam,
  SiX,
  SiYoutube,
} from "react-icons/si";

import { FaMedium,FaLinkedin } from "react-icons/fa6";

import PrimaryLinks from "$dev/components/PrimaryLinks";
import Spotlight from "$dev/components/Spotlight";

const links = [

  {
    icon: <SiInstagram className="text-zinc-300" />,
    title: "Instagram",
    url: "https://instagram.com/kkndev_",
  },
  {
    icon: <SiGithub className="text-zinc-300" />,
    title: "GitHub",
    url: "https://github.com/khandelwal-dev",
  },
  {
    icon: <FaLinkedin className="text-zinc-300" />,
    title: "LinkedIn",
    url: "https://linkedin.com/in/devkhandelwal",
  },
  {
    icon: <SiDiscord className="text-zinc-300" />,
    title: "Discord",
    url: "https://discord.com",
  },
  {
    icon: <SiX className="text-zinc-300" />,
    title: "X",
    url: "https://x.com/kkndev",
  },
  {
    icon: <SiDevdotto className="text-zinc-300" />,
    title: "Dev.to",
    url: "https://dev.to/khandelwaldev",
  },
  {
    icon: <FaMedium className="text-zinc-300" />,
    title: "Medium",
    url: "https://slyro.medium.com",
  },
];

const Page = () => {
  return (
    <>
      <div className="relative mx-auto flex flex-col items-center justify-center gap-4 pt-24 pb-10">
        <Spotlight className="-top-4 left-56" />
        <Image
          src="https://github.com/khandelwal-dev.png"
          width={90}
          height={90}
          alt="Logo"
          className="rounded-full"
          priority
        />
        <h1 className="text-xl font-semibold">Dev Khandelwal</h1>
        <p className="text-[#a1a1a1]">student / developer</p>
      </div>
      <PrimaryLinks />
      <div className="flex flex-col gap-4 py-3">
        {links.map((link) => {
          const { icon, title, url } = link;

          return (
            <a
              key={url}
              href={url}
              className="relative flex h-14 w-full items-center justify-center rounded-xl border border-zinc-700 bg-[#151414] px-8 py-4 transition-colors duration-300 hover:border-zinc-500"
              target="_blank"
              rel="noopener, noreferrer"
            >
              <div className="absolute left-8">{icon}</div>
              <div className="text-zinc-100">{title}</div>
            </a>
          );
        })}
      </div>
    </>
  );
};

export default Page;
