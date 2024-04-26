import Image from "next/image";
import LogoImg from "@/public/logo.svg";
import Link from "next/link";

const Nav = () => {
  return (
    <nav className=" flex items-center justify-between">
      <div className="py-3 flex items-center gap-x-2">
        <Image src={LogoImg} alt="Logo" />
        <span className="font-bold text-2xl text-neutral-800">G#21</span>
      </div>
      <div className="py-3 p-4 flex gap-x-5 bg-slate-900 rounded-b-lg">
        <Link
          href="./"
          className="text-2xl font-bold bg-gradient-to-r from-[#FBED96] to-[#ABECD6] inline-block text-transparent bg-clip-text"
        >
          Головна
        </Link>
        <Link
          href="#more"
          className="text-2xl font-bold bg-gradient-to-r from-[#FFF278] to-[#F28D2F] text-transparent bg-clip-text hidden md:inline-block"
        >
          Новини
        </Link>
        <Link
          href="#about"
          className="text-2xl font-bold bg-gradient-to-r from-[#40C4FF] to-[#189FFF] text-transparent bg-clip-text hidden md:inline-block"
        >
          Про нас
        </Link>
      </div>
    </nav>
  );
};

export default Nav;
