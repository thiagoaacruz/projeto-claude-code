export function HeroSection() {
  return (
    <section
      id="inicio"
      className="mx-auto flex w-full max-w-6xl flex-col items-center gap-12 px-6 py-24 lg:flex-row lg:py-32"
    >
      <div className="flex flex-1 flex-col items-center gap-6 text-center lg:items-start lg:text-left">
        <span className="rounded-full bg-black/[.06] px-3 py-1 text-xs font-medium uppercase tracking-wide text-zinc-600 dark:bg-white/[.08] dark:text-zinc-400">
          Concessionária oficial
        </span>

        <h1 className="max-w-xl text-4xl font-semibold leading-tight tracking-tight text-foreground sm:text-5xl">
          O carro certo para cada trajeto
        </h1>

        <p className="max-w-md text-lg leading-8 text-zinc-600 dark:text-zinc-400">
          Encontre o veículo ideal com as melhores condições de financiamento,
          garantia estendida e suporte completo em toda a sua jornada.
        </p>

        <div className="flex flex-col gap-4 sm:flex-row">
          <a
            href="#modelos"
            className="flex h-12 items-center justify-center rounded-full bg-foreground px-6 text-base font-medium text-background transition-colors hover:bg-[#383838] dark:hover:bg-[#ccc]"
          >
            Ver modelos
          </a>
          <a
            href="#contato"
            className="flex h-12 items-center justify-center rounded-full border border-solid border-black/[.08] px-6 text-base font-medium text-foreground transition-colors hover:border-transparent hover:bg-black/[.04] dark:border-white/[.145] dark:hover:bg-[#1a1a1a]"
          >
            Falar com um consultor
          </a>
        </div>
      </div>

      <div className="flex flex-1 items-center justify-center">
        <div className="aspect-video w-full max-w-lg rounded-2xl bg-gradient-to-br from-zinc-200 to-zinc-100 dark:from-zinc-800 dark:to-zinc-900" />
      </div>
    </section>
  );
}
