import BlogDetails from "@/components/BlogDetails/BlogDetails";
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Wiztrace | BlogDetails",
  description: "...",
};
export default function BlogdetailsPage() {
  return (
    <>
      <BlogDetails />
    </>
  );
}
