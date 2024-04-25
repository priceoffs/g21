import { Button } from "@/components/ui/button";
import { ArrowRight, School } from "lucide-react";
import Link from "next/link";

const Header = () => {
  return (
    <header>
      <div className="py-4 md:px-48 sm:px-20 rounded-lg flex flex-col items-center bg-gradient-to-r from-[#FBED96] to-[#ABECD6]">
        <School className="w-[5rem] h-[5rem] mb-2" />
        <h2 className="md:text-4xl text-2xl text-center">Вас вітає</h2>
        <h1 className="md:text-5xl text-4xl font-bold text-center mb-6">
          Криворізька гімназія №21
        </h1>
        <div>
          <Button className="rounded-full">
            <Link href="#contacts" className="flex items-center">
              Контакти
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
