import Advertisement from "@/components/Ad";
import Features from "@/components/Features";
import Hero from "@/components/Hero";
import TopNewArrival from "@/components/TopNewArrival";
import TrendingProducts from "@/components/TrandingProduct";
import ShopByCategory from "@/components/shopByCategory";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Hero />
      <Features />
      {/* <ShopByCategory /> */}
      <TopNewArrival />
      <Advertisement/>
      <TrendingProducts/>
    </>
  );
}
