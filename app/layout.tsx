import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Del Fiore — Artizan pendir, ləzzətin hekayəsi',
  description: 'Viazul MMC — Del Fiore Caciotta və Ricotta kolleksiyası.',
  icons: { icon: '/Delfioredell/favicon.svg' },
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="az"><body>{children}</body></html>
}
