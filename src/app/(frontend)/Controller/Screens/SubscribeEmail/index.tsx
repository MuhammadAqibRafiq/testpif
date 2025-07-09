import { useState, useEffect } from 'react';
import moment from 'moment';
import { useFormik } from 'formik';
import * as yup from 'yup';
import { toast } from 'react-toastify';
import { useGlobalLoading } from '@/app/(frontend)/hooks/useGlobalLoading';
import { subscribeToNewsletter } from '@/app/(frontend)/api/subscribeToNewsletter';


export const useSubscribeEmailController = () => {
    const loading = useGlobalLoading();

    const handleSumbitEmail = async (values: any) => {
        const reqBody = {
            "email": values.email,
        }

        subscribeToNewsletter({
            reqBody: reqBody,
            onSuccess: (data) => {
                toast.success(data?.message || 'Email subscribed successfully');
                formik.resetForm();
            },
            onFail: (data) => {
                toast.error(data?.error || 'Try again later');
            }
        });
    };

    const formik = useFormik({
        enableReinitialize: true,
        initialValues: {
            email: '',
        },
        validationSchema: yup.object({
            email: yup.string().email('Invalid email').required('Email is required'),
        }),
        onSubmit: handleSumbitEmail,
    });



    return {
        loading,
        formik
    };
};