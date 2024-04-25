import Footer from "./_components/footer";
import Header from "./_components/header";
import Nav from "./_components/nav";

const MainLayout = ({
  children
}: {
  children: React.ReactNode;
}) => {
  return (
    <div className="container m-auto flex flex-col gap-y-10 max-w-[1024px] px-2">
      <Nav />
      <Header />
      {children}
      <Footer />
    </div>
  );
}
 
export default MainLayout;