import { NextResponse } from 'next/server';
import { GoogleAuth } from 'google-auth-library';

const SCOPES = ['https://www.googleapis.com/auth/indexing'];
const ENDPOINT = 'https://indexing.googleapis.com/v3/urlNotifications:publish';

export async function POST(req: Request) {
  const { url } = await req.json();

  if (!url || typeof url !== 'string' || !url.startsWith('https://')) {
    return NextResponse.json({ error: 'URL manquante ou invalide' }, { status: 400 });
  }

  const raw = process.env.GOOGLE_SERVICE_ACCOUNT_JSON;
  if (!raw) {
    return NextResponse.json({ error: 'Service Account non configuré' }, { status: 500 });
  }

  try {
    const credentials = JSON.parse(raw);

    const auth = new GoogleAuth({ credentials, scopes: SCOPES });
    const client = await auth.getClient();

    const { data } = await client.request({
      url: ENDPOINT,
      method: 'POST',
      data: { url, type: 'URL_UPDATED' },
    });

    return NextResponse.json({ success: true, url, result: data });
  } catch (error) {
    const message = error instanceof Error ? error.message : 'Erreur indexation';
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
