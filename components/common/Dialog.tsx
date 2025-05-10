import React, { useEffect } from 'react'

interface DialogProps {
    open: boolean
    onOpenChange: (open: boolean) => void
    children: React.ReactNode
}

interface DialogContentProps {
    children: React.ReactNode
    className?: string
}

interface DialogHeaderProps {
    children: React.ReactNode
}

interface DialogTitleProps {
    children: React.ReactNode
    className?: string
}

export function Dialog({ open, onOpenChange, children }: DialogProps) {
    useEffect(() => {
        const handleEscape = (e: KeyboardEvent) => {
            if (e.key === 'Escape') {
                onOpenChange(false)
            }
        }

        if (open) {
            document.addEventListener('keydown', handleEscape)
            document.body.style.overflow = 'hidden'
        }

        return () => {
            document.removeEventListener('keydown', handleEscape)
            document.body.style.overflow = 'unset'
        }
    }, [open, onOpenChange])

    if (!open) return null

    return (
        <div
            className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center"
            onClick={(e) => {
                if (e.target === e.currentTarget) {
                    onOpenChange(false)
                }
            }}
        >
            {children}
        </div>
    )
}

export function DialogContent({ children, className = '' }: DialogContentProps) {
    return (
        <div
            className={`relative w-full max-w-lg max-h-[90vh] overflow-y-auto rounded-lg p-6 ${className}`}
            onClick={(e) => e.stopPropagation()}
        >
            {children}
        </div>
    )
}

export function DialogHeader({ children }: DialogHeaderProps) {
    return <div className="mb-4">{children}</div>
}

export function DialogTitle({ children, className = '' }: DialogTitleProps) {
    return <h2 className={`text-lg font-semibold ${className}`}>{children}</h2>
}
