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
    description: "Share this awesome app with your friends.",
    url: "https://nextPro",
    siteName: "nextPro",
    images: [
      {
        url: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.vecteezy.com%2Ffree-vector%2Fvector-illustration&psig=AOvVaw3lJ0zbdoYDs84WaWP6jIRd&ust=1751343992953000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCOi15vmmmI4DFQAAAAAdAAAAABAE",
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

