'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { Button } from '@/components/ui/button'
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from '@/components/ui/card'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Badge } from '@/components/ui/badge'
import { useUser } from '@/context/user-context'

interface UserProfile {
    _id: string
    email: string
    name: string
    bio: string
    joinedDate: string
    tasksCompleted: number
    level: number
}

export default function Profile() {
    const [user, setUser] = useState<UserProfile | null>(null)
    const router = useRouter()
    const { setUser: setUserContext } = useUser()

    useEffect(() => {
        const fetchUser = async () => {
            const response = await fetch('/api/user')
            if (response.ok) {
                const userData = await response.json()
                setUser(userData)
            } else {
                router.push('/login')
            }
        }
        fetchUser()
    }, [router])

    const handleLogout = async () => {
        const response = await fetch('/api/auth/logout', { method: 'POST' })
        if (response.ok) {
            setUserContext(null)
            router.push('/login')
        }
    }

    if (!user) return <div>Loading...</div>

    return (
        <div className="flex items-center justify-between w-full h-screen">
            <Card className="max-w-2xl mx-auto mt-10 w-full">
                <CardHeader className="text-center">
                    <Avatar className="w-24 h-24 mx-auto mb-4">
                        <AvatarImage
                            src={`https://api.dicebear.com/6.x/initials/svg?seed=${user.name}`}
                            alt={user.name}
                        />
                        <AvatarFallback>{user.name.charAt(0)}</AvatarFallback>
                    </Avatar>
                    <CardTitle className="text-3xl font-bold text-purple-600 dark:text-purple-400">
                        {user.name}
                    </CardTitle>
                    <CardDescription>{user.email}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                    <div>
                        <h3 className="text-lg font-semibold mb-2">Bio</h3>
                        <p>{user.bio}</p>
                    </div>
                    <div className="flex justify-between items-center">
                        <div>
                            <h3 className="text-lg font-semibold mb-2">Member Since</h3>
                            <p>{new Date(user.joinedDate).toLocaleDateString()}</p>
                        </div>
                        <div>
                            <h3 className="text-lg font-semibold mb-2">
                                Tasks Completed
                            </h3>
                            <p className="text-center">{user.tasksCompleted}</p>
                        </div>
                        <div>
                            <h3 className="text-lg font-semibold mb-2">Level</h3>
                            <Badge variant="secondary" className="text-lg">
                                {user.level}
                            </Badge>
                        </div>
                    </div>
                </CardContent>
                <CardFooter className="justify-center">
                    <Button onClick={handleLogout} variant="destructive">
                        Logout
                    </Button>
                </CardFooter>
            </Card>
        </div>
    )
}
