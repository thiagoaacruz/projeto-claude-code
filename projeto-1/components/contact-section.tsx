import { ContactForm } from "@/components/contact-form";

export function ContactSection() {
  return (
    <section id="contato" className="mx-auto w-full max-w-6xl px-6 py-24">
      <div className="mb-12 flex flex-col items-center text-center">
        <h2 className="text-3xl font-semibold tracking-tight text-foreground">
          Fale com a gente
        </h2>
        <p className="mt-3 max-w-md text-zinc-600 dark:text-zinc-400">
          Preencha o formulário abaixo e um de nossos consultores entrará em
          contato em breve.
        </p>
      </div>

      <div className="flex justify-center">
        <ContactForm />
      </div>
    </section>
  );
}
