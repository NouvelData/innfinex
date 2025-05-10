import { PrizeRange } from '@/types'

export const TASK_CATEGORIES = [
    'Machine Learning',
    'Computer Vision',
    'NLP',
    'Robotics',
    'Data Science',
    'AI Ethics',
]

export const PRIZE_RANGES: Record<string, PrizeRange> = {
    UNDER_5000: {
        label: 'Under $500',
        min: 0,
        max: 5000,
    },
    BETWEEN_500_AND_2000: {
        label: '$500 - $2,000',
        min: 500,
        max: 2000,
    },
    BETWEEN_2000_AND_5000: {
        label: '$2,000 - $5,000',
        min: 2000,
        max: 5000,
    },
    OVER_5000: {
        label: 'Over $5,000',
        min: 5000,
        max: Infinity,
    },
}
