import '~/styles/globals.css'

import { TRPCReactProvider } from '~/trpc/react'
import { Inter } from 'next/font/google'
import { cookies } from 'next/headers'
import { ThemeProvider } from '~/components/common/theme-provider'
import { appConfig } from '~/config/app'
import { cn } from '~/lib/utils'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
})

export const metadata = {
  title: 'Create T3 App',
  description: appConfig.description,
  icons: [{ rel: 'icon', url: '/favicon.ico' }],
  authors: [{ name: appConfig.name }],
  creator: appConfig.name,
}

export default function RootLayout({ children }: LayoutProps) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          'bg-background min-h-screen font-sans antialiased',
          inter.variable
        )}
      >
        <TRPCReactProvider cookies={cookies().toString()}>
          <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
            {children}
          </ThemeProvider>
        </TRPCReactProvider>
      </body>
    </html>
  )
}
