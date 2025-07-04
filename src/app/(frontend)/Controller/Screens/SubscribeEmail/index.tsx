import { useState, useEffect } from 'react';
import moment from 'moment';
import { MediaDocument, PayloadResponse, VideoItem } from '@/app/(frontend)/utils/types';
import { youtubeSectionDummyData } from '@/app/(frontend)/utils/DummyData/youtubeSectionDummyData';
import { useFormik } from 'formik';
import * as yup from 'yup';
import { toast } from 'react-toastify';
export const useSubscribeEmailController = () => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const handleSumbitEmail = async (values: any) => {
        setLoading(true);
        setError(null);

        // const formData = new FormData();
        // formData.append('email', values.email);
        const formData = new URLSearchParams();
        formData.append('sib_form_action', 'subscribe_form_submit');
        formData.append('sib_form_id', '1');
        formData.append('sib_form_alert_notice', 'Please fill out this field');
        formData.append('sib_form_invalid_email_notice', 'Your email address is invalid');
        formData.append('sib_security', '21577d2cfa');
        formData.append('email', values.email);
        formData.append('security', '21577d2cfa');
        try {
            const response = await fetch('https://practicalislamicfinance.com/', {
                method: 'POST',
                body: formData,
            });

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            const data: PayloadResponse = await response.json();
            toast.success('Email subscribed successfully');
            console.log(data,'data')
        } catch (err) {
            setError(err instanceof Error ? err.message : 'Failed to fetch media');
            toast.error('Try again later');

            console.error('Error fetching media:', err);
        } finally {
            setLoading(false);
        }
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
        error,
        formik
    };
};