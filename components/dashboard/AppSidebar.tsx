'use client'

import { Database, DollarSign, Home, Settings, User, Upload } from 'lucide-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import {
    Sidebar,
    SidebarContent,
    SidebarHeader,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
} from '@/components/ui/sidebar'

const menuItems = [
    {
        title: 'Overview',
        icon: Home,
        href: '/dashboard',
    },
    {
        title: 'My Tasks',
        icon: Upload,
        href: '/dashboard/my-tasks',
    },
    {
        title: 'Earnings',
        icon: DollarSign,
        href: '/dashboard/earnings',
    },
    {
        title: 'Profile',
        icon: User,
        href: '/dashboard/profile',
    },
    {
        title: 'Settings',
        icon: Settings,
        href: '/dashboard/settings',
    },
]

export function AppSidebar() {
    const pathname = usePathname()

    return (
        <Sidebar className="flex items-center gap-2 px-4 py-2 bg-sidebar">
            <SidebarHeader>
                <Link href="/">
                    <div className="flex gap-2">
                        <Database className="h-6 w-6 text-purple-600" />
                        <span className="text-lg font-bold">Data AI</span>
                    </div>
                </Link>
            </SidebarHeader>
            <SidebarContent>
                <SidebarMenu>
                    {menuItems.map((item) => (
                        <SidebarMenuItem key={item.href}>
                            <SidebarMenuButton asChild isActive={pathname === item.href}>
                                <Link href={item.href}>
                                    <item.icon className="h-4 w-4" />
                                    <span>{item.title}</span>
                                </Link>
                            </SidebarMenuButton>
                        </SidebarMenuItem>
                    ))}
                </SidebarMenu>
            </SidebarContent>
        </Sidebar>
    )
}
