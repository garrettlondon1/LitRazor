export type WeatherForecast = {
    date?: string | null;
    temperatureC?: number;
    summary?: string | null;
};
export type GetApiWeatherforecastData = {
    body?: never;
    path?: never;
    query?: never;
    url: '/api/weatherforecast';
};
export type GetApiWeatherforecastResponses = {
    /**
     * OK
     */
    200: Array<WeatherForecast>;
};
export type GetApiWeatherforecastResponse = GetApiWeatherforecastResponses[keyof GetApiWeatherforecastResponses];
export type ClientOptions = {
    baseUrl: 'https://localhost:7060' | (string & {});
};
//# sourceMappingURL=types.gen.d.ts.map