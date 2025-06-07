import JobLists from "@/components/JobList/JobList";
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Wiztrace | Job",
  description: "...",
};
export default function JobPage() {
  return (
    <>
      <JobLists />
    </>
  );
}
