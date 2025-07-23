import "./globals.css"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"

export const metadata = {
  title: "CBM TV - Stream Your World",
  description: "TV categories like with a dark theme",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <body className="bg-black text-white min-h-screen">
        <Navbar />
        <main className="container max-w-7xl mx-auto px-4 pt-20">
          {children}
        </main>
         <Footer />
      </body>
    </html>
  )
}
