import BlogGrid from "@/components/BlogGrid/BlogGrid";
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Wiztrace | Blog",
  description: "...",
};


export default function JobPage() {
  return (
    <>
 <BlogGrid />
    </>
  );
}
