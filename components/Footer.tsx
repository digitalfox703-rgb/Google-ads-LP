export function Footer() {
  return (
    <footer className="py-12 px-4 text-center border-t border-neutral-200 bg-white mt-auto">
      <p className="text-sm text-neutral-500 font-mono">
        © {new Date().getFullYear()} Profitability Diagnostic. All rights reserved.
      </p>
    </footer>
  );
}
