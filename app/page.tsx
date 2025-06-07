import Section from "@/components/home/section";
import Homes from "../components/home/home";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Wiztrace || Home",
  description: "...",
};

export default function HomePage() {
  return (
    <>
      <Section />
      <Homes />
    </>
  );
}
