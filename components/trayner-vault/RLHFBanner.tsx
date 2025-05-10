import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { ArrowRight, Brain, Cpu, Network, Database, Code, Cloud, Bot } from 'lucide-react'

export function RLHFBanner() {
    return (
        <section className="mt-10 container mx-auto px-4">
            <div className="flex flex-col items-start justify-center gap-6 p-24 min-h-[240px] bg-gradient-to-br from-purple-500/40 to-black border rounded-3xl shadow-lg transition-all border-purple-400/50 relative overflow-hidden">
                <div className="absolute inset-0 opacity-5 z-0">
                    <Brain className="absolute h-24 w-24 top-[5%] left-[10%] text-purple-400" />
                    <Cpu className="absolute h-16 w-16 top-[20%] right-[15%] text-purple-400" />
                    <Network className="absolute h-20 w-20 bottom-[15%] left-[20%] text-purple-400" />
                    <Database className="absolute h-16 w-16 top-[40%] left-[40%] text-purple-400" />
                    <Code className="absolute h-24 w-24 bottom-[20%] right-[25%] text-purple-400" />
                    <Cloud className="absolute h-16 w-16 top-[15%] left-[60%] text-purple-400" />
                    <Bot className="absolute h-20 w-20 bottom-[10%] left-[45%] text-purple-400" />
                </div>

                <div className="space-y-4 relative z-10">
                    <h2 className="text-5xl font-bold text-white flex items-center gap-2">
                        RLHF -{' '}
                        <span className="text-3xl">
                            Reinforcement Learning from Human Feedback
                        </span>
                    </h2>
                    <p className="text-white/80 text-lg max-w-6xl">
                        We leverage RLHF to continuously improve our AI agents through
                        real human interactions. Instead of using predefined rules, models
                        learn directly from human feedback through an iterative process.
                    </p>
                </div>

                <Button className="bg-purple-700/30 text-white hover:bg-purple-700/50 text-lg px-8 py-5 z-10">
                    Read the Docs <ArrowRight className="ml-2 h-4 w-12" />
                </Button>
            </div>
        </section>
    )
}
