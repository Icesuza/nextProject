
import Image from "next/image";
import { Ubuntu_Mono } from "next/font/google";
import UserCard from "./components/UserData";

const ubuntu = Ubuntu_Mono({
    variable: "--font-ubuntu-mono",
    subsets: ["latin"],
    weight: ["400", "700"],
    style: ["normal", "italic"],
})

export default function Home() {
    return (
        <main>
            <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"><UserCard/></section>
            <Image width={200} height={300} src="/image/image.png" alt="" unoptimized />
            <p className={`${ubuntu.variable} antialiased`}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut ipsum, aliquam quibusdam reprehenderit, illum atque tempore culpa corporis, similique id fugiat aspernatur deleniti eligendi. Dignissimos perspiciatis odio eum eos temporibus? សួស្ដី</p>
        </main>
    );
}
