import Image from 'next/image'

import { User } from '@/types'

interface LeaderboardItemProps {
    user: User
    rank: number
    isCurrentUser: boolean
}

export function LeaderboardItem({ user, rank, isCurrentUser }: LeaderboardItemProps) {
    return (
        <div
            className={`flex items-center p-4 ${
                isCurrentUser ? 'bg-purple-700/30' : 'hover:bg-white/5'
            } rounded-lg transition-colors border border-purple-400/30 shadow-md`}
        >
            <div className="flex-shrink-0 w-8 text-center font-bold text-purple-300">
                {rank}
            </div>
            <div className="flex-shrink-0 ml-4">
                <Image
                    src={user.avatar || '/placeholder.svg'}
                    alt={`${user.name}'s avatar`}
                    width={40}
                    height={40}
                    className="rounded-full border-2 border-purple-500"
                />
            </div>
            <div className="ml-4 flex-grow">
                <div className="font-semibold text-purple-200">{user.name}</div>
                <div className="text-sm text-purple-400">
                    Level {user.level} • {user.expertise}
                </div>
            </div>
            <div className="flex-shrink-0 text-right mr-4">
                <div className="font-bold text-purple-300">{user.points} pts</div>
                <div className="text-sm text-purple-400">
                    {user.tasksCompleted} tasks • {user.timeTaken}
                </div>
            </div>
            {rank <= 3 && <div className="flex-shrink-0 text-2xl">{user.badge}</div>}
        </div>
    )
}
