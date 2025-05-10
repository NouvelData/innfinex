'use client'

import Image from 'next/image'
import { useRouter } from 'next/navigation'

import { Task } from '@/types'

export function ChallengeCard({ task }: { task: Task }) {
    const router = useRouter()

    return (
        <div
            onClick={() => router.push(`/task/${task.slug}`)}
            className="group relative cursor-pointer overflow-hidden rounded-xl border border-purple-500/30 hover:border-purple-500/50 bg-gradient-to-br from-theme-primary to-theme-primary p-6 transition-all hover:scale-105 w-64 h-80"
        >
            <div className="relative h-full flex flex-col items-center justify-between">
                <div className="relative w-32 h-32 mb-4">
                    <Image
                        src={task.image}
                        alt={task.title}
                        fill
                        className="object-cover rounded-lg"
                    />
                </div>
                <div className="mb-4 text-center">
                    <h3 className="text-xl font-semibold text-white mb-2">
                        {task.title}
                    </h3>
                    <p className="text-purple-200">
                        {task.prize.toLocaleString('en-US', {
                            style: 'currency',
                            currency: 'USD',
                            maximumFractionDigits: 0,
                        })}
                    </p>
                </div>
                <div className="flex items-center gap-2 bg-black px-3 py-1 rounded-full">
                    <Image
                        src={task.organizer.image}
                        alt={task.organizer.name}
                        width={24}
                        height={24}
                        className="rounded-full"
                    />
                    <span className="text-sm text-gray-300">{task.organizer.name}</span>
                </div>
            </div>
        </div>
    )
}
