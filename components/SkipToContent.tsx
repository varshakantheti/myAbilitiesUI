"use client";

export function SkipToContent() {
  return (
    <a
      href="#main-content"
      className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 z-[100] bg-[#1E3A5F] text-white px-6 py-3 rounded-xl shadow-lg focus:outline-2 focus:outline-[#FFB366] focus:outline-offset-2"
    >
      Skip to Content
    </a>
  );
}
