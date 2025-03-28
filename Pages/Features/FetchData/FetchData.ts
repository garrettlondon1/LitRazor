import { LitElement, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { getApiWeatherforecast } from 'api/sdk';
import { WeatherForecast } from 'api/types';

@customElement('my-fetchdata')
export class FetchData extends LitElement {
    @property({type: Array}) forecasts: WeatherForecast[] = [];
    @property({type: Boolean}) loading: boolean = true;
    @property({type: Boolean}) error: boolean = false;
    
    async connectedCallback() {
        super.connectedCallback();
        await this.fetchData();
        this.requestUpdate();
    }
    
    protected render() {
        return html`
            <div class="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
                <div class="relative py-3 sm:max-w-xl sm:mx-auto">
                    <div class="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
                        <div class="max-w-md mx-auto">
                            <div class="divide-y divide-gray-200">
                                <div class="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
                                    <h1 class="text-3xl font-bold text-gray-900 mb-4">Weather Forecast</h1>
                                    <p class="text-gray-600">This component demonstrates fetching data from an API.</p>
                                    
                                    <div class="mt-6">
                                        ${this.loading 
                                        ? 
                                            html`<p class="text-center text-gray-500">Loading...</p>` 
                                        : 
                                            this.error ? 
                                                html`<p class="text-center text-red-500">Error loading data. Please try again later.</p>` :
                                                html`<forecast-list .forecasts=${this.forecasts}></forecast-list>`
                                        }
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `;
    }
    private async fetchData() {
        this.loading = true;
        this.error = false;
        
        try {
            await new Promise(resolve => setTimeout(resolve, 300));
            var response = await getApiWeatherforecast();
            this.forecasts = response.data;
        } catch (e) {
            this.error = true;
            console.error('Error fetching weather data:', e);
        } finally {
            this.loading = false;
        }
    }
}