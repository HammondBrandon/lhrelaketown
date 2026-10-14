"use client";

export function PrintButton() {
  return (
    <button
      type="button"
      onClick={() => window.print()}
      className="rounded-full bg-forest-900 px-5 py-2.5 text-sm font-semibold text-ivory-50 transition hover:bg-forest-700"
    >
      Save as PDF
    </button>
  );
}
