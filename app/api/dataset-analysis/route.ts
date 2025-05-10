import { NextResponse } from 'next/server'

export async function GET(request: Request) {
    const { searchParams } = new URL(request.url)
    const taskId = searchParams.get('taskId')
    const datasetId = searchParams.get('datasetId')

    await new Promise((resolve) => setTimeout(resolve, 1000))

    const mockAnalysis = {
        taskName: 'GitHub Workflow Automation',
        datasetName: `Dataset ${datasetId}`,
        summary:
            'The AI model has shown promising results in automating GitHub workflows based on the provided dataset. It demonstrates a good understanding of common Git operations and CI/CD processes.',
        insights: [
            'High accuracy for pull request management',
            'Improved issue triaging',
            'Effective branch naming conventions',
        ],
        performance: {
            accuracy: 0.89,
            f1Score: 0.92,
        },
        samplePredictions: [
            {
                input: 'Create a new branch for feature X',
                output: 'git checkout -b feature/X',
            },
            {
                input: 'Merge the develop branch into main',
                output: 'git checkout main && git merge develop',
            },
            {
                input: 'Set up a CI workflow for Python tests',
                output: 'Created .github/workflows/python-tests.yml with appropriate content',
            },
        ],
    }

    return NextResponse.json(mockAnalysis)
}
