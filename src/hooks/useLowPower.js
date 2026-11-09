import { useMediaQuery } from "./useMediaQuery.js";

export function useIsMobile(breakpoint = 768) {
  return useMediaQuery(`(max-width: ${breakpoint - 1}px)`);
}

export function usePrefersReducedMotion() {
  return useMediaQuery("(prefers-reduced-motion: reduce)");
}

export function useLowPower() {
  return useIsMobile() || usePrefersReducedMotion();
}
