// instrumentation-client.js
import posthog from 'posthog-js'

posthog.init(process.env.NEXT_PUBLIC_POSTHOG_KEY ||'phc_a0sxhlOIsVcrsF3Tekjgw3NsNiwtMjGEOAFY6nJl9XZ', {
    api_host: 'https://us.i.posthog.com',
    defaults: '2025-05-24'
});
            