import type { Metadata } from 'next'
import { TableauDeBordAdminGerantContent } from './_content'

export const metadata: Metadata = {
  title: "Comment un tableau de bord admin change le quotidien d'un gérant",
  description: "Un bon tableau de bord centralise réservations, clients et indicateurs en un seul endroit. Voici ce que ça change concrètement pour un gérant au quotidien.",
}

export default function Page() {
  return <TableauDeBordAdminGerantContent />
}
