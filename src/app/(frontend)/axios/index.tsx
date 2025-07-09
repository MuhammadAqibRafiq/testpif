// src/api/apiRequest.ts
import axios from 'axios';
import { setLoading } from './loading'; // adjust import if needed

interface RequestOptions {
  method: 'GET' | 'POST' | 'PUT' | 'DELETE';
  url: string;
  data?: any;
  token?: string;
  isFormData?: boolean;
  params?: any;
  baseURL?: string;
  onSuccess?: (res: any) => void;
  onFail?: (err: any) => void;
}

export const apiRequest = async ({
  method,
  url,
  data,
  token,
  isFormData = false,
  params,
  baseURL,
  onSuccess,
  onFail,
}: RequestOptions) => {
  setLoading(true); // 🟢 start loading

  try {
    const headers: any = {};

    if (token) headers['Authorization'] = `Bearer ${token}`;
    if (isFormData && data instanceof FormData) {
      headers['Content-Type'] = 'multipart/form-data';
    } else if (data && typeof data === 'object') {
      headers['Content-Type'] = 'application/json';
    }

    const response = await axios({
      method,
      url,
      data,
      headers,
      params,
      baseURL:baseURL
    });

    const result = {
      success: true,
      status: response.status,
      data: response.data,
    };

    onSuccess?.(result);
    return result;
  } catch (error: any) {
    const errResponse = {
      success: false,
      status: error.response?.status || 500,
      message: error.response?.data?.message || error.message,
      error: error.response?.data || {},
    };

    onFail?.(errResponse);
    return errResponse;
  } finally {
    setLoading(false); // 🔴 end loading
  }
};
