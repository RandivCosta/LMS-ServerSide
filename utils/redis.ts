import {Redis} from 'ioredis';
require('dotenv').config();

const redisClient = () => {
    if (process.env.REDIS_URL){
        console.log(`redis connected`);
        return process.env.REDIS_URL;
    }
    throw new Error(`redis connection failed`);
};

export const redis = new Redis(redisClient());