import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";
import { supabaseAdmin } from "@/integrations/supabase/client.server";

const contactSchema = z.object({
  inquiry_type: z.enum(["quote", "sample", "packaging", "logistics", "partnership"]),
  name: z.string().trim().min(1).max(200),
  company: z.string().trim().min(1).max(200),
  email: z.string().trim().email().max(320),
  phone: z.string().trim().max(40).optional().nullable(),
  country: z.string().trim().max(100).optional().nullable(),
  volume_tons: z.number().nonnegative().max(1_000_000).optional().nullable(),
  message: z.string().trim().min(1).max(5000),
});

export const submitContact = createServerFn({ method: "POST" })
  .inputValidator((input: unknown) => contactSchema.parse(input))
  .handler(async ({ data }) => {
    const { error } = await supabaseAdmin.from("contact_submissions").insert({
      inquiry_type: data.inquiry_type,
      name: data.name,
      company: data.company,
      email: data.email,
      phone: data.phone ?? null,
      country: data.country ?? null,
      volume_tons: data.volume_tons ?? null,
      message: data.message,
    });

    if (error) {
      console.error("[contact] insert failed:", error.message);
      throw new Error("Failed to save inquiry");
    }

    return { ok: true as const };
  });
