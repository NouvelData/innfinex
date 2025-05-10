'use client'

export function QuickLinks({
    activeLink,
    quickLinks,
    handleLinkClick,
}: {
    activeLink: string
    quickLinks: { name: string; href: string }[]
    handleLinkClick: (link: string) => void
}) {
    return (
        <div className="bg-black border-b border-purple-500/20">
            <div className="container mx-auto px-4">
                <nav className="flex overflow-x-auto">
                    {quickLinks.map((link) => (
                        <p
                            key={link.name}
                            onClick={() => {
                                handleLinkClick(link.name)
                            }}
                            className={`cursor-pointer text-gray-300 hover:text-purple-400 transition-colors py-4 px-6 border-b-2 border-transparent hover:border-purple-400 whitespace-nowrap ${
                                link.name === activeLink
                                    ? 'text-purple-400 border-purple-400'
                                    : ''
                            }`}
                        >
                            {link.name}
                        </p>
                    ))}
                </nav>
            </div>
        </div>
    )
}
