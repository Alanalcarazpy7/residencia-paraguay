import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = { title: 'Integración | Gestión de Residencia en Paraguay', description: 'Obtén tu Residencia Paraguaya y Cédula de Identidad de forma rápida y segura.', keywords: ['residencia Paraguay','cédula extranjera','migraciones Paraguay'], openGraph: { title: 'Tu Residencia en Paraguay', description: 'Hacemos oficial tu nueva vida en Paraguay.' } }
export default function RootLayout({children}:{children:React.ReactNode}) { return <html lang="es"><body>{children}</body></html> }
