import { create } from 'zustand'
import { MyTask } from '@/types'
import { tasksApi } from '@/lib/api/tasks'

interface TaskStore {
    tasks: MyTask[]
    userTasks: MyTask[]
    isLoading: boolean
    error: string | null
    setTasks: (tasks: MyTask[]) => void
    fetchAllTasks: () => Promise<void>
    addTask: (task: Omit<MyTask, 'id'>) => Promise<void>
    updateTask: (id: string, updates: Partial<MyTask>) => Promise<void>
    deleteTask: (id: string) => Promise<void>
    setLoading: (loading: boolean) => void
    setError: (error: string | null) => void
    fetchUserTasks: () => Promise<void>
}

export const useTaskStore = create<TaskStore>((set, get) => ({
    tasks: [],
    userTasks: [],
    isLoading: false,
    error: null,
    setTasks: (tasks) => set({ tasks }),
    setError: (error) => set({ error }),
    setLoading: (loading) => set({ isLoading: loading }),

    fetchAllTasks: async () => {
        try {
            set({ isLoading: true, error: null })
            const tasks = await tasksApi.fetchAllTasks()
            set({ tasks, isLoading: false })
        } catch (error) {
            set({
                error: error instanceof Error ? error.message : 'Failed to fetch tasks',
                isLoading: false,
            })
        }
    },

    addTask: async (taskData) => {
        try {
            set({ isLoading: true, error: null })
            const newTask = await tasksApi.createTask(taskData)
            set((state) => ({
                tasks: [...state.tasks, newTask],
                isLoading: false,
            }))
        } catch (error) {
            set({
                error: error instanceof Error ? error.message : 'Failed to create task',
                isLoading: false,
            })
        }
    },

    updateTask: async (id, updates) => {
        try {
            set({ isLoading: true, error: null })
            const updatedTask = await tasksApi.updateTask(id, updates)
            set((state) => ({
                tasks: state.tasks.map((task) => (task.id === id ? updatedTask : task)),
                isLoading: false,
            }))
        } catch (error) {
            set({
                error: error instanceof Error ? error.message : 'Failed to update task',
                isLoading: false,
            })
        }
    },

    deleteTask: async (id) => {
        try {
            set({ isLoading: true, error: null })
            await tasksApi.deleteTask(id)
            set((state) => ({
                tasks: state.tasks.filter((task) => task.id !== id),
                isLoading: false,
            }))
        } catch (error) {
            set({
                error: error instanceof Error ? error.message : 'Failed to delete task',
                isLoading: false,
            })
        }
    },

    fetchUserTasks: async () => {
        try {
            set({ isLoading: true, error: null })
            const userTasks = await tasksApi.fetchUserTasks()
            set({ userTasks, isLoading: false })
        } catch (error) {
            set({
                error:
                    error instanceof Error ? error.message : 'Failed to fetch user tasks',
                isLoading: false,
            })
        }
    },
}))
