import Hero from "@/components/sections/hero";
import Overview from "@/components/sections/overview";
import Location from "@/components/sections/location";
import Cluster from "@/components/sections/cluster";
import Register from "@/components/sections/register";
import Contact from "@/components/sections/contact";

export default function Home() {
  return (
    <>
      <Hero />
      <Overview />
      <Location />
      <Cluster />
      <Register />
      <Contact />
    </>
  );
}
