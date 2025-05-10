interface StatProps {
    value: string
    label: string
}

function Stat({ value, label }: StatProps) {
    return (
        <div className="flex flex-col items-center">
            <div className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-3">
                {value}
            </div>
            <div className="text-sm md:text-base text-gray-400 text-center max-w-[140px]">
                {label}
            </div>
        </div>
    )
}

export function StatsSection() {
    return (
        <div className="container mx-auto px-2 sm:px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 lg:gap-12 py-8 md:pt-16">
                <Stat value="320+" label="Tasks Challenges" />
                <Stat value="237K+" label="Community Members" />
                <Stat value="$1.1M+" label="Awarded in Prizes" />
                <Stat value="65+" label="Research Papers Published" />
            </div>
        </div>
    )
}
