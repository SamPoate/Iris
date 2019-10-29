import { default as Chatkit } from '@pusher/chatkit-server';

export const chatkit = new Chatkit({
    instanceLocator: 'v1:us1:fd274c34-0b78-4fd9-a1fe-fedca9a94738',
    key:
        'https://us1.pusherplatform.io/services/chatkit_token_provider/v1/fd274c34-0b78-4fd9-a1fe-fedca9a94738/token'
});
