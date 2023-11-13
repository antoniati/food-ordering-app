import { Roboto } from 'next/font/google'
import style from "@/app/styles/Layout.module.css";
import '@/app/styles/globals.css'

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
          {children}
        </main>
      </body>
    </html>
  )
}
