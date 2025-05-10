import { Inter } from 'next/font/google'

import './globals.css'
import { UserProvider } from '@/context/user-context'

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <html lang="en">
            <body className={`${inter.className} dark`}>
                <UserProvider>{children}</UserProvider>
            </body>
        </html>
    )
}
