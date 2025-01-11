import Link from "next/link";
import Image from "next/image";
import Menu from "@/components/Menu";
import Navbar from "@/components/Navbar";

export default function DashboardLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
        <div className="h-screen flex">
          <div className="l w-1/6 md:w-[8%] lg:w-1/6 xl:w-1/6 p-4 overflow-y-scroll">
            <Link href="/" className="flex items-center justify-center lg:justify-start gap-2">
                <Image src="/logo.png" alt="Logo" height={32} width={32} />
                <span className="hidden lg:block">SchooLama</span>
            </Link>
            <Menu />
          </div>
          <div className="r w-5/6 md:w-[96%] lg:w-[84%] xl:w-5/6 bg-[#F7F8FA] overflow-scroll">
            <Navbar />
            { children }
          </div>
        </div>
    );
  }  