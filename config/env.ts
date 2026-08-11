import dotenv from 'dotenv';
import path from 'path';
dotenv.config({ path: path.resolve(__dirname, '../.env') });

function getEnvVariable(name: string): string {
    const value = process.env[name];

    if (!value) {
        throw new Error(`Environment variable ${name} is not defined`);
    }

    return value;
}

export const env = {
    url: getEnvVariable('ORANGEHRM_URL'),
    username: getEnvVariable('ORANGEHRM_USERNAME'),
    password: getEnvVariable('ORANGEHRM_PASSWORD'),
};