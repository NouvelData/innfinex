import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Task } from '@/types'

export function TaskContent({ task }: { task: Task }) {
    return (
        <div className="container mx-auto px-4 py-12">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="lg:col-span-2 space-y-12">
                    <section id="overview">
                        <h2 className="text-2xl font-bold text-white mb-6">Overview</h2>
                        <div className="prose prose-invert max-w-none">
                            <p className="text-gray-300">{task.description}</p>
                            <h3 className="text-xl font-semibold text-white mt-6 mb-4">
                                What you&apos;ll build:
                            </h3>
                            <ul className="list-disc list-inside text-gray-300 space-y-2">
                                <li>
                                    Develop a machine learning model using provided
                                    datasets
                                </li>
                                <li>Implement advanced preprocessing techniques</li>
                                <li>Create efficient training pipelines</li>
                                <li>Optimize model performance and accuracy</li>
                            </ul>
                        </div>
                    </section>
                </div>

                <div className="lg:col-span-1 space-y-6">
                    <Card className="bg-black/40 border-purple-500/20">
                        <CardHeader>
                            <CardTitle className="text-purple-100">
                                Getting Started
                            </CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <Button className="w-full bg-purple-600 hover:bg-purple-700">
                                Download Starter Kit
                            </Button>
                            <Button
                                variant="outline"
                                className="w-full border-purple-600 text-purple-400 hover:bg-purple-600/10"
                            >
                                View Documentation
                            </Button>
                            <Button
                                variant="outline"
                                className="w-full border-purple-600 text-purple-400 hover:bg-purple-600/10"
                            >
                                Join Discord
                            </Button>
                        </CardContent>
                    </Card>

                    <Card className="bg-black/40 border-purple-500/20">
                        <CardHeader>
                            <CardTitle className="text-purple-100">Resources</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <nav className="space-y-2">
                                <a
                                    href="#"
                                    className="block text-purple-400 hover:text-purple-300 transition-colors"
                                >
                                    • Submission Guidelines
                                </a>
                                <a
                                    href="#"
                                    className="block text-purple-400 hover:text-purple-300 transition-colors"
                                >
                                    • Evaluation Metrics
                                </a>
                                <a
                                    href="#"
                                    className="block text-purple-400 hover:text-purple-300 transition-colors"
                                >
                                    • Dataset Description
                                </a>
                                <a
                                    href="#"
                                    className="block text-purple-400 hover:text-purple-300 transition-colors"
                                >
                                    • FAQ
                                </a>
                            </nav>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </div>
    )
}
