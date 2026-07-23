import { Resend } from 'resend';
import { NextResponse } from 'next/server';
import { escapeHtml } from '@/lib/html-escape';
import { isRateLimited } from '@/lib/rate-limit';

const resend = new Resend(process.env.RESEND_API_KEY);

const RATE_LIMIT = 5;
const RATE_LIMIT_WINDOW_MS = 60 * 60 * 1000; // 1 hour

function getClientIp(req: Request): string {
  const forwardedFor = req.headers.get('x-forwarded-for');
  if (forwardedFor) return forwardedFor.split(',')[0].trim();
  return req.headers.get('x-real-ip') || 'unknown';
}

export async function POST(req: Request) {
  const ip = getClientIp(req);
  if (isRateLimited(ip, RATE_LIMIT, RATE_LIMIT_WINDOW_MS)) {
    return NextResponse.json({ error: 'Trop de requêtes, réessayez plus tard' }, { status: 429 });
  }

  const { firstName, lastName, email, company, service, budget, message, website, phone, storeUrl } = await req.json();

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
        <p><strong>Nom:</strong> ${escapeHtml(firstName)} ${escapeHtml(lastName)}</p>
        <p><strong>Email:</strong> ${escapeHtml(email)}</p>
        <p><strong>Téléphone:</strong> ${escapeHtml(phone) || '—'}</p>
        <p><strong>Société:</strong> ${escapeHtml(company) || '—'}</p>
        <p><strong>Site web boutique:</strong> ${escapeHtml(storeUrl) || '—'}</p>
        <p><strong>Services:</strong> ${escapeHtml(service) || '—'}</p>
        <p><strong>Budget:</strong> ${escapeHtml(budget) || '—'}</p>
        <p><strong>Message:</strong> ${escapeHtml(message)}</p>
      `,
    });
    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json({ error: 'Erreur envoi' }, { status: 500 });
  }
}
