import { Users, Star, Award, MessageSquare, LucideIcon } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'

interface CommunityMemberProps {
    name: string
    role: string
    avatar: string
    contributions: number
    rating: number
}

function CommunityMember({
    name,
    role,
    avatar,
    contributions,
    rating,
}: CommunityMemberProps) {
    return (
        <div className="flex flex-col items-center p-6 rounded-xl bg-black/20 border border-purple-500/30 hover:border-purple-500/50 transition-all hover:transform hover:scale-105">
            <Avatar className="h-20 w-20 mb-4">
                <AvatarImage src={avatar} alt={name} />
                <AvatarFallback>{name[0]}</AvatarFallback>
            </Avatar>
            <h3 className="text-lg font-semibold text-white mb-1">{name}</h3>
            <p className="text-sm text-purple-400 mb-4">{role}</p>
            <div className="flex gap-4 text-sm text-gray-400">
                <div className="flex items-center gap-1">
                    <Star className="h-4 w-4 text-yellow-500" />
                    <span>{rating}</span>
                </div>
                <div className="flex items-center gap-1">
                    <MessageSquare className="h-4 w-4 text-purple-400" />
                    <span>{contributions}</span>
                </div>
            </div>
        </div>
    )
}

function CommunityHighlight({
    icon: Icon,
    title,
    value,
}: {
    icon: LucideIcon
    title: string
    value: string
}) {
    return (
        <div className="flex flex-col items-center p-6 rounded-xl bg-theme-primary/10 border border-purple-500/30 hover:border-purple-500/40 transition-all">
            <div className="h-12 w-12 flex items-center justify-center rounded-lg bg-purple-600/20 text-purple-400 mb-4">
                <Icon className="h-6 w-6" />
            </div>
            <h3 className="text-lg font-semibold text-white mb-1">{value}</h3>
            <p className="text-sm text-gray-400">{title}</p>
        </div>
    )
}

export function Community() {
    return (
        <section className="py-24 bg-gradient-to-b from-black to-theme-primary-dark/40">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold text-white mb-4">
                        Join Our Community
                    </h2>
                    <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                        Connect with AI enthusiasts, researchers, and developers from
                        around the world
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
                    <CommunityHighlight
                        icon={Users}
                        value="50,000+"
                        title="Active Members"
                    />
                    <CommunityHighlight
                        icon={MessageSquare}
                        value="100,000+"
                        title="Discussion Posts"
                    />
                    <CommunityHighlight
                        icon={Award}
                        value="25,000+"
                        title="Solutions Submitted"
                    />
                </div>

                <div className="hidden md:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
                    <CommunityMember
                        name="Alex Chen"
                        role="ML Engineer"
                        avatar="/placeholder.svg?height=80&width=80"
                        contributions={156}
                        rating={4.9}
                    />
                    <CommunityMember
                        name="Sarah Johnson"
                        role="Data Scientist"
                        avatar="/placeholder.svg?height=80&width=80"
                        contributions={243}
                        rating={4.8}
                    />
                    <CommunityMember
                        name="Michael Kim"
                        role="Research Lead"
                        avatar="/placeholder.svg?height=80&width=80"
                        contributions={189}
                        rating={4.9}
                    />
                    <CommunityMember
                        name="Emma Wilson"
                        role="AI Researcher"
                        avatar="/placeholder.svg?height=80&width=80"
                        contributions={167}
                        rating={4.7}
                    />
                </div>

                <div className="text-center">
                    <Button
                        size="lg"
                        className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 rounded-md text-lg"
                    >
                        Join the Community
                    </Button>
                </div>
            </div>
        </section>
    )
}
