export interface User {
    id: number
    name: string
    points: number
    level: number
    badge: string
    avatar: string
    timeTaken: string
    tasksCompleted: number
    expertise: string
}

export interface LoggedInUser {
    _id: string
    email: string
    name: string
    bio: string
    joinedDate: string
    tasksCompleted: number
    level: number
    lastSignIn: string
}

export interface LeaderboardData {
    currentUserId: number
    leaderboard: User[]
}

export interface Task {
    id: number
    slug: string
    title: string
    prize: number
    image: string
    summary: string
    description: string
    organizer_id: number
    total_participants: number
    taskDomains: string[]
    organizer: {
        id: number
        name: string
        image: string
    }
    timeline: TaskTimeline[]
}

export type TaskStatus = 'active' | 'ended' | 'upcoming'

export type PrizeRange = {
    label: string
    min: number
    max: number
}

export interface TaskTimeline {
    date: string
    title: string
    description: string
}

export interface MyTask {
    id: string
    slug: string
    title: string
    prize: number
    organizer_name: string
    status: MyTaskStatus
    created_at: Date
    ended_at: Date | null
}

export type MyTaskStatus =
    | 'IN_PROGRESS'
    | 'IN_REVIEW'
    | 'CANCELLED'
    | 'EXPIRED'
    | 'COMPLETED'
