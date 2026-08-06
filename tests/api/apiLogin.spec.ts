import { test, expect } from '@playwright/test';
import { testUsers } from '../../test-data/users';

test.describe('Testing login endpoint', () => {
    test('should login via API and return token', async ({ request }) => {
        const response = await request.post('/rest/user/login', {
            data: {
                email: testUsers.standard.email,
                password: testUsers.standard.password
            }
        });

        expect(response.status()).toBe(200);

        const responseBody = await response.json();
        expect(responseBody.authentication.token).toBeTruthy();
        expect(responseBody.authentication.umail).toBe(testUsers.standard.email);
    })
})