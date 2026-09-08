"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";

import { sendContactMessage } from "@/actions/send-contact-message";
import { type ContactFormValues, contactFormSchema } from "@/types/contact";

type Feedback = {
  type: "success" | "error";
  message: string;
};

export function ContactForm() {
  const [feedback, setFeedback] = useState<Feedback | null>(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: { name: "", email: "", message: "" },
  });

  async function onSubmit(values: ContactFormValues) {
    setFeedback(null);
    const result = await sendContactMessage(values);

    if (result.success) {
      setFeedback({ type: "success", message: result.message });
      reset();
      return;
    }

    setFeedback({ type: "error", message: result.message });
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      noValidate
      className="flex w-full max-w-lg flex-col gap-5"
    >
      <div className="flex flex-col gap-2">
        <label htmlFor="name" className="text-sm font-medium text-foreground">
          Nome completo
        </label>
        <input
          id="name"
          type="text"
          autoComplete="name"
          aria-invalid={errors.name ? "true" : "false"}
          aria-describedby={errors.name ? "name-error" : undefined}
          className="h-11 rounded-lg border border-black/[.08] bg-transparent px-4 text-sm text-foreground outline-none transition-colors focus:border-foreground dark:border-white/[.145]"
          {...register("name")}
        />
        {errors.name && (
          <p
            id="name-error"
            role="alert"
            className="text-xs text-red-600 dark:text-red-400"
          >
            {errors.name.message}
          </p>
        )}
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="email" className="text-sm font-medium text-foreground">
          E-mail
        </label>
        <input
          id="email"
          type="email"
          autoComplete="email"
          aria-invalid={errors.email ? "true" : "false"}
          aria-describedby={errors.email ? "email-error" : undefined}
          className="h-11 rounded-lg border border-black/[.08] bg-transparent px-4 text-sm text-foreground outline-none transition-colors focus:border-foreground dark:border-white/[.145]"
          {...register("email")}
        />
        {errors.email && (
          <p
            id="email-error"
            role="alert"
            className="text-xs text-red-600 dark:text-red-400"
          >
            {errors.email.message}
          </p>
        )}
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="message" className="text-sm font-medium text-foreground">
          Mensagem
        </label>
        <textarea
          id="message"
          rows={4}
          aria-invalid={errors.message ? "true" : "false"}
          aria-describedby={errors.message ? "message-error" : undefined}
          className="resize-none rounded-lg border border-black/[.08] bg-transparent px-4 py-3 text-sm text-foreground outline-none transition-colors focus:border-foreground dark:border-white/[.145]"
          {...register("message")}
        />
        {errors.message && (
          <p
            id="message-error"
            role="alert"
            className="text-xs text-red-600 dark:text-red-400"
          >
            {errors.message.message}
          </p>
        )}
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="flex h-12 items-center justify-center rounded-full bg-foreground px-6 text-base font-medium text-background transition-colors hover:bg-[#383838] disabled:cursor-not-allowed disabled:opacity-60 dark:hover:bg-[#ccc]"
      >
        {isSubmitting ? "Enviando..." : "Enviar mensagem"}
      </button>

      {feedback && (
        <p
          role="status"
          aria-live="polite"
          className={
            feedback.type === "success"
              ? "text-sm text-emerald-600 dark:text-emerald-400"
              : "text-sm text-red-600 dark:text-red-400"
          }
        >
          {feedback.message}
        </p>
      )}
    </form>
  );
}
