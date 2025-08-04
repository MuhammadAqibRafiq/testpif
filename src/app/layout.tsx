import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "@/app/(frontend)/globals.css";
import { ThemeProvider } from "@/contexts/ThemeContext";
import Navbar from "@/components/Navbar/Navbar";
import 'react-loading-skeleton/dist/skeleton.css'
import { ToastContainer } from "react-toastify";
import { GoogleAnalytics } from '@next/third-parties/google'
import { constants } from "@/Contants/constants";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Practical Islamic Finance | Make Smarter Islamic Investing Decisions",
  description: "Find and invest in halal opportunities, follow expertly-managed halal portfolios, meet your financial goals while aligning with your beliefs and values.",
  icons: {
    icon: ["/favicon.ico?v=4"],
    apple: ["/apple-touch-icon.png?v=4"],
    shortcut: ["/apple-touch-icon.png"],
  },
}
  ;

export default function RootLayout({ children, }: Readonly<{ children: React.ReactNode; }>) {

  const isEnvProd = process.env.APP_ENV == constants.envVariables.prod
  const gaId = process.env.gaId ;

  return (
    <html lang="en">
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Work+Sans:wght@400;500;600;700&display=swap" rel="stylesheet" />
        {/* <link rel="icon" type="ico" href="/favico.ico" /> */}
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[var(--background)] text-[var(--foreground)]`} >
        <ThemeProvider>
          <ToastContainer
            position="top-right"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick={false}
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="light"
          // transition={Bounce}
          />
          <Navbar />
          {children}
          {isEnvProd && gaId && <GoogleAnalytics gaId={gaId} />}
        </ThemeProvider>
      </body>
    </html>
  );
}


// import React from 'react'
// import './styles.css'

// export const metadata = {
//   description: 'A blank template using Payload in a Next.js app.',
//   title: 'Payload Blank Template',
// }

// export default async function RootLayout(props: { children: React.ReactNode }) {
//   const { children } = props

//   return (
//     <html lang="en">
//       <body>
//         <main>{children}</main>
//       </body>
//     </html>
//   )
// }
