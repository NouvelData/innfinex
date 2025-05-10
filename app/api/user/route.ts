import { NextResponse } from 'next/server'
import { cookies } from 'next/headers'
import { ObjectId } from 'mongodb'
import { clientPromise } from '@/lib/mongodb'

export async function GET() {
    try {
        const cookieStore = await cookies()
        const userId = cookieStore.get('userId')?.value
        if (!userId) {
            return NextResponse.json({ message: 'Not authenticated' }, { status: 401 })
        }

        const client = await clientPromise
        const db = client.db()

        const user = await db.collection('users').findOne({ _id: new ObjectId(userId) })
        if (!user) {
            return NextResponse.json({ message: 'User not found' }, { status: 404 })
        }

        user.password = undefined
        return NextResponse.json(user)
    } catch {
        return NextResponse.json({ message: 'Something went wrong' }, { status: 500 })
    }
}
