import { Orbitron, Roboto } from "next/font/google";
import "./globals.css";
import TopBar from "@/components/topBar";
import Link from "next/link";
import Footer from "@/components/footer";

const orbitron = Orbitron({
  subsets: ["latin"],
});
const roboto = Roboto({
  subsets: ["latin"],
  weight: ["300", "900"],
});

export const metadata = {
  title: "Front-End Portfolio",
  description: "A portfolio showcasing a front-end developer's work",
  keywords: [
    "Front-End Developer",
    "Portfolio",
    "Web Development",
    "JavaScript",
    "React",
    "Next.js",
    "CSS",
    "HTML",
    "Responsive Design",
    "UI/UX",
    "Front-End Projects",
    "Web Developer Portfolio",
    "Coding Portfolio",
    "Rodrigo Arellano",
    "Rodrigo",
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body
        className={`${orbitron.className} bg-background text-foreground antialiased text-orange-50`}
      >
        <div className="container mx-auto">
          <header className="flex justify-between items-center py-4 bg-stone-900 bg-opacity-85 sticky top-0 z-50 px-4">
            <Link href="/" className="text-2xl font-semibold">
              Front-
              <span className="bg-gradient-to-r from-orange-300 to-orange-500 bg-clip-text text-transparent">
                End
              </span>
            </Link>

            <div className="">
              <TopBar />
            </div>
          </header>

          <main className={`py-8 ${roboto.className} overflow-auto px-4`}>
            {children}
          </main>

          <footer className="px-4">
            <Footer />
          </footer>
        </div>
      </body>
    </html>
  );
}
