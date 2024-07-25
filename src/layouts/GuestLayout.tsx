import Header from "../components/navbar/Header";
// import Footer from "../components/footer/Footer";
import { ReactNode } from "react";

interface GuestLayoutProps {
  children: ReactNode;
}

export default function GuestLayout({ children }: GuestLayoutProps) {
  

  return (
    <div className="max-h-screen max-w-screen overflow-y-auto overflow-x-hidden">
      <Header />
      <div className="bg-white h-screen w-screen">
        <div className={`mx-auto transition-all duration-700`}>{children}</div>
      </div>
      
    </div>
  );
}
