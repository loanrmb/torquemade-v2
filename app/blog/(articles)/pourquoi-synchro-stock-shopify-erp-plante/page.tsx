import type { Metadata } from 'next'
import { PourquoiSynchroStockShopifyErpPlanteContent } from './_content'

export const metadata: Metadata = {
  title: "Pourquoi la synchronisation stock Shopify-ERP plante — et comment l'éviter",
  description:
    'Décalages de stock, surventes, doublons de commande : les causes sont presque toujours les mêmes. Voici les 6 erreurs d\'architecture qui font échouer une intégration ERP-Shopify.',
}

export default function Page() {
  return <PourquoiSynchroStockShopifyErpPlanteContent />
}
