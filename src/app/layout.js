import HeaderMain from '@/components/HeaderMain'
import Footer from '@/components/Footer'

import { Roboto } from 'next/font/google'
import style from "@/styles/Layout.module.css";
import '@/styles/globals.css'

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['400', '500', '700']
})

export const metadata = {
  title: 'Pizza',
  description: 'Aplicativo para pedidos de Alimentos.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body className={roboto.className}>
        <main className={style.mainContent}>
          <HeaderMain />
          {children}
          <Footer />
        </main>
      </body>
    </html>
  )
}
