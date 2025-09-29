import React from 'react'
import Typography from "@/components/ui/Typography";



interface InputFieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
    className?: string;
    formik?: any;
    fieldName?: string;
}


const InputField: React.FC<InputFieldProps> = ({
    className = '',
    type = 'text',
    placeholder = 'Enter value...',
    formik,
    fieldName,
    ...props
}) => {

    const formikValues = formik?.values[fieldName || '']
    const formikError = formik?.errors[fieldName || '']
    const formikTouched = formik?.touched[fieldName || '']

    return (
        <div className='flex flex-col gap-1 w-[100%]'>
            <input
                type={type}
                placeholder={placeholder}
                className={`w-full h-[56px] rounded-full border border-neutral-30 py-[16px] px-[24px] bg-white focus:outline-none focus:border-primary-50 focus:[box-shadow:0_0_0_2px_#D6F1E7] disabled:bg-neutral-20 disabled:text-neutral-40 ${className}`}
                value={formikValues}
                onChange={(e) => { formik.setFieldValue(fieldName || '', e.target.value) }}
                {...props}
            />
            {formikError && formikTouched && <Typography variant='bodySmallM' className='text-red-500'>{formikError}</Typography>}
        </div>
    )
}

export default InputField
