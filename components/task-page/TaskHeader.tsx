import { Trophy, CalendarDays, Clock, Tag } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { taskTags } from '@/content/taskList'
import { Task } from '@/types'

export function TaskHeader({ task }: { task: Task }) {
    if (!task) return null
    return (
        <div className="relative overflow-hidden bg-gradient-to-b from-purple-900/40 to-black/40 border-b border-purple-500/20">
            <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:60px_60px]" />
            <div className="container mx-auto px-4 py-12 relative z-10">
                <div className="flex flex-col items-start">
                    <div>
                        <div className="flex flex-wrap gap-2 mb-4">
                            {task.taskDomains.map((domain: string) => (
                                <Badge
                                    key={domain}
                                    variant="outline"
                                    className={`${
                                        taskTags[domain as keyof typeof taskTags]
                                    } transition-colors duration-200 hover:bg-opacity-30`}
                                >
                                    <Tag className="w-3 h-3 mr-1" />
                                    {domain}
                                </Badge>
                            ))}
                        </div>
                        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
                            {task.title}
                        </h1>
                        <p className="text-xl text-gray-300 mb-6">{task.summary}</p>
                        <div className="flex flex-wrap gap-4 mb-8">
                            <Button
                                size="lg"
                                className="bg-purple-600 hover:bg-purple-700"
                            >
                                Start Task
                            </Button>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                            <div className="flex items-center gap-3">
                                <Trophy className="h-5 w-5 text-yellow-500" />
                                <div>
                                    <div className="text-sm text-gray-400">
                                        Total Prize Pool
                                    </div>
                                    <div className="text-white font-semibold">
                                        {task.prize}
                                    </div>
                                </div>
                            </div>
                            <div className="flex items-center gap-3">
                                <CalendarDays className="h-5 w-5 text-purple-400" />
                                <div>
                                    <div className="text-sm text-gray-400">
                                        Start Date
                                    </div>
                                    <div className="text-white font-semibold">
                                        Feb 1, 2024
                                    </div>
                                </div>
                            </div>
                            <div className="flex items-center gap-3">
                                <Clock className="h-5 w-5 text-purple-400" />
                                <div>
                                    <div className="text-sm text-gray-400">
                                        Time Remaining
                                    </div>
                                    <div className="text-white font-semibold">
                                        45 Days
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
