const features = [
  {
    title: "Garantia estendida",
    description: "Até 5 anos de garantia de fábrica em todos os modelos.",
  },
  {
    title: "Financiamento facilitado",
    description: "Condições especiais com aprovação rápida e sem burocracia.",
  },
  {
    title: "Revisão inclusa",
    description: "Primeiras revisões por nossa conta durante o primeiro ano.",
  },
  {
    title: "Suporte 24h",
    description: "Assistência em qualquer lugar do país, a qualquer hora.",
  },
];

export function FeaturesSection() {
  return (
    <section
      id="diferenciais"
      className="mx-auto w-full max-w-6xl px-6 py-24"
    >
      <div className="mb-12 flex flex-col items-center text-center">
        <h2 className="text-3xl font-semibold tracking-tight text-foreground">
          Por que escolher a Veloce Motors
        </h2>
        <p className="mt-3 max-w-md text-zinc-600 dark:text-zinc-400">
          Cuidamos de cada detalhe para que você tenha a melhor experiência de
          compra.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {features.map((feature) => (
          <div
            key={feature.title}
            className="rounded-2xl border border-black/[.08] p-6 dark:border-white/[.08]"
          >
            <div className="mb-4 h-10 w-10 rounded-full bg-foreground" />
            <h3 className="text-base font-semibold text-foreground">
              {feature.title}
            </h3>
            <p className="mt-2 text-sm leading-6 text-zinc-600 dark:text-zinc-400">
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
