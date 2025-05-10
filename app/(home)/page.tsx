import HeroSection from '@/components/landing-page/HeroSection'
import { HowItWorks } from '@/components/landing-page/HowItWorks'
import { Community } from '@/components/landing-page/Community'
import { TasksSection } from '@/components/landing-page/TasksSection'

export default function Home() {
    return (
        <main>
            <HeroSection />
            <TasksSection />
            <HowItWorks />
            <Community />
        </main>
    )
}
