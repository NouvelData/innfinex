'use client'

import { useEffect, useState } from 'react'
import { DollarSign, Star, Upload } from 'lucide-react'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Overview } from '@/components/dashboard/Overview'
import { TaskList } from '@/components/dashboard/TaskList'
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from '@/components/ui/table'
import { Badge } from '@/components/ui/badge'
import { Task } from '@/types'

export default function DashboardPage() {
    const [tasks, setTasks] = useState<Task[]>([])

    useEffect(() => {
        const fetchTasks = async () => {
            const response = await fetch('/api/tasks')
            if (response.ok) {
                const data = await response.json()
                setTasks(data)
            }
        }
        fetchTasks()
    }, [])
    return (
        <div className="bg-gray-800 w-full">
            <div className="absolute inset-0 bg-gradient-to-b from-theme-primary/40 to-black pointer-events-none" />

            <div className="container space-y-8 p-8 w-full z-10 relative">
                <div className="grid gap-4 md:grid-cols-3 w-full">
                    <Card>
                        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                            <CardTitle className="text-sm font-medium">
                                Total Earnings
                            </CardTitle>
                            <DollarSign className="h-4 w-4 text-muted-foreground" />
                        </CardHeader>
                        <CardContent>
                            <div className="text-2xl font-bold">$3,090</div>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                            <CardTitle className="text-sm font-medium">
                                Contributions
                            </CardTitle>
                            <Upload className="h-4 w-4 text-muted-foreground" />
                        </CardHeader>
                        <CardContent>
                            <div className="text-2xl font-bold">309</div>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                            <CardTitle className="text-sm font-medium">
                                Quality Score
                            </CardTitle>
                            <Star className="h-4 w-4 text-muted-foreground" />
                        </CardHeader>
                        <CardContent>
                            <div className="text-2xl font-bold">4.9/5</div>
                        </CardContent>
                    </Card>
                </div>
                <Card>
                    <CardHeader>
                        <CardTitle>Contribution Overview</CardTitle>
                    </CardHeader>
                    <CardContent className="pt-4">
                        <Overview />
                    </CardContent>
                </Card>
                <Card className="container mx-auto mt-10">
                    <CardHeader>
                        <CardTitle className="text-2xl text-center font-bold text-purple-600 dark:text-purple-400">
                            Leaderboard
                        </CardTitle>
                    </CardHeader>
                    <CardContent>
                        <Table>
                            <TableHeader>
                                <TableRow>
                                    <TableHead>Task</TableHead>
                                    <TableHead>User</TableHead>
                                    <TableHead>Completed At</TableHead>
                                    <TableHead>Points</TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                {tasks.map((task) => (
                                    <TableRow key={task.id}>
                                        <TableCell className="font-medium">
                                            {task.title}
                                        </TableCell>
                                        <TableCell>{task.organizer.name}</TableCell>
                                        <TableCell>
                                            {new Date(
                                                task.timeline[0].date
                                            ).toLocaleString()}
                                        </TableCell>
                                        <TableCell>
                                            <Badge variant="secondary">
                                                {task.prize}
                                            </Badge>
                                        </TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </CardContent>
                </Card>
                <Card>
                    <CardHeader>
                        <CardTitle>Available Tasks</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <TaskList />
                    </CardContent>
                </Card>
            </div>
        </div>
    )
}
