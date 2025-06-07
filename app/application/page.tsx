import JobGrid2 from "@/components/JobGrid2/JobGrid2";
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Wiztrace | Application",
  description: "...",
};

export default function JobPage() {
  return (
    <>
     <JobGrid2 />
    </>
  );
}
