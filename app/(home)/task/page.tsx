import { TaskFilters } from '@/components/task-list/TaskFilters'
import { TaskListCard } from '@/components/task-list/TaskListCard'
import { ALL_TASKS } from '@/content/taskList'

export default function TaskListPage() {
    return (
        <div className="min-h-screen bg-black text-white">
            <main className="pt-24 pb-16">
                <div className="container mx-auto px-4">
                    <div className="max-w-2xl mx-auto text-center mb-12">
                        <h1 className="text-4xl font-bold text-white mb-4">AI Tasks</h1>
                        <p className="text-gray-400 text-lg">
                            Participate in cutting-edge AI tasks and help solve real-world
                            problems
                        </p>
                    </div>

                    <div className="grid lg:grid-cols-4 gap-8">
                        <div className="lg:col-span-1">
                            <div className="sticky top-24">
                                <TaskFilters />
                            </div>
                        </div>
                        <div className="lg:col-span-3">
                            <div className="grid md:grid-cols-3 gap-6 items-stretch">
                                {ALL_TASKS.map((task) => (
                                    <TaskListCard key={task.slug} task={task} />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    )
}
