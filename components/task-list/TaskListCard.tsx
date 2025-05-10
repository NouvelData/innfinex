import Image from 'next/image'
import Link from 'next/link'
import { Tag } from 'lucide-react'

import { Badge } from '@/components/ui/badge'
import { Task } from '@/types'

export function TaskListCard({ task }: { task: Task }) {
    return (
        <Link
            href={`/task/${task.slug}`}
            className="group relative overflow-hidden rounded-xl bg-black/40 border border-purple-500/40 hover:border-purple-500/60 transition-all"
        >
            <div>
                <div className="relative h-48 overflow-hidden">
                    <Image
                        src={task.image || '/placeholder.svg'}
                        alt={task.title}
                        className="object-cover transition-transform group-hover:scale-105"
                        fill
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-black/30" />
                </div>
                <div className="p-5">
                    <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-purple-400 transition-colors">
                        {task.title}
                    </h3>
                    <p className="text-gray-400 text-sm mb-4 line-clamp-2">
                        {task.description}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-4">
                        {task.taskDomains.map((domain: string) => (
                            <Badge
                                key={domain}
                                variant="outline"
                                className={`text-gray-400 font-medium`}
                            >
                                <Tag className="w-3 h-3 mr-1" />
                                {domain}
                            </Badge>
                        ))}
                    </div>

                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                            <div className="h-6 w-6 rounded-full overflow-hidden relative">
                                <Image
                                    src={task.organizer.image || '/placeholder.svg'}
                                    alt={task.organizer.name}
                                    fill
                                    className="object-cover"
                                />
                            </div>
                            <span className="text-sm text-gray-400">
                                {task.organizer.name}
                            </span>
                        </div>

                        <div className="text-sm text-yellow-500 font-semibold">
                            {task.prize.toLocaleString('en-US', {
                                style: 'currency',
                                currency: 'USD',
                                maximumFractionDigits: 0,
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </Link>
    )
}
