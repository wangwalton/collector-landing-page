"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { v4 as uuidv4 } from "uuid";
import Cookies from "js-cookie";

const BACKEND_URL = process.env.NEXT_PUBLIC_BACKEND_URL;

let userId = Cookies.get("landingPageUserId");

if (!userId) {
  userId = uuidv4();
  Cookies.set("landingPageUserId", userId, { expires: 365 * 10 });
}

export default function PageVisitTracker() {
  const pathname = usePathname(); // Reflects the current path of the page

  useEffect(() => {
    // Trigger the API call when the component mounts or the pathname changes
    const trackPageVisit = async () => {
      try {
        await fetch(`${BACKEND_URL}/trpc/landingPage.visit`, {
          method: "POST",
          body: JSON.stringify({
            url: pathname,
            userId,
            referer: document.referrer,
          }),
          headers: {
            "Content-Type": "application/json",
          },
        });
      } catch (error) {
        console.error("Failed to track page visit:", error);
      }
    };

    trackPageVisit();
  }, [pathname]);

  return null;
}
