import type React from "react"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { cn } from "@/lib/utils"

interface InputFieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string
  error?: string
  helperText?: string
}

export default function InputField({ 
  label, \
;
;```tsx file="components/InputField/InputField.tsx"
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { cn } from '@/lib/utils'

interface InputFieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string
  error?: string
  helperText?: string
}

export default function InputField({ 
  label, 
  error, 
  helperText, 
  className, 
  id,
  ...props 
}: InputFieldProps) {
  const inputId = id || \`input-${Math.random().toString(36).substr(2, 9)}`

return (
    <div className="space-y-2">
      {label && (
        <Label htmlFor={inputId} className={error ? 'text-destructive' : ''}>
          {label}
        </Label>
      )}
      <Input
        id={inputId}
        className={cn(
          error && 'border-destructive focus-visible:ring-destructive',
          className
        )}
        {...props}
      />
      {error && (
        <p className="text-sm text-destructive">{error}</p>
      )}
      {helperText && !error && (
        <p className="text-sm text-muted-foreground">{helperText}</p>
      )}
    </div>
  )
\
}
