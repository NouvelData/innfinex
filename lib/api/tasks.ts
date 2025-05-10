import { MyTask } from '@/types'
import axiosInstance from '@/lib/api/client'

export const tasksApi = {
    fetchAllTasks: async () => {
        const response = await axiosInstance.get<MyTask[]>('/tasks')
        return response.data
    },

    fetchTask: async (id: string) => {
        const response = await axiosInstance.get<MyTask>(`/tasks/${id}`)
        return response.data
    },

    createTask: async (task: Omit<MyTask, 'id'>) => {
        const response = await axiosInstance.post<MyTask>('/tasks', task)
        return response.data
    },

    updateTask: async (id: string, updates: Partial<MyTask>) => {
        const response = await axiosInstance.patch<MyTask>(`/tasks/${id}`, updates)
        return response.data
    },

    deleteTask: async (id: string) => {
        await axiosInstance.delete(`/tasks/${id}`)
    },

    fetchUserTasks: async () => {
        const response = await axiosInstance.get<MyTask[]>('/tasks/user')
        return response.data
    },
}
