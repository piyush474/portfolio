import { useEffect, useRef } from "react";
import { SECTION_IDS } from "../nav.js";
import { events, track } from "../lib/analytics.js";
import { useActiveSection } from "./useActiveSection.js";

export function useSectionViewTracking() {
  const active = useActiveSection(SECTION_IDS, "hero");
  const last = useRef(null);

  useEffect(() => {
    if (!active || active === last.current) return;
    last.current = active;
    track(events.section(active));
  }, [active]);
}
