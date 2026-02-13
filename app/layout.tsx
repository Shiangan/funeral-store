import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: '御花典｜尊榮告別式花禮・全台殯儀館專業代客送花',
  description: '提供高質感高架花籃、追思花禮，24H 在線訂購，首創即時直式輓聯預覽系統，專業配送拍照回傳。',
  viewport: 'width=device-width, initial-scale=1, maximum-scale=1',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="zh-TW">
      <body className={`${inter.className} bg-[#FAF9F6]`}>{children}</body>
    </html>
  )
}
