import { NextResponse } from 'next/server'
import { cookies } from 'next/headers'

import { clientPromise } from '@/lib/mongodb'
import { verifyPassword } from '@/lib/auth'

export async function POST(request: Request) {
    try {
        const { email, password } = await request.json()
        const client = await clientPromise
        const db = client.db()

        const user = await db.collection('users').findOne({ email })
        if (!user) {
            return NextResponse.json({ message: 'User not found' }, { status: 400 })
        }

        const isValid = await verifyPassword(password, user.password)
        if (!isValid) {
            return NextResponse.json({ message: 'Invalid password' }, { status: 400 })
        }

        await db
            .collection('users')
            .updateOne({ _id: user._id }, { $set: { lastSignIn: new Date() } })

        cookies().set('userId', user._id.toString(), { httpOnly: true })

        return NextResponse.json({ message: 'Logged in successfully' })
    } catch {
        return NextResponse.json({ message: 'Something went wrong' }, { status: 500 })
    }
}
