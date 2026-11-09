import React from "react";

export default function Section({ id, children }) {
  return (
    <section id={id} className="relative z-10 px-5 md:px-8 py-10 md:py-14 scroll-mt-24">
      <div className="max-w-5xl mx-auto">{children}</div>
    </section>
  );
}
