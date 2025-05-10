'use client'

import { createContext, useContext, useState, useEffect, ReactNode } from 'react'

import { LoggedInUser } from '@/types'

interface UserContextType {
    user: LoggedInUser | null
    setUser: (user: LoggedInUser | null) => void
    loading: boolean
    fetchUser: () => Promise<void>
}

const UserContext = createContext<UserContextType | undefined>(undefined)

export function UserProvider({ children }: { children: ReactNode }) {
    const [user, setUser] = useState<LoggedInUser | null>(null)
    const [loading, setLoading] = useState(true)

    const fetchUser = async () => {
        setLoading(true)
        try {
            const response = await fetch('/api/user')
            if (response.ok) {
                const userData = await response.json()
                setUser(userData)
            }
        } catch (error) {
            console.error('Failed to fetch user:', error)
        } finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        fetchUser()
    }, [])

    return (
        <UserContext.Provider value={{ user, setUser, loading, fetchUser }}>
            {children}
        </UserContext.Provider>
    )
}

export function useUser() {
    const context = useContext(UserContext)

    if (context === undefined) {
        throw new Error('useUser must be used within a UserProvider')
    }
    return context
}
