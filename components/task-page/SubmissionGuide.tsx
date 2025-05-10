import { Code2, UploadCloud } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { Task } from '@/types'

export function SubmissionGuide({ task }: { task: Task }) {
    return (
        <div className="container mx-auto px-4 py-12">
            <div className="max-w-3xl mx-auto space-y-8">
                <h2 className="text-3xl font-bold text-white mb-8">Submission Process</h2>

                <div className="p-6 bg-black/40 border border-purple-500/20 rounded-lg">
                    <div className="flex items-center gap-3 mb-6">
                        <UploadCloud className="h-6 w-6 text-purple-400" />
                        <h3 className="text-xl font-semibold text-white">
                            File Requirements
                        </h3>
                    </div>
                    <ul className="space-y-3 text-gray-300">
                        <li>• ZIP archive containing all solution files</li>
                        <li>• Maximum file size: 500MB</li>
                        <li>• Include README with implementation notes</li>
                    </ul>
                </div>

                <div className="p-6 bg-black/40 border border-purple-500/20 rounded-lg">
                    <div className="flex items-center gap-3 mb-6">
                        <Code2 className="h-6 w-6 text-purple-400" />
                        <h3 className="text-xl font-semibold text-white">
                            Technical Specs
                        </h3>
                    </div>
                    <div className="grid grid-cols-2 gap-4 text-gray-300">
                        <div>
                            <p className="font-medium">Allowed Frameworks:</p>
                            <p>PyTorch, TensorFlow 2.x</p>
                        </div>
                        <div>
                            <p className="font-medium">Python Version:</p>
                            <p>3.8+</p>
                        </div>
                    </div>
                </div>

                <Button className="w-full bg-purple-600 hover:bg-purple-700 py-6 text-lg">
                    Submit Solution
                </Button>
            </div>
        </div>
    )
}
