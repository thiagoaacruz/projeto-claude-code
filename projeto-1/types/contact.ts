import { z } from "zod";

export const contactFormSchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, "Informe seu nome completo.")
    .max(80, "O nome deve ter no máximo 80 caracteres."),
  email: z
    .string()
    .trim()
    .min(1, "Informe seu e-mail.")
    .email("Informe um e-mail válido."),
  message: z
    .string()
    .trim()
    .min(10, "Conte pelo menos 10 caracteres sobre o que você precisa.")
    .max(500, "A mensagem deve ter no máximo 500 caracteres."),
});

export type ContactFormValues = z.infer<typeof contactFormSchema>;

export type ContactFormResult =
  | { success: true; message: string }
  | {
      success: false;
      message: string;
      errors?: Partial<Record<keyof ContactFormValues, string[]>>;
    };
