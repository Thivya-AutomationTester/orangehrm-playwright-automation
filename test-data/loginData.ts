import { env } from '../config/env';
const valid = {
    username: env.username,
    password: env.password
};

export const loginData = {
    valid,

    invalidScenarios: [
        {
            name: 'invalid username',
            username: 'InvalidUser',
            password: valid.password
        },
        {
            name: 'invalid password',
            username: valid.username,
            password: 'InvalidPass'
        },
        {
            name: 'invalid username and password',
            username: 'InvalidUser',
            password: 'InvalidPass'
        }
    ]

};