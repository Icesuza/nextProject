// app/layout.tsx
import Providers from './providers';
import {Ubuntu_Mono} from "next/font/google";
import "./globals.css"
import { khmerSleokchher } from '@/fonts/font';
import { Metadata } from 'next';

const ubuntu = Ubuntu_Mono({
    variable:"--font-ubuntu-mono",
    subsets: ["latin"],
    weight: ["400", "700"],
    style: ["normal", "italic"],
})

export const metadata: Metadata = {
  title: 'nextPro',
  description: 'Using React Query',
  openGraph: {
    title: "nextPro",
    description: "Testing deployment next tanstack project in versel.",
    url: "https://nextPro",
    siteName: "nextPro",
    images: [
      {
        url: "https://static.vecteezy.com/system/resources/thumbnails/004/263/312/small_2x/girl-walking-on-isolated-moon-background-flat-illustration-free-vector.jpg",
        width: 1200,
        height: 630,
        alt: "My App Preview Image",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${ubuntu.variable} ${khmerSleokchher.variable} antialiased`}>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}

