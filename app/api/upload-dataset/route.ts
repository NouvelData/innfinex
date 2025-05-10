import { NextResponse } from 'next/server'

export async function POST(request: Request) {
    const formData = await request.formData()
    const file = formData.get('file') as File
    const taskId = formData.get('taskId') as string

    if (!file || !taskId) {
        return NextResponse.json({ error: 'Missing file or task ID' }, { status: 400 })
    }
    // Need to discuss the table structure... right now I am just logging it with 1s of delay
    console.log(
        `Received file: ${file.name}, size: ${file.size} bytes, for task: ${taskId}`
    )

    await new Promise((resolve) => setTimeout(resolve, 1000))

    return NextResponse.json({ message: 'Dataset uploaded successfully' })
}
