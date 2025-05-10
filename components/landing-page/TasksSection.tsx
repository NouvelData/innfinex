'use client'

import { useRouter } from 'next/navigation'

import { Button } from '@/components/ui/button'
import { ALL_TASKS } from '@/content/taskList'
import { ChallengeCard } from '@/components/landing-page/ChallengeCard'

export function TasksSection() {
    const router = useRouter()

    const displayedTasks = ALL_TASKS.slice(0, 9)

    return (
        <section className="bg-gradient-to-b from-black to-theme-primary-dark/40 py-12 relative overflow-hidden">
            <div className="container mx-auto px-4">
                <div className="flex flex-col lg:flex-row gap-12 items-center">
                    {/* Left side - Challenge Cards */}

                    <div className="lg:min-w-[35%] text-center lg:text-left">
                        <h2 className="text-4xl font-bold text-white mb-6">
                            Participate in Cutting-Edge{' '}
                            <span className="text-purple-400">AI Challenges</span>
                        </h2>
                        <p className="text-xl text-gray-300 mb-8 max-w-2xl">
                            Join our community of innovators and tackle real-world AI
                            problems. Showcase your skills, learn from peers, and earn
                            rewards while contributing to the advancement of AI
                            technology.
                        </p>
                        <div className="flex flex-wrap gap-4 justify-center lg:justify-start mb-8">
                            <Button
                                size="lg"
                                className="bg-purple-600 hover:bg-purple-700"
                                onClick={() => router.push('/task')}
                            >
                                Browse All Tasks
                            </Button>
                        </div>
                    </div>
                    {/* Right side - Content */}

                    <div className="relative">
                        {/* Large screens (3x3) */}
                        <div className="hidden 2xl:flex flex-wrap justify-center gap-6 relative z-10">
                            {[0, 1, 2].map((row) => (
                                <div
                                    key={row}
                                    className={`flex flex-wrap gap-4 justify-center ${
                                        row === 1 ? 'ml-[-30px]' : 'ml-[25px]'
                                    }`}
                                >
                                    {[0, 1, 2].map((col) => {
                                        const index = row * 3 + col
                                        const task = displayedTasks[index]
                                        if (!task) return null
                                        return (
                                            <div
                                                key={task.title}
                                                className="max-w-[256px] w-full"
                                            >
                                                <ChallengeCard task={task} />
                                            </div>
                                        )
                                    })}
                                </div>
                            ))}
                        </div>

                        {/* Medium screens (2x3) */}
                        <div className="hidden lg:flex 2xl:hidden flex-wrap justify-center gap-6 relative z-10">
                            {[0, 1, 2].map((row) => (
                                <div
                                    key={row}
                                    className={`flex flex-wrap gap-4 justify-center ${
                                        row === 1 ? 'ml-[-30px]' : 'ml-[25px]'
                                    }`}
                                >
                                    {[0, 1].map((col) => {
                                        const index = row * 3 + col
                                        const task = displayedTasks[index]
                                        if (!task) return null
                                        return (
                                            <div
                                                key={task.title}
                                                className="max-w-[256px] w-full"
                                            >
                                                <ChallengeCard task={task} />
                                            </div>
                                        )
                                    })}
                                </div>
                            ))}
                        </div>

                        {/* Mobile screens (1x3) */}
                        <div className="flex md:hidden flex-wrap justify-center gap-6 relative z-10">
                            <div className="flex flex-wrap gap-4 justify-center">
                                {[0, 1, 2].map((col) => {
                                    const task = displayedTasks[col]
                                    if (!task) return null
                                    return (
                                        <div
                                            key={task.title}
                                            className="max-w-[256px] w-full"
                                        >
                                            <ChallengeCard task={task} />
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
