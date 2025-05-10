import { NavBar } from '@/components/Navbar'
import { Footer } from '@/components/Footer'

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <>
            <NavBar />
            <main className="bg-gray-900 pt-16">{children}</main>
            <Footer />
        </>
    )
}
