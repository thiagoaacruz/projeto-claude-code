export function CtaSection() {
  return (
    <section id="contato" className="mx-auto w-full max-w-6xl px-6 pb-24">
      <div className="flex flex-col items-center gap-6 rounded-2xl bg-foreground px-6 py-16 text-center text-background">
        <h2 className="max-w-lg text-3xl font-semibold tracking-tight">
          Pronto para dirigir o seu próximo carro?
        </h2>
        <p className="max-w-md text-base leading-7 opacity-80">
          Agende um test-drive gratuito e conheça de perto o modelo ideal
          para você.
        </p>
        <a
          href="mailto:contato@velocemotors.com.br"
          className="flex h-12 items-center justify-center rounded-full bg-background px-6 text-base font-medium text-foreground transition-opacity hover:opacity-90"
        >
          Agende um test-drive
        </a>
      </div>
    </section>
  );
}
