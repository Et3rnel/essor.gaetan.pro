import { Hero } from "@/components/hero";
import { Apps } from "@/components/apps";
import { About } from "@/components/about";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-white font-sans antialiased">
      <Hero />
      <Apps />
      <About />
      <Footer />
    </main>
  );
}
