'use client'

import { Search } from 'lucide-react'
import { useState } from 'react'

import { Badge } from '@/components/ui/badge'
import { Input } from '@/components/ui/input'
import { PrizeRange, TaskStatus } from '@/types'
import { TASK_CATEGORIES } from '@/constants/constants'
import { PRIZE_RANGES } from '@/constants/constants'
import { Toggle } from '@/components/ui/toggle'

const statuses: TaskStatus[] = ['active', 'upcoming', 'ended']

export function TaskFilters() {
    const [activeStatuses, setActiveStatuses] = useState<TaskStatus[]>([])
    const [activeCategories, setActiveCategories] = useState<string[]>([])
    const [activePrizeRange, setActivePrizeRange] = useState<PrizeRange | null>(null)

    const handleCategoryClick = (categoryToToggle: string) => {
        if (activeCategories.includes(categoryToToggle)) {
            setActiveCategories(
                activeCategories.filter((category) => category !== categoryToToggle)
            )
        } else {
            setActiveCategories([...activeCategories, categoryToToggle])
        }
    }

    const handlePrizeRangeClick = (range: PrizeRange) => {
        setActivePrizeRange(activePrizeRange === range ? null : range)
    }

    const handleClearAll = () => {
        setActiveStatuses([])
        setActiveCategories([])
        setActivePrizeRange(null)
    }

    const handleStatusClick = (status: TaskStatus) => {
        if (activeStatuses.includes(status)) {
            setActiveStatuses(activeStatuses.filter((s) => s !== status))
        } else {
            setActiveStatuses([...activeStatuses, status])
        }
    }

    return (
        <div className="space-y-6">
            <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                <Input
                    type="search"
                    placeholder="Search challenges..."
                    className="w-full pl-10 bg-black/40 border-purple-500/20 text-white placeholder:text-gray-400"
                />
            </div>

            <section className="flex justify-between items-center">
                <h3 className="text-md text-white">Filters</h3>
                <span
                    className="text-sm text-gray-400 cursor-pointer"
                    onClick={handleClearAll}
                >
                    Clear all
                </span>
            </section>

            <section className="border border-gray-700 rounded-md p-3">
                <h3 className="text-gray-200 text-sm font-semibold mb-3">Status</h3>
                <div className="flex flex-wrap gap-2">
                    {statuses.map((status) => (
                        <Toggle
                            key={status}
                            variant="outline"
                            className={`
                                        ${
                                            activeStatuses.includes(status)
                                                ? '!bg-purple-600'
                                                : ''
                                        } capitalize text-xs`}
                            onPressedChange={() => handleStatusClick(status)}
                            pressed={activeStatuses.includes(status)}
                        >
                            {status}
                        </Toggle>
                    ))}
                </div>
            </section>

            <section className="border border-gray-700 rounded-md p-3">
                <h3 className="text-gray-200 text-sm font-semibold mb-3">Categories</h3>
                <div className="flex flex-wrap gap-2">
                    {TASK_CATEGORIES.map((category) => (
                        <Badge
                            key={category}
                            variant="outline"
                            className={`
                                ${
                                    activeCategories.includes(category)
                                        ? '!bg-purple-600'
                                        : ''
                                } capitalize hover:bg-accent hover:text-accent-foreground cursor-pointer`}
                            onClick={() => handleCategoryClick(category)}
                        >
                            {category}
                        </Badge>
                    ))}
                </div>
            </section>

            <section className="border border-gray-700 rounded-md p-3">
                <h3 className="text-gray-200 text-sm font-semibold mb-3">Prize Range</h3>
                <div className="flex flex-wrap gap-2">
                    {Object.values(PRIZE_RANGES).map((range) => (
                        <Badge
                            key={range.label}
                            variant="outline"
                            className={`
                                ${
                                    activePrizeRange === range ? '!bg-purple-600' : ''
                                } hover:bg-accent hover:text-accent-foreground cursor-pointer`}
                            onClick={() => handlePrizeRangeClick(range)}
                        >
                            {range.label}
                        </Badge>
                    ))}
                </div>
            </section>
        </div>
    )
}
