import React from 'react'

interface InputFieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
    className?: string;
}

const InputField: React.FC<InputFieldProps> = ({
    className = '',
    type = 'text',
    placeholder = 'Enter value...',
    ...props
}) => {
    return (
        <input
            type={type}
            placeholder={placeholder}
            className={`w-full rounded-lg border border-neutral-30 py-2 px-4 bg-white focus:outline-none focus:border-primary-50 focus:[box-shadow:0_0_0_2px_#D6F1E7] disabled:bg-neutral-20 disabled:text-neutral-40 ${className}`}
            {...props}
        />
    )
}

export default InputField