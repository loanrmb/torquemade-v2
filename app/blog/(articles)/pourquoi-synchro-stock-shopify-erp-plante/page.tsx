import type { Metadata } from 'next'
import { PourquoiSynchroStockShopifyErpPlanteContent } from './_content'

export const metadata: Metadata = {
  title: "Pourquoi la synchronisation stock Shopify-ERP plante — et comment l'éviter",
  openGraph: {
    images: [{ url: '/api/og?title=Pourquoi+la+synchronisation+stock+Shopify-ERP+plante+%E2%80%94+et+comment+l%27%C3%A9viter&category=ERP+%26+Gestion+de+stock', width: 1200, height: 630 }],
  },
  description:
    'Décalages de stock, surventes, doublons de commande : les causes sont presque toujours les mêmes. Voici les 6 erreurs d\'architecture qui font échouer une intégration ERP-Shopify.',
}

export default function Page() {
  return <PourquoiSynchroStockShopifyErpPlanteContent />
}
