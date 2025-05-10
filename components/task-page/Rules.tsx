import { AlertTriangle, ListOrdered } from 'lucide-react'

import { Task } from '@/types'

export function Rules({ task }: { task: Task }) {
    return (
        <div className="container mx-auto px-4 py-12">
            <div className="max-w-3xl mx-auto">
                <h2 className="text-3xl font-bold text-white mb-8">Task Rules</h2>
                <div className="space-y-6">
                    <div className="p-6 bg-black/40 border border-purple-500/20 rounded-lg">
                        <h3 className="text-xl font-semibold text-purple-400 mb-4 flex items-center gap-2">
                            <ListOrdered className="h-5 w-5" /> General Guidelines
                        </h3>
                        <ul className="space-y-3 text-gray-300">
                            <li>• All submissions must be original work</li>
                            <li>• Team size limited to 3 members maximum</li>
                            <li>
                                • No use of pre-trained models unless explicitly allowed
                            </li>
                        </ul>
                    </div>

                    <div className="p-6 bg-black/40 border border-purple-500/20 rounded-lg">
                        <h3 className="text-xl font-semibold text-purple-400 mb-4 flex items-center gap-2">
                            <AlertTriangle className="h-5 w-5" /> Prohibited Actions
                        </h3>
                        <ul className="space-y-3 text-gray-300">
                            <li>• Data leakage or sharing of task data</li>
                            <li>• Multiple account usage</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}
