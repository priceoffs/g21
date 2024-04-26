import Image from "next/image";
import placeholder from "@/public/placeholder.png";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import School1 from "@/public/school-1.png";
import School2 from "@/public/school-2.png";
import Classroom from "@/public/classroom.jpg";
import Vacancy from "@/public/vacancy.jpg";

const MainPage = () => {
  return (
    <main>
      <section className="mb-10" id="more">
        <h2 className="text-5xl mb-10 font-bold">Читайте більше</h2>
        <div className="flex items-center lg:justify-between flex-wrap gap-5 justify-center">
          <div className="flex flex-col gap-y-4 items-start justify-start shadow-lg p-5 rounded-lg w-full md:w-fit">
            <h4 className="text-4xl underline">Візитка гімназії</h4>
            <p className="bg-rose-500 rounded-full py-1 px-2 inline-block text-white">
              Все про гімназію!
            </p>
            <Image
              src={School2}
              alt="Image 1"
              width="250"
              height="150"
              placeholder="blur"
              className="w-[250px] h-[150px] rounded-lg shadow-[5px_5px_0px_0px_rgba(244,63,94)]"
            />
            <Button className="text-md underline">
              <Link href="/business" className="flex items-center">
                Перейти
                <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </Button>
          </div>
          <div className="flex flex-col gap-y-4 items-start justify-start shadow-lg p-5 rounded-lg w-full md:w-fit">
            <h4 className="text-4xl underline">Вільні місця</h4>
            <p className="bg-sky-500 rounded-full py-1 px-2 inline-block text-white">
              Заповненість класів!
            </p>
            <Image
              src={Classroom}
              alt="Image 1"
              width="250"
              height="150"
              placeholder="blur"
              className="w-[250px] h-[150px] rounded-lg shadow-[5px_5px_0px_0px_rgba(14,165,233)]"
            />
            <Button className="text-md underline">
              <Link href="/places/" className="flex items-center">
                Перейти
                <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </Button>
          </div>
          <div className="flex flex-col gap-y-4 items-start justify-start shadow-lg p-5 rounded-lg w-full md:w-fit">
            <h4 className="text-4xl underline">Вакансії</h4>
            <p className="bg-yellow-500 rounded-full py-1 px-2 inline-block text-white">
              Доєднуйтеся!
            </p>
            <Image
              src={Vacancy}
              alt="Image 1"
              width="250"
              height="150"
              placeholder="blur"
              className="w-[250px] h-[150px] rounded-lg shadow-[5px_5px_0px_0px_rgba(234,179,8)]"
            />
            <Button className="text-md underline">
              <Link href="/vacancies/" className="flex items-center">
                Перейти
                <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <section id="about">
        <h3 className="text-5xl font-bold mb-10">Про нас</h3>
        <div className="flex flex-row gap-2 justify-between flex-wrap">
          <div className="flex gap-x-4 lg:w-[50%]">
            <span className="w-1 h-full bg-neutral-800 block rounded-full"></span>
            <p className="text-muted-foreground">
              Криворізька гімназія № 21 КМР - це заклад, де кожна дитина
              реалізує власні інтереси, де панує атмосфера підтримки,
              заохочення, втілення ідеалів патріотизму, високі цінності знань,
              толерантність. Тут кожен учень має можливість знайти своє
              покликання, розвивати свої таланти і здібності. Навчальний заклад
              сприяє формуванню глибокого розуміння і цінування національної
              культури, історії та мови, одночасно відкриваючи двері до світових
              знань і досягнень. У гімназії №21 створено комфортну і безпечну
              середу, де кожен учень може вільно висловлювати свої думки,
              відчувати підтримку співрозмовників та вчителів.
            </p>
          </div>
          <Image
            src={School1}
            alt="image"
            width={400}
            height={150}
            className="lg:m-0 m-auto w-full lg:w-[400px] shadow-[5px_5px_0px_0px_rgba(57,148,255)] rounded-lg"
          />
        </div>
      </section>
    </main>
  );
};

export default MainPage;
