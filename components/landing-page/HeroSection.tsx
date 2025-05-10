'use client'

import { useRouter } from 'next/navigation'

import { ChallengeCard } from '@/components/landing-page/ChallengeCard'
import { StatsSection } from '@/components/landing-page/StatsSection'
import { Button } from '@/components/ui/button'
import { FEATURED_TASKS } from '@/content/taskList'

export default function HeroSection() {
    const router = useRouter()

    return (
        <div className="bg-black text-white">
            <main className="relative py-16 md:py-20 md:pt-32">
                {/* Gradient Background */}
                <div className="absolute inset-0 bg-gradient-to-b from-theme-primary/40 to-black pointer-events-none" />

                <div className="container relative z-10 mx-auto px-4">
                    <div className="flex flex-col md:flex-row gap-8 items-start min-h-[70vh]">
                        {/* Left side content */}
                        <div className="md:w-1/2 mb-16 max-w-4xl text-left items-start flex flex-col gap-4">
                            <h1 className="mb-6 bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-4xl font-bold text-transparent md:text-6xl pb-[0.1em]">
                                Innfinex is an Infinite Intelligence Exchange Platform
                            </h1>
                            <p className="text-2xl text-gray-300">
                                We&apos;re revolutionising how Intelligence Systems are
                                trained and scaled.
                            </p>
                            <p className="mb-8 max-w-3xl text-xl text-gray-400 sm:mx-auto">
                                We believe in collective open-source AI data creation
                                which empowers everyone to train and deploy frontiers
                                agents and models. Join our global community of 100+
                                domain experts and earn by contributing to our
                                &apos;Trayner Vault&apos;.
                            </p>
                            <div className="flex flex-wrap justify-start sm:justify-center gap-4">
                                <Button
                                    size="lg"
                                    className="bg-purple-600 hover:bg-purple-700"
                                    onClick={() => router.push('/dashboard')}
                                >
                                    Start Contributing
                                </Button>
                                <Button
                                    size="lg"
                                    variant="outline"
                                    className="border-purple-600 text-purple-600 hover:bg-purple-600 hover:text-white"
                                >
                                    Learn More
                                </Button>
                            </div>
                        </div>

                        {/* Right side challenge cards */}
                        <div className="md:w-1/2 relative h-[500px]">
                            <div className="relative h-full">
                                <div className="absolute top-[5%] left-[65%] z-[3] hover:z-[10] transition-[z-index]">
                                    <ChallengeCard task={FEATURED_TASKS[0]} />
                                </div>
                                <div className="absolute top-[45%] left-[40%] z-[2] hover:z-[10] transition-[z-index]">
                                    <ChallengeCard task={FEATURED_TASKS[1]} />
                                </div>
                                <div className="absolute top-[17%] left-[12%] z-[1] hover:z-[10] transition-[z-index]">
                                    <ChallengeCard task={FEATURED_TASKS[2]} />
                                </div>
                            </div>
                        </div>
                    </div>

                    <StatsSection />
                </div>
            </main>
        </div>
    )
}
