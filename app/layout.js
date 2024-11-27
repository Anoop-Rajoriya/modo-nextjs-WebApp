import localFont from "next/font/local";
import { Inter, Fugaz_One } from "next/font/google";
import "./globals.css";

// const geistSans = localFont({
//   src: "./fonts/GeistVF.woff",
//   variable: "--font-geist-sans",
//   weight: "100 900",
// });
// const geistMono = localFont({
//   src: "./fonts/GeistMonoVF.woff",
//   variable: "--font-geist-mono",
//   weight: "100 900",
// });

const inter = Inter({
  subsets: ["latin"], // Specify subsets as needed
});
const fugaz = Fugaz_One({
  subsets: ["latin"], // Specify subsets as needed
  weight: ["400"], // Specify weights as needed
});

export const metadata = {
  title: "Modo Next-app",
  description: "Track your daily mood, every day of the year!",
};

const header = (
  <header className="p-4 flex items-center justify-between border-b ">
    <a
      href="#"
      className={"text-gradiant text-xl capitalize " + fugaz.className}
    >
      modo
    </a>
    <a
      href="#"
      className="text-sm uppercase text-black font-bold rounded-lg border-2 border-black p-2 ml-2"
    >
      placeholder cta || stats
    </a>
  </header>
);
const footer = (
  <footer className="p-2 border-t">
    <p className="flex items-center justify-center text-sm capitalize text-black font-bold">
      create by <span className="text-[#ff2929] ml-2">Anoop Rajoriya</span>
    </p>
  </footer>
);

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={
          "max-w-[800px] min-h-screen mx-auto p-4 flex flex-col bg-[#ebeaff]" +
          inter.className
        }
      >
        {header}
        {children}
        {footer}
      </body>
    </html>
  );
}
