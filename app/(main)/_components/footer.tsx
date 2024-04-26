import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="rounded-t-lg bg-slate-900 py-10 px-5" id="contacts">
      <div>
        <div className="flex flex-col text-white text-center gap-y-2">
          <h5 className="text-3xl text-center">G#21</h5>
          <p className="text-center">
            Дозволяється та вітається будь-яке неспотворене цитування матеріалів
            цього ресурсу.
          </p>
          <p>© 2024 Криворізька гімназія №21. Всі права захищені.</p>
          <div className="flex items-center justify-center gap-2 md:flex-row flex-col">
            <Button variant="ghost" className="underline">
              kzgN21@gmail.com
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
            <Button variant="ghost" className="underline">
              <Link
                href="https://www.facebook.com/groups/1482958818677560"
                className="flex items-center"
              >
                Facebook
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
