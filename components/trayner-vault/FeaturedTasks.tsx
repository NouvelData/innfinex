'use client'
import { Badge } from '@/components/ui/badge'
import { Github, Figma, Box, Layers } from 'lucide-react'
import type React from 'react'
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
} from '@/components/common/Dialog'
import { useState } from 'react'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

type Difficulty = 'Beginner' | 'Intermediate' | 'Advanced'
type Tool =
    | 'GitHub'
    | 'Actions'
    | 'Python'
    | 'Figma'
    | 'Design'
    | 'UI/UX'
    | 'Blender'
    | '3D'
    | 'Animation'
    | 'Unity'
    | 'C#'
    | 'GameDev'

interface TaskCard {
    icon: React.ReactNode
    title: string
    description: string
    difficulty: Difficulty
    reward: string
    tools: Tool[]
}

const DIFFICULTY_COLORS: Record<Difficulty, string> = {
    Beginner: 'bg-green-500/20 text-green-400 border-green-500/30',
    Intermediate: 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30',
    Advanced: 'bg-red-500/20 text-red-400 border-red-500/30',
} as const

function TaskCard({ task }: { task: TaskCard }) {
    const [isModalOpen, setIsModalOpen] = useState(false)

    return (
        <article>
            <div
                onClick={() => setIsModalOpen(true)}
                className="block group cursor-pointer"
                aria-label={`View ${task.title} task details`}
            >
                <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-purple-700/50 to-black border border-purple-500/20 p-6 transition-all hover:border-purple-500/40">
                    <div className="absolute inset-0 bg-gradient-to-br from-purple-600/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                    <div className="relative z-10">
                        <div className="flex items-center justify-between mb-4">
                            <div className="p-3 rounded-lg bg-purple-500/20">
                                {task.icon}
                            </div>
                            <Badge
                                variant="outline"
                                className={DIFFICULTY_COLORS[task.difficulty]}
                            >
                                {task.difficulty}
                            </Badge>
                        </div>
                        <h3 className="text-xl font-semibold text-white mb-2">
                            {task.title}
                        </h3>
                        <p className="text-gray-400 mb-4">{task.description}</p>
                        <div className="flex items-center justify-between">
                            <div className="flex flex-wrap gap-2">
                                {task.tools.map((tool) => (
                                    <Badge
                                        key={tool}
                                        variant="outline"
                                        className="bg-purple-500/20 text-purple-400 border-purple-500/30"
                                    >
                                        {tool}
                                    </Badge>
                                ))}
                            </div>
                            <div className="text-sm font-medium text-white ">
                                {task.reward}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
                <div className="bg-black">
                    <DialogContent className="bg-gradient-to-br from-purple-900/30 to-black border border-purple-500 text-white">
                        <DialogHeader>
                            <DialogTitle className="text-2xl font-bold flex items-center gap-3">
                                <div className="p-2 rounded-lg bg-purple-500/20">
                                    {task.icon}
                                </div>
                                {task.title}
                            </DialogTitle>
                        </DialogHeader>
                        <div className="space-y-4">
                            <p className="text-gray-300">{task.description}</p>
                            <div className="flex items-center gap-2">
                                <Badge
                                    variant="outline"
                                    className={DIFFICULTY_COLORS[task.difficulty]}
                                >
                                    {task.difficulty}
                                </Badge>
                                <span className="text-white font-medium">
                                    {task.reward}
                                </span>
                            </div>
                            <div className="flex flex-wrap gap-2">
                                {task.tools.map((tool) => (
                                    <Badge
                                        key={tool}
                                        variant="outline"
                                        className="bg-purple-500/20 text-purple-400 border-purple-500/30"
                                    >
                                        {tool}
                                    </Badge>
                                ))}
                            </div>
                            <div className="flex justify-end">
                                <Button className="bg-purple-500/20 text-purple-400 border border-purple-500/30 hover:bg-purple-500 hover:text-white duration-300">
                                    <Link href="/task">
                                        <span>View Task</span>
                                    </Link>
                                </Button>
                            </div>
                        </div>
                    </DialogContent>
                </div>
            </Dialog>
        </article>
    )
}

export function FeaturedTasks() {
    const featuredTasks: TaskCard[] = [
        {
            icon: <Github className="h-6 w-6 text-purple-400" />,
            title: 'GitHub Workflow Automation',
            description:
                'Train AI to automate common GitHub workflows and repository management tasks.',
            difficulty: 'Intermediate' as const,
            reward: '$25 per task',
            tools: ['GitHub', 'Actions', 'Python'] as Tool[],
        },
        {
            icon: <Figma className="h-6 w-6 text-purple-400" />,
            title: 'Figma Design Assistant',
            description:
                'Help train AI to understand and generate Figma design components and layouts.',
            difficulty: 'Beginner' as const,
            reward: '$15 per task',
            tools: ['Figma', 'Design', 'UI/UX'] as Tool[],
        },
        {
            icon: <Box className="h-6 w-6 text-purple-400" />,
            title: 'Blender 3D Modeling',
            description:
                'Train AI models to understand and generate 3D models and animations in Blender.',
            difficulty: 'Advanced' as const,
            reward: '$40 per task',
            tools: ['Blender', '3D', 'Animation'] as Tool[],
        },
        {
            icon: <Layers className="h-6 w-6 text-purple-400" />,
            title: 'Unity Game Development',
            description:
                'Contribute to training AI in understanding Unity game development workflows.',
            difficulty: 'Advanced' as const,
            reward: '$35 per task',
            tools: ['Unity', 'C#', 'GameDev'] as Tool[],
        },
    ]

    return (
        <section className="py-12" aria-labelledby="featured-tasks-title">
            <div className="container mx-auto px-4">
                <h2
                    id="featured-tasks-title"
                    className="text-3xl font-extrabold text-purple-400 mb-8"
                >
                    Featured Tasks
                </h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {featuredTasks.map((task) => (
                        <TaskCard key={task.title} task={task} />
                    ))}
                </div>
            </div>
        </section>
    )
}
