import Link from 'next/link'
import { TrendingUp, DollarSign } from 'lucide-react'
import React from 'react'

interface TrainingCategoryCardProps {
    href: string
    icon: React.ReactElement<{ className?: string }>
    title: string
    description: string
    iconSize?: string
    titleSize?: string
    colorTheme?: 'gold' | 'purple'
}

function TrainingCategoryCard({
    href,
    icon,
    title,
    description,
    colorTheme = 'purple',
}: TrainingCategoryCardProps) {
    const themes = {
        gold: {
            background: 'from-yellow-600/50',
            border: 'border-yellow-400/30',
            hoverBorder: 'hover:border-yellow-400/50',
            gradient: 'from-yellow-600/10',
            iconBg: 'bg-yellow-400/20',
            iconColor: 'text-yellow-400',
        },
        purple: {
            background: 'from-purple-600/50',
            border: 'border-purple-400/30',
            hoverBorder: 'hover:border-purple-400/50',
            gradient: 'from-purple-600/10',
            iconBg: 'bg-purple-400/20',
            iconColor: 'text-purple-400',
        },
    }

    const theme = themes[colorTheme]

    return (
        <Link
            href={href}
            className={`group relative overflow-hidden rounded-3xl bg-gradient-to-br ${theme.background} to-black border ${theme.border} p-6 transition-all ${theme.hoverBorder}`}
        >
            <div
                className={`absolute inset-0 bg-gradient-to-br ${theme.gradient} to-transparent opacity-0 group-hover:opacity-100 transition-opacity`}
            />
            <div className="relative z-10 flex items-start gap-4">
                <div className={`p-3 rounded-lg ${theme.iconBg}`}>
                    {React.cloneElement(icon, {
                        className: `h-8 w-8 ${theme.iconColor}`,
                    })}
                </div>
                <div>
                    <h3 className={`text-2xl font-bold text-white mb-2`}>{title}</h3>
                    <p className="text-gray-400">{description}</p>
                </div>
            </div>
        </Link>
    )
}

export function TrainingCategories() {
    return (
        <section className="py-12">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-extrabold text-purple-400 mb-8">
                    Start Training
                </h2>
                <div className="grid md:grid-cols-2 gap-6">
                    <TrainingCategoryCard
                        href="/training/free"
                        icon={<TrendingUp />}
                        title="Free Tasks"
                        description="Start contributing to AI training with basic tasks. Perfect for beginners."
                        colorTheme="gold"
                    />
                    <TrainingCategoryCard
                        href="/training/premium"
                        icon={<DollarSign />}
                        title="Premium Tasks"
                        description="Advanced tasks with higher rewards. For experienced contributors."
                        colorTheme="purple"
                    />
                </div>
            </div>
        </section>
    )
}
