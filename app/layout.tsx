import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Theme from './Theme';
import './globals.css'
import { Header } from './Header';
import { Content } from './Content';

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: process.env.APP_NAME,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Theme options={{ key: 'mui' }}>
          <Header title={process.env.APP_NAME} categories={process.env.CATEGORIES?.split(',')}/>
          <Content>
            {children}
          </Content>
        </Theme>
      </body>
    </html>
  )
}
