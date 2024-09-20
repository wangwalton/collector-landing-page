// app/[slug]/page.tsx

import { notFound } from "next/navigation";
import { Metadata } from "next";
import { pages } from "@/components/Header/menuData";
export const metadata: Metadata = {
  title: "Collector",
  icons: "/images/favicon.png",
  description: "Collector - AI web scraping for non-developers",
  // other metadata
};
// Define the structure of a page object

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
    <section
      id="home"
      className="relative z-10 overflow-hidden bg-white pb-16 pt-[120px] dark:bg-gray-dark md:pb-[120px] md:pt-[150px] xl:pb-[160px] xl:pt-[180px] 2xl:pb-[200px] 2xl:pt-[210px]"
    >
      <div className="container">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4">
            <div className="mx-auto max-w-[800px]">
              <h1 className="mb-5 text-3xl font-bold leading-tight text-black dark:text-white sm:text-4xl sm:leading-tight md:text-5xl md:leading-tight">
                {page.title}
              </h1>
              Are you trying to export data from {page.title}? This article is
              for you!
              <br />
              <br />
              With Collector, you can do this effortlessly with our AI-powered
              chrome extension.
              <br />
              <br />
              Simply navigate to{" "}
              <a
                href={page.urlExample}
                target="_blank"
                className="text-blue-500 hover:text-blue-600 hover:underline"
              >
                {page.urlExample}
              </a>{" "}
              and click the Collector chrome extension icon. This will display a
              table preview with columns including:
              <br />
              <ul className="list-disc pl-5">
                {page.columns.map((column) => (
                  <li key={column} className="font-bold">
                    {column}
                  </li>
                ))}
              </ul>
              <br />
              If you{"'"}re happy with this, you can simply click the {'"'}
              Download{'"'}
              button, this will download a CSV file with all the data.
              <br />
              <br />
              {page.additionalColumnsFromRowUrl.length > 0 && (
                <>
                  If you need additional information such as{" "}
                  <ul className="list-disc pl-5">
                    {page.additionalColumnsFromRowUrl.map((column) => (
                      <li key={column} className="font-bold">
                        {column}
                      </li>
                    ))}
                  </ul>
                  you can click on the row and the url will be displayed in the
                  top left corner of the table.
                  <br />
                  <br />
                </>
              )}
              {page.infiniteScroll && (
                <>
                  If you are looking for more rows of{" "}
                  {page.unitEntity.toLowerCase()}, you can click Get More Rows{" "}
                  {">"} Infinite Scroll button. Then Collector will
                  automatically scroll to the bottom of the page for you.
                  <br />
                  <br />
                  If this doesn{"'"}t work, you can always manually scroll to
                  the bottom.
                  <br />
                  <br />
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
