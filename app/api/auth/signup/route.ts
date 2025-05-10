import { NextResponse } from 'next/server'

import { hashPassword } from '@/lib/auth'
import { clientPromise } from '@/lib/mongodb'

export async function POST(request: Request) {
    try {
        const { email, password, name } = await request.json()
        const client = await clientPromise
        const db = client.db()

        const existingUser = await db.collection('users').findOne({ email })
        if (existingUser) {
            return NextResponse.json({ message: 'User already exists' }, { status: 400 })
        }

        const hashedPassword = await hashPassword(password)
        await db.collection('users').insertOne({
            email,
            password: hashedPassword,
            name,
            bio: '',
            joinedDate: new Date(),
            tasksCompleted: 0,
            level: 1,
            lastSignIn: new Date(),
        })

        return NextResponse.json(
            { message: 'User created successfully' },
            { status: 201 }
        )
    } catch (error) {
        console.log(error)
        return NextResponse.json({ message: 'Something went wrong' }, { status: 500 })
    }
}
