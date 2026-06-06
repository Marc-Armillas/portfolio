import type { APIRoute } from "astro";
import { Resend } from "resend";

export const prerender = false;

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function asString(value: FormDataEntryValue | null) {
  return typeof value === "string" ? value.trim() : "";
}

export const POST: APIRoute = async ({ request }) => {
  const formData = await request.formData();
  const name = asString(formData.get("name"));
  const email = asString(formData.get("email"));
  const company = asString(formData.get("company"));
  const budget = asString(formData.get("budget"));
  const message = asString(formData.get("message"));
  const locale = asString(formData.get("locale")) || "en";

  if (!name || !emailPattern.test(email) || message.length < 20) {
    return Response.json({ ok: false, error: "invalid_payload" }, { status: 422 });
  }

  const apiKey = import.meta.env.RESEND_API_KEY;
  const to = import.meta.env.CONTACT_TO_EMAIL;
  const from = import.meta.env.CONTACT_FROM_EMAIL ?? "Portfolio <onboarding@resend.dev>";

  if (!apiKey || !to) {
    return Response.json({ ok: false, error: "missing_email_configuration" }, { status: 500 });
  }

  const resend = new Resend(apiKey);
  const subject = `Portfolio inquiry from ${name}`;

  await resend.emails.send({
    from,
    to,
    replyTo: email,
    subject,
    text: [
      `Locale: ${locale}`,
      `Name: ${name}`,
      `Email: ${email}`,
      `Company: ${company || "-"}`,
      `Budget: ${budget || "-"}`,
      "",
      message,
    ].join("\n"),
  });

  return Response.json({ ok: true });
};
