import MyProfile from "@/components/Profile/MyProfile/MyProfile";
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Wiztrace | Profile",
  description: "...",
};

export default function Page() {
 
  return (
    <>
    <MyProfile />
    </>
  );
}