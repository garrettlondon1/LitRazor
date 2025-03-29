import { LitElement, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { getApiWeatherforecast } from 'api/sdk';
import { WeatherForecast } from 'api/types';

@customElement('my-fetchdata')
export class FetchData extends LitElement {
    @property({type: Array}) forecasts: WeatherForecast[] = [];
    @property({type: Boolean}) loading: boolean = false;
    @property({type: Boolean}) error: boolean = false;

    override connectedCallback() {
        super.connectedCallback();
        this.fetchData();
    }

    private async refresh() {
        await this.fetchData();
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
                                    
                                    <div class="flex justify-end mb-4">
                                        <button
                                            @click="${this.refresh}"
                                            class="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm font-medium text-blue-600 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50"
                                            ?disabled="${this.loading}">
                                            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                                            </svg>
                                            Refresh
                                        </button>
                                    </div>
                                    
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