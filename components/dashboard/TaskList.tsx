import { Button } from '@/components/ui/button'

const tasks = [
    {
        category: 'Image & Vision',
        type: 'Object Classification',
        reward: 15,
    },
    {
        category: 'Natural Language',
        type: 'Text Annotation',
        reward: 25,
    },
    {
        category: 'Speech & Audio',
        type: 'Voice Recording',
        reward: 20,
    },
]

export function TaskList() {
    return (
        <div className="space-y-4">
            {tasks.map((task) => (
                <div
                    key={task.type}
                    className="flex items-center justify-between rounded-lg border p-4"
                >
                    <div>
                        <h3 className="font-medium">{task.category}</h3>
                        <p className="text-sm text-muted-foreground">{task.type}</p>
                    </div>
                    <div className="flex items-center gap-4">
                        <span className="text-sm font-medium text-green-600">
                            ${task.reward}
                        </span>
                        <Button variant="secondary">Start Task</Button>
                    </div>
                </div>
            ))}
        </div>
    )
}
