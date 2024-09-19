// app/[slug]/page.tsx

import { notFound } from "next/navigation";

// Define the structure of a page object
interface Page {
  title: string;
  content: string;
}

// Define the structure of pages object with key as string and value as Page
const pages: Record<string, Page> = {
  page1: { title: "Page 1", content: "This is content for page 1" },
  page2: { title: "Page 2", content: "This is content for page 2" },
  // ... other pages
};

// Define the structure for the parameters passed to the page component
interface Params {
  slug: string;
}

// Function to generate static paths at build time
export async function generateStaticParams(): Promise<{ slug: string }[]> {
  return Object.keys(pages).map((slug) => ({
    slug,
  }));
}

// Define props type for the Page component
interface PageProps {
  params: Params;
}

// Page component which renders based on the provided slug
export default function Page({ params }: PageProps) {
  const { slug } = params;

  const page = pages[slug];

  if (!page) {
    return notFound();
  }

  return (
    <div>
      <h1>{page.title}</h1>
      <p>{page.content}</p>
    </div>
  );
}
