"use server";

import {
  type ContactFormResult,
  type ContactFormValues,
  contactFormSchema,
} from "@/types/contact";

export async function sendContactMessage(
  input: ContactFormValues,
): Promise<ContactFormResult> {
  const validatedFields = contactFormSchema.safeParse(input);

  if (!validatedFields.success) {
    return {
      success: false,
      message: "Verifique os campos destacados e tente novamente.",
      errors: validatedFields.error.flatten().fieldErrors,
    };
  }

  const { name } = validatedFields.data;

  console.log("[contato] Nova mensagem recebida:", validatedFields.data);

  return {
    success: true,
    message: `Obrigado, ${name}! Recebemos sua mensagem e retornaremos em breve.`,
  };
}
