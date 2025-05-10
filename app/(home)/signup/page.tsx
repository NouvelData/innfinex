'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from '@/components/ui/card'
import { useUser } from '@/context/user-context'

export default function SignUp() {
    const router = useRouter()

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [name, setName] = useState('')
    const [isLoading, setIsLoading] = useState(false)

    const { fetchUser } = useUser()

    const handleSignUp = async (e: React.FormEvent) => {
        e.preventDefault()
        setIsLoading(true)

        try {
            // First, create the user account
            const signupResponse = await fetch('/api/auth/signup', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email, password, name }),
            })

            const signupData = await signupResponse.json()

            if (signupResponse.ok) {
                // If signup successful, proceed with login
                const loginResponse = await fetch('/api/auth/login', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ email, password }),
                })

                const loginData = await loginResponse.json()

                if (loginResponse.ok) {
                    // Now that we're logged in, fetch the user data
                    await fetchUser()
                    router.refresh()
                    setTimeout(() => {
                        router.push('/dashboard')
                    }, 150)
                } else {
                    alert(loginData.message || 'Something went wrong')
                }
            } else {
                alert(signupData.message || 'Something went wrong')
            }
        } catch {
            alert('An unexpected error occurred')
        } finally {
            setIsLoading(false)
        }
    }

    return (
        <div className="flex-1 flex items-center justify-between w-full min-h-screen">
            <Card className="max-w-md sm:min-w-[400px] mx-auto mt-10">
                <CardHeader>
                    <CardTitle className="text-2xl text-center font-bold text-purple-600 dark:text-purple-400">
                        Sign Up
                    </CardTitle>
                    <CardDescription className="text-center">
                        Create your account to get started
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <form onSubmit={handleSignUp}>
                        <div className="space-y-4">
                            <div className="space-y-2">
                                <label>Name</label>
                                <Input
                                    id="name"
                                    type="text"
                                    placeholder="Your name"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    required
                                />
                            </div>
                            <div className="space-y-2">
                                <label>Email</label>
                                <Input
                                    id="email"
                                    type="email"
                                    placeholder="Email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    required
                                />
                            </div>
                            <div className="space-y-2">
                                <label>Password</label>
                                <Input
                                    id="password"
                                    type="password"
                                    placeholder="Password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    required
                                />
                            </div>
                        </div>
                        <Button
                            className="w-full mt-6"
                            type="submit"
                            disabled={isLoading}
                        >
                            {isLoading ? 'Signing up...' : 'Sign Up'}
                        </Button>
                    </form>
                </CardContent>
                <CardFooter className="justify-center">
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                        Already have an account?{' '}
                        <a
                            href="/login"
                            className="text-purple-600 dark:text-purple-400 hover:underline"
                        >
                            Log in
                        </a>
                    </p>
                </CardFooter>
            </Card>
        </div>
    )
}
