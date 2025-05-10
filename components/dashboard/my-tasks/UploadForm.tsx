import { useState } from 'react'
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
} from '@/components/common/Dialog'
import { Input } from '@/components/ui/input'
import { Check, FileText } from 'lucide-react'
import { Upload } from 'lucide-react'
import { Button } from '@/components/ui/button'

interface UploadFormProps {
    isOpen: boolean
    onOpenChange: (open: boolean) => void
    taskId: string
}

export function UploadForm({ isOpen, onOpenChange, taskId }: UploadFormProps) {
    const [file, setFile] = useState<File | null>(null)
    const [preview, setPreview] = useState<string>('')
    const [uploading, setUploading] = useState(false)

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const selectedFile = event.target.files?.[0]
        if (selectedFile) {
            if (selectedFile.name.endsWith('.jsonl')) {
                setFile(selectedFile)
                const reader = new FileReader()
                reader.onload = (e) => {
                    const content = e.target?.result as string
                    setPreview(
                        content.slice(0, 1000) + (content.length > 1000 ? '...' : '')
                    )
                }
                reader.readAsText(selectedFile)
            } else {
                alert('Invalid file format')
            }
        }
    }

    const handleFileUpload = async () => {
        if (!file) {
            alert('No file selected')
            return
        }

        setUploading(true)
        const formData = new FormData()
        formData.append('file', file)
        formData.append('taskId', taskId)

        try {
            const response = await fetch('/api/upload-dataset', {
                method: 'POST',
                body: formData,
            })

            if (response.ok) {
                alert('Upload successful')
                setFile(null)
                setPreview('')
            } else {
                throw new Error('Upload failed')
            }
        } catch (error) {
            alert('Upload failed')
        } finally {
            setUploading(false)
        }
    }

    return (
        <Dialog open={isOpen} onOpenChange={onOpenChange}>
            <div className="bg-black min-w-[500px]">
                <DialogContent className="bg-gradient-to-br from-purple-900/30 to-black border border-purple-500 text-white">
                    <DialogHeader>
                        <DialogTitle>
                            <h1 className="text-4xl font-bold mb-8 text-center">
                                Upload Task Dataset
                            </h1>
                        </DialogTitle>
                    </DialogHeader>
                    <div className="grid gap-4 py-4">
                        <div className="flex flex-col justify-center items-center gap-4">
                            <div className="flex items-center gap-4">
                                <Input
                                    type="file"
                                    accept=".jsonl"
                                    onChange={handleFileChange}
                                />
                                {file && <Check className="w-6 h-6 text-green-500" />}
                            </div>
                        </div>
                    </div>
                    {preview && (
                        <div className="space-y-2">
                            <label className="block text-sm font-medium text-purple-300">
                                Preview
                            </label>
                            <textarea
                                value={preview}
                                readOnly
                                className="h-48 w-full bg-gray-900/50 text-gray-300 rounded-lg border border-purple-500/20 
                                p-4 font-mono text-sm resize-none focus:outline-none focus:ring-2 focus:ring-purple-500/40 
                                transition-all duration-200 scrollbar-thin scrollbar-thumb-purple-500/20 
                                scrollbar-track-transparent hover:border-purple-500/40"
                            />
                        </div>
                    )}
                    <Button
                        onClick={handleFileUpload}
                        disabled={!file || uploading}
                        className="w-full bg-purple-600 hover:bg-purple-700 text-white mt-4"
                    >
                        {uploading ? (
                            <>
                                <FileText className="w-4 h-4 mr-2 animate-pulse" />
                                Uploading...
                            </>
                        ) : (
                            <>
                                <FileText className="w-4 h-4 mr-2" />
                                Upload Dataset
                            </>
                        )}
                    </Button>
                </DialogContent>
            </div>
        </Dialog>
    )
}
