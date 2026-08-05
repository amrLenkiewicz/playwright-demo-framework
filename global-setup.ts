import { request } from '@playwright/test';
import { testUsers } from './test-data/users';

async function globalSetup() {
    const apiContext = await request.newContext({
        baseURL: 'http://localhost:3000'
    });

    const response = await apiContext.post('/api/Users/', {
        data: {
            email: testUsers.standard.email,
            password: testUsers.standard.password,
            passwordRepeat: testUsers.standard.password,
            securityQuestion: {
                id: 4,
                question: "Father's birth date? (MM/DD/YY)"
            },
            securityAnswer: 'test'
        }
    })

    if (!response.ok()) {
        console.log('User registration failed:', await response.json());
    }

    await apiContext.dispose();
}

export default globalSetup;