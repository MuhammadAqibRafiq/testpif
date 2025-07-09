import { toast } from 'react-toastify';
import { apiRequest } from '../axios';
import { getBaseURL } from './baseURL';

interface SubscribeOptions {
  reqBody: Record<string, any>; // full body, not just email
  onSuccess?: (data: any, response: any) => void;
  onFail?: (data: any, response: any) => void;
}

export const subscribeToNewsletter = ({ reqBody, onSuccess, onFail }: SubscribeOptions) => {
  return apiRequest({
    method: 'POST',
    baseURL: getBaseURL('newsletter'),
    url: 'mails/api/newsletter/subscribe/',
    data: reqBody,
    onSuccess: (res) => {
      onSuccess?.(res?.data, res); // custom callback
    },
    onFail: (err) => {
      onFail?.(err?.error, err); // custom error handling
    },
  });
};
