'use client'

import { TaskList } from '@/components/dashboard/my-tasks/TaskList'

export default function MyTasksPage() {
    return (
        <div className="bg-gray-800 w-full h-full">
            <div className="absolute inset-0 bg-gradient-to-b from-theme-primary/40 to-black pointer-events-none" />

            <TaskList />
        </div>
    )
}
