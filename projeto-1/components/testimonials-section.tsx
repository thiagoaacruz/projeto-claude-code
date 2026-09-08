const testimonials = [
  {
    name: "Marina Souza",
    role: "Proprietária do Veloce Sedan GT",
    quote:
      "Processo de compra muito transparente. O financiamento foi aprovado no mesmo dia e o carro chegou impecável.",
  },
  {
    name: "Rafael Lima",
    role: "Proprietário do Veloce SUV Trail",
    quote:
      "Já revisei o carro duas vezes na concessionária e o suporte é excelente. Recomendo para toda a minha família.",
  },
  {
    name: "Camila Torres",
    role: "Proprietária do Veloce City EV",
    quote:
      "Atendimento sem pressão para fechar negócio. Me ajudaram a encontrar exatamente o modelo que eu precisava.",
  },
];

export function TestimonialsSection() {
  return (
    <section id="depoimentos" className="mx-auto w-full max-w-6xl px-6 py-24">
      <div className="mb-12 flex flex-col items-center text-center">
        <h2 className="text-3xl font-semibold tracking-tight text-foreground">
          Quem comprou, recomenda
        </h2>
        <p className="mt-3 max-w-md text-zinc-600 dark:text-zinc-400">
          Depoimentos de clientes que já encontraram o carro ideal com a
          Veloce Motors.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {testimonials.map((testimonial) => (
          <figure
            key={testimonial.name}
            className="flex flex-col gap-4 rounded-2xl border border-black/[.08] p-6 dark:border-white/[.08]"
          >
            <blockquote className="text-sm leading-6 text-zinc-600 dark:text-zinc-400">
              &ldquo;{testimonial.quote}&rdquo;
            </blockquote>
            <figcaption className="mt-auto flex items-center gap-3">
              <div
                aria-hidden="true"
                className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-foreground text-sm font-medium text-background"
              >
                {testimonial.name.charAt(0)}
              </div>
              <div>
                <p className="text-sm font-semibold text-foreground">
                  {testimonial.name}
                </p>
                <p className="text-xs text-zinc-500">{testimonial.role}</p>
              </div>
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}
