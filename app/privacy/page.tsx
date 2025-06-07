
import PrivacyAndPolicy from "@/components/PrivacyAndPolicy/PrivacyAndPolicy";
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Wiztrace | Privacy",
  description: "...",
};
export default function PrivacyPage() {
  return (
    <>
    <PrivacyAndPolicy />
    </>
  );
}
