import React from "react";
import { SITE } from "../site.js";

export default function Monogram({ className = "" }) {
  return (
    <span className={`font-display italic text-xl tracking-tight text-stone-900 dark:text-stone-100 ${className}`}>
      {SITE.initials.toLowerCase()}
    </span>
  );
}
