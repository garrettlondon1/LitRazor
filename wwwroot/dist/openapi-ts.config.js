import { defineConfig } from '@hey-api/openapi-ts';
export default defineConfig({
    input: 'https://localhost:7060/swagger/v1/swagger.json',
    output: 'lib/api',
    plugins: ['@hey-api/client-fetch'],
});
//# sourceMappingURL=openapi-ts.config.js.map