'use client'

import { Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts'

const data = [
    { month: 'Jan', submissions: 40, earnings: 400 },
    { month: 'Feb', submissions: 65, earnings: 650 },
    { month: 'Mar', submissions: 90, earnings: 900 },
    { month: 'Apr', submissions: 110, earnings: 1100 },
]

export function Overview() {
    return (
        <ResponsiveContainer width="100%" height={350}>
            <LineChart data={data}>
                <XAxis dataKey="month" />
                <YAxis yAxisId="left" />
                <YAxis yAxisId="right" orientation="right" />
                <Tooltip />
                <Line
                    yAxisId="left"
                    type="monotone"
                    dataKey="submissions"
                    stroke="#8b5cf6"
                    strokeWidth={2}
                />
                <Line
                    yAxisId="right"
                    type="monotone"
                    dataKey="earnings"
                    stroke="#10b981"
                    strokeWidth={2}
                />
            </LineChart>
        </ResponsiveContainer>
    )
}
