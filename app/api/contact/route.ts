import { NextResponse } from "next/server";
import { Resend } from "resend";

const TO_EMAIL = process.env.CONTACT_TO_EMAIL || "juanhernandezconde@gmail.com";

export async function POST(request: Request) {
  const { nombre, apellidos, correo, telefono, mensaje } = await request.json();

  if (!correo || !mensaje) {
    return NextResponse.json(
      { error: "Correo y mensaje son obligatorios." },
      { status: 400 }
    );
  }

  if (!process.env.RESEND_API_KEY) {
    return NextResponse.json(
      { error: "El servidor de correo no está configurado todavía." },
      { status: 500 }
    );
  }

  try {
    const resend = new Resend(process.env.RESEND_API_KEY);
    await resend.emails.send({
      from: "BUILD TECH <onboarding@resend.dev>",
      to: TO_EMAIL,
      replyTo: correo,
      subject: `Nuevo contacto desde el portfolio: ${nombre || ""} ${apellidos || ""}`.trim(),
      text: [
        `Nombre: ${nombre || "-"} ${apellidos || ""}`,
        `Correo: ${correo}`,
        `Teléfono: ${telefono || "-"}`,
        "",
        "Mensaje:",
        mensaje,
      ].join("\n"),
    });

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json(
      { error: "No se pudo enviar el mensaje. Intenta de nuevo." },
      { status: 500 }
    );
  }
}
