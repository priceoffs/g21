import { Pacifico } from "next/font/google";

const pacifico = Pacifico({
  weight: "400",
  subsets: ["latin"],
});

const HelloWorldPage = () => {
  return (
    <div className={pacifico.className}>
      <h1 className="text-6xl p-2 ">Hello World!!! :333</h1>
    </div>
  );
};

export default HelloWorldPage;
