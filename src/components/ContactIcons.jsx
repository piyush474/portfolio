import React, { useEffect, useRef, useState } from "react";
import { SITE } from "../site.js";
import { events, track } from "../lib/analytics.js";

const LINKS = [
  { href: `mailto:${SITE.email}`, label: "Email", detail: SITE.email, external: false, copyText: SITE.email },
  {
    href: SITE.linkedin,
    label: "LinkedIn",
    detail: "linkedin.com/in/piyushpurohit08",
    external: true,
    eventName: events.linkedin,
  },
  {
    href: SITE.github,
    label: "GitHub",
    detail: "github.com/piyush474",
    external: true,
    eventName: events.github,
  },
];

async function copyToClipboard(text) {
  try {
    await navigator.clipboard.writeText(text);
    return;
  } catch {
    // Some browsers deny clipboard.writeText outside a trusted gesture.
  }
  const input = document.createElement("textarea");
  input.value = text;
  input.setAttribute("readonly", "");
  input.style.position = "fixed";
  input.style.left = "-9999px";
  document.body.appendChild(input);
  input.select();
  const ok = document.execCommand("copy");
  document.body.removeChild(input);
  if (!ok) throw new Error("Copy failed");
}

function CopyIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <rect x="9" y="9" width="13" height="13" rx="2" />
      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M20 6 9 17l-5-5" />
    </svg>
  );
}

function CopyButton({ text }) {
  const [copied, setCopied] = useState(false);
  const timeoutRef = useRef(null);

  useEffect(() => () => clearTimeout(timeoutRef.current), []);

  const onCopy = async (event) => {
    event.preventDefault();
    event.stopPropagation();
    track(events.emailCopy);
    setCopied(true);
    clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => setCopied(false), 1600);
    try {
      await copyToClipboard(text);
    } catch {
      setCopied(false);
    }
  };

  return (
    <button
      type="button"
      onClick={onCopy}
      aria-label="Copy email to clipboard"
      className="group/copy relative inline-flex h-8 w-8 items-center justify-center text-stone-400 hover:text-copper transition-colors"
    >
      {copied ? <CheckIcon /> : <CopyIcon />}
      <span
        className={`pointer-events-none absolute right-0 top-full z-10 mt-2 whitespace-nowrap font-mono text-[10px] uppercase tracking-[0.14em] px-2 py-1 bg-stone-900 dark:bg-stone-100 text-stone-50 dark:text-stone-900 transition-opacity ${
          copied
            ? "opacity-100"
            : "opacity-0 group-hover/copy:opacity-100 group-focus-visible/copy:opacity-100"
        }`}
      >
        {copied ? "Copied" : "Copy email to clipboard"}
      </span>
    </button>
  );
}

function ContactLink({ href, label, detail, external, copyText, eventName }) {
  return (
    <div className="group relative border border-stone-200 dark:border-stone-800 hover:border-copper hover:bg-copper/10 dark:hover:bg-copper/15 transition-colors">
      <a
        href={href}
        target={external ? "_blank" : undefined}
        rel={external ? "noopener noreferrer" : undefined}
        onClick={() => eventName && track(eventName)}
        className={`block p-5 ${copyText ? "pr-12" : ""}`}
      >
        <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-stone-400 group-hover:text-copper">
          {label}
        </p>
        <p className="mt-3 text-sm text-stone-800 dark:text-stone-200 break-all">{detail}</p>
      </a>
      {copyText ? (
        <div className="absolute top-3 right-3">
          <CopyButton text={copyText} />
        </div>
      ) : null}
    </div>
  );
}

export default function ContactIcons() {
  return (
    <div className="grid sm:grid-cols-3 gap-6">
      {LINKS.map((link) => (
        <ContactLink key={link.label} {...link} />
      ))}
    </div>
  );
}
