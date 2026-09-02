const models = [
  {
    name: "Veloce Sedan GT",
    category: "Sedã executivo",
    priceFrom: "R$ 129.900",
  },
  {
    name: "Veloce SUV Trail",
    category: "SUV compacto",
    priceFrom: "R$ 149.900",
  },
  {
    name: "Veloce City EV",
    category: "Hatch elétrico",
    priceFrom: "R$ 169.900",
  },
];

export function ModelsSection() {
  return (
    <section id="modelos" className="mx-auto w-full max-w-6xl px-6 py-24">
      <div className="mb-12 flex flex-col items-center text-center">
        <h2 className="text-3xl font-semibold tracking-tight text-foreground">
          Modelos em destaque
        </h2>
        <p className="mt-3 max-w-md text-zinc-600 dark:text-zinc-400">
          Uma seleção pensada para cada estilo de vida e orçamento.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {models.map((model) => (
          <div
            key={model.name}
            className="flex flex-col overflow-hidden rounded-2xl border border-black/[.08] dark:border-white/[.08]"
          >
            <div className="aspect-video bg-gradient-to-br from-zinc-200 to-zinc-100 dark:from-zinc-800 dark:to-zinc-900" />

            <div className="flex flex-1 flex-col gap-3 p-6">
              <div>
                <span className="text-xs font-medium uppercase tracking-wide text-zinc-500">
                  {model.category}
                </span>
                <h3 className="text-lg font-semibold text-foreground">
                  {model.name}
                </h3>
              </div>

              <p className="text-sm text-zinc-600 dark:text-zinc-400">
                A partir de{" "}
                <span className="font-semibold text-foreground">
                  {model.priceFrom}
                </span>
              </p>

              <a
                href="#contato"
                className="mt-auto flex h-10 items-center justify-center rounded-full border border-solid border-black/[.08] text-sm font-medium text-foreground transition-colors hover:border-transparent hover:bg-black/[.04] dark:border-white/[.145] dark:hover:bg-[#1a1a1a]"
              >
                Saiba mais
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
