// "use client";
import JobDetails from "@/components/JobDetails/JobDetails";
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Wiztrace || JobDetails",
  description: "...",
};
export default function Page({ params }: any) {

  return (
    <>
      <JobDetails id={params?.id}  />
    </>
  );
}
