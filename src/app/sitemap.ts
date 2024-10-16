import { pages } from "@/components/Header/menuData";
import { MetadataRoute } from "next";

const baseUrl = "https://collector-ai.com";
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: baseUrl,
    },
    ...Object.keys(pages).map((page) => ({
      url: `${baseUrl}/scraping-guides/${page}`,
    })),
  ];
}
