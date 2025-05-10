'use client'

import {
    ColumnDef,
    ColumnFiltersState,
    SortingState,
    VisibilityState,
    flexRender,
    getCoreRowModel,
    getFilteredRowModel,
    getPaginationRowModel,
    getSortedRowModel,
    useReactTable,
} from '@tanstack/react-table'
import { ArrowUpDown, ChevronDown, MoreHorizontal } from 'lucide-react'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

import { Button } from '@/components/ui/button'
import {
    DropdownMenu,
    DropdownMenuCheckboxItem,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { Input } from '@/components/ui/input'
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from '@/components/ui/table'
import { useTaskStore } from '@/lib/store/useTaskStore'
import { MyTask } from '@/types'
import { UploadForm } from '@/components/dashboard/my-tasks/UploadForm'

function ActionsCell({ task }: { task: MyTask }) {
    const router = useRouter()
    const [isUploadModalOpen, setIsUploadModalOpen] = useState(false)

    return (
        <>
            <DropdownMenu>
                <DropdownMenuTrigger asChild>
                    <Button variant="ghost" className="h-8 w-8 p-0">
                        <span className="sr-only">Open menu</span>
                        <MoreHorizontal className="w-4 h-4" />
                    </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                    <DropdownMenuLabel>Actions</DropdownMenuLabel>
                    <DropdownMenuItem
                        onClick={() => navigator.clipboard.writeText(task.id)}
                    >
                        Copy task ID
                    </DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem onClick={() => setIsUploadModalOpen(true)}>
                        Upload json file
                    </DropdownMenuItem>
                    <DropdownMenuItem
                        className="cursor-pointer"
                        onClick={() => router.push(`/task/${task.slug}`)}
                    >
                        View task
                    </DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>

            <UploadForm
                isOpen={isUploadModalOpen}
                onOpenChange={setIsUploadModalOpen}
                taskId={task.id}
            />
        </>
    )
}

const columns: ColumnDef<MyTask>[] = [
    {
        header: 'Task',
        cell: ({ row }) => {
            const task = row.original
            return (
                <Link
                    href={`/task/${task.slug}`}
                    className="hover:underline hover:text-purple-500"
                >
                    <div className="capitalize">{task.title}</div>
                </Link>
            )
        },
    },
    {
        header: 'Organizer',
        cell: ({ row }) => {
            const organizer = row.original
            return <div className="capitalize">{organizer.organizer_name}</div>
        },
    },
    {
        header: 'Prize',
        cell: ({ row }) => {
            const task = row.original

            const formattedPrize = new Intl.NumberFormat('en-US', {
                style: 'currency',
                currency: 'USD',
                minimumFractionDigits: 0,
            }).format(task.prize)

            return <div className="font-medium">{formattedPrize}</div>
        },
    },
    {
        accessorKey: 'created_at',
        header: ({ column }) => {
            return (
                <Button
                    variant="ghost"
                    onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
                >
                    Started At
                    <ArrowUpDown />
                </Button>
            )
        },
        cell: ({ row }) => {
            const task = row.original
            const date = new Date(task.created_at)

            return (
                <div>
                    {date.toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric',
                    })}
                </div>
            )
        },
    },
    {
        accessorKey: 'ended_at',
        header: 'Ended At',
        cell: ({ row }) => {
            const task = row.original

            if (!task.ended_at) return null

            const date = new Date(task.ended_at)

            return (
                <div>
                    {date.toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric',
                    })}
                </div>
            )
        },
    },
    {
        accessorKey: 'status',
        header: ({ column }) => {
            return (
                <Button
                    variant="ghost"
                    onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
                >
                    Status
                    <ArrowUpDown />
                </Button>
            )
        },
        cell: ({ row }) => {
            const task = row.original
            return (
                <div className="capitalize ">
                    <span
                        className={`border rounded-full px-2 py-1 text-xs font-bold ${
                            task.status === 'COMPLETED'
                                ? 'bg-green-500 text-white'
                                : 'bg-blue-500 text-white'
                        }`}
                    >
                        {task.status}
                    </span>
                </div>
            )
        },
    },
    {
        id: 'actions',
        enableHiding: false,
        cell: ({ row }) => <ActionsCell task={row.original} />,
    },
]

export function TaskList() {
    const [sorting, setSorting] = useState<SortingState>([])
    const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([])
    const [columnVisibility, setColumnVisibility] = useState<VisibilityState>({})
    const [rowSelection, setRowSelection] = useState({})

    const { isLoading, error, userTasks, fetchUserTasks } = useTaskStore()

    useEffect(() => {
        fetchUserTasks()
    }, [fetchUserTasks])

    const table = useReactTable({
        data: userTasks,
        columns,
        onSortingChange: setSorting,
        onColumnFiltersChange: setColumnFilters,
        getCoreRowModel: getCoreRowModel(),
        getPaginationRowModel: getPaginationRowModel(),
        getSortedRowModel: getSortedRowModel(),
        getFilteredRowModel: getFilteredRowModel(),
        onColumnVisibilityChange: setColumnVisibility,
        onRowSelectionChange: setRowSelection,
        state: {
            sorting,
            columnFilters,
            columnVisibility,
            rowSelection,
        },
    })

    if (error) {
        return (
            <div className="space-y-8 p-8 w-full z-10 relative">
                <div className="bg-black border border-red-500 p-5 rounded-lg">
                    <div className="flex items-center justify-center py-8 text-red-500">
                        Error: {error}
                    </div>
                </div>
            </div>
        )
    }

    if (isLoading) {
        return (
            <div className="space-y-8 p-8 w-full z-10 relative">
                <div className="bg-black border p-5 rounded-lg">
                    <div className="flex items-center justify-center py-8">
                        Loading tasks...
                    </div>
                </div>
            </div>
        )
    }

    return (
        <div className="space-y-8 p-8 w-full z-10 relative">
            <div className="bg-black border p-5 rounded-lg">
                <div className="flex items-center py-4">
                    <Input
                        placeholder="Filter tasks..."
                        value={
                            (table.getColumn('title')?.getFilterValue() as string) ?? ''
                        }
                        onChange={(event) =>
                            table.getColumn('title')?.setFilterValue(event.target.value)
                        }
                        className="max-w-sm"
                    />
                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <Button variant="outline" className="ml-auto">
                                Columns <ChevronDown />
                            </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                            {table
                                .getAllColumns()
                                .filter((column) => column.getCanHide())
                                .map((column) => {
                                    return (
                                        <DropdownMenuCheckboxItem
                                            key={column.id}
                                            className="capitalize"
                                            checked={column.getIsVisible()}
                                            onCheckedChange={(value) =>
                                                column.toggleVisibility(!!value)
                                            }
                                        >
                                            {column.id}
                                        </DropdownMenuCheckboxItem>
                                    )
                                })}
                        </DropdownMenuContent>
                    </DropdownMenu>
                </div>
                <div className="rounded-md border">
                    <Table>
                        <TableHeader>
                            {table.getHeaderGroups().map((headerGroup) => (
                                <TableRow key={headerGroup.id}>
                                    {headerGroup.headers.map((header) => {
                                        return (
                                            <TableHead key={header.id}>
                                                {header.isPlaceholder
                                                    ? null
                                                    : flexRender(
                                                          header.column.columnDef.header,
                                                          header.getContext()
                                                      )}
                                            </TableHead>
                                        )
                                    })}
                                </TableRow>
                            ))}
                        </TableHeader>
                        <TableBody>
                            {table.getRowModel().rows?.length ? (
                                table.getRowModel().rows.map((row) => (
                                    <TableRow
                                        key={row.id}
                                        data-state={row.getIsSelected() && 'selected'}
                                    >
                                        {row.getVisibleCells().map((cell) => (
                                            <TableCell key={cell.id}>
                                                {flexRender(
                                                    cell.column.columnDef.cell,
                                                    cell.getContext()
                                                )}
                                            </TableCell>
                                        ))}
                                    </TableRow>
                                ))
                            ) : (
                                <TableRow>
                                    <TableCell
                                        colSpan={columns.length}
                                        className="h-24 text-center"
                                    >
                                        No results.
                                    </TableCell>
                                </TableRow>
                            )}
                        </TableBody>
                    </Table>
                </div>
                <div className="flex items-center justify-end space-x-2 py-4">
                    <div className="flex-1 text-sm text-muted-foreground">
                        {table.getFilteredSelectedRowModel().rows.length} of{' '}
                        {table.getFilteredRowModel().rows.length} row(s) selected.
                    </div>
                    <div className="space-x-2">
                        <Button
                            variant="outline"
                            size="sm"
                            onClick={() => table.previousPage()}
                            disabled={!table.getCanPreviousPage()}
                        >
                            Previous
                        </Button>
                        <Button
                            variant="outline"
                            size="sm"
                            onClick={() => table.nextPage()}
                            disabled={!table.getCanNextPage()}
                        >
                            Next
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    )
}
