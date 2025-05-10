'use client'

import { useState, useEffect } from 'react'

import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Skeleton } from '@/components/ui/skeleton'
import { Download, RefreshCw } from 'lucide-react'

interface AnalysisResult {
    taskName: string
    datasetName: string
    summary: string
    insights: string[]
    performance: {
        accuracy: number
        f1Score: number
    }
    samplePredictions: {
        input: string
        output: string
    }[]
}

export function DatasetAnalysis({
    taskId,
    datasetId,
}: {
    taskId: string
    datasetId: string
}) {
    const [analysisResult, setAnalysisResult] = useState<AnalysisResult | null>(null)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        if (taskId && datasetId) {
            fetchAnalysis()
        }
    }, [taskId, datasetId])

    const fetchAnalysis = async () => {
        setLoading(true)
        try {
            const response = await fetch(
                `/api/dataset-analysis?taskId=${taskId}&datasetId=${datasetId}`
            )
            if (!response.ok) {
                throw new Error('Failed to fetch analysis')
            }
            const data = await response.json()
            setAnalysisResult(data)
        } catch (error) {
            console.error('Error fetching analysis:', error)
        } finally {
            setLoading(false)
        }
    }

    if (loading) {
        return <AnalysisSkeleton />
    }

    if (!analysisResult) {
        return (
            <div className="text-center text-gray-400">No analysis data available.</div>
        )
    }

    return (
        <div className="space-y-8">
            <Card className="bg-gray-900 border-gray-800">
                <CardHeader>
                    <CardTitle className="text-2xl text-white">
                        {analysisResult.taskName}
                    </CardTitle>
                    <CardDescription className="text-gray-400">
                        Dataset: {analysisResult.datasetName}
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <p className="text-gray-300 mb-4">{analysisResult.summary}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                        {analysisResult.insights.map((insight, index) => (
                            <Badge
                                key={index}
                                variant="outline"
                                className="bg-purple-900/30 text-purple-300 border-purple-500/30"
                            >
                                {insight}
                            </Badge>
                        ))}
                    </div>
                    <div className="grid grid-cols-2 gap-4 mb-6">
                        <div className="bg-gray-800 rounded-lg p-4">
                            <h3 className="text-lg font-semibold text-white mb-2">
                                Accuracy
                            </h3>
                            <p className="text-3xl font-bold text-green-400">
                                {(analysisResult.performance.accuracy * 100).toFixed(2)}%
                            </p>
                        </div>
                        <div className="bg-gray-800 rounded-lg p-4">
                            <h3 className="text-lg font-semibold text-white mb-2">
                                F1 Score
                            </h3>
                            <p className="text-3xl font-bold text-blue-400">
                                {analysisResult.performance.f1Score.toFixed(2)}
                            </p>
                        </div>
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-4">
                        Sample Predictions
                    </h3>
                    <div className="space-y-4">
                        {analysisResult.samplePredictions.map((prediction, index) => (
                            <div key={index} className="bg-gray-800 rounded-lg p-4">
                                <p className="text-gray-400 mb-2">
                                    Input: {prediction.input}
                                </p>
                                <p className="text-white">Output: {prediction.output}</p>
                            </div>
                        ))}
                    </div>
                </CardContent>
            </Card>
            <div className="flex justify-center space-x-4">
                <Button
                    onClick={fetchAnalysis}
                    className="bg-purple-600 hover:bg-purple-700"
                >
                    <RefreshCw className="w-4 h-4 mr-2" />
                    Refresh Analysis
                </Button>
                <Button
                    variant="outline"
                    className="border-purple-500/20 text-purple-400 hover:bg-purple-500/10"
                >
                    <Download className="w-4 h-4 mr-2" />
                    Download Full Report
                </Button>
            </div>
        </div>
    )
}

function AnalysisSkeleton() {
    return (
        <Card className="bg-gray-900 border-gray-800">
            <CardHeader>
                <Skeleton className="h-8 w-2/3 bg-gray-800" />
                <Skeleton className="h-4 w-1/2 bg-gray-800" />
            </CardHeader>
            <CardContent>
                <Skeleton className="h-20 w-full bg-gray-800 mb-4" />
                <div className="flex flex-wrap gap-2 mb-4">
                    {[1, 2, 3].map((i) => (
                        <Skeleton key={i} className="h-6 w-24 bg-gray-800" />
                    ))}
                </div>
                <div className="grid grid-cols-2 gap-4 mb-6">
                    {[1, 2].map((i) => (
                        <Skeleton key={i} className="h-24 w-full bg-gray-800" />
                    ))}
                </div>
                <Skeleton className="h-6 w-1/3 bg-gray-800 mb-4" />
                <div className="space-y-4">
                    {[1, 2, 3].map((i) => (
                        <Skeleton key={i} className="h-20 w-full bg-gray-800" />
                    ))}
                </div>
            </CardContent>
        </Card>
    )
}
