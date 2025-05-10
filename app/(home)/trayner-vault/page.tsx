import { TrainingHero } from '@/components/trayner-vault/Hero'
import { TrainingCategories } from '@/components/trayner-vault/Categories'
import { FeaturedTasks } from '@/components/trayner-vault/FeaturedTasks'
import { RLHFBanner } from '@/components/trayner-vault/RLHFBanner'

export default function TrainingPage() {
    return (
        <main className="pt-20 pb-16 bg-black">
            <TrainingHero />
            <TrainingCategories />
            <FeaturedTasks />
            <RLHFBanner />
        </main>
    )
}
