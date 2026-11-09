import { useEffect } from "react";
import { flushQueuedEvents } from "../lib/analytics.js";

const DEFAULT_SCRIPT = "https://cloud.umami.is/script.js";
const DEFAULT_WEBSITE_ID = "d7936d6c-c081-4e2e-b988-3c0d6bb7f781";

function isLocalHost() {
  const host = window.location.hostname;
  return host === "localhost" || host === "127.0.0.1";
}

export default function UmamiAnalytics() {
  useEffect(() => {
    const websiteId = import.meta.env.VITE_UMAMI_WEBSITE_ID || DEFAULT_WEBSITE_ID;
    if (!websiteId) return;
    if (isLocalHost() && import.meta.env.VITE_UMAMI_TRACK_LOCAL !== "true") return;

    const script = document.createElement("script");
    script.defer = true;
    script.src = import.meta.env.VITE_UMAMI_SCRIPT_URL || DEFAULT_SCRIPT;
    script.setAttribute("data-website-id", websiteId);
    script.onload = flushQueuedEvents;
    document.head.appendChild(script);

    return () => {
      script.remove();
    };
  }, []);

  return null;
}
