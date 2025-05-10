'use client'

import { useState, useEffect } from 'react'

import {
    Pagination,
    PaginationContent,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious,
} from '@/components/ui/pagination'
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from '@/components/ui/select'
import { fetchLeaderboardData } from '@/content/leaderboardData'
import { LeaderboardItem } from '@/components/task-page/LeaderboardItem'
import { User } from '@/types'

const ITEMS_PER_PAGE = 10

export function Leaderboard() {
    const [currentUserId, setCurrentUserId] = useState<number | null>(null)
    const [leaderboardData, setLeaderboardData] = useState<User[]>([])
    const [currentPage, setCurrentPage] = useState(1)
    const [isLoading, setIsLoading] = useState(true)
    const [selectedExpertise, setSelectedExpertise] = useState('All')

    useEffect(() => {
        async function loadLeaderboardData() {
            try {
                const data = await fetchLeaderboardData()
                setCurrentUserId(data.currentUserId)
                setLeaderboardData(data.leaderboard)
                setIsLoading(false)
            } catch (error) {
                console.error('Failed to fetch leaderboard data:', error)
                setIsLoading(false)
            }
        }

        loadLeaderboardData()
    }, [])

    const expertiseOptions = ['All', 'Frontend', 'Backend', 'Full Stack', 'DevOps']

    function filterLeaderboardByExpertise(
        leaderboard: User[],
        expertise: string
    ): User[] {
        if (expertise === 'All') {
            return leaderboard
        }
        return leaderboard.filter((user) => user.expertise === expertise)
    }

    const filteredLeaderboard = filterLeaderboardByExpertise(
        leaderboardData,
        selectedExpertise
    )
    const sortedLeaderboard = [...filteredLeaderboard].sort((a, b) => b.points - a.points)
    const totalPages = Math.ceil(sortedLeaderboard.length / ITEMS_PER_PAGE)

    const paginatedLeaderboard = sortedLeaderboard.slice(
        (currentPage - 1) * ITEMS_PER_PAGE,
        currentPage * ITEMS_PER_PAGE
    )

    const handlePageChange = (page: number) => {
        setCurrentPage(page)
    }

    const handleExpertiseChange = (value: string) => {
        setSelectedExpertise(value)
        setCurrentPage(1)
    }

    if (isLoading) {
        return (
            <div className="text-center text-purple-300 my-10">
                Loading leaderboard...
            </div>
        )
    }

    return (
        <div className="max-w-2xl mx-auto p-6 bg-black backdrop-blur-sm rounded-xl shadow-2xl border border-purple-400/20 mt-10">
            <h1 className="text-3xl font-bold text-center mb-8 text-purple-500">
                Leaderboard
            </h1>
            <div className="mb-6 ">
                <Select onValueChange={handleExpertiseChange}>
                    <SelectTrigger className="w-full bg-purple-900/40">
                        <SelectValue placeholder="Filter by expertise" />
                    </SelectTrigger>
                    <SelectContent className="bg-purple-900 text-white">
                        {expertiseOptions.map((option) => (
                            <SelectItem key={option} value={option}>
                                {option}
                            </SelectItem>
                        ))}
                    </SelectContent>
                </Select>
            </div>
            <div className="space-y-4 mb-6">
                {paginatedLeaderboard.map((user, index) => (
                    <LeaderboardItem
                        key={user.id}
                        user={user}
                        rank={(currentPage - 1) * ITEMS_PER_PAGE + index + 1}
                        isCurrentUser={user.id === currentUserId}
                    />
                ))}
            </div>
            <Pagination className="mt-6">
                <PaginationContent>
                    <PaginationItem>
                        <PaginationPrevious
                            href="#"
                            onClick={() => handlePageChange(Math.max(1, currentPage - 1))}
                            className={
                                currentPage === 1 ? 'pointer-events-none opacity-50' : ''
                            }
                        />
                    </PaginationItem>
                    {[...Array(totalPages)].map((_, i) => (
                        <PaginationItem key={i}>
                            <PaginationLink
                                href="#"
                                onClick={() => handlePageChange(i + 1)}
                                className={`${
                                    currentPage === i + 1
                                        ? 'text-black font-bold bg-white'
                                        : 'text-purple-500'
                                }`}
                            >
                                {i + 1}
                            </PaginationLink>
                        </PaginationItem>
                    ))}
                    <PaginationItem>
                        <PaginationNext
                            href="#"
                            onClick={() =>
                                handlePageChange(Math.min(totalPages, currentPage + 1))
                            }
                            className={
                                currentPage === totalPages
                                    ? 'pointer-events-none opacity-50'
                                    : ''
                            }
                        />
                    </PaginationItem>
                </PaginationContent>
            </Pagination>
        </div>
    )
}
