import { Database, Trophy, Globe } from 'lucide-react'

interface FeatureCardProps {
    icon: React.ReactNode
    title: string
    description: string
}

function FeatureCard({ icon, title, description }: FeatureCardProps) {
    return (
        <div className="flex flex-col items-center text-center p-6 rounded-xl bg-black/20 border border-purple-500/30 hover:border-purple-500/50 transition-colors">
            <div className="h-12 w-12 flex items-center justify-center rounded-lg bg-theme-primary-light/20 text-purple-400 mb-4">
                {icon}
            </div>
            <h3 className="text-xl font-semibold text-white mb-3">{title}</h3>
            <p className="text-gray-400">{description}</p>
        </div>
    )
}

export function HowItWorks() {
    return (
        <section className="bg-gradient-to-b from-theme-primary-dark/40 to-black py-12 md:py-20">
            <div className="container mx-auto px-4">
                <h2 className="text-4xl font-bold text-center text-white mb-16">
                    How It Works
                </h2>
                <div className="grid md:grid-cols-3 gap-8">
                    <FeatureCard
                        icon={<Database className="h-6 w-6" />}
                        title="Contribute Data"
                        description="Jump into our Training Gym and complete AI-generated computer tasks. From games to apps, every click and action contributes to something bigger."
                    />
                    <FeatureCard
                        icon={<Trophy className="h-6 w-6" />}
                        title="Earn Rewards"
                        description="Get compensated for your valuable contributions to AI advancement. Participate in challenges and earn points that can be redeemed for exciting rewards."
                    />
                    <FeatureCard
                        icon={<Globe className="h-6 w-6" />}
                        title="Global Impact"
                        description="Help shape the future of AI by contributing your unique perspective."
                    />
                </div>
            </div>
        </section>
    )
}
