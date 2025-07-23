// components/Hero.tsx
import Link from "next/link"

export default function Hero() {
  return (
    <section className="bg-cover bg-center min-h-[70vh] text-white flex flex-col justify-center items-center text-center p-10" style={{ backgroundImage: `url('/assets/hero.jpg')` }}>
      <h1 className="text-4xl font-bold mb-4">Unlimited Movies and Series</h1>
      <p className="text-lg mb-6">Watch anywhere. Cancel anytime.</p>
      <Link href="/movies" className="px-6 py-3 bg-primary text-white rounded-md text-lg hover:bg-primary/90">
        Browse Movies
      </Link>
    </section>
  )
}
