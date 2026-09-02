export function SiteFooter() {
  return (
    <footer className="border-t border-black/[.08] dark:border-white/[.08]">
      <div className="mx-auto flex w-full max-w-6xl flex-col items-center justify-between gap-4 px-6 py-8 text-sm text-zinc-600 dark:text-zinc-400 sm:flex-row">
        <span className="font-medium text-foreground">Veloce Motors</span>
        <span>&copy; {new Date().getFullYear()} Veloce Motors. Todos os direitos reservados.</span>
      </div>
    </footer>
  );
}
