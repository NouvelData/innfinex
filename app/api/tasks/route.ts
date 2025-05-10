import { NextResponse } from 'next/server'

import { clientPromise } from '@/lib/mongodb'

export async function GET() {
    try {
        const client = await clientPromise
        const db = client.db()

        const tasks = await db
            .collection('tasks')
            .aggregate([
                { $sort: { completedAt: -1 } },
                { $limit: 10 },
                {
                    $lookup: {
                        from: 'users',
                        localField: 'userEmail',
                        foreignField: 'email',
                        as: 'user',
                    },
                },
                {
                    $project: {
                        _id: 1,
                        title: 1,
                        userEmail: 1,
                        userName: { $arrayElemAt: ['$user.name', 0] },
                        completedAt: 1,
                        points: 1,
                    },
                },
            ])
            .toArray()

        return NextResponse.json(tasks)
    } catch {
        return NextResponse.json({ message: 'Something went wrong' }, { status: 500 })
    }
}
