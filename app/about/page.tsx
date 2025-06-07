import AboutUs from "@/components/AboutUs/AboutUs";
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Wiztrace | About",
  description: "...",
};

export default function AboutPage() {
  return (
    <>
   <AboutUs />
    </>
  );
}
