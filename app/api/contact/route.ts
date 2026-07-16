import { Resend } from 'resend';
import { NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  const { firstName, lastName, email, company, service, budget, message, website } = await req.json();

  // Honeypot: bots fill hidden fields humans never see. Pretend success, skip the send.
  if (website) {
    return NextResponse.json({ success: true });
  }

  try {
    await resend.emails.send({
      from: 'Contact <onboarding@resend.dev>',
      to: 'loanswipe@gmail.com',
      subject: `Nouveau message de ${firstName} ${lastName}`,
      html: `
        <p><strong>Nom:</strong> ${firstName} ${lastName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Société:</strong> ${company || '—'}</p>
        <p><strong>Services:</strong> ${service || '—'}</p>
        <p><strong>Budget:</strong> ${budget || '—'}</p>
        <p><strong>Message:</strong> ${message}</p>
      `,
    });
    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json({ error: 'Erreur envoi' }, { status: 500 });
  }
}
