// src/constants/baseURLs.ts

type AppEnv = 'development' | 'staging' | 'production';
type Service = 'newsletter';

const ENV = (process.env.APP_ENV || 'staging') as AppEnv;

const BASE_URLS: Record<AppEnv, Record<Service, string>> = {
    development: {
        newsletter: 'http://localhost:4000/newsletter',
    },
    staging: {
        newsletter: 'https://pif-staging-5rbua.ondigitalocean.app/',
    },
    production: {
        newsletter: 'https://squid-app-2o698.ondigitalocean.app/',
    },
};

export const getBaseURL = (service: Service): string => {
    return BASE_URLS[ENV][service];
};

export const CURRENT_ENV = ENV;