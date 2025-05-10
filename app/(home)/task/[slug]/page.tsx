'use client'

import { useState } from 'react'

import { Rules } from '@/components/task-page/Rules'
import { Timeline } from '@/components/task-page/Timeline'
import { TaskHeader } from '@/components/task-page/TaskHeader'
import { QuickLinks } from '@/components/task-page/QuickLinks'
import { Leaderboard } from '@/components/task-page/Leaderboard'
import { TaskContent } from '@/components/task-page/TaskContent'
import { SubmissionGuide } from '@/components/task-page/SubmissionGuide'
import { ALL_TASKS, FEATURED_TASKS } from '@/content/taskList'

const quickLinks = [
    { name: 'Overview', href: '#overview' },
    { name: 'Leaderboard', href: '#leaderboard' },
    { name: 'Timeline', href: '#timeline' },
    { name: 'Rules', href: '#rules' },
    { name: 'How to Submit', href: '#submission' },
]

export default function TaskPage({ params }: { params: { slug: string } }) {
    const TOTAL_TASKS = [...FEATURED_TASKS, ...ALL_TASKS]

    const task = TOTAL_TASKS.find((task) => task.slug === params.slug)

    const [activeLink, setActiveLink] = useState(quickLinks[0].name)

    const handleLinkClick = (link: string) => {
        setActiveLink(link)
    }

    if (!task) {
        return <div>Task not found</div>
    }

    return (
        <div className="min-h-screen bg-black text-white">
            <main>
                <TaskHeader task={task} />
                <QuickLinks
                    activeLink={activeLink}
                    quickLinks={quickLinks}
                    handleLinkClick={handleLinkClick}
                />
                {activeLink === quickLinks[0].name && <TaskContent task={task} />}
                {activeLink === quickLinks[1].name && <Leaderboard />}
                {activeLink === quickLinks[2].name && <Timeline task={task} />}
                {activeLink === quickLinks[3].name && <Rules task={task} />}
                {activeLink === quickLinks[4].name && <SubmissionGuide task={task} />}
            </main>
        </div>
    )
}
