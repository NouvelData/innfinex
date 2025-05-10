import { CalendarDays } from 'lucide-react'

import { Task, TaskTimeline } from '@/types'

export function Timeline({ task }: { task: Task }) {
    return (
        <div className="container mx-auto px-4 py-12">
            <div className="max-w-3xl mx-auto space-y-8">
                <h2 className="text-3xl font-bold text-white mb-8">Task Timeline</h2>
                <div className="relative pl-6 border-l-2 border-purple-500/30">
                    {task?.timeline?.map((item: TaskTimeline) => (
                        <div key={item.date} className="mb-8 relative">
                            <div className="absolute w-3 h-3 bg-purple-500 rounded-full -left-[7px] top-2" />
                            <div className="p-6 bg-black/40 border border-purple-500/20 rounded-lg">
                                <div className="flex items-center gap-3 mb-2">
                                    <CalendarDays className="h-5 w-5 text-purple-400" />
                                    <span className="font-semibold text-purple-400">
                                        {item.date}
                                    </span>
                                </div>
                                <h3 className="text-xl font-semibold text-white mb-2">
                                    {item.title}
                                </h3>
                                <p className="text-gray-300">{item.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
