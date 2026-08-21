import { PORTFOLIO_DATA } from "@/config/portfolioData";

export function Footer() {
  return (
    <footer className="relative z-20 border-t border-[var(--border-system)] px-6 md:px-12 py-8 bg-[var(--bg-system)]">
      <div className="flex flex-col sm:flex-row justify-between items-center font-mono text-[10px] uppercase tracking-[0.2em] text-[var(--fg-muted)] gap-4">
        <span>{PORTFOLIO_DATA.profile.fullName}</span>
        <span>Is something supposed to be here?</span>
      </div>
    </footer>
  );
}
