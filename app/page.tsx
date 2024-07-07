import Header from "../components/Header";
import Footer from "../components/Footer";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import CallToAction from "@/components/CallToAction";

export default function Home() {
  return (
    <>
      <Header />
      <main className="">
        <Hero />
        <Features />
        <CallToAction />
      </main>
      <Footer />
    </>
  );
}
